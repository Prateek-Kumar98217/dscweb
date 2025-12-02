"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

const events = [
  {
    title: "Hackathon 2025",
    description: "A 24-hour coding marathon where you can showcase your skills and build innovative solutions.",
    image: "/placeholder.jpg",
  },
  {
    title: "AI & ML Workshop",
    description: "Learn the fundamentals of Artificial Intelligence and Machine Learning with hands-on projects.",
    image: "/placeholder.jpg",
  },
]

export default function EventsSection() {
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

    const section = document.getElementById("events")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="events" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our Recent <span className="glow-text">Events</span>
          </h2>
          <p
            className={`text-lg text-foreground/60 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Be part of something extraordinary
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`card-gradient border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="aspect-video overflow-hidden bg-blue-900/30 relative">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">{event.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex justify-center mt-12">
        <div className="text-center mb-16">
          <Link href="/events">
            <button className="px-8 py-3 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-2 group">
              Learn More
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
