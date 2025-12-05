import Navbar from "@/components/navbar"
import TeamGridPage from "@/components/team-grid-page"
import Footer from "@/components/footer"
import GroupGallery from "@/components/group-gallery"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata = {
  title: "Team | DSC BVCOE",
  description: "Meet the talented team behind Developer Student Club BVCOE",
}

export default function TeamPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <GroupGallery
        title="Our Mentor"
        description= "Our mentor are experienced professionals and thought leaders who guide and empower our members to unlock their full potential. With their invaluable expertise and mentorship, they help shape the next generation of innovators, offering insights, advice, and real-world perspectives. Together, we foster an environment where learning, growth, and collaboration thrive, allowing students to navigate the exciting world of technology with confidence and creativity."
        image="placeholder-logo.png"
        isFullSociety={false}
      />
      <div className="pt-10">
        <TeamGridPage />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
