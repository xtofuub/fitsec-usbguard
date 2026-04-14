import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StartSection from "@/components/StartSection";
import FeaturesChess from "@/components/FeaturesChess";
import SolutionSection from "@/components/SolutionSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import CtaFooter from "@/components/CtaFooter";
import ShaderBackground from "@/components/ShaderBackground";
import { motion } from "motion/react";

const Index = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.45 }}
    className="bg-transparent min-h-screen relative overflow-hidden font-body text-foreground selection:bg-white/20"
  >
    <ShaderBackground />
    <Navbar />

    <main className="relative z-10 flex flex-col gap-32 md:gap-48 pb-24">
      <HeroSection />
      <StartSection />
      <FeaturesChess />
      <SolutionSection />
      <FeaturesGrid />
      <StatsSection />
      <Testimonials />
    </main>

    <CtaFooter />
  </motion.div>
);

export default Index;
