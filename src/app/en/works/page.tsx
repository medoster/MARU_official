export const metadata = {
  title: 'Works - MARU',
  description: 'A collection of murder mystery (madamis) scenarios available on the UZU app.',
  keywords: [
    'SHADOW CODE',
    'Not a Conspiracy!',
    'Instant HO',
    'JILVAIN',
    'Hanagara no Ori',
    'murder mystery app',
    'UZU',
    'MARU',
  ]
}

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import PageHero from '@/components/PageHero'

export default function EnglishWorks() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <PageHero title="Works" subtitle="A selection of scenarios available on the UZU app." />
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SHADOW CODE */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/images/shadow-code-cover.png"
                  alt="SHADOW CODE"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-end">
                  <div className="bg-black/80 backdrop-blur-sm w-full p-3">
                    <h3 className="text-2xl font-bold text-white">SHADOW CODE</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Sci-Fi</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Strategic</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Roleplay</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Serious</span>
                </div>
                <p className="text-zinc-300 mb-4">
                  In Eclipse City of 2324, citizens rely on the AI &quot;NOVA&quot;. A mysterious death sparks a hunt for the truth.
                </p>
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

            {/* Not a Conspiracy! */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
              <div className="relative aspect-video w-full overflow-hidden">
                <div className="absolute inset-0 bg-white z-0"></div>
                <Image
                  src="/images/inbou-cover.jpeg"
                  alt="Not a Conspiracy!"
                  fill
                  className="object-cover z-10"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-end z-20">
                  <div className="bg-black/80 backdrop-blur-sm w-full p-3">
                    <h3 className="text-2xl font-bold text-white">Not a Conspiracy!</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Comedy</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Daily Life</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Tricky</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Party</span>
                </div>
                <p className="text-zinc-300 mb-4">
                  Five people attend a seminar for easy money only to discover the lecturer dead. Why did he die?
                </p>
                <p className="text-gray-300 text-sm mb-4">Released: 2025/02/14</p>
                <div className="flex justify-between items-center">
                  <Button asChild className="bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                    <Link href="https://www.uzu-app.com/ja/scenario/7297" target="_blank" className="flex items-center">
                      Play on UZU
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="text-white hover:text-gray-300 p-0">
                    <Link href="/en/works/inbou" className="flex items-center">
                      Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Instant HO */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/images/sokusei-ho-cover.jpeg"
                  alt="Instant HO"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-end">
                  <div className="bg-black/80 backdrop-blur-sm w-full p-3">
                    <h3 className="text-2xl font-bold text-white">Instant HO</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Death Game</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Comedy</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Tricky</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Party</span>
                </div>
                <p className="text-zinc-300 mb-4">
                  You awake in a locked room where a mysterious host begins a deadly game of deception.
                </p>
                <p className="text-gray-300 text-sm mb-4">Released: 2024/09/14</p>
                <div className="flex justify-between items-center">
                  <Button asChild className="bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                    <Link href="https://www.uzu-app.com/ja/scenario/6123" target="_blank" className="flex items-center">
                      Play on UZU
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="text-white hover:text-gray-300 p-0">
                    <Link href="/en/works/sokusei-ho" className="flex items-center">
                      Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* JILVAIN */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/images/jilvain-cover.png"
                  alt="JILVAIN"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-end">
                  <div className="bg-black/80 backdrop-blur-sm w-full p-3">
                    <h3 className="text-2xl font-bold text-white">JILVAIN</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Fantasy</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Strategy</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Tricky</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Serious</span>
                </div>
                <p className="text-zinc-300 mb-4">
                  A violent storm surrounds the forbidden island Oniro. Your crew must uncover its secrets to save the land.
                </p>
                <p className="text-gray-300 text-sm mb-4">Released: 2025/02/18</p>
                <div className="flex justify-between items-center">
                  <Button asChild className="bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                    <Link href="https://www.uzu-app.com/ja/scenario/7298" target="_blank" className="flex items-center">
                      Play on UZU
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="text-white hover:text-gray-300 p-0">
                    <Link href="/en/works/jilvain" className="flex items-center">
                      Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hanagara no Ori */}
            <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/images/hanagara_KV.jpg"
                  alt="Hanagara no Ori"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-end">
                  <div className="bg-black/80 backdrop-blur-sm w-full p-3">
                    <h3 className="text-2xl font-bold text-white">Hanagara no Ori</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Sci-Fi</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Comedy</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Strategic</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Mystery</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">Tricky</span>
                  <span className="px-2 py-1 bg-zinc-700 text-xs rounded text-white">BGM & SE</span>
                </div>
                <p className="text-zinc-300 mb-4">
                  Genius researcher Orbis claims to have released deadly bacteria. Soon after, his body is found inside a sealed shelter.
                </p>
                <p className="text-gray-300 text-sm mb-4">Released: 2025/07/18</p>
                <div className="flex justify-between items-center">
                  <Button asChild className="bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                    <Link href="https://www.uzu-app.com/ja/scenario/10538" target="_blank" className="flex items-center">
                      Play on UZU
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="text-white hover:text-gray-300 p-0">
                    <Link href="/en/works/hanagara" className="flex items-center">
                      Details
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* UZU Implementation & Ports */}
          <div className="mt-16">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 text-white">UZU Implementation & Ports</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Soul Roar -Konkon-</h3>
                    <p className="text-zinc-300 mb-4">Implemented for the UZU app.</p>
                    <Button asChild className="w-full bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                      <Link
                        href="https://www.uzu-app.com/ja/scenario/8953"
                        target="_blank"
                        className="flex items-center justify-center"
                      >
                        Play on UZU
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Proof of Translucent Blue</h3>
                    <p className="text-zinc-300 mb-4">Ported from Booth.</p>
                    <Button asChild className="w-full bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                      <Link
                        href="https://www.uzu-app.com/ja/scenario/7490"
                        target="_blank"
                        className="flex items-center justify-center"
                      >
                        Play on UZU
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">NURUGA -Second Week Excess-</h3>
                    <p className="text-zinc-300 mb-4">Ported from Booth.</p>
                    <Button asChild className="w-full bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                      <Link
                        href="https://www.uzu-app.com/ja/scenario/7135"
                        target="_blank"
                        className="flex items-center justify-center"
                      >
                        Play on UZU
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-800 border-zinc-700 overflow-hidden shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">Re:CALL</h3>
                    <p className="text-zinc-300 mb-4">Implemented for the UZU app.</p>
                    <Button asChild className="w-full bg-zinc-700 hover:bg-zinc-600 text-white border border-zinc-600">
                      <Link
                        href="https://www.uzu-app.com/ja/scenario/8471"
                        target="_blank"
                        className="flex items-center justify-center"
                      >
                        Play on UZU
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
