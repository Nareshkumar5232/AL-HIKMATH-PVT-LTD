import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { StoreHydration } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AL HIKMATH ENTERPRISES PVT LTD | Premium Electrical & Electronics",
    template: "%s | AL HIKMATH ENTERPRISES",
  },
  description:
    "Shop premium electrical and electronics appliances at AL HIKMATH ENTERPRISES PVT LTD. Quality products, genuine brands, fast delivery across Chennai.",
  keywords: [
    "electrical appliances",
    "electronics",
    "mobile accessories",
    "computer accessories",
    "Chennai",
    "AL HIKMATH",
  ],
  authors: [{ name: "AL HIKMATH ENTERPRISES PVT LTD" }],
  creator: "AL HIKMATH ENTERPRISES PVT LTD",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://alhikmath.com",
    siteName: "AL HIKMATH ENTERPRISES",
    title: "AL HIKMATH ENTERPRISES PVT LTD | Premium Electrical & Electronics",
    description:
      "Shop premium electrical and electronics appliances at AL HIKMATH ENTERPRISES PVT LTD.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AL HIKMATH ENTERPRISES PVT LTD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AL HIKMATH ENTERPRISES PVT LTD",
    description: "Premium Electrical & Electronics Appliances",
  },
  alternates: {
    canonical: "https://alhikmath.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StoreHydration />
          {children}
          <Toaster
            richColors
            position="top-right"
            duration={3000}
            closeButton
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
