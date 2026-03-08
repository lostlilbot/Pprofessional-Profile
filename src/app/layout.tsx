import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

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
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
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
        {/* Navigation Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg group-hover:shadow-amber-500/25 transition-shadow">
                <span className="text-slate-900 font-bold text-lg">VC</span>
              </div>
              <span className="text-white font-semibold text-lg hidden sm:block">Vincent Churchill</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Home
              </Link>
              <Link href="/projects" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Projects
              </Link>
              <a 
                href="https://wa.me/50495924662" 
                className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}