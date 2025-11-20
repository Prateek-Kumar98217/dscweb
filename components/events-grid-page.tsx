"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import EventCard from "@/components/event-card"

const events = [
  {
    id: 1,
    title: "Hackathon 2025",
    description: "A 24-hour coding marathon where you can showcase your skills and build innovative solutions.",
    shortDescription: "Code, Create, Compete - 24 hours of pure innovation",
    image: "/hackathon-coding-event.jpg",
    date: "April 15-16, 2025",
    time: "9:00 AM - 9:00 AM (Next Day)",
    location: "BVCOE Campus",
    category: "Competition",
    participants: "500+",
    fullDetails:
      "Join us for India's most exciting student hackathon! This 24-hour event brings together the brightest minds to solve real-world problems. With prizes worth ₹2 lakhs, mentorship from industry experts, and networking opportunities with leading tech companies, this is the event you cannot miss.",
    agenda: [
      "9:00 AM - Registration & Breakfast",
      "10:00 AM - Opening Ceremony",
      "10:30 AM - Hacking Begins",
      "1:00 PM - Lunch",
      "6:00 PM - Mid-point Checkpoint",
      "8:00 PM - Dinner",
      "10:00 AM (Next Day) - Judging Begins",
      "12:00 PM - Results & Closing Ceremony",
    ],
    prizes: ["₹100,000 (1st Prize)", "₹50,000 (2nd Prize)", "₹25,000 (3rd Prize)"],
    sponsors: ["Google", "Microsoft", "Amazon", "IBM"],
  },
  {
    id: 2,
    title: "AI & ML Workshop",
    description: "Learn the fundamentals of Artificial Intelligence and Machine Learning with hands-on projects.",
    shortDescription: "Master AI/ML with hands-on practical experience",
    image: "/ai-machine-learning-workshop.jpg",
    date: "March 20-22, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Lab, Building A",
    category: "Workshop",
    participants: "200+",
    fullDetails:
      "This intensive 3-day workshop covers the fundamentals of AI and Machine Learning. From neural networks to deep learning, you'll gain practical knowledge through hands-on projects and real-world examples. Led by industry experts from top tech companies.",
    agenda: [
      "Day 1: Introduction to AI & ML",
      "Day 2: Deep Dive into Neural Networks",
      "Day 3: Building Your First ML Project",
    ],
    prerequisites: ["Basic Python knowledge", "Laptop with 8GB RAM"],
    speakers: ["Dr. Rajesh Kumar (Google)", "Dr. Priya Sharma (Microsoft)"],
  },
  {
    id: 3,
    title: "Web Development Summit",
    description: "Explore modern web technologies, frameworks, and best practices from industry experts.",
    shortDescription: "Latest web tech trends and best practices",
    image: "/web-development-conference.png",
    date: "May 5-6, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Main Auditorium",
    category: "Conference",
    participants: "1000+",
    fullDetails:
      "Join 1000+ developers for a two-day summit covering the latest in web development. Featuring keynotes from leading tech companies, breakout sessions on React, Vue, Next.js, and Web3 technologies.",
    agenda: [
      "Day 1 Morning: Keynote on Future of Web",
      "Day 1 Afternoon: Breakout Sessions",
      "Day 1 Evening: Networking Reception",
      "Day 2: Advanced Topics & Workshops",
    ],
    speakers: ["Dan Abramov (React Core Team)", "Evan You (Vue Creator)", "Vercel Team"],
  },
  {
    id: 4,
    title: "Bootcamp Series",
    description: "Intensive training sessions covering full-stack development and cloud technologies.",
    shortDescription: "Complete bootcamp for full-stack and cloud skills",
    image: "/programming-bootcamp-training.jpg",
    date: "June 1 - July 31, 2025",
    time: "6:00 PM - 8:00 PM (Weekdays)",
    location: "Online + Offline",
    category: "Bootcamp",
    participants: "300+",
    fullDetails:
      "An intensive 2-month bootcamp designed to take you from beginner to job-ready. Learn full-stack development, cloud technologies, DevOps, and more. Get mentorship from industry professionals and build real projects.",
    modules: [
      "Web Development Fundamentals",
      "Backend Development with Node.js",
      "Frontend with React",
      "Database Design",
      "Cloud Deployment",
      "DevOps Basics",
    ],
    duration: "8 weeks, 20+ hours",
    certification: "DSC BVCOE Bootcamp Certificate",
  },
]

export default function EventsGridPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = ["All", "Workshop", "Competition", "Conference", "Bootcamp"]
  const filteredEvents =
    selectedCategory && selectedCategory !== "All"
      ? events.filter((event) => event.category === selectedCategory)
      : events

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-900/5 to-background">
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
            <p className="text-2xl text-foreground/60">No events found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
