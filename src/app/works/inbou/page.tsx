import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import PageHero from "@/components/PageHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "陰謀論者じゃないもん！ - MARU",
  description:
    "マーダーミステリーアプリUZUで遊べる『陰謀論者じゃないもん！』の詳細ページです。",
  keywords: [
    "陰謀論者じゃないもん！",
    "マーダーミステリー",
    "マダミス",
    "マーダーミステリーアプリ",
    "UZU",
    "MARU",
  ],
}

export default function InbouPage() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <PageHero
        title="陰謀論者じゃないもん！"
        slides={[{ src: "/images/inbou-cover.jpeg", alt: "陰謀論者じゃないもん！" }]}
      >
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">コメディ</span>
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">日常</span>
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">トリッキー</span>
          <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">みんなでワイワイ</span>
        </div>
        <p className="text-zinc-300">公開日: 2025/02/14</p>
        <div className="relative container mx-auto px-4 h-full">
          <Link
            href="/works"
            className="absolute top-8 left-4 flex items-center text-white hover:text-cyan-400 mb-4 w-fit bg-black/60 px-3 py-1 rounded"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            作品一覧に戻る
          </Link>
        </div>
      </PageHero>

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
                とあるセミナーを受講するために集まった5人。休憩後、たくさんお金を儲けられる方法を教えてもらうはずだったのに、いつまでたっても帰って来ない。
              </p>
              <p className="text-zinc-300 mb-4">
                パーテーションの裏を見ると講義を行っていた禰津御郷（ねづみこう）の死体が見つかった。
              </p>
              <p className="text-zinc-300">何故禰津御郷（ねづみこう）は死んでしまったのか話し合いが始まる。</p>
            </TabsContent>

            <TabsContent value="characters" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-6 text-white">キャラクター</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/inbou-char1.png" alt="或美保衣類" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">或美保衣類(アルミホイル)</h3>
                      <p className="text-zinc-300">頭にアルミホイルを巻いている。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/inbou-char4.png" alt="婦亜位部 滋依" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">婦亜位部　滋依（ふぁいぶ　じい）</h3>
                      <p className="text-zinc-300">一般人のように見える。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/inbou-char5.png" alt="刺付血犯" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">刺付血犯（さつじんはん）</h3>
                      <p className="text-zinc-300">真っ赤なTシャツを着ている。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/inbou-char2.png" alt="反輪 朽鎮" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">反輪　朽鎮(はんわ　くちん)</h3>
                      <p className="text-zinc-300">一般人に見える。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/inbou-char3.png" alt="麻須久澄奈" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">麻須久澄奈（ますくすな）</h3>
                      <p className="text-zinc-300">マスクをしていない女性</p>
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
                    <p className="text-xl font-bold text-white">20分</p>
                  </div>
                  <div className="bg-zinc-700 p-3 rounded-md text-center">
                    <p className="text-sm text-zinc-400">1人あたり料金</p>
                    <p className="text-xl font-bold text-white">無料</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">シナリオ傾向</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">ウズ限定</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">コメディ</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">日常</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">トリッキー</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">みんなでワイワイ</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">気軽に</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">対面でも遊びやすい</span>
                </div>
                <div className="bg-zinc-700 p-4 rounded-lg mb-4">
                  <p className="text-zinc-300">
                    陰謀論、ねずみ講を含みます。そういったテーマが苦手な方はご注意ください。
                  </p>
                  <p className="text-zinc-300 mt-2">知らない人とやると仲良くなれるかもしれません。</p>
                  <p className="text-zinc-300 mt-2">本作は陰謀論、ねずみ講を推奨するものではありません。</p>
                  <p className="text-zinc-300 mt-2">生成AIを全く使用していません。</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">制作者コメント</h3>
                <p className="text-zinc-300">
                  3作品目です。入門ウィークに出そうと思って作りましたが、RP難易度が高すぎたので諦めました。
                  作者はねずみ講や陰謀論に詳しくないため、有識者や実際に行われている方からすると稚拙なシナリオかと思いますが、目を瞑っていただけると嬉しいです。
                </p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-zinc-700 hover:bg-zinc-600 text-white">
                  <Link href="https://www.uzu-app.com/ja/scenario/7297" target="_blank" className="flex items-center">
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
