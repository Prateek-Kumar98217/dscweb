"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import TeamMemberCard from "@/components/team-member-card"

const teamMembers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Lead - Technical",
    image: "/Django.jpg",
    bio: "Passionate full-stack developer with expertise in web technologies and system design.",
    skills: ["React", "Node.js", "Python", "Cloud Architecture"],
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Lead - Events",
    image: "/anisha.jpg",
    bio: "Creative event organizer with a knack for building engaging community experiences.",
    skills: ["Event Planning", "Community Building", "Communication", "Leadership"],
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Lead - Community",
    image: "/jatin_placement.jpg",
    bio: "Dedicated community builder focused on creating inclusive learning environments.",
    skills: ["Mentoring", "Community Management", "DevOps", "Docker"],
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Neha Sharma",
    role: "Lead - Outreach",
    image: "/yash.webp",
    bio: "Strategic thinker with experience in expanding community reach and partnerships.",
    skills: ["Strategic Planning", "Partnerships", "Marketing", "Data Analytics"],
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    id: 5,
    name: "Vikram Desai",
    role: "Lead - Workshops",
    image: "/dhruv.webp",
    bio: "Expert trainer passionate about transferring knowledge through interactive workshops.",
    skills: ["AI/ML", "Workshop Design", "Public Speaking", "Mentoring"],
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    id: 6,
    name: "Anjali Verma",
    role: "Lead - Operations",
    image: "/anshul.jpg",
    bio: "Operations specialist ensuring smooth execution of all DSC initiatives.",
    skills: ["Project Management", "Operations", "Finance", "Admin"],
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
]

export default function TeamGridPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-900/5 to-background">
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

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
