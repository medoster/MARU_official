"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useEffect } from "react"

export interface Slide {
  src: string
  alt: string
}

export const defaultSlides: Slide[] = [
  { src: "/images/shadow-code-cover.png", alt: "SHADOW CODE" },
  { src: "/images/jilvain-cover.png", alt: "JILVAIN" },
  { src: "/images/hanagara_KV.jpg", alt: "花枯らの檻" },
]

interface HeroCarouselProps {
  slides?: Slide[]
  className?: string
}

export default function HeroCarousel({
  slides = defaultSlides,
  className = "h-[70vh]",
}: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (!emblaApi) return
    const id = setInterval(() => {
      emblaApi.scrollNext()
    }, 4000)
    return () => clearInterval(id)
  }, [emblaApi])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div className={`relative flex-[0_0_100%] ${className}`} key={index}>
            <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority={index===0} />
          </div>
        ))}
      </div>
    </div>
  )
}
