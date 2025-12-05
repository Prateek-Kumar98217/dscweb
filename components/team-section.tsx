"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("team")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section
      id="team"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-blue-900/5 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Meet Our <span className="glow-text">Team</span>
          </h2>
          <p
            className={`text-lg text-foreground/60 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The passionate minds behind DSC BVCOE
          </p>
        </div>
        <div className="relative group">
                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-blue-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl overflow-hidden p-1">
                      <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                        <Image
                          src="group_photo_full_adjusted.jpg"
                          alt="Group Photo of the Core Team"
                          fill
                          className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                          priority
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent"></div>
                      </div>
                    </div>
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-2 border-cyan-400 rounded-tl-lg"></div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 border-2 border-cyan-400 rounded-tr-lg"></div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 border-2 border-cyan-400 rounded-bl-lg"></div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-2 border-cyan-400 rounded-br-lg"></div>
                  </div>
      </div>
      <div className="max-w-6xl mx-auto flex justify-center mt-12">
        <div className="text-center mb-16">
          <Link href="/team">
            <button className="px-8 py-3 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2 group">
              Meet the Team
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
    )
}
