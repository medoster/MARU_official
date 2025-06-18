export const metadata = {
  title: 'SHADOW CODE - MARU'
}

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ShadowCodeEnglish() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <Image src="/images/shadow-code-cover.png" alt="SHADOW CODE" fill className="object-cover" priority />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-lg text-center">
            <h1 className="text-4xl font-bold tracking-wider mb-4 text-white">SHADOW CODE</h1>
            <p className="text-zinc-300">Released: 2024/08/17</p>
          </div>
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full">
          <Link href="/en/works" className="absolute top-8 left-4 flex items-center text-white hover:text-cyan-400 mb-4 bg-black/60 px-3 py-1 rounded">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Works
          </Link>
        </div>
      </section>
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4 space-y-4 text-zinc-300">
          <p>
            In the year 2324, citizens of Eclipse City communicate directly with the city AI NOVA via implants.
          </p>
          <p>
            When a man is found dead, four strangers join forces to uncover the dark secrets behind this futuristic society.
          </p>
          <Button asChild className="mt-4 bg-cyan-700 hover:bg-cyan-800 text-white">
            <Link href="https://www.uzu-app.com/ja/scenario/5808" target="_blank">
              Play on UZU
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
