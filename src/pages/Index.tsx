import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StartSection from "@/components/StartSection";
import FeaturesChess from "@/components/FeaturesChess";
import FeaturesGrid from "@/components/FeaturesGrid";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import CtaFooter from "@/components/CtaFooter";

const Index = () => (
  <div className="bg-black min-h-screen">
    <Navbar />
    <HeroSection />
    <StartSection />
    <FeaturesChess />
    <FeaturesGrid />
    <StatsSection />
    <Testimonials />
    <CtaFooter />
  </div>
);

export default Index;
