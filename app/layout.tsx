import type React from "react"
import { Rajdhani, Zen_Kaku_Gothic_New } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

// Rajdhani フォントの設定
const rajdhani = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rajdhani",
})

// 日本語フォントの設定 - Zen Kaku Gothic New (よりモダンなフォント)
const zenKaku = Zen_Kaku_Gothic_New({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-kaku",
})

export const metadata = {
  title: "MARU | マーダーミステリー制作者",
  description: "UZUアプリでマーダーミステリーを制作しているMARUの公式サイト",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${rajdhani.variable} ${zenKaku.variable} font-sans dark`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
