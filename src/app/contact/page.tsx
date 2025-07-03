import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "お問い合わせ - MARU",
  description: "マーダーミステリー・マダミス制作サークルMARUへのお問い合わせフォームです。",
  keywords: [
    "MARU",
    "マーダーミステリー",
    "マーダーミステリーアプリ",
    "UZU",
  ],
}

export default function ContactPage() {
  return <ContactForm />
}
