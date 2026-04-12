import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StartSection from "@/components/StartSection";
import FeaturesChess from "@/components/FeaturesChess";
import FeaturesGrid from "@/components/FeaturesGrid";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import CtaFooter from "@/components/CtaFooter";
import ShaderBackground from "@/components/ShaderBackground";

const Index = () => (
  <div className="bg-[#050505] min-h-screen relative overflow-hidden font-body text-foreground selection:bg-white/20">
    <ShaderBackground />
    <Navbar />
    
    <main className="relative z-10 flex flex-col gap-32 md:gap-48 pb-24">
      <HeroSection />
      <StartSection />
      <FeaturesChess />
      <FeaturesGrid />
      <StatsSection />
      <Testimonials />
    </main>
    
    <CtaFooter />
  </div>
);

export default Index;
