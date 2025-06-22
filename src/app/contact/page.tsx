import type { Metadata } from "next"
import ContactPageClient from "@/components/contact-page-client"

export const metadata: Metadata = {
  title: "お問い合わせ - MARU",
  description: "マーダーミステリー・マダミス制作サークルMARUへのお問い合わせフォームです。",
  keywords: [
    "MARU",
    "マーダーミステリー",
    "マーダーミステリーアプリ",
    "UZU",
  ],
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
