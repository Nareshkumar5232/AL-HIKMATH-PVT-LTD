import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | AL HIKMATH ENTERPRISES PVT LTD",
  description:
    "Learn about AL HIKMATH ENTERPRISES PVT LTD's refund, return, and cancellation policy for electronics, computers, and IT products.",
};

const sections = [
  {
    id: "cancellation",
    title: "1. Order Cancellation",
    content: `You may cancel your order under the following conditions:

Before Dispatch:
• Orders can be cancelled within 24 hours of placement without any charges.
• To cancel, contact us via WhatsApp (+91 9342698344) or email (care@alhikmath.com) with your order ID.
• Once confirmed, refunds for prepaid orders will be processed within 5–7 business days to the original payment method.

After Dispatch:
• Orders cannot be cancelled once dispatched. If you do not wish to accept the delivery, please refuse the package. A refund will be initiated after the item is returned to our warehouse and inspected.

Cancelled Order Refunds:
• For prepaid orders, refunds are credited to the original payment method.
• For Cash on Delivery orders cancelled before dispatch, no charges apply.`,
  },
  {
    id: "return-eligibility",
    title: "2. Return Eligibility",
    content: `We accept returns within 7 days of delivery for the following reasons:

Eligible for Return:
• Product received is damaged or defective
• Wrong product delivered (different from what was ordered)
• Product is not as described (significant mismatch)
• Missing parts or accessories that were listed

Not Eligible for Return:
• Products damaged due to misuse, negligence, or improper installation
• Products with tampered or missing serial numbers
• Software-related issues after installation
• Consumable items (batteries, bulbs, cables) once opened
• Products without original packaging, accessories, or documentation

Condition Requirements:
• Item must be in its original, unused condition
• Original packaging, tags, and all accessories must be included
• Proof of purchase (order confirmation) must be provided`,
  },
  {
    id: "damaged-products",
    title: "3. Damaged or Defective Products",
    content: `If you receive a damaged or defective product:

Immediate Action Required:
• Report the issue within 48 hours of delivery.
• Take photographs/video of the damaged packaging and product before opening further.
• Contact us via WhatsApp (+91 9342698344) or email (care@alhikmath.com) with your order ID and photos.

Our Process:
• We will review your complaint within 24–48 hours.
• If the damage is confirmed, we will arrange a free reverse pickup.
• Replacement or full refund will be processed after the item is received and inspected.

Delivery-Related Damage:
• If the outer packaging is visibly damaged upon delivery, please note it on the delivery receipt before accepting. If severely damaged, you may refuse delivery — the item will be returned to us and we will send a replacement.`,
  },
  {
    id: "refund-process",
    title: "4. Refund Process & Timelines",
    content: `Once your return is received and inspected, we will notify you of the approval or rejection of your refund.

Refund Timelines:
• Credit/Debit Card: 5–10 business days after approval
• UPI / Net Banking: 3–5 business days after approval
• Cash on Delivery: Refund credited to your bank account via NEFT (requires bank details) within 7–10 business days
• Wallet: Immediately after approval

Important Notes:
• Original shipping charges are non-refundable unless the return is due to our error.
• Refunds will be credited to the original payment method only.
• You will receive an email/SMS notification once the refund is processed.
• Processing times may vary depending on your bank or payment provider.`,
  },
  {
    id: "replacement",
    title: "5. Replacement Process",
    content: `If you prefer a replacement instead of a refund:

• Replacement is subject to product availability.
• If the original product is out of stock, we will offer you an equivalent product or a full refund.
• Replacement orders are dispatched within 3–5 business days after the returned item is received and inspected.
• No additional shipping charges for replacements due to our error or product defects.

To initiate a replacement, contact us with your order ID and the reason for return.`,
  },
  {
    id: "warranty",
    title: "6. Manufacturer Warranty",
    content: `All products sold by AL HIKMATH ENTERPRISES PVT LTD are genuine and come with the manufacturer's standard warranty. Warranty terms vary by brand and product:

• Electronics and electrical appliances: typically 1 year
• Mobile accessories: typically 6 months
• IT peripherals: typically 1 year

For warranty claims after our 7-day return window, please contact the manufacturer's authorised service centre directly. We will assist you with service centre information upon request.

Warranty does not cover:
• Physical damage due to misuse
• Water or liquid damage
• Damage from power surges or incorrect voltage
• Tampered or broken warranty seals`,
  },
  {
    id: "contact",
    title: "7. Contact for Returns & Refunds",
    content: `To initiate a return, cancellation, or refund, please reach us through:

WhatsApp: +91 9342698344 (Preferred — fastest response)
WhatsApp: +91 9342798344
Email: care@alhikmath.com

Please have the following ready:
• Order ID / Order confirmation number
• Reason for return
• Photos or video of the product (for damage/defect claims)

Support Hours: Monday to Saturday, 9:00 AM – 6:00 PM IST

AL HIKMATH ENTERPRISES PVT LTD
No. 16/127, Inbharajapuram 1st Street,
Bajanai Kovil Street, Choolaimedu,
Chennai – 600094, Tamil Nadu, India`,
  },
];

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-b from-[#9EFF00]/10 to-transparent border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <span className="inline-block text-xs uppercase tracking-widest text-[#9EFF00] font-bold mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            We want you to be fully satisfied with your purchase. Here&apos;s
            everything you need to know about our return and refund process.
          </p>
          <p className="text-xs text-gray-500 mt-4">Last updated: June 2025</p>
        </div>
      </div>

      {/* Highlight cards */}
      <div className="max-w-4xl mx-auto px-4 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Cancellation Window", value: "24 Hours", desc: "Before dispatch" },
            { label: "Return Window", value: "7 Days", desc: "From delivery date" },
            { label: "Refund Timeline", value: "5–10 Days", desc: "After approval" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-[#9EFF00]/20 rounded-xl p-5 text-center"
            >
              <p className="text-[#9EFF00] text-2xl font-black">{item.value}</p>
              <p className="text-white text-sm font-semibold mt-1">{item.label}</p>
              <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick Nav */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10">
          <h2 className="text-sm font-bold text-[#9EFF00] uppercase tracking-wider mb-4">
            Table of Contents
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-gray-400 hover:text-[#9EFF00] transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-28 border-b border-white/5 pb-10"
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-1 h-6 bg-[#9EFF00] rounded-full inline-block shrink-0" />
                {s.title}
              </h2>
              <p className="text-gray-400 leading-relaxed whitespace-pre-line text-sm">
                {s.content}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
          <p className="text-gray-400 text-sm">
            Need help with a return or refund?{" "}
            <Link
              href="/contact"
              className="text-[#9EFF00] hover:underline font-medium"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
