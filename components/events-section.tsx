"use client"

import { useEffect, useState } from "react"

const events = [
  {
    title: "Hackathon 2025",
    description: "A 24-hour coding marathon where you can showcase your skills and build innovative solutions.",
    image: "/hackathon-coding-event.jpg",
  },
  {
    title: "AI & ML Workshop",
    description: "Learn the fundamentals of Artificial Intelligence and Machine Learning with hands-on projects.",
    image: "/ai-machine-learning-workshop.jpg",
  },
  {
    title: "Web Development Summit",
    description: "Explore modern web technologies, frameworks, and best practices from industry experts.",
    image: "/web-development-conference.png",
  },
  {
    title: "Bootcamp Series",
    description: "Intensive training sessions covering full-stack development and cloud technologies.",
    image: "/programming-bootcamp-training.jpg",
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
            Upcoming <span className="glow-text">Events</span>
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
    </section>
  )
}
