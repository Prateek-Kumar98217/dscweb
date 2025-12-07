"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import EventCard from "@/components/event-card"
import { allEvents } from "@/data/events_data"

export default function EventsGridPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = ["All", "Completed", "Upcoming"]
  const filteredEvents =
    selectedCategory && selectedCategory !== "All"
      ? allEvents.filter((event) => event.category === selectedCategory)
      : allEvents

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-blue-900/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Our <span className="glow-text">Events</span>
          </h1>
          <p
            className={`text-xl text-foreground/60 mb-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Discover amazing opportunities to learn, network, and grow
          </p>
          <Link href="/" className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </Link>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === "All" ? null : category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                (category === "All" && !selectedCategory) || selectedCategory === category
                  ? "bg-cyan-500/40 text-cyan-300 border border-cyan-400"
                  : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-foreground/60">{`No ${selectedCategory ?? "All"} events found`}</p>
          </div>
        )}
      </div>
    </section>
  )
}
