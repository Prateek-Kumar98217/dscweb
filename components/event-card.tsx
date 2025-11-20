"use client"

import Link from "next/link"
import { Calendar, MapPin, Users } from "lucide-react"

interface EventCardProps {
  event: any
  index: number
  isVisible: boolean
}

export default function EventCard({ event, index, isVisible }: EventCardProps) {
  return (
    <Link href={`/events/${event.id}`}>
      <div
        className={`card-gradient border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer group h-full ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{
          transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
        }}
      >
        {/* Image Section */}
        <div className="aspect-video overflow-hidden bg-blue-900/30 relative">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/80 rounded-full text-sm font-semibold text-foreground">
            {event.category}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {event.title}
          </h3>
          <p className="text-foreground/70 text-sm mb-4 italic">{event.shortDescription}</p>

          {/* Meta Info */}
          <div className="space-y-2 mb-4 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-cyan-400" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-cyan-400" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-cyan-400" />
              <span>{event.participants} Participants</span>
            </div>
          </div>

          {/* View Details */}
          <div className="text-sm text-cyan-400 group-hover:text-cyan-300 flex items-center gap-2">View Details →</div>
        </div>
      </div>
    </Link>
  )
}
