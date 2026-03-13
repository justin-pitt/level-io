import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Level | IT Management Reinvented",
    template: "%s | Level",
  },
  description:
    "The modern RMM platform that saves your team thousands of hours. Simple pricing, powerful features, zero complexity.",
  openGraph: {
    title: "Level | IT Management Reinvented",
    description:
      "The modern RMM platform that saves your team thousands of hours.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
