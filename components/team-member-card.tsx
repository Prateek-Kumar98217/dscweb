import { Linkedin } from "lucide-react"
import Link from "next/link"

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  bio: string
  skills?: string[] 
  socialLink: string
}

interface TeamMemberCardProps {
  member: TeamMember
  index: number
  isVisible: boolean
}

export default function TeamMemberCard({ member, index, isVisible }: TeamMemberCardProps) {
  return (
      <div
        className={`card-gradient border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer group h-full origin-center will-change-transform  ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{
          transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
        }}
      >
        {/* Image Section */}
        <div className="aspect-square overflow-hidden bg-blue-900/30 relative">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-cyan-400 transition-colors">
            {member.name}
          </h3>
          <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
          <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{member.bio}</p>
           <Link href={member.socialLink} >
            <div className="ext-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-2 w-max mx-auto hover:bg-cyan-500/30 transition-colors">
            <Linkedin />
            CONNECT
          </div>
          </Link>
        </div>
      </div>
  )
}
