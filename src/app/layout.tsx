import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: "MARU",
    template: "MARU",
  },
  icons: {
    icon: "/images/maru-icon.png", // または .png でも可
  },
  description: "マーダーミステリー・マダミス制作サークルMARUの公式サイトです。",
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
    description: "マーダーミステリー・マダミス制作サークルMARUの公式サイトです。",
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
    description: "マーダーミステリー・マダミス制作サークルMARUの公式サイトです。",
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
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
