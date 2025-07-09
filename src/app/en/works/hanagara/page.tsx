import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import PageHero from "@/components/PageHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hanagara no Ori - MARU",
  description: "Details for the mystery 'Hanagara no Ori' available on the UZU app.",
  keywords: [
    "Hanagara no Ori",
    "murder mystery",
    "madamis",
    "murder mystery app",
    "UZU",
    "MARU",
  ],
}

export default function HanagaraPage() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <PageHero
        title="Hanagara no Ori"
        slides={[{ src: "/images/hanagara_KV.jpg", alt: "Hanagara no Ori" }]}
      >
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Sci-Fi</span>
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Comedy</span>
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Strategic</span>
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Mystery</span>
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Tricky</span>
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">BGM & SE</span>
        </div>
        <p className="text-zinc-300">Released: 2025/07/18</p>
        <div className="relative container mx-auto px-4 h-full">
          <Link
            href="/en/works"
            className="absolute top-8 left-4 flex items-center text-white hover:text-cyan-400 mb-4 w-fit bg-black/60 px-3 py-1 rounded"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Works
          </Link>
        </div>
      </PageHero>

      {/* Content Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="story" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-zinc-800">
              <TabsTrigger value="story" className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                Story
              </TabsTrigger>
              <TabsTrigger
                value="characters"
                className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white"
              >
                Characters
              </TabsTrigger>
              <TabsTrigger value="details" className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                Details
              </TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Story</h2>
              <p className="text-zinc-300 mb-4">
                &quot;I&apos;ve released the bacteria!&quot; cries genius researcher Orbis. Six lab members are hurried into an underground nuclear shelter.
              </p>
              <p className="text-zinc-300 mb-4">
                Cut off from the world with no signal, they fear humanity may be doomed outside. Then Orbis is found dead in the shelter.
              </p>
              <p className="text-zinc-300">Was it suicide? An accident? Or something else…?</p>
            </TabsContent>

            <TabsContent value="characters" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-6 text-white">Characters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/フランク.png" alt="Frank" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Frank</h3>
                      <p className="text-zinc-300 mb-1">&quot;U-um… is this label right? Maybe it&apos;s backwards…&quot;</p>
                      <p className="text-zinc-300">A gloomy researcher who constantly belittles himself. Diligent but rarely successful.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/クリス.png" alt="Chris" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Chris</h3>
                      <p className="text-zinc-300 mb-1">&quot;My gentleman soul tells me so.&quot;</p>
                      <p className="text-zinc-300">A perfect gentleman. Elegant in all things and efficient at work, yet always leaves on time.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/トーマス.png" alt="Thomas" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Thomas</h3>
                      <p className="text-zinc-300 mb-1">&quot;Looking only at results, huh? It&apos;s a miracle no one&apos;s died in the process.&quot;</p>
                      <p className="text-zinc-300">A drunkard dragged around by Orbis. Rarely seen actually experimenting.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/デイジー.png" alt="Daisy" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Daisy</h3>
                      <p className="text-zinc-300 mb-1">&quot;Daisy wins just by being alive!&quot;</p>
                      <p className="text-zinc-300">Hired straight out of school, though everyone suspects she&apos;s Orbis&apos;s sugar baby. Carries only a phone and lipstick. Barely understands the experiments and mostly runs errands.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/ベル.png" alt="Belle" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Belle</h3>
                      <p className="text-zinc-300 mb-1">&quot;…Nothing in this world is cuter than your brain.&quot;</p>
                      <p className="text-zinc-300">The only sane member. Beautiful and decisive, the lab&apos;s last hope—though she has a sharp tongue.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="details" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Details</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Basic Info</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">Players</p>
                    <p className="text-xl font-bold text-white">5</p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">Play Time</p>
                    <p className="text-xl font-bold text-white">120 min</p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">Price</p>
                    <p className="text-xl font-bold text-white">Free</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Scenario Style</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Sci-Fi</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Comedy</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Strategic</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Mystery</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Tricky</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">BGM & SE</span>
                </div>
                <div className="bg-zinc-700 p-4 rounded-lg mb-4">
                  <p className="text-zinc-300">A highly strategic scenario best enjoyed with players of equal wits.</p>
                  <p className="text-zinc-300">The culprit is among the PCs, and clear victory conditions exist.</p>
                  <p className="text-zinc-300">All artwork was created without generative AI.</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Creator Notes</h3>
                <p className="text-zinc-300">Character art: 🍬 / Cover art: ita</p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-zinc-700 hover:bg-zinc-600 text-white">
                  <Link href="https://www.uzu-app.com/ja/scenario/10538" target="_blank" className="flex items-center">
                    Play on UZU
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
