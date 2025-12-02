"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Bhavishya Ratna",
    role: "President",
    image: "/Django.jpg",
  },
  {
    name: "Anisha Garg",
    role: "Vice President",
    image: "/anisha.jpg",
  },
  {
    name: "Anshul Gupta",
    role: "Event Management Head",
    image: "/anshul.jpg",
  },
  {
    name: "Jatin Prabhakar",
    role: "Techinical Lead",
    image: "/jatin_placement.jpg",
  },
  {
    name: "Dhruv Kashyap",
    role: "Creative Lead",
    image: "/dhruv.webp",
  },
  {
    name: "Yash Nagpal",
    role: "Outreach Lead",
    image: "/yash.webp",
  },
]

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`card-gradient border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="aspect-square overflow-hidden bg-blue-900/30">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
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
