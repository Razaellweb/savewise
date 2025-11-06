import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.savewise.app"),
  title: "SaveWise — Smart, secure goal-based savings platform",
  description:
    "SaveWise empowers users in Nigeria and West Africa to build wealth effortlessly through AutoSave, Target Savings, and SafeLock. Deposit via Paystack or Flutterwave, earn interest, and track progress on a clean dashboard.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.savewise.app/",
    siteName: "SaveWise",
    title: "SaveWise — Smart, secure goal-based savings platform",
    description:
      "SaveWise empowers users in Nigeria and West Africa to build wealth effortlessly through AutoSave, Target Savings, and SafeLock.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaveWise — Smart, secure goal-based savings platform",
    description:
      "SaveWise empowers users in Nigeria and West Africa to build wealth effortlessly through AutoSave, Target Savings, and SafeLock.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  referrer: "strict-origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SaveWise",
    url: "https://www.savewise.app/",
    description:
      "SaveWise is a smart, goal-based fintech savings platform helping users in Nigeria and West Africa automate savings and earn interest.",
    inLanguage: "en",
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Script id="ld-json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
