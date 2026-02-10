import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHEROCIOUS | Inspirational Socks & Gifts for Badass Women",
  description: "Empowering affirmation socks and gifts that celebrate strong women. 5% of profits support maternal mental health. Let's Celebrate Your Awesomeness!",
  keywords: ["inspirational socks", "gifts for women", "affirmation socks", "empowerment gifts", "badass goddess", "self-care gifts"],
  openGraph: {
    title: "SHEROCIOUS | Inspirational Socks & Gifts for Badass Women",
    description: "Empowering affirmation socks and gifts that celebrate strong women. 5% of profits support maternal mental health.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
