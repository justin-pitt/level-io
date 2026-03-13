import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/layout/motion-provider";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
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
      <body className={`${archivo.className} antialiased bg-[#181a1b] text-white`}>
        <MotionProvider>
          <Navbar />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
