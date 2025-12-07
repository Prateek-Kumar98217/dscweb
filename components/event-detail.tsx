"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Calendar, MapPin, Users, Trophy, Clock, ArrowLeft, Medal } from "lucide-react"
import  { eventsData } from "@/data/events_data"
import { CarouselBase } from "./carousel"

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
            <CarouselBase images={event.images} />
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
                  <p className="text-foreground/60 text-sm">Participants</p>
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

              {/* Winners */}
              {event.winners && (
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Trophy className="text-cyan-400" />
                    Winners
                  </h2>
                  <div className="space-y-2">
                    {event.winners.map((winner: string, idx: number) => (
                      <p key={idx} className="text-lg text-foreground/80 flex gap-2 items-center">
                        <Medal />
                        {winner}
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
            {event.status !== "Completed"? (
              <div className="flex gap-4">
              <a
                href={event.registrationUrl && event.status !== "Completed"}
                className="px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 rounded-lg font-bold text-background transition-all duration-300 transform hover:scale-105"
              >
                Register Now
              </a>
            </div>
            ) : (
              <div className="text-center py-4 px-6 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 font-semibold">This event has been completed. Stay tuned for upcoming events!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
