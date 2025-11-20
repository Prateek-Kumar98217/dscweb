"use client"

import { useEffect, useState } from "react"

export default function AboutSection() {
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

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-8 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          About <span className="glow-text">DSC BVCOE</span>
        </h2>

        <div
          className={`bg-card-gradient border border-cyan-500/20 rounded-2xl p-8 md:p-12 glow-border transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Developer Student Club at Bharati Vidyapeeth College of Engineering is a student-led community dedicated to
            fostering innovation, technical excellence, and collaborative learning. We believe in the power of
            technology to transform ideas into reality.
          </p>

          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            Our mission is to create a vibrant ecosystem where students can explore emerging technologies, develop
            practical skills, and build meaningful connections with like-minded innovators and industry professionals.
          </p>

          <p className="text-lg text-foreground/80 leading-relaxed">
            Through workshops, hackathons, mentorship programs, and collaborative projects, we empower our members to
            push boundaries, embrace challenges, and contribute to shaping the future of technology.
          </p>
        </div>
      </div>
    </section>
  )
}
