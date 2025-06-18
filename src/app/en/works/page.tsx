export const metadata = {
  title: 'Works - MARU'
}

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function EnglishWorks() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Works</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            A selection of scenarios available on the UZU app.
          </p>
        </div>
      </section>
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image src="/images/shadow-code-cover.png" alt="SHADOW CODE" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 flex items-end">
                  <div className="bg-black/80 backdrop-blur-sm w-full p-3">
                    <h3 className="text-2xl font-bold text-white">SHADOW CODE</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-300 text-sm mb-4">Released: 2024/08/17</p>
                <div className="flex justify-between items-center">
                  <Button asChild className="bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                    <Link href="https://www.uzu-app.com/ja/scenario/5808" target="_blank" className="flex items-center">
                      Play on UZU
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="text-white hover:text-gray-300 p-0">
                    <Link href="/en/works/shadow-code" className="flex items-center">
                      Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
