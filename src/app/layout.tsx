import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/header";
import Footer from "../components/footer";
import LanguageSetter from "../components/language-setter";
import React from "react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: "MARU",
    template: "MARU",
  },
  icons: {
    icon: "/images/placeholder-logo.png",
  },
  description: "MARUの公式サイトです。",
  keywords: [
    "マーダーミステリー",
    "マダミス",
    "マーダーミステリーアプリ",
    "UZU",
    "UZUアプリ",
    "MARU",
    "SHADOW CODE",
    "陰謀論者じゃないもん！",
    "即席HO",
    "JILVAIN",
    "魂吼-コンコン-",
    "透きとおる青の証明",
    "NURUGA-2週目の蛇足-",
    "Re:CALL（リコール）",
    "シナリオ",
  ],
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
    title: "MARU",
    description: "MARUの公式サイトです。",
    siteName: "MARU",
    images: [
      {
        url: "/images/maru-icon.png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "MARU",
    description: "MARUの公式サイトです。",
    images: [
      "/images/maru-icon.png",
    ],
  },
  alternates: {
    canonical: '/',
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MARU',
              url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
              sameAs: ['https://x.com/mok4shiro'],
              keywords:
                'マーダーミステリー, マダミス, マーダーミステリーアプリ, UZU, UZUアプリ, MARU, SHADOW CODE, 陰謀論者じゃないもん！, 即席HO, JILVAIN, 魂吼-コンコン-, 透きとおる青の証明, NURUGA-2週目の蛇足-, Re:CALL（リコール）',
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        {/* SF Background — fixed, behind all content */}
        <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="sf-orb sf-orb-1" />
          <div className="sf-orb sf-orb-2" />
          <div className="sf-orb sf-orb-3" />
          <div className="sf-stars sf-stars-a" />
          <div className="sf-stars sf-stars-b" />
          <div className="sf-stars sf-stars-c" />
          <div className="sf-stars sf-stars-d" />
          <div className="sf-stars sf-stars-e" />
          <div className="sf-stars sf-stars-f" />
          <div className="sf-stars sf-stars-g" />
          <div className="sf-stars sf-stars-h" />
          <div className="sf-ring sf-ring-1" />
          <div className="sf-ring sf-ring-2" />
          <div className="sf-ring sf-ring-3" />
          <div className="sf-ring sf-ring-4" />
          <div className="sf-ring sf-ring-5" />
          <div className="sf-ring sf-ring-6" />
          <div className="sf-ring sf-ring-7" />
          <div className="sf-ring sf-ring-8" />
          <div className="sf-edge-left" />
          <div className="sf-edge-right" />
          <div className="sf-horizon" />
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageSetter />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="pt-16 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
