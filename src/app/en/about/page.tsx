export const metadata = {
  title: 'About MARU'
}

export default function EnglishAbout() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <section className="py-16 bg-zinc-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Profile</h1>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Learn more about MARU, the creator of murder mystery scenarios.
          </p>
        </div>
      </section>
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-zinc-800 p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
              <div className="w-32 h-32 relative overflow-hidden rounded-full bg-white">
                <img src="/images/maru-icon.png" alt="MARU" className="object-contain" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2 text-white">MARU</h2>
                <p className="text-gray-300 mb-4">Murder mystery writer</p>
                <div className="flex items-center">
                  <a
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
                  </a>
                </div>
              </div>
            </div>
            <div className="text-zinc-300 space-y-4">
              <p>
                MARU publishes works on the UZU app, focusing on immersive worlds and unique gameplay.
              </p>
              <p>
                Known for titles like "SHADOW CODE" and "JILVAIN".
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
