import Navbar from "@/components/navbar"
import EventsGridPage from "@/components/events-grid-page"
import Footer from "@/components/footer"

export const metadata = {
  title: "Events | DSC BVCOE",
  description: "Discover upcoming and past events from Developer Student Club BVCOE",
}

export default function EventsPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="pt-20">
        <EventsGridPage />
      </div>
      <Footer />
    </main>
  )
}
