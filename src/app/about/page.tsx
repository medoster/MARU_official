import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Page Header */}
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">プロフィール</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">マーダーミステリー制作者MARUについて</p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-800 p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
              <div className="w-32 h-32 relative overflow-hidden rounded-full bg-white">
                <Image
                  src="/images/maru-icon.png"
                  alt="MARU"
                  fill
                  className="object-contain"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2 text-white">MARU</h2>
                <p className="text-gray-300 mb-4">マーダーミステリー制作者</p>
                <div className="flex items-center">
                  <Link
                    href="https://x.com/mok4shiro"
                    target="_blank"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                    @mok4shiro
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">プロフィール</h3>
              <p className="text-zinc-300 mb-4">
                UZUアプリでマーダーミステリーを制作しているMARUです。
                プレイヤーが没入できる世界観と、今までにないギミック体験が特徴です。
              </p>
              <p className="text-zinc-300">
                「SHADOW CODE」「JILVAIN」などの作品を手がけています。
                UZUならではの機能を活かした、独自のギミックや演出を取り入れたシナリオ作りを心がけています。
                また、他作品のUZUへの移植作業や実装も行なっています。
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">作品一覧</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-32 text-gray-300">2024/08/17</span>
                  <Link href="/works/shadow-code" className="text-gray-300 hover:text-white">
                    SHADOW CODE
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="w-32 text-gray-300">2024/09/14</span>
                  <span className="text-gray-300">即席HO</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 text-gray-300">2025/02/14</span>
                  <span className="text-gray-300">陰謀論者じゃないもん！</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 text-gray-300">2025/02/18</span>
                  <Link href="/works/jilvain" className="text-gray-300 hover:text-white">
                    JILVAIN
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-white">UZU実装・移植実績</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-32 text-gray-300">2024/12/13</span>
                  <Link
                    href="https://www.uzu-app.com/ja/scenario/7490"
                    target="_blank"
                    className="text-gray-300 hover:text-white"
                  >
                    透きとおる青の証明
                  </Link>
                  <span className="text-gray-400 text-xs ml-2">（Boothからの移植）</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 text-gray-300">2025/01/16</span>
                  <Link
                    href="https://www.uzu-app.com/ja/scenario/7135"
                    target="_blank"
                    className="text-gray-300 hover:text-white"
                  >
                    NURUGA-2週目の蛇足-
                  </Link>
                  <span className="text-gray-400 text-xs ml-2">（Boothからの移植）</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 text-gray-300">2025/02/20</span>
                  <Link
                    href="https://www.uzu-app.com/ja/scenario/8471"
                    target="_blank"
                    className="text-gray-300 hover:text-white"
                  >
                    Re:CALL（リコール）
                  </Link>
                  <span className="text-gray-400 text-xs ml-2">（UZU実装担当）</span>
                </li>
                <li className="flex items-center">
                  <span className="w-32 text-gray-300">2025/04/01</span>
                  <Link
                    href="https://www.uzu-app.com/ja/scenario/8953"
                    target="_blank"
                    className="text-gray-300 hover:text-white"
                  >
                    魂吼-コンコン-
                  </Link>
                  <span className="text-gray-400 text-xs ml-2">（UZU実装担当）</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">GM情報</h3>
              <p className="text-zinc-300 mb-4">
                作者GMは現在受け付けておりません。
                公認GMや講習済みGMを紹介させていただくことは出来ます。GMにお困りの際はご相談ください。
              </p>

              <div className="bg-zinc-700 p-4 rounded-lg shadow-sm border border-zinc-600">
                <h4 className="font-semibold mb-2 text-white">公認GM</h4>
                <ul className="space-y-2">
                  <li className="text-zinc-300">
                    Mica
                  <div className="flex items-center">
                    <Link
                      href="https://x.com/mica89247664xyz"
                      target="_blank"
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                      </svg>
                      @mica89247664xyz
                    </Link>
                  </div>
                  </li>
                  <li className="text-zinc-300">
                    ざわちん
                    <div className="flex items-center">
                    <Link
                      href="https://x.com/zawachine"
                      target="_blank"
                      className="flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                      </svg>
                      @zawachine
                    </Link>
                  </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
