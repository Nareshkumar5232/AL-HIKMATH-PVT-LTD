import { NextResponse, NextRequest } from "next/server";
import crypto from "crypto";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Verify Cashfree webhook signature
    const appSecret = process.env.CASHFREE_APP_SECRET;
    if (!appSecret) {
      return NextResponse.json(
        { error: "Webhook verification failed" },
        { status: 403 }
      );
    }

    // For webhook signature verification
    // Cashfree sends x-webhook-signature header
    const signature = request.headers.get("x-webhook-signature");
    const timestamp = request.headers.get("x-webhook-timestamp");

    if (!signature || !timestamp) {
      return NextResponse.json(
        { error: "Missing webhook headers" },
        { status: 403 }
      );
    }

    // Verify signature (implementation depends on Cashfree's webhook format)
    const payload = JSON.stringify(body);
    const expectedSignature = crypto
      .createHmac("sha256", appSecret)
      .update(`${timestamp}.${payload}`)
      .digest("base64");

    if (signature !== expectedSignature) {
      console.error("Invalid webhook signature");
      return NextResponse.json(
        { error: "Invalid webhook signature" },
        { status: 403 }
      );
    }

    // Process webhook event
    const event = body.event_type;
    const eventData = body.data;

    if (event === "PAYMENT_SUCCESS") {
      // Handle successful payment
      console.log("Payment successful:", eventData);
      // Update order status in database, send confirmation email, etc.
    } else if (event === "PAYMENT_FAILED") {
      // Handle failed payment
      console.log("Payment failed:", eventData);
      // Update order status in database, send failure notification, etc.
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
