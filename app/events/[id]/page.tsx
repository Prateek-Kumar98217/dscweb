import Navbar from "@/components/navbar"
import EventDetail from "@/components/event-detail"
import Footer from "@/components/footer"

export const metadata = {
  title: "Event Details | DSC BVCOE",
  description: "View detailed information about our events",
}

export default async function EventPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const eventId = Number(id);
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="pt-20">
        <EventDetail eventId={eventId} />
      </div>
      <Footer />
    </main>
  )
}
