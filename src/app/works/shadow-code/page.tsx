import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SHADOW CODE - MARU",
  description: "UZUで遊べるマーダーミステリー『SHADOW CODE』の詳細ページです。",
  keywords: [
    "SHADOW CODE",
    "マーダーミステリー",
    "マダミス",
    "マーダーミステリーアプリ",
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
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">SF</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">駆け引きが楽しい</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">なりきって楽しい</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">重厚</span>
            </div>
            <p className="text-zinc-300">公開日: 2024/08/17</p>
          </div>
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full">
          <Link
            href="/works"
            className="absolute top-8 left-4 flex items-center text-white hover:text-cyan-400 mb-4 w-fit bg-black/60 px-3 py-1 rounded"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            作品一覧に戻る
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="story" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-zinc-800">
              <TabsTrigger value="story" className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                あらすじ
              </TabsTrigger>
              <TabsTrigger
                value="characters"
                className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white"
              >
                キャラクター
              </TabsTrigger>
              <TabsTrigger value="details" className="data-[state=active]:bg-zinc-700 data-[state=active]:text-white">
                詳細情報
              </TabsTrigger>
            </TabsList>

            <TabsContent value="story" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-4 text-white">あらすじ</h2>
              <p className="text-zinc-300 mb-4">
                西暦2324年、未来都市エクリプスシティでは、全ての市民が頭に装着したICチップを通じてシティAI「NOVA」と交信している。
                日常の1部となったこの技術により、人々は思考だけで車を操ったり、義手を動かしたり、生活を便利にしている。
                しかし、この進歩の裏には暗く深い闇が隠されている。
              </p>
              <p className="text-zinc-300 mb-4">
                ある夜、宿で鳴り響く大きな警報音。この音に導かれて4人はある部屋の前に集まる。
                部屋の中では、ベッドの上で生気を失った男が固まっている。
                レオンがその男の生死を確認すると、彼は既に息を引き取っていた。
              </p>
              <p className="text-zinc-300">
                この死は、ただの事故ではない。4人は、街の表と裏をつなぐ影を解き明かしていく。
              </p>
            </TabsContent>

            <TabsContent value="characters" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-6 text-white">キャラクター</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image src="/images/jay.jpeg" alt="レオン・サイダス" fill className="object-cover rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">レオン・サイダス</h3>
                      <p className="text-gray-300 text-sm mb-2">年齢: 35歳 / 性別: 男性</p>
                      <p className="text-zinc-300">職業: 私立探偵</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image
                        src="/images/emilia.jpeg"
                        alt="エミリア・ケイン"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">エミリア・ケイン</h3>
                      <p className="text-gray-300 text-sm mb-2">年齢: 32歳 / 性別: 女性</p>
                      <p className="text-zinc-300">職業: 研究者</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image src="/images/maira.jpeg" alt="マイラ" fill className="object-cover rounded-full" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">マイラ</h3>
                      <p className="text-gray-300 text-sm mb-2">年齢: 24歳 / 性別: 女性</p>
                      <p className="text-zinc-300">職業: 発明家</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0">
                      <Image
                        src="/images/nova.jpeg"
                        alt="ジェイ・レイヴン"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">ジェイ・レイヴン</h3>
                      <p className="text-gray-300 text-sm mb-2">年齢: 52歳 / 性別: 男性</p>
                      <p className="text-zinc-300">職業: ーー</p>
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
                      <p className="text-gray-300 text-sm mb-2">年齢: ーー / 性別: ーー</p>
                      <p className="text-zinc-300">職業: シティAI</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="details" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-4 text-white">詳細情報</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">基本情報</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">人数</p>
                    <p className="text-xl font-bold text-white">5人</p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">プレイ時間</p>
                    <p className="text-xl font-bold text-white">150分</p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">1人あたり料金</p>
                    <p className="text-xl font-bold text-white">490コイン
                    </p>
                    <p className="text-xs text-zinc-400">(¥700相当)</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">シナリオ傾向</h3>
                <ul className="list-disc list-inside text-zinc-300 space-y-1">
                  <li>オープン型マーダーミステリ―です。</li>
                  <li>初級＆中級＆上級から選択できます。</li>
                  <li>駆け引きを重視したシナリオです。</li>
                  <li>明確な推理導線はありません。</li>
                  <li>RP重視のシナリオです。</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">難易度について</h3>
                <p className="text-zinc-300 mb-2">
                  シナリオ数が全てではありませんが、目安です。
                  なお、このシナリオは誰かひとりが優れていても成立しません。なるべく同じレベルの方と卓を建ててください。
                </p>
                <ul className="list-disc list-inside text-zinc-300 space-y-1">
                  <li>初級: 10～70シナリオ</li>
                  <li>中級: 71～200シナリオ</li>
                  <li>上級: 201～シナリオ</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">制作者コメント</h3>
                <p className="text-zinc-300">
                  初作品です。
                  UZUならこんなことも出来るんじゃ！を詰め込みました。そのため、操作難易度が高めです。その代わりとして、最初に練習にスタンガンを配布しています。試しに人に当てたり、自分に使ってみてください。
                  このシナリオでは、PCを作者が殺しに行きます。全力で護ってください。
                </p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-cyan-700 hover:bg-cyan-800 text-white">
                  <Link href="https://www.uzu-app.com/ja/scenario/5808" target="_blank" className="flex items-center">
                    UZUアプリで遊ぶ
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
