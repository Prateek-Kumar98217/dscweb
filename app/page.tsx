import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TeamSection from "@/components/team-section"
import EventsSection from "@/components/events-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import AnimatedBackground from "@/components/animated-background"
import MentorSection from "@/components/mentor-section"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <EventsSection />
      <MentorSection />
      <TeamSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
