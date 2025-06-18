export const metadata = {
  title: "I'm Not a Conspiracy Theorist! - MARU"
}

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function InbouEnglish() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <div className="absolute inset-0 bg-white z-0" />
        <Image src="/images/inbou-cover.jpeg" alt="I&apos;m Not a Conspiracy Theorist!" fill className="object-cover z-5" priority />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-lg text-center">
            <h1 className="text-4xl font-bold tracking-wider mb-4 text-white">I&apos;m Not a Conspiracy Theorist!</h1>
            <p className="text-zinc-300">Released: 2025/02/14</p>
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
            Five people gather for a money-making seminar, but the instructor never returns from the break. Instead, his body is discovered.
          </p>
          <p>
            Discuss the strange circumstances and uncover the truth behind the seminar.
          </p>
          <Button asChild className="mt-4 bg-cyan-700 hover:bg-cyan-800 text-white">
            <Link href="https://www.uzu-app.com/ja/scenario/7297" target="_blank">
              Play on UZU
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
