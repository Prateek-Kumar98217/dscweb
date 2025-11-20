import Navbar from "@/components/navbar"
import TeamGridPage from "@/components/team-grid-page"
import Footer from "@/components/footer"
import GroupGallery from "@/components/group-gallery"
import GalleryGrid from "@/components/gallery-grid"

export const metadata = {
  title: "Team | DSC BVCOE",
  description: "Meet the talented team behind Developer Student Club BVCOE",
}

export default function TeamPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <GroupGallery
        title="Full Society"
        description="Meet the entire Developer Student Club BVCOE community! Together, we're building a vibrant ecosystem of innovation, learning, and collaboration. Every member contributes their unique skills and passion to make DSC BVCOE a thriving hub for technology enthusiasts."
        image="/group_photo_full_adjusted.jpg"
        isFullSociety={true}
      />

      <GroupGallery
        title="Core Leadership Team"
        description="Our dedicated core team drives the vision of DSC BVCOE forward. These are the pillars of our organization who lead workshops, organize events, mentor members, and ensure that our community remains vibrant and innovative. Their commitment and expertise shape the future of our club."
        image="/group_photo_core_adjusted.jpg"
        isFullSociety={false}
      />

      <div className="pt-10">
        <TeamGridPage />
      </div>
      <Footer />
    </main>
  )
}
