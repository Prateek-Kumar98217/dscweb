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
        description="Dr. Alka Leekha is an experienced academic with over 21 years of teaching and a strong background in the tech industry. She holds a Ph.D. in Computer and Information Sciences and specializes in Data Security, Cloud Computing, Big Data Analytics, and Computer Vision. Dr. Leekha has taught a variety of courses including Big Data Analytics, Cryptography, and Software Engineering. As a mentor, she brings a wealth of knowledge to help students navigate the world of technology and innovation, offering guidance and real-world insights that empower students to excel and unlock their full potential."
        image="/team/alka.webp"
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
