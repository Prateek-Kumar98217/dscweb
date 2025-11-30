import Navbar from "@/components/navbar";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import AnimatedBackground from "@/components/animated-background";
import JoinSection from "@/components/join-section";
import FeaturesSection from "@/components/features-section";

export default function AboutPage() {
    return (
        <main className="overflow-hidden">
            <AnimatedBackground />
            <Navbar />
            <div className="pt-20">
                <AboutSection />
            </div>
            <FeaturesSection />
            <JoinSection />
            <Footer />
            <ScrollToTop />
        </main>
    );
}