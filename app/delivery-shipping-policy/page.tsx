import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delivery & Shipping Policy | AL HIKMATH ENTERPRISES PVT LTD",
  description:
    "Learn about AL HIKMATH ENTERPRISES PVT LTD's delivery and shipping policy — timelines, coverage areas, tracking, and support for electronics and IT products.",
};

const sections = [
  {
    id: "coverage",
    title: "1. Delivery Locations",
    content: `AL HIKMATH ENTERPRISES PVT LTD currently delivers to the following areas:

Primary Delivery Zone (1–2 business days):
• Chennai and surrounding areas (within 50 km radius)
• Including Tambaram, Kancheepuram, Tiruvallur districts

Pan-India Delivery (3–7 business days):
• All major cities and towns across India
• Delivery availability is subject to courier serviceability at your pin code

Limited/No Delivery Areas:
• Certain remote areas, islands, and restricted zones may not be serviceable.
• During checkout, enter your pin code to verify delivery availability.

Note: Delivery to international locations is not available at this time.`,
  },
  {
    id: "timelines",
    title: "2. Shipping Timelines",
    content: `Estimated delivery timelines (from dispatch date):

Chennai & Local Areas:
• Standard: 1–2 business days
• Express: Same day / Next day (for orders placed before 12:00 PM on business days; limited availability)

Pan-India:
• Metro cities (Mumbai, Delhi, Bangalore, Hyderabad): 2–4 business days
• Tier 2 cities: 3–5 business days
• Remote / rural areas: 5–7 business days

Business days are Monday to Saturday, excluding public holidays. Estimated timelines are indicative and may vary due to courier partner capacity, weather, or other factors.`,
  },
  {
    id: "processing",
    title: "3. Order Processing Time",
    content: `After a successful order placement and payment confirmation:

• Orders are processed on business days between 9:00 AM and 3:00 PM IST.
• Orders placed before 1:00 PM on a business day are typically dispatched the same day.
• Orders placed after 1:00 PM or on weekends/holidays will be dispatched the next business day.
• During sale events or peak seasons, processing time may extend by 1–2 business days.

You will receive a dispatch confirmation email/SMS once your order is shipped.`,
  },
  {
    id: "charges",
    title: "4. Shipping Charges",
    content: `Shipping charges are calculated at checkout based on the delivery location and order value:

Free Shipping:
• Orders above ₹999 qualify for free standard shipping across India.

Standard Shipping:
• Orders below ₹999: ₹49–₹99 (based on pin code and weight)

Express Delivery (where available):
• Additional charges apply for same-day or next-day delivery.

Cash on Delivery (COD):
• Available for most pin codes within India.
• A nominal COD handling fee of ₹25–₹50 may apply.
• COD available for orders up to ₹10,000.

Exact shipping charges will be displayed at checkout before you confirm your order.`,
  },
  {
    id: "tracking",
    title: "5. Order Tracking",
    content: `Once your order is dispatched, you will receive:

• A confirmation email/SMS with your order number and tracking ID.
• A link to track your shipment on the courier partner's website.

To track your order:
1. Log in to your account at alhikmath.com and visit "My Orders".
2. Use the tracking link sent to your registered email/phone.
3. Contact us via WhatsApp (+91 9342698344) with your order ID for real-time updates.

Our courier partners include leading logistics companies operating across India.`,
  },
  {
    id: "delays",
    title: "6. Delivery Delays",
    content: `While we strive to deliver within the estimated timeline, delays may occur due to:

• Natural disasters, floods, or adverse weather conditions
• Public holidays or regional lockdowns
• High volume during sale periods
• Incorrect or incomplete delivery address provided by the customer
• Customs or regulatory holds (not applicable for domestic orders)

In case of significant delays:
• We will proactively notify you via email or SMS.
• You may contact our support team to request an update.

If a delay is caused by our error or our courier partner's failure, we will expedite the resolution and offer compensation where applicable.`,
  },
  {
    id: "failed-delivery",
    title: "7. Failed Delivery Attempts",
    content: `Our courier partners will attempt delivery up to 3 times. If delivery is unsuccessful:

• You will be notified after each failed attempt via SMS or phone call.
• The package will be held at the courier facility for 5–7 days.
• After this period, the package will be returned to our warehouse.

In such cases:
• Contact us within 7 days to arrange re-delivery (additional shipping charges may apply).
• If no contact is made, a refund (excluding shipping charges) will be processed for prepaid orders.
• For COD orders, the package will simply be cancelled.`,
  },
  {
    id: "contact",
    title: "8. Shipping Support",
    content: `For any shipping or delivery related queries:

WhatsApp: +91 9342698344 (Preferred — fastest response)
WhatsApp: +91 9342798344
Email: care@alhikmath.com

Support Hours: Monday to Saturday, 9:00 AM – 6:00 PM IST

AL HIKMATH ENTERPRISES PVT LTD
No. 16/127, Inbharajapuram 1st Street,
Bajanai Kovil Street, Choolaimedu,
Chennai – 600094, Tamil Nadu, India`,
  },
];

export default function DeliveryPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-b from-[#9EFF00]/10 to-transparent border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <span className="inline-block text-xs uppercase tracking-widest text-[#9EFF00] font-bold mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Delivery & Shipping Policy
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Fast, reliable delivery across Chennai and all of India. Here&apos;s
            what you need to know about how we ship your orders.
          </p>
          <p className="text-xs text-gray-500 mt-4">Last updated: June 2025</p>
        </div>
      </div>

      {/* Highlight Cards */}
      <div className="max-w-4xl mx-auto px-4 pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Free Shipping", value: "₹999+", desc: "Pan-India" },
            { label: "Local Delivery", value: "1–2 Days", desc: "Chennai area" },
            { label: "Pan-India", value: "3–7 Days", desc: "All major cities" },
            { label: "COD Available", value: "₹0–10K", desc: "Most pin codes" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/5 border border-[#9EFF00]/20 rounded-xl p-4 text-center"
            >
              <p className="text-[#9EFF00] text-xl font-black">{item.value}</p>
              <p className="text-white text-xs font-semibold mt-1">{item.label}</p>
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
            Questions about your delivery?{" "}
            <Link
              href="/contact"
              className="text-[#9EFF00] hover:underline font-medium"
            >
              Get in touch with us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
