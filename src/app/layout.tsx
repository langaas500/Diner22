import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// UPDATED: premium polish — metadata for foodtruck/burger
export const metadata: Metadata = {
  title: "Diner 22 | Foodtruck i Mysen — Burgere, Fries & Snacks",
  description:
    "Diner 22 — retro foodtruck i Mysen. Saftige burgere, sprø fries og gode dips. Ring 920 60 569 for bestilling.",
  keywords:
    "diner 22, foodtruck, mysen, burger, bestilling, takeaway, fries, snacks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
