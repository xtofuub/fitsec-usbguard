import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const HeroSection = () => (
  <section id="koti" className="relative overflow-visible flex flex-col items-center justify-center min-h-[100dvh] pt-24 pb-40 px-6">
    <div className="relative z-10 flex flex-col items-center text-center mx-auto max-w-5xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        className="liquid-glass rounded-full p-1 flex items-center gap-3 mb-10 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
      >
        <span className="bg-white text-black rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
          Uusi
        </span>
        <span className="text-white/80 text-sm pr-4">
          USBGuard – USB-tietoturva uudelle tasolle.
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, filter: "blur(20px)", y: 40 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
        className="text-6xl md:text-8xl lg:text-[7rem] font-heading text-white leading-[0.85] tracking-[-0.04em] max-w-4xl"
      >
        Suojaudu <span className="text-white/40 italic">USB-tiedoston&shy;siirron</span> vaaroilta.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
        className="mt-10 text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl"
      >
        Kompakti, mukana pidettävä laite. Antivirus, BadUSB-esto ja USB Killer -suojaus. Vie sinne, missä sitä tarvitsee.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="mt-12 flex flex-col sm:flex-row items-center gap-6"
      >
        <motion.a
          href="#yhteystiedot"
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
          className="group relative liquid-glass-strong rounded-full pl-6 pr-2 py-2 text-base font-medium text-white flex items-center gap-4 transition-all"
        >
          <span>Ota yhteyttä</span>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
            <ArrowUpRight size={18} className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform duration-500" />
          </div>
        </motion.a>
        <a href="#riskit" className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2">
          Lue lisää ↓
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
