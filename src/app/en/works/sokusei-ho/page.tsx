import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

export default function SokuseiHoPage() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <Image src="/images/sokusei-ho-cover.jpeg" alt="Instant HO" fill className="object-cover" priority />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-lg max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-4 text-white">Instant HO</h1>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Death Game</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Comedy</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Tricky</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Party</span>
            </div>
            <p className="text-zinc-300">Released: 2024/09/14</p>
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
                You awake in a locked room. A mysterious host announces a deadly game of deception.
              </p>
            </TabsContent>

            <TabsContent value="characters" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-6 text-white">Characters</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full bg-zinc-600 flex items-center justify-center">
                      <Image src="/images/sokusei-ho-char1.png" alt="Master of Disguise" fill className="object-contain" style={{ backgroundColor: "transparent" }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Master of Disguise</h3>
                      <p className="text-zinc-300">Can impersonate anything.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/sokusei-ho-char5.png" alt="Octopus" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Octopus</h3>
                      <p className="text-zinc-300">Able to mimic anything.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/sokusei-ho-char3.png" alt="Ninja" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Ninja</h3>
                      <p className="text-zinc-300">Can transform freely.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/sokusei-ho-char4.png" alt="Chameleon" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Chameleon</h3>
                      <p className="text-zinc-300">Changes body color at will.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/sokusei-ho-kaitou.webp" alt="Phantom Thief KIO" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Phantom Thief KIO</h3>
                      <p className="text-zinc-300">A master of disguise.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full bg-zinc-600 flex items-center justify-center">
                      <Image src="/images/sokusei-ho-char6.png" alt="Memomon" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Memomon</h3>
                      <p className="text-zinc-300">Copies any appearance.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm md:col-span-2">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/sokusei-ho-kitsune.webp" alt="Fox" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">Fox</h3>
                      <p className="text-zinc-300">Creates illusions to change appearance.</p>
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
                    <p className="text-xl font-bold text-white">7</p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">Time</p>
                    <p className="text-xl font-bold text-white">45 min</p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">Cost per Player</p>
                    <p className="text-xl font-bold text-white">Free</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Scenario Style</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">UZU only</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Death Game</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Comedy</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Tricky</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Party</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Casual</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">Table friendly</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">BGM & SE</span>
                </div>
                <div className="bg-zinc-700 p-4 rounded-lg mb-4">
                  <p className="text-zinc-300">
                    A quick and quirky scenario written in a day. Expect chaos and laughs.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">Creator Notes</h3>
                <p className="text-zinc-300 mb-4">
                  Guess the hidden HO through roleplay. Leave your shame behind and enjoy!
                </p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-zinc-700 hover:bg-zinc-600 text-white">
                  <Link href="https://www.uzu-app.com/ja/scenario/6123" target="_blank" className="flex items-center">
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
