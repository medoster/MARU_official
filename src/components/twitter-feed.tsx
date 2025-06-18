"use client"

import Script from "next/script"

interface TwitterFeedProps {
  hashtag: string
}

export default function TwitterFeed({ hashtag }: TwitterFeedProps) {
  const url = `https://twitter.com/hashtag/${encodeURIComponent(hashtag)}?src=hash`
  return (
    <div className="mt-12">
      <a
        className="twitter-timeline"
        data-theme="dark"
        href={url}
        aria-label={`#${hashtag} Tweets`}
      ></a>
      <Script src="https://platform.twitter.com/widgets.js" />
    </div>
  )
}
