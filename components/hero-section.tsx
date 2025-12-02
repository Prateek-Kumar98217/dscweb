"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function HeroSection() {
  const [animateText, setAnimateText] = useState(false)

  useEffect(() => {
    setAnimateText(true)
  }, [])

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="glow-text">Welcome to</span>
            <br />
            Developer Student Club
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 ${animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            A technical community for learning, building, and creating impactful tech solutions.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-500 flex gap-4 justify-center flex-wrap ${animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link href="/about">
            <button className="px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-background rounded-full font-semibold hover:brightness-80 items-center gap-2 flex group">
              Learn More
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/events">
            <button className="px-8 py-3 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2 group">
              Explore Our Events
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
