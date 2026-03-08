import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vincent Churchill | International Educational Consultant & Language Training Expert",
  description: "Professional Educational Consultant with 25+ years of global experience in curriculum design, corporate ESL training, and educational leadership across four continents.",
  keywords: [
    "International Educational Consultant",
    "Curriculum Development Expert",
    "Corporate English Trainer",
    "Aviation/Medical/Legal English",
    "British Council Educator",
    "Aptis Program Specialist",
    "Educational Program Architect",
  ],
  authors: [{ name: "Vincent Churchill" }],
  openGraph: {
    title: "Vincent Churchill | International Educational Consultant & Language Training Expert",
    description: "Professional Educational Consultant with 25+ years of global experience in curriculum design, corporate ESL training, and educational leadership across four continents.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_HN",
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
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-slate-50 text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}