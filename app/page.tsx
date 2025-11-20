import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import AboutSection from "@/components/about-section"
import TeamSection from "@/components/team-section"
import EventsSection from "@/components/events-section"
import JoinSection from "@/components/join-section"
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
      <div id="features">
        <FeaturesSection />
      </div>
      <AboutSection />
      <MentorSection />
      <TeamSection />
      <EventsSection />
      <div id="join">
        <JoinSection />
      </div>
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
