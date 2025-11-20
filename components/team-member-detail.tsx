"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Twitter, ArrowLeft } from "lucide-react"

const teamMembers: Record<number, any> = {
  1: {
    id: 1,
    name: "Rajesh Kumar",
    role: "Lead - Technical",
    image: "/professional-developer-man.jpg",
    bio: "Passionate full-stack developer with 5+ years of experience in building scalable web applications.",
    fullBio:
      "Rajesh Kumar is a visionary technical leader with expertise in modern web technologies and cloud architecture. He leads our technical initiatives and mentors aspiring developers at DSC BVCOE. Outside of DSC, he contributes to open-source projects and speaks at tech conferences.",
    skills: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL"],
    achievements: [
      "Led 10+ hackathons as technical judge",
      "Published 3 research papers on web security",
      "Active contributor to Apache projects",
      "Speaker at 5+ national conferences",
    ],
    experience: "Senior Software Engineer at Tech Startup",
    education: "B.Tech in Computer Science, BVCOE",
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  2: {
    id: 2,
    name: "Priya Singh",
    role: "Lead - Events",
    image: "/professional-developer-woman.png",
    bio: "Creative event organizer with a passion for building engaging community experiences.",
    fullBio:
      "Priya Singh has organized over 50 successful events at DSC BVCOE, bringing together thousands of students passionate about technology. Her innovative approach to event management has made DSC events among the most sought-after in the college.",
    skills: [
      "Event Planning",
      "Community Building",
      "Marketing",
      "Leadership",
      "Public Speaking",
      "Social Media",
      "Logistics",
      "Team Management",
    ],
    achievements: [
      "Organized India's largest student AI hackathon",
      "Managed 500+ attendance events",
      "Increased community engagement by 300%",
      "Featured in 5+ media outlets",
    ],
    experience: "Event Coordinator at Major Tech Company",
    education: "B.Tech in Information Technology, BVCOE",
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  3: {
    id: 3,
    name: "Amit Patel",
    role: "Lead - Community",
    image: "/professional-developer-man.jpg",
    bio: "Dedicated community builder focused on creating inclusive learning environments.",
    fullBio:
      "Amit Patel believes in the power of community to drive innovation and growth. He has built DSC BVCOE's community from the ground up, creating a welcoming space for students of all backgrounds and skill levels.",
    skills: [
      "Community Management",
      "Mentoring",
      "DevOps",
      "Docker",
      "Leadership",
      "Problem Solving",
      "Networking",
      "Training",
    ],
    achievements: [
      "Built community from 50 to 2000+ members",
      "Mentored 100+ junior developers",
      "Established 5 learning circles",
      "Certified Kubernetes Administrator",
    ],
    experience: "DevOps Engineer at Cloud Company",
    education: "B.Tech in Computer Engineering, BVCOE",
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  4: {
    id: 4,
    name: "Neha Sharma",
    role: "Lead - Outreach",
    image: "/professional-developer-woman.png",
    bio: "Strategic thinker with experience in expanding community reach and partnerships.",
    fullBio:
      "Neha Sharma leads strategic partnerships and outreach initiatives for DSC BVCOE. Her efforts have resulted in collaborations with leading tech companies and expanded the club's influence across India.",
    skills: [
      "Strategic Planning",
      "Partnerships",
      "Business Development",
      "Data Analytics",
      "Marketing",
      "Negotiation",
      "Communication",
      "Project Management",
    ],
    achievements: [
      "Secured partnerships with 20+ tech companies",
      "Expanded reach to 50+ colleges",
      "Increased partnerships budget by 400%",
      "Recognized as top community partner",
    ],
    experience: "Business Development Manager at Tech Giant",
    education: "B.Tech in Information Technology, BVCOE",
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  5: {
    id: 5,
    name: "Vikram Desai",
    role: "Lead - Workshops",
    image: "/professional-developer-man.jpg",
    bio: "Expert trainer passionate about transferring knowledge through interactive workshops.",
    fullBio:
      "Vikram Desai has designed and conducted 100+ workshops covering AI/ML, web development, and cloud technologies. His interactive teaching style has helped hundreds of students launch their tech careers.",
    skills: [
      "AI/ML",
      "Workshop Design",
      "Public Speaking",
      "Python",
      "TensorFlow",
      "Mentoring",
      "Curriculum Design",
      "Data Science",
    ],
    achievements: [
      "Conducted 100+ workshops with 5000+ attendees",
      "Developed 10+ course curriculums",
      "Published 15 technical tutorials",
      "Trained 500+ students in AI/ML",
    ],
    experience: "Machine Learning Engineer at AI Company",
    education: "B.Tech in Computer Science, BVCOE",
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  6: {
    id: 6,
    name: "Anjali Verma",
    role: "Lead - Operations",
    image: "/professional-developer-woman.png",
    bio: "Operations specialist ensuring smooth execution of all DSC initiatives.",
    fullBio:
      "Anjali Verma is the backbone of DSC BVCOE's operations, managing finances, scheduling, and logistics with precision and care. Her meticulous planning ensures every DSC event and initiative runs smoothly.",
    skills: [
      "Project Management",
      "Operations",
      "Finance Management",
      "Accounting",
      "Admin",
      "HR Management",
      "Planning",
      "Organization",
    ],
    achievements: [
      "Managed $100k+ annual budget",
      "Implemented 3 cost-saving initiatives",
      "Organized 200+ internal meetings",
      "Maintained 100% event success rate",
    ],
    experience: "Operations Manager at Tech Startup",
    education: "B.Tech in Business Administration, BVCOE",
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
}

export default function TeamMemberDetail({ memberId }: { memberId: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const member = teamMembers[memberId]

  useEffect(() => {
    setIsVisible(true)
  }, [memberId])

  if (!member) {
    return (
      <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Member Not Found</h1>
          <Link href="/team" className="text-cyan-400 hover:text-cyan-300">
            ← Back to Team
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-blue-900/5 to-background">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Team
        </Link>

        {/* Main Content */}
        <div
          className={`card-gradient border border-cyan-500/20 rounded-3xl overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Header with Image */}
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Image */}
            <div className="flex items-start">
              <div className="w-full aspect-square rounded-2xl overflow-hidden border-2 border-cyan-500/30">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-start">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{member.name}</h1>
              <p className="text-2xl text-cyan-400 font-medium mb-4">{member.role}</p>
              <p className="text-lg text-foreground/70 mb-6">{member.bio}</p>

              {/* Meta Info */}
              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-foreground/60 text-sm">Experience</p>
                  <p className="text-foreground font-medium">{member.experience}</p>
                </div>
                <div>
                  <p className="text-foreground/60 text-sm">Education</p>
                  <p className="text-foreground font-medium">{member.education}</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href={member.socialLinks.linkedin}
                  className="p-3 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg text-cyan-400 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={member.socialLinks.github}
                  className="p-3 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg text-cyan-400 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={member.socialLinks.twitter}
                  className="p-3 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg text-cyan-400 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          {/* Full Bio Section */}
          <div className="p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">About</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">{member.fullBio}</p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-3">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Achievements</h2>
              <ul className="space-y-3">
                {member.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground/70">
                    <span className="text-cyan-400 font-bold mt-1">✓</span>
                    <span className="text-lg">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
