import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | AL HIKMATH ENTERPRISES PVT LTD",
  description:
    "Understand how AL HIKMATH ENTERPRISES PVT LTD collects, uses, and protects your personal information when you shop on our website.",
};

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `AL HIKMATH ENTERPRISES PVT LTD ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website alhikmath.com or make a purchase from us.

This policy complies with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.

By using our website, you consent to the data practices described in this policy.`,
  },
  {
    id: "data-collection",
    title: "2. Information We Collect",
    content: `We may collect the following types of information:

Personal Identification Information:
• Name, email address, phone number
• Shipping and billing address
• Account credentials (username and encrypted password)

Order & Transaction Information:
• Products ordered, quantities, and prices
• Payment method type (we do not store full card numbers)
• Order history and status

Technical Information:
• IP address and browser type
• Device type and operating system
• Pages visited and time spent on the site
• Referring website

We collect information directly from you (when you register, place an order, or contact us), automatically via cookies and analytics tools, and from third-party payment processors.`,
  },
  {
    id: "account-information",
    title: "3. Account Information",
    content: `When you create an account on our website, we store your name, email address, and encrypted password. Your account allows you to:

• Track your orders
• Manage your wishlist and cart
• Access your order history
• Save shipping addresses

You are responsible for maintaining the confidentiality of your account credentials. You may request deletion of your account at any time by contacting us at care@alhikmath.com.`,
  },
  {
    id: "cookies",
    title: "4. Cookies & Tracking Technologies",
    content: `We use cookies and similar tracking technologies to enhance your browsing experience. Types of cookies we use:

Essential Cookies: Required for the website to function (e.g., cart contents, session management).

Analytics Cookies: Help us understand how visitors interact with our website (e.g., Google Analytics). This data is anonymised.

Preference Cookies: Remember your settings and preferences.

You can control or disable cookies through your browser settings. However, disabling essential cookies may affect website functionality. We do not use cookies to serve personalised third-party advertisements.`,
  },
  {
    id: "payment-information",
    title: "5. Payment Information",
    content: `All payment transactions are processed through our secure payment gateway partner. We do not store your full credit/debit card number, CVV, or banking credentials on our servers.

Payment data is transmitted using SSL encryption (256-bit). Our payment partners comply with PCI-DSS (Payment Card Industry Data Security Standard).

For UPI and net banking transactions, we only receive a transaction reference number to confirm payment.`,
  },
  {
    id: "data-usage",
    title: "6. How We Use Your Information",
    content: `We use the information we collect to:

• Process and fulfil your orders
• Send order confirmations, shipping updates, and receipts
• Respond to your enquiries and provide customer support
• Improve our website, products, and services
• Detect and prevent fraud and unauthorised access
• Comply with legal obligations
• Send promotional emails (only with your consent; you may opt out at any time)

We do not sell, trade, or rent your personal information to third parties for marketing purposes.`,
  },
  {
    id: "data-sharing",
    title: "7. Third-Party Services",
    content: `We may share your information with trusted third-party service providers only to the extent necessary to:

• Deliver your orders (logistics and courier partners)
• Process payments (payment gateway providers)
• Analyse website traffic (analytics providers)
• Send transactional emails (email service providers)

All third-party partners are contractually obligated to keep your information confidential and use it only for the specified purpose. We do not share your data with third parties for their own marketing.`,
  },
  {
    id: "data-protection",
    title: "8. Data Security & Protection",
    content: `We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These measures include:

• SSL/TLS encryption for all data transmitted between your browser and our servers
• Secure, encrypted storage of passwords
• Access controls limiting data access to authorised personnel only
• Regular security reviews

While we take reasonable precautions, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.`,
  },
  {
    id: "customer-rights",
    title: "9. Your Rights",
    content: `As a user of our website, you have the right to:

• Access: Request a copy of the personal data we hold about you.
• Correction: Request correction of inaccurate or incomplete data.
• Deletion: Request deletion of your personal data, subject to legal obligations.
• Opt-Out: Unsubscribe from marketing communications at any time.
• Grievance Redressal: File a complaint with our Grievance Officer.

To exercise these rights, contact us at care@alhikmath.com. We will respond within 30 days.`,
  },
  {
    id: "data-retention",
    title: "10. Data Retention",
    content: `We retain your personal data for as long as necessary to:

• Fulfil the purposes outlined in this policy
• Comply with legal, accounting, or regulatory requirements
• Resolve disputes and enforce our agreements

Order records are retained for a minimum of 7 years as required by Indian tax laws. You may request deletion of non-essential data by contacting us.`,
  },
  {
    id: "contact",
    title: "11. Contact & Grievance Officer",
    content: `For any privacy-related queries or to exercise your rights, please contact:

Grievance Officer
AL HIKMATH ENTERPRISES PVT LTD
No. 16/127, Inbharajapuram 1st Street,
Bajanai Kovil Street, Choolaimedu,
Chennai – 600094, Tamil Nadu, India

Phone: +91 9342698344
Email: care@alhikmath.com

We will acknowledge your request within 72 hours and resolve it within 30 days.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-b from-[#9EFF00]/10 to-transparent border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <span className="inline-block text-xs uppercase tracking-widest text-[#9EFF00] font-bold mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect
            your personal information.
          </p>
          <p className="text-xs text-gray-500 mt-4">Last updated: June 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
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
            Questions about our Privacy Policy?{" "}
            <Link
              href="/contact"
              className="text-[#9EFF00] hover:underline font-medium"
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
