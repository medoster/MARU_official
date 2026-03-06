"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "/images/shadow-code-cover.png",
  "/images/jilvain-cover.png",
  "/images/hanagara_KV.jpg",
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length)
        setFading(false)
      }, 800)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background images with crossfade */}
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? (fading ? 0 : 1) : 0 }}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover scale-105"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-10" />

      {/* Content — bottom-left minimal label */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-8 pb-12 flex items-end justify-between">
        <div className="hero-animate hero-animate-delay-1">
          <h1 className="text-5xl md:text-7xl font-bold tracking-[0.2em] text-white leading-none">
            MARU
          </h1>
          <p className="text-xs tracking-[0.3em] text-white/50 uppercase mt-2 hero-animate hero-animate-delay-2">
            Murder Mystery Works
          </p>
        </div>

        {/* Dots */}
        <div className="flex gap-2 hero-animate hero-animate-delay-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? "bg-white w-6" : "bg-white/40 w-1.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
