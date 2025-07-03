import type { Metadata } from 'next'
import ContactFormEn from '@/components/contact-form-en'

export const metadata: Metadata = {
  title: 'Contact - MARU',
  description: 'Get in touch with MARU, the murder mystery (madamis) writer, using the contact form.',
  keywords: ['MARU', 'murder mystery', 'murder mystery app', 'UZU'],
}

export default function EnglishContact() {
  return <ContactFormEn />
}
