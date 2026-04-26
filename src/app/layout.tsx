import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-body",
  display: "swap",
});

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zensolt Consultants | AI/ML & Engineering Partner",
  description:
    "Build scalable digital products with web, mobile, cloud, and AI expertise. From idea to production — Zensolt Consultants delivers complete technology solutions.",
  openGraph: {
    title: "Zensolt Consultants | AI/ML & Engineering Partner",
    description:
      "Build scalable digital products with web, mobile, cloud, and AI expertise. From idea to production — Zensolt Consultants delivers complete technology solutions.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
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
      className={`dark ${fontSans.variable} ${fontDisplay.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
