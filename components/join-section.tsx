"use client"

import { useEffect, useState } from "react"

export default function JoinSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("join")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section
      id="join"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-blue-900/20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Ready to <span className="glow-text">Join Us?</span>
        </h2>
        <p
          className={`text-lg text-foreground/70 mb-8 leading-relaxed transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Become part of a thriving community of developers, innovators, and tech enthusiasts. Connect with mentors,
          collaborate on projects, and unlock your full potential.
        </p>
        <button
          className={`px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-background rounded-full font-bold text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          Join DSC BVCOE Today
        </button>
      </div>
    </section>
  )
}
