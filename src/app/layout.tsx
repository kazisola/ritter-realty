import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ritter Realty LLC | SW Florida, Dubai & Jeddah Real Estate",
  description: "Ritter Realty LLC is a trusted real estate brokerage specializing in properties across Southwest Florida, Dubai, and Jeddah, KSA. Buy, sell, or invest with confidence with our expert guidance.",
  keywords: [
    "Ritter Realty LLC",
    "SW Florida real estate",
    "Dubai real estate",
    "Jeddah real estate",
    "Florida property broker",
    "Luxury real estate",
    "International real estate investment"
  ],
  authors: [{ name: "Ritter Realty LLC" }],
  creator: "Ritter Realty LLC",
  publisher: "Ritter Realty LLC",
  openGraph: {
    title: "Ritter Realty LLC | SW Florida, Dubai & Jeddah Real Estate",
    description: "Trusted real estate brokerage across Southwest Florida, Dubai, and Jeddah, KSA.",
    url: "https://www.ritterrealtyllc.com",
    siteName: "Ritter Realty LLC",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.ritterrealtyllc.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ritter Realty LLC Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritter Realty LLC | SW Florida, Dubai & Jeddah Real Estate",
    description: "Trusted real estate brokerage across Southwest Florida, Dubai, and Jeddah, KSA.",
    site: "@RitterRealtyLLC",
    creator: "@RitterRealty",
    images: ["https://www.ritterrealtyllc.com/og-image.jpg"]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <>
          { children }
        </>
        <Footer />
      </body>
    </html>
  );
}
