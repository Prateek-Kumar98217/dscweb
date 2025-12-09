"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import TeamMemberCard from "@/components/team-member-card"
import { coreData } from "@/data/core_data"
import { headsData } from "@/data/heads_data"

export default function TeamGridPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-6 bg-linear-to-b from-background via-blue-900/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Our <span className="glow-text">Leadership Team</span>
          </h1>
          <p
            className={`text-xl text-foreground/60 mb-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Meet the visionary leaders driving DSC BVCOE forward
          </p>
          <Link href="/" className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {coreData.map((member, index) => (
            <div className="w-full max-w-[300px]" key={member.id}>
              <TeamMemberCard
                member={member}
                index={index}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-blue-900/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Our <span className="glow-text">Team Heads</span>
          </h1>
          <p
            className={`text-xl text-foreground/60 mb-8 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            The minds behind our operational excellence
          </p>
          <Link href="/" className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {headsData.map((member, index) => (
            <div className="w-full max-w-[300px]" key={member.id}>
              <TeamMemberCard
                member={member}
                index={index}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
