import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Marketing & Branding Strategy Agency | M&B Strategy",
    template: "%s | M&B Strategy",
  },
  description:
    "M&B Strategy helps brands grow through Email Marketing, SEO optimisation, and Social Media management. Strategy-led, results-driven growth.",
  keywords: [
    "marketing agency",
    "branding strategy",
    "email marketing",
    "SEO optimisation",
    "social media management",
    "M&B Strategy",
  ],
  openGraph: {
    title: "Marketing & Branding Strategy Agency | M&B Strategy",
    description:
      "M&B Strategy helps brands grow through Email Marketing, SEO optimisation, and Social Media management. Strategy-led, results-driven growth.",
    url: "https://marketingnbrandingstrategy.com",
    siteName: "M&B Strategy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${openSans.variable} font-sans antialiased text-dark bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
