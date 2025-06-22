import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SHADOW CODE - MARU",
  description: "Details for the murder mystery 'SHADOW CODE' available on the UZU app.",
  keywords: [
    "SHADOW CODE",
    "murder mystery",
    "madamis",
    "murder mystery app",
    "UZU",
    "MARU",
  ],
}

export default function ShadowCodePage() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <Image src="/images/shadow-code-cover.png" alt="SHADOW CODE" fill className="object-cover" priority />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-lg max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-4 text-white">SHADOW CODE</h1>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Sci-Fi</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Strategic</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Roleplay</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Serious</span>
            </div>
            <p className="text-zinc-300">Released: 2024/08/17</p>
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
                  The year is 2324 in Eclipse City. Citizens rely on the city AI &quot;NOVA&quot; via chips implanted in their heads.
                </p>
                <p className="text-zinc-300 mb-4">
                  One night a strange death occurs. The party begins to uncover the secrets hidden in the city&apos;s shadows.
                </p>
              <p className="text-zinc-300">
                Follow the clues and reveal the truth behind NOVA.
              </p>
            </TabsContent>

            <TabsContent value="characters" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-6 text-white">Characters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image src="/images/jay.jpeg" alt="Leon Psydus" fill className="object-cover rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Leon Psydus</h3>
                      <p className="text-gray-300 text-sm mb-2">Age: 35 / Male</p>
                      <p className="text-zinc-300">Private Detective</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image src="/images/emilia.jpeg" alt="Emilia Kane" fill className="object-cover rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Emilia Kane</h3>
                      <p className="text-gray-300 text-sm mb-2">Age: 32 / Female</p>
                      <p className="text-zinc-300">Researcher</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image src="/images/maira.jpeg" alt="Maira" fill className="object-cover rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Maira</h3>
                      <p className="text-gray-300 text-sm mb-2">Age: 24 / Female</p>
                      <p className="text-zinc-300">Inventor</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image src="/images/nova.jpeg" alt="Jay Raven" fill className="object-cover rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Jay Raven</h3>
                      <p className="text-gray-300 text-sm mb-2">Age: 52 / Male</p>
                      <p className="text-zinc-300">Unknown Occupation</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm md:col-span-2">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image src="/images/leon.jpeg" alt="NOVA" fill className="object-cover rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">NOVA</h3>
                      <p className="text-gray-300 text-sm mb-2">AI</p>
                      <p className="text-zinc-300">City Control System</p>
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
                    <p className="text-xl font-bold text-white">150 min</p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">Cost per Player</p>
                    <p className="text-xl font-bold text-white">¥490</p>
                    <p className="text-xs text-zinc-400">(¥700 value)</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Scenario Style</h3>
                <ul className="list-disc list-inside text-zinc-300 space-y-1">
                  <li>Open style murder mystery</li>
                  <li>Selectable difficulty</li>
                  <li>Focus on strategy</li>
                  <li>No strict deduction path</li>
                  <li>Roleplay heavy</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Creator Notes</h3>
                <p className="text-zinc-300">
                  My first scenario. It pushes the limits of what the UZU app can do, so controls may feel complex. Try the stun gun practice at the start!
                </p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-cyan-700 hover:bg-cyan-800 text-white">
                  <Link href="https://www.uzu-app.com/ja/scenario/5808" target="_blank" className="flex items-center">
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
