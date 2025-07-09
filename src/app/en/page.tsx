export const metadata = {
  title: "MARU - Murder Mystery Writer",
  description: "Official website of MARU, a Japanese murder mystery (madamis) writer.",
  keywords: [
    "murder mystery",
    "murder mystery app",
    "UZU",
    "MARU",
  ]
}

import PageHero from "@/components/PageHero"

export default function EnglishHome() {
  return (
    <div className="pt-16 min-h-screen bg-black">
      <PageHero title="Welcome" subtitle="This is the official website of MARU, a Japanese murder mystery writer." />
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4 max-w-3xl text-zinc-300">
          <p className="mb-4">
            MARU creates unique scenarios for the UZU app. Our motto is to excite players with fresh ideas even if they are tired of ordinary mysteries.
          </p>
          <p className="mb-4">
            The latest work, <strong>Hanagara no Ori</strong>, will be released soon.
          </p>
          <p>
            For inquiries in English, please use the contact form.
          </p>
        </div>
      </section>
    </div>
  )
}
