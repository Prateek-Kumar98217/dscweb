"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Calendar, MapPin, Users, Trophy, Clock, ArrowLeft, Share2 } from "lucide-react"

const eventsData: Record<number, any> = {
  1: {
    id: 1,
    title: "Hackathon 2025",
    description: "A 24-hour coding marathon where you can showcase your skills and build innovative solutions.",
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
    registrationUrl: "#",
  },
  2: {
    id: 2,
    title: "AI & ML Workshop",
    description: "Learn the fundamentals of Artificial Intelligence and Machine Learning with hands-on projects.",
    image: "/ai-machine-learning-workshop.jpg",
    date: "March 20-22, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Lab, Building A",
    category: "Workshop",
    participants: "200+",
    fullDetails:
      "This intensive 3-day workshop covers the fundamentals of AI and Machine Learning. From neural networks to deep learning, you'll gain practical knowledge through hands-on projects and real-world examples. Led by industry experts from top tech companies.",
    agenda: [
      "Day 1 (2:00 PM - 5:00 PM): Introduction to AI & ML",
      "Day 2 (2:00 PM - 5:00 PM): Deep Dive into Neural Networks",
      "Day 3 (2:00 PM - 5:00 PM): Building Your First ML Project",
    ],
    prerequisites: ["Basic Python knowledge", "Laptop with 8GB RAM", "Google Colab Account"],
    speakers: ["Dr. Rajesh Kumar (Google)", "Dr. Priya Sharma (Microsoft)"],
    capacity: "200",
    registrationUrl: "#",
  },
  3: {
    id: 3,
    title: "Web Development Summit",
    description: "Explore modern web technologies, frameworks, and best practices from industry experts.",
    image: "/web-development-conference.png",
    date: "May 5-6, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Main Auditorium",
    category: "Conference",
    participants: "1000+",
    fullDetails:
      "Join 1000+ developers for a two-day summit covering the latest in web development. Featuring keynotes from leading tech companies, breakout sessions on React, Vue, Next.js, and Web3 technologies. Network with industry professionals and learn from the best.",
    agenda: [
      "Day 1 (10:00 AM): Keynote on Future of Web",
      "Day 1 (11:00 AM - 1:00 PM): Breakout Sessions",
      "Day 1 (2:00 PM - 5:00 PM): More Sessions & Networking",
      "Day 2 (10:00 AM - 5:00 PM): Advanced Topics & Workshops",
    ],
    speakers: ["Dan Abramov (React Core Team)", "Evan You (Vue Creator)", "Vercel Team Representatives"],
    capacity: "2000",
    registrationUrl: "#",
  },
  4: {
    id: 4,
    title: "Bootcamp Series",
    description: "Intensive training sessions covering full-stack development and cloud technologies.",
    image: "/programming-bootcamp-training.jpg",
    date: "June 1 - July 31, 2025",
    time: "6:00 PM - 8:00 PM (Weekdays)",
    location: "Online + Offline",
    category: "Bootcamp",
    participants: "300+",
    fullDetails:
      "An intensive 2-month bootcamp designed to take you from beginner to job-ready. Learn full-stack development, cloud technologies, DevOps, and more. Get mentorship from industry professionals and build 5+ real projects.",
    modules: [
      "Module 1: Web Development Fundamentals (Week 1-2)",
      "Module 2: Backend Development with Node.js (Week 3-4)",
      "Module 3: Frontend with React (Week 5-6)",
      "Module 4: Database Design & Optimization (Week 7-8)",
      "Module 5: Cloud Deployment with AWS (Week 9-10)",
      "Module 6: DevOps Basics with Docker & Kubernetes (Week 11-12)",
    ],
    duration: "8 weeks, 20+ hours",
    certification: "DSC BVCOE Bootcamp Certificate + LinkedIn Badge",
    capacity: "300",
    registrationUrl: "#",
  },
}

export default function EventDetail({ eventId }: { eventId: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const event = eventsData[eventId]

  useEffect(() => {
    setIsVisible(true)
  }, [eventId])

  if (!event) {
    return (
      <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <Link href="/events" className="text-cyan-400 hover:text-cyan-300">
            ← Back to Events
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-blue-900/5 to-background">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          href="/events"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Events
        </Link>

        {/* Main Content */}
        <div
          className={`card-gradient border border-cyan-500/20 rounded-3xl overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Hero Image */}
          <div className="aspect-video overflow-hidden bg-blue-900/30 relative">
            <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
            <div className="absolute top-4 left-4 px-4 py-2 bg-cyan-500/80 rounded-full text-sm font-semibold text-foreground">
              {event.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Title & Description */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">{event.title}</h1>
              <p className="text-xl text-foreground/70 leading-relaxed">{event.description}</p>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 flex items-center gap-4">
                <Calendar className="text-cyan-400" size={24} />
                <div>
                  <p className="text-foreground/60 text-sm">Date</p>
                  <p className="text-foreground font-semibold">{event.date}</p>
                </div>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 flex items-center gap-4">
                <Clock className="text-cyan-400" size={24} />
                <div>
                  <p className="text-foreground/60 text-sm">Time</p>
                  <p className="text-foreground font-semibold">{event.time}</p>
                </div>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 flex items-center gap-4">
                <MapPin className="text-cyan-400" size={24} />
                <div>
                  <p className="text-foreground/60 text-sm">Location</p>
                  <p className="text-foreground font-semibold">{event.location}</p>
                </div>
              </div>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 flex items-center gap-4">
                <Users className="text-cyan-400" size={24} />
                <div>
                  <p className="text-foreground/60 text-sm">Expected Participants</p>
                  <p className="text-foreground font-semibold">{event.participants}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent mb-8" />

            {/* Full Details */}
            <div className="space-y-8 mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">About This Event</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">{event.fullDetails}</p>
              </div>

              {/* Agenda */}
              {event.agenda && (
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Event Agenda</h2>
                  <div className="space-y-3">
                    {event.agenda.map((item: string, idx: number) => (
                      <div key={idx} className="flex gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-cyan-500/30 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-semibold">
                          {idx + 1}
                        </div>
                        <p className="text-foreground/80 mt-1">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Prizes */}
              {event.prizes && (
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Trophy className="text-cyan-400" />
                    Prizes
                  </h2>
                  <div className="space-y-2">
                    {event.prizes.map((prize: string, idx: number) => (
                      <p key={idx} className="text-lg text-foreground/80">
                        {prize}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Prerequisites */}
              {event.prerequisites && (
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Prerequisites</h2>
                  <ul className="space-y-2">
                    {event.prerequisites.map((req: string, idx: number) => (
                      <li key={idx} className="flex gap-3 text-foreground/80">
                        <span className="text-cyan-400 font-bold">✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Speakers */}
              {event.speakers && (
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Featured Speakers</h2>
                  <ul className="space-y-2">
                    {event.speakers.map((speaker: string, idx: number) => (
                      <li key={idx} className="text-lg text-foreground/80">
                        • {speaker}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sponsors */}
              {event.sponsors && (
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">Sponsors</h2>
                  <div className="flex flex-wrap gap-4">
                    {event.sponsors.map((sponsor: string) => (
                      <div
                        key={sponsor}
                        className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-lg text-foreground font-medium"
                      >
                        {sponsor}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent mb-8" />

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <a
                href={event.registrationUrl}
                className="px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg font-bold text-background transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </a>
              <button className="px-8 py-3 bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-500/50 rounded-lg font-bold text-foreground transition-all duration-300 flex items-center gap-2">
                <Share2 size={20} />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
