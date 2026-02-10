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

export const metadata: Metadata = {
  metadataBase: new URL("https://diner22.vercel.app"),
  title: "Diner 22 | Foodtruck i Mysen — Burgere, Fries & Snacks",
  description:
    "Diner 22 — retro foodtruck i Mysen. Saftige burgere, sprø fries og gode dips. Ring 920 60 569 for bestilling.",
  keywords:
    "diner 22, foodtruck, mysen, burger, bestilling, takeaway, fries, snacks",
  openGraph: {
    title: "Diner 22 | Foodtruck i Mysen",
    description:
      "Saftige burgere, sprø fries og gode dips — laget med kjærlighet fra vår foodtruck i Mysen.",
    siteName: "Diner 22",
    locale: "nb_NO",
    type: "website",
    images: [
      {
        url: "/bilde1.png",
        width: 1200,
        height: 630,
        alt: "Diner 22 — burger og fries",
      },
    ],
  },
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
