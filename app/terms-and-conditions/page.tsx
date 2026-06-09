import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | AL HIKMATH ENTERPRISES PVT LTD",
  description:
    "Read the Terms and Conditions for AL HIKMATH ENTERPRISES PVT LTD — governing your use of our website and services for electronics, computers, and IT products in Chennai.",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing and using the AL HIKMATH ENTERPRISES PVT LTD website (alhikmath.com), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services. We reserve the right to update these terms at any time without prior notice. Continued use of the website after changes constitutes your acceptance of the revised terms.`,
  },
  {
    id: "website-usage",
    title: "2. Website Usage",
    content: `You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of others. You must not:
    
    • Attempt to gain unauthorised access to any part of the website or its related systems.
    • Transmit any harmful, offensive, or disruptive content.
    • Use automated tools (bots, scrapers) to extract data without written consent.
    • Impersonate any person or entity or misrepresent your affiliation.
    • Engage in any activity that could damage, disable, or impair the website's functionality.
    
    We reserve the right to restrict or terminate access to any user who violates these terms.`,
  },
  {
    id: "product-information",
    title: "3. Product Information",
    content: `AL HIKMATH ENTERPRISES PVT LTD makes every effort to ensure that product descriptions, specifications, prices, and images are accurate. However:
    
    • Product images are for illustration purposes and actual products may vary slightly.
    • Specifications are sourced from manufacturers and may be subject to change.
    • We do not warrant that product descriptions or other content are error-free.
    • In the event of a pricing error, we reserve the right to cancel orders and issue a full refund.
    
    All products sold are genuine, sourced from authorised distributors and manufacturers. We comply with applicable Bureau of Indian Standards (BIS) and other regulatory requirements for electronics and electrical products.`,
  },
  {
    id: "order-processing",
    title: "4. Order Processing",
    content: `When you place an order through our website:
    
    • Your order constitutes an offer to purchase, not a confirmed sale.
    • A confirmation email will be sent upon receipt of your order.
    • We reserve the right to refuse or cancel any order at our discretion, including cases of pricing errors, stock unavailability, or suspected fraudulent activity.
    • Orders are processed on business days (Monday to Saturday, 9:00 AM – 6:00 PM IST), excluding public holidays.
    • You will receive a final confirmation once your order is dispatched.`,
  },
  {
    id: "payments",
    title: "5. Payments",
    content: `All transactions on AL HIKMATH ENTERPRISES PVT LTD website are in Indian Rupees (INR). We accept the following payment methods:
    
    • Credit/Debit Cards (Visa, Mastercard, RuPay)
    • UPI (Google Pay, PhonePe, Paytm)
    • Net Banking
    • Cash on Delivery (where available)
    
    Payment processing is secured through industry-standard SSL encryption. We do not store your full card details on our servers. All online payments are subject to verification by our payment gateway partner. In case of a payment failure, please check with your bank before retrying to avoid duplicate charges.`,
  },
  {
    id: "pricing",
    title: "6. Pricing & Taxes",
    content: `All prices displayed on the website are in Indian Rupees (INR) and are inclusive of applicable GST (Goods and Services Tax) unless otherwise stated. Delivery charges, if applicable, will be displayed separately at checkout. Prices are subject to change without notice. We strive to honour prices at the time of order confirmation, except in cases of manifest error.`,
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, AL HIKMATH ENTERPRISES PVT LTD shall not be liable for:
    
    • Any indirect, incidental, special, or consequential damages arising from your use of the website or products purchased.
    • Loss of data, revenue, or profits resulting from website downtime or technical errors.
    • Actions or omissions of third-party service providers (shipping partners, payment gateways).
    
    Our total liability for any claim shall not exceed the purchase price of the product giving rise to the claim.`,
  },
  {
    id: "intellectual-property",
    title: "8. Intellectual Property",
    content: `All content on this website — including but not limited to text, graphics, logos, images, product descriptions, and software — is the exclusive property of AL HIKMATH ENTERPRISES PVT LTD or its licensors and is protected under applicable Indian copyright, trademark, and intellectual property laws.
    
    You may not reproduce, distribute, modify, or create derivative works from any content without prior written permission from us.`,
  },
  {
    id: "customer-responsibilities",
    title: "9. Customer Responsibilities",
    content: `As a customer, you are responsible for:
    
    • Providing accurate and complete shipping and billing information.
    • Keeping your account credentials confidential.
    • Notifying us immediately if you suspect unauthorised use of your account.
    • Ensuring the products you order are suitable for your intended use.
    • Complying with all applicable local laws and regulations regarding product usage.
    
    You agree that you are at least 18 years of age or have parental consent to use this website and make purchases.`,
  },
  {
    id: "governing-law",
    title: "10. Governing Law & Jurisdiction",
    content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of the website shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.`,
  },
  {
    id: "contact",
    title: "11. Contact Information",
    content: `For any queries regarding these Terms and Conditions, please contact us:
    
    AL HIKMATH ENTERPRISES PVT LTD
    No. 16/127, Inbharajapuram 1st Street,
    Bajanai Kovil Street, Choolaimedu,
    Chennai – 600094, Tamil Nadu, India
    
    Phone: +91 9342698344 / +91 9342798344
    Email: care@alhikmath.com`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-b from-[#9EFF00]/10 to-transparent border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <span className="inline-block text-xs uppercase tracking-widest text-[#9EFF00] font-bold mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Please read these terms carefully before using the AL HIKMATH
            ENTERPRISES PVT LTD website or placing an order.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            Last updated: June 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Navigation */}
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

        {/* Footer note */}
        <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
          <p className="text-gray-400 text-sm">
            Have questions about our Terms?{" "}
            <Link
              href="/contact"
              className="text-[#9EFF00] hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            and we&apos;ll be happy to help.
          </p>
        </div>
      </div>
    </div>
  );
}
