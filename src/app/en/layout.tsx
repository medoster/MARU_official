import type { Metadata } from "next"
import "../globals.css"
import { ThemeProvider } from "next-themes"
import Header from "../../components/header"
import Footer from "../../components/footer"
import React from "react"

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    default: "MARU",
    template: "MARU",
  },
  icons: {
    icon: "/images/maru-icon.png",
  },
  description: null,
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
}

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
