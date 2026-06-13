"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Package, Truck, Loader2, AlertCircle } from "lucide-react";
import { apiClient } from "@/services/api";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";

// Helper to dynamically load Cashfree SDK script
const loadCashfreeScript = (): Promise<any> => {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(null);
      return;
    }
    if ((window as any).Cashfree) {
      resolve((window as any).Cashfree);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
    script.async = true;
    script.onload = () => {
      resolve((window as any).Cashfree);
    };
    script.onerror = () => {
      console.error("Failed to load Cashfree SDK script");
      resolve(null);
    };
    document.body.appendChild(script);
  });
};

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || searchParams.get("order_id") || "";
  const clearCart = useCartStore((state) => state.clearCart);

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<"verifying" | "success" | "pending_verification" | "error">("verifying");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [orderData, setOrderData] = useState<any>(null);
  const [isRetrying, setIsRetrying] = useState(false);

  useEffect(() => {
    if (!orderId) {
      setLoading(false);
      setStatus("error");
      setErrorMessage("No Order ID was provided in the URL.");
      return;
    }

    let isMounted = true;
    let pollCount = 0;
    const maxPolls = 8;
    let timeoutId: NodeJS.Timeout;

    // Clear cart immediately upon landing on confirmation page, since the order has been created
    clearCart();

    const sessionId = searchParams.get("session_id") || "";

    const fetchOrderAndProceed = async () => {
      try {
        const response = await apiClient.get(`/order/${orderId}`);
        const order = response.data;

        if (!isMounted) return;
        setOrderData(order);

        if (sessionId) {
          // Verify online payment
          try {
            setStatus("verifying");
            const verifyRes = await apiClient.post("/payment/verify", {
              orderId,
              paymentSessionId: sessionId,
            });

            const verifyData = verifyRes.data;
            if (verifyData && (verifyData.status === "paid" || verifyData.status === "used")) {
              if (isMounted) {
                setStatus("success");
                setLoading(false);
              }
            } else {
              if (isMounted) {
                setStatus("error");
                setErrorMessage("Payment verification failed. Please check your bank transaction.");
                setLoading(false);
              }
            }
          } catch (err: any) {
            console.error("Verification error:", err);
            const errMsg = err?.response?.data?.details || err?.response?.data?.error || err.message || "An error occurred while verifying payment.";
            if (isMounted) {
              setStatus("error");
              setErrorMessage(errMsg);
              setLoading(false);
            }
          }
        } else {
          // No sessionId (e.g. COD or manual visit)
          const isCOD = order.paymentMethod === "cod";
          if (isCOD) {
            setStatus("success");
            setLoading(false);
            return;
          }

          const isConfirmed = order.status !== "pending" && order.status !== "cancelled";
          if (isConfirmed) {
            setStatus("success");
            setLoading(false);
            return;
          }

          // If still pending, start polling
          pollPaymentStatus();
        }
      } catch (error: any) {
        console.error("Error fetching order status:", error);
        if (isMounted) {
          setStatus("error");
          setErrorMessage(error?.response?.data?.error || error.message || "Failed to load order details.");
          setLoading(false);
        }
      }
    };

    const pollPaymentStatus = async () => {
      try {
        const response = await apiClient.get(`/order/${orderId}`);
        const order = response.data;

        if (!isMounted) return;
        setOrderData(order);

        const isConfirmed = order.status !== "pending" && order.status !== "cancelled";
        if (isConfirmed) {
          setStatus("success");
          setLoading(false);
          return;
        }

        pollCount++;
        if (pollCount < maxPolls) {
          timeoutId = setTimeout(pollPaymentStatus, 2500);
        } else {
          setStatus("pending_verification");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error polling order status:", error);
        pollCount++;
        if (pollCount < maxPolls) {
          timeoutId = setTimeout(pollPaymentStatus, 2500);
        } else {
          if (isMounted) {
            setStatus("pending_verification");
            setLoading(false);
          }
        }
      }
    };

    fetchOrderAndProceed();

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [orderId, searchParams, clearCart]);

  const handleRetryPayment = async () => {
    if (!orderId || !orderData) return;
    setIsRetrying(true);

    // BUG FIX #7: Extract phone from shippingAddress (format: "..., Phone: XXXXXXXXXX")
    const extractPhone = (address: string): string => {
      const match = address?.match(/Phone:\s*([6-9]\d{9})/);
      return match ? match[1] : "";
    };
    const phone = extractPhone(orderData.shippingAddress || "");

    try {
      toast.loading("Initiating payment session...", { id: "payment-retry" });
      
      const paymentRes = await apiClient.post("/payment/process", {
        orderId: orderId,
        amount: orderData.total,
        email: orderData.customerEmail,
        phone,
        customerName: orderData.customerName,
        productInfo: `Retry for order ${orderId}`,
      });

      const paymentData = paymentRes.data;
      toast.dismiss("payment-retry");

      if (paymentData && paymentData.paymentSessionId) {
        const paymentSessionId = paymentData.paymentSessionId;
        const redirectUrl = paymentData.redirectUrl;

        const cashfreeMode = process.env.NEXT_PUBLIC_CASHFREE_MODE || 
          (window.location.hostname === "localhost" ? "sandbox" : "production");
        const paymentMode = cashfreeMode as "sandbox" | "production";

        if (redirectUrl) {
          toast.success("Redirecting to payment gateway...");
          window.location.href = redirectUrl;
          return;
        }

        const CashfreeSDK = await loadCashfreeScript();
        if (!CashfreeSDK) {
          toast.error("Failed to load payment gateway SDK. Please try again.");
          setIsRetrying(false);
          return;
        }

        toast.success("Opening payment gateway...");
        const cashfree = CashfreeSDK({
          mode: paymentMode,
        });

        cashfree.checkout({
          paymentSessionId,
          redirectTarget: "_self"
        });
      } else {
        throw new Error("Missing paymentSessionId in response");
      }
    } catch (payError: any) {
      console.error("Payment retry failed:", payError);
      toast.dismiss("payment-retry");
      const errMsg = payError?.response?.data?.details ||
                     payError?.response?.data?.error ||
                     payError?.response?.data?.message ||
                     payError?.message ||
                     "Payment initiation failed. Please try again.";
      toast.error(`Payment gateway error: ${errMsg}`);
      setIsRetrying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0F0F0F] pt-24 pb-16 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-[#121212] rounded-2xl p-8 text-center border border-gray-200 dark:border-white/6 shadow-lg">
          
          {/* 1. Verifying Payment State */}
          {status === "verifying" && (
            <div className="py-8">
              <Loader2 className="w-16 h-16 text-[#9EFF00] animate-spin mx-auto mb-6" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Verifying Payment...</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Please wait while we confirm your payment status. Do not refresh or close this page.
              </p>
            </div>
          )}

          {/* 2. Success State (COD or Verified Online Payment) */}
          {status === "success" && (
            <>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#9EFF00]/20 rounded-full flex items-center justify-center animate-pulse">
                  <CheckCircle className="w-10 h-10 text-[#9EFF00]" />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Order Confirmed!</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {orderData?.paymentMethod === "cod"
                  ? "Your Cash on Delivery order has been successfully placed."
                  : "Your payment has been successfully verified and your order is confirmed."}
              </p>
            </>
          )}

          {/* 3. Pending Verification State (Timeout or Polling Limit reached) */}
          {status === "pending_verification" && (
            <>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-10 h-10 text-amber-500" />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Verification Pending</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We've placed your order, but we're still waiting for final payment confirmation from the payment gateway.
                Your order status will update automatically.
              </p>
            </>
          )}

          {/* 4. Error State */}
          {status === "error" && (
            <>
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-10 h-10 text-red-500" />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Unable to Verify</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-6 border-b border-gray-100 dark:border-white/5 pb-4">
                {errorMessage || "We could not retrieve your order details at this moment."}
              </p>

              {orderData && orderData.paymentMethod === "card" && orderData.status === "pending" && (
                <div className="mb-6 bg-gray-50 dark:bg-[#1A1A1A] p-4 rounded-xl border border-gray-200 dark:border-white/6 text-left">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">Did your payment fail?</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                    Your order was created but payment was not completed. You can safely retry payment now.
                  </p>
                  <button
                    onClick={handleRetryPayment}
                    disabled={isRetrying}
                    className="w-full py-3 bg-[#9EFF00] text-black font-bold rounded-lg hover:bg-[#8FEE00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isRetrying ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Initiating Payment...
                      </>
                    ) : (
                      "Retry Payment"
                    )}
                  </button>
                </div>
              )}
            </>
          )}

          {/* Order ID Box */}
          {orderId && (
            <div className="bg-gray-50 dark:bg-[#1A1A1A] rounded-lg p-4 mb-6 border border-gray-200 dark:border-white/6">
              <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-widest mb-1">Order ID</p>
              <p className="text-2xl font-bold text-[#9EFF00] font-mono">{orderId}</p>
            </div>
          )}

          {/* Next Steps (only for valid orders) */}
          {status !== "error" && (
            <div className="space-y-4 mb-8 text-left">
              <div className="flex gap-3">
                <Package className="w-5 h-5 text-[#9EFF00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Processing</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Your order is being prepared</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Truck className="w-5 h-5 text-[#9EFF00] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Delivery</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">You'll receive it within 3-5 business days</p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="space-y-3">
            <Link
              href="/products"
              className="block w-full py-3 bg-[#9EFF00] text-black font-bold rounded-lg hover:bg-[#8FEE00] transition-colors text-center"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="block w-full py-3 border-2 border-gray-300 dark:border-white/10 text-gray-900 dark:text-white font-bold rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-center"
            >
              Back to Home
            </Link>
          </div>

          {/* Help Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Need help?</p>
            <a
              href="https://wa.me/919342798344?text=Hello%20AL%20HIKMATH%20ENTERPRISES%2C%20I%20have%20a%20question%20about%20my%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9EFF00] font-medium hover:underline"
            >
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 dark:bg-[#0F0F0F] pt-24 px-4 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-[#9EFF00] animate-spin" />
      </div>
    }>
      <OrderConfirmationContent />
    </Suspense>
  );
}

