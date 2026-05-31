import { NextResponse, NextRequest } from "next/server";
import crypto from "crypto";

interface VerificationData {
  orderId: string;
  paymentSessionId: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as VerificationData;
    const { orderId, paymentSessionId } = body;

    if (!orderId || !paymentSessionId) {
      return NextResponse.json(
        { error: "Missing required fields for verification" },
        { status: 400 }
      );
    }

    const appId = process.env.CASHFREE_APP_ID;
    const appSecret = process.env.CASHFREE_APP_SECRET;
    const baseUrl = process.env.CASHFREE_API_BASE_URL || "https://api.cashfree.com/pg";

    if (!appId || !appSecret) {
      return NextResponse.json(
        { error: "Payment service not configured" },
        { status: 500 }
      );
    }

    // Verify payment with Cashfree
    const response = await fetch(
      `${baseUrl}/orders/${orderId}/payments/${paymentSessionId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-version": "2023-08-01",
          "x-client-id": appId,
          "x-client-secret": appSecret,
        },
      }
    );

    if (!response.ok) {
      console.error("Payment verification failed");
      return NextResponse.json(
        { error: "Payment verification failed", success: false },
        { status: response.status }
      );
    }

    const paymentData = await response.json();

    const isSuccessful = paymentData.payment_status === "SUCCESS";

    return NextResponse.json({
      success: isSuccessful,
      orderId: paymentData.order_id,
      paymentId: paymentData.cf_payment_id,
      amount: paymentData.order_amount,
      status: paymentData.payment_status,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    return NextResponse.json(
      { error: "Internal server error", success: false },
      { status: 500 }
    );
  }
}
