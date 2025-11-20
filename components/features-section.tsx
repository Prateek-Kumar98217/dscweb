"use client"

import { useEffect, useState } from "react"
import { Code2, Users, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Hands-On Coding",
    description:
      "Learn by doing with real-world projects, coding challenges, and mentorship from experienced developers.",
  },
  {
    icon: Users,
    title: "Community Learning",
    description:
      "Collaborate with peers, share knowledge, and grow together in a supportive and inclusive environment.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Ideas",
    description: "Explore cutting-edge technologies and turn your ideas into reality with our innovation initiatives.",
  },
]

export default function FeaturesSection() {
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

    const section = document.getElementById("features")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-900/5 to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Why Join <span className="glow-text">DSC?</span>
          </h2>
          <p
            className={`text-lg text-foreground/60 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Discover what makes our community special
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`card-gradient border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105 transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="mb-4 p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 w-fit rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all">
                  <Icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
