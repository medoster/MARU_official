import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function JilvainPage() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <Image src="/images/jilvain-cover.png" alt="JILVAIN" fill className="object-cover" priority />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-lg max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-4 text-white">JILVAIN</h1>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Fantasy</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Strategy</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Tricky</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Serious</span>
            </div>
            <p className="text-zinc-300">Released: 2025/02/18</p>
          </div>
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full">
          <Link
            href="/en/works"
            className="absolute top-8 left-4 flex items-center text-white hover:text-cyan-400 mb-4 w-fit bg-black/60 px-3 py-1 rounded"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Works
          </Link>
        </div>
      </section>

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
                Long ago, a forbidden island called Oniro was feared and worshiped. None who set foot there ever returned.
              </p>
              <p className="text-zinc-300 mb-4">
                A violent storm now surrounds the island, threatening the country of Freedom. Many have tried to investigate, yet none survived.
              </p>
              <p className="text-zinc-300 mb-4">
                Only Gene made it back, claiming the source of the disaster lies on Oniro. A new team is formed to destroy it.
              </p>
              <p className="text-zinc-300">
                Can you reach the island and stop the storm?
              </p>
            </TabsContent>

            <TabsContent value="characters" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-6 text-white">Characters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/crobat.gif" alt="Isabella" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Isabella</h3>
                      <p className="text-gray-300 text-sm mb-2">Not the culprit</p>
                      <p className="text-zinc-300">Joined the ship to search for her mother.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/sora.gif" alt="Sora" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Sora</h3>
                      <p className="text-zinc-300">Searching for a childhood friend.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/dibas.gif" alt="Tito" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Tito</h3>
                      <p className="text-zinc-300">Hopes to hear the voices of the dead.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/tito.gif" alt="Dibas" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Dibas</h3>
                      <p className="text-zinc-300">Repaying a debt.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/isabella.gif" alt="Crobat" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Crobat</h3>
                      <p className="text-zinc-300">Joined the voyage to find his father.</p>
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
                    <p className="text-sm text-zinc-400">Time</p>
                    <p className="text-xl font-bold text-white">165 min</p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">Cost per Player</p>
                    <p className="text-xl font-bold text-white">¥700</p>
                    <p className="text-xs text-zinc-400">(¥1000 value)</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Scenario Style</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Culprit among PCs</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Secret talks</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Many branches</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Deduction = RP</span>
                </div>
                <p className="text-zinc-300">No knowledge of ZIRCON is required.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Creator Notes</h3>
                <p className="text-zinc-300 mb-4">
                  My fourth work. Built specifically for the UZU app with unique mechanics and improvements over SHADOW CODE.
                </p>
                <p className="text-zinc-300 mb-4">
                  Illustrations by 🍬 and HO by Yuma added great value. We hope you enjoy this journey.
                </p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-zinc-700 hover:bg-zinc-600 text-white">
                  <Link href="https://www.uzu-app.com/ja/scenario/7298" target="_blank" className="flex items-center">
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
