import type { Metadata } from "next"
import "../globals.css"
import { ThemeProvider } from "next-themes"
import Header from "../../components/header"
import Footer from "../../components/footer"
import React from "react"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: "MARU",
    template: "MARU",
  },
  icons: {
    icon: "/images/maru-icon.png",
  },
  description: "Official website of MARU, a creator of murder mystery scenarios.",
  keywords: [
    "murder mystery",
    "madamis",
    "murder mystery app",
    "UZU",
    "UZU app",
    "MARU",
    "SHADOW CODE",
    "Not a Conspiracy!",
    "Instant HO",
    "JILVAIN",
    "Soul Roar-Konkon-",
    "Proof of Translucent Blue",
    "NURUGA -Second Week Excess-",
    "Re:CALL",
  ],
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/en` : 'http://localhost:3000/en',
    title: "MARU",
    description: "Official website of MARU, a creator of murder mystery scenarios.",
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
    description: "Official website of MARU, a creator of murder mystery scenarios.",
    images: [
      "/images/maru-icon.png",
    ],
  },
  alternates: {
    canonical: '/en',
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="pt-16 flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
