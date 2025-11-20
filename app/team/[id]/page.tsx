import Navbar from "@/components/navbar"
import TeamMemberDetail from "@/components/team-member-detail"
import Footer from "@/components/footer"

export const metadata = {
  title: "Team Member | DSC BVCOE",
  description: "View detailed information about our team member",
}

export default async function TeamMemberPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const memberId = Number(id);
  console.log("TeamMemberPage received memberId:", memberId);
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="pt-20">
        <TeamMemberDetail memberId={memberId} />
      </div>
      <Footer />
    </main>
  )
}
