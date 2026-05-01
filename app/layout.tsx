import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle = "Zensolt Consultants — Web, mobile, cloud & AI engineering";
const siteDesc =
  "Zensolt Consultants designs, builds, and runs digital products: web, mobile, APIs, AWS, and AI/ML — one engineering team from discovery through production support.";

export const viewport: Viewport = {
  themeColor: "#050a30",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: siteTitle, template: "%s · Zensolt Consultants" },
  description: siteDesc,
  icons: {
    icon: [{ url: "/brand-mark.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: siteTitle,
    description: siteDesc,
    url: "/",
    siteName: "Zensolt Consultants",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDesc,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
