import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import HlsVideo from "@/components/HlsVideo";

const HeroSection = () => (
  <section id="home" className="relative overflow-visible flex flex-col items-center justify-center min-h-[100dvh] pt-24 pb-40 px-6">
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      style={{
        maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
      }}
    >
      <HlsVideo
        src="/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-100 scale-110 brightness-125 contrast-110 saturate-125"
        style={{ objectPosition: "center 25%" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.02),rgba(0,0,0,0.34)_72%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#030303]" />
    </div>

    <div className="relative z-10 flex flex-col items-center text-center mx-auto max-w-5xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="liquid-glass rounded-full p-1 flex items-center gap-3 mb-10 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
      >
        <span className="bg-white text-black rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
          New
        </span>
        <span className="text-white/80 text-sm pr-4">
          USBGuard - USB security taken to a new level.
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, filter: "blur(20px)", y: 40 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
        className="text-6xl md:text-8xl lg:text-[7rem] font-heading text-white leading-[0.85] tracking-[-0.04em] max-w-4xl"
      >
        Protect yourself from <span className="text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">USB file transfer</span> dangers.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
        className="mt-10 text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl"
      >
        A compact, portable device. Antivirus, BadUSB prevention, and USB Killer protection. Take it wherever it's needed.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="mt-12 flex flex-col sm:flex-row items-center gap-6"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
          className="group relative liquid-glass-strong rounded-full pl-6 pr-2 py-2 text-base font-medium text-white flex items-center gap-4 transition-all"
        >
          <span>Contact Us</span>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
            <ArrowUpRight size={18} className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform duration-500" />
          </div>
        </motion.a>
        <a href="#risks" className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2">
          Read more
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
