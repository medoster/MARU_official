import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "花枯らの檻 - MARU",
  description: "マーダーミステリーアプリUZUで遊べる『花枯らの檻』の詳細ページです。",
  keywords: [
    "花枯らの檻",
    "マーダーミステリー",
    "マダミス",
    "マーダーミステリーアプリ",
    "UZU",
    "MARU",
  ],
}

export default function HanagaraPage() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />
        <Image src="/images/hanagara_KV.jpg" alt="花枯らの檻" fill className="object-cover" priority />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="bg-black/80 backdrop-blur-sm px-8 py-4 rounded-lg max-w-3xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-4 text-white">花枯らの檻</h1>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">SF</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">コメディ</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">駆け引きが楽しい</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">推理を楽しむ</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">トリッキー</span>
              <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">BGM･SE付き</span>
            </div>
            <p className="text-zinc-300">公開日: 2025/07/18</p>
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
                「細菌をばら撒いてしまった！」そう叫んだのは、細菌研究の第一人者にして天才──オルビス所長。
                研究室のメンバー六人は、急遽、地下に設けられた核シェルターに避難させられる。
              </p>
              <p className="text-zinc-300 mb-4">
                閉ざされた空間。電波の届かない場所。外では人類が滅亡しているかもしれない──そんな緊張のなか、シェルター内で突然、オルビス所長が死体となって発見される。
              </p>
              <p className="text-zinc-300">自殺か？事故か？それとも……。</p>
            </TabsContent>

            <TabsContent value="characters" className="bg-zinc-800 p-6 rounded-lg shadow-sm border border-zinc-700">
              <h2 className="text-2xl font-bold mb-6 text-white">キャラクター</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/フランク.png" alt="フランク" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">フランク</h3>
                      <p className="text-zinc-300 mb-1">『え、えっと……これ、ラベル……たぶん……合ってるよね……いや、逆……かも……』</p>
                      <p className="text-zinc-300">根が暗すぎて、常に自虐していないと気が済まない。実験自体は真面目にしているが成果が出ているかと言われると怪しい。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/クリス.png" alt="クリス" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">クリス</h3>
                      <p className="text-zinc-300 mb-1">『私のジェントルメンソウルがそう告げている。』</p>
                      <p className="text-zinc-300">紳士でジェントルメンな彼は全てがエレガント。エレガントすぎるが故に実験でも結果を出すが、定時退社する。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/トーマス.png" alt="トーマス" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">トーマス</h3>
                      <p className="text-zinc-300 mb-1">『そりゃ結果だけ見たら、な。過程は……死人が出とらんだけ奇跡じゃろ。』</p>
                      <p className="text-zinc-300">酒に溺れたアル中おじさん。いつもオルビス所長に振り回されているため、アルコールに逃げるのも致し方ないだろう。実験しているところは見たことがない。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/デイジー.png" alt="デイジー" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">デイジー</h3>
                      <p className="text-zinc-300 mb-1">『デイジー、生きてるだけで優勝♡』</p>
                      <p className="text-zinc-300">オルビス所長が新卒採用した女の子。だが、実際はパパ活相手として採用されたことを皆が察している。スマホとリップ以外持ち歩いていない。実験内容は理解しておらず、仕事内容はほぼ所長のパシリ。薬品と水を間違えることも多いが、本人は仕事をこなしているつもり。</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-700 border-zinc-600 shadow-sm">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-24 h-24 relative flex-shrink-0 overflow-hidden rounded-full">
                      <Image src="/images/ベル.png" alt="ベル" fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">ベル</h3>
                      <p className="text-zinc-300 mb-1">『……あなたの頭より可愛いものなんてこの世にないわ。』</p>
                      <p className="text-zinc-300">唯一のまとも枠。美しい容姿に、テキパキと指示を出す姿はこの研究所、最後の希望と言えるだろう。ただし、口調が強い。</p>
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
                    <p className="text-xl font-bold text-white">120分</p>
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
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">SF</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">コメディ</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">駆け引きが楽しい</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">推理を楽しむ</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">トリッキー</span>
                  <span className="px-2 py-1 bg-zinc-700 text-sm rounded text-white">BGM･SE付き</span>
                </div>
                <div className="bg-zinc-700 p-4 rounded-lg mb-4">
                  <p className="text-zinc-300">花枯らの檻（はながらのおり）</p>
                  <p className="text-zinc-300">戦略性が高いシナリオです。同程度の頭脳の方とプレイすると楽しいでしょう。</p>
                  <p className="text-zinc-300">PCの中に犯人がいます。勝ち負けがしっかりと存在するシナリオです。</p>
                  <p className="text-zinc-300">シナリオ内に登場するイラストは生成AIを使用していません。</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-white">制作者コメント</h3>
                <p className="text-zinc-300">キャラクターイラスト:🍬 / カバーイラスト:ita</p>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="bg-zinc-700 hover:bg-zinc-600 text-white">
                  <Link href="https://www.uzu-app.com/ja/scenario/10538" target="_blank" className="flex items-center">
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
