import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";

const HeroSection = () => (
  <section id="koti" className="relative overflow-visible" style={{ height: 1000 }}>
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute left-0 w-full h-auto object-contain z-0"
      style={{ top: "20%" }}
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
    />
    <div className="absolute inset-0 bg-black/5 z-0" />
    <div
      className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none"
      style={{ height: 300, background: "linear-gradient(to bottom, transparent, black)" }}
    />

    <div className="relative z-10 flex flex-col items-center text-center mx-auto max-w-4xl" style={{ paddingTop: 150 }}>
      <div className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8">
        <span className="bg-foreground text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
          Uusi
        </span>
        <span className="text-foreground text-xs font-body pr-3">
          USBGuard – USB-tietoturva uudelle tasolle.
        </span>
      </div>

      <BlurText
        text="Suojaudu USB-tiedostonsiirron vaaroilta"
        className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] max-w-2xl tracking-[-4px]"
        delay={100}
      />

      <motion.p
        initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-8 text-sm md:text-base text-foreground font-body font-light leading-tight max-w-md"
      >
        Kompakti, mukana pidettävä laite. Antivirus, BadUSB-esto ja USB Killer -suojaus. Vie sinne, missä sitä tarvitsee.
      </motion.p>

      <motion.div
        initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mt-8 flex items-center gap-4"
      >
        <a
          href="#yhteystiedot"
          className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-body font-medium text-foreground flex items-center gap-2"
        >
          Ota yhteyttä <ArrowUpRight size={16} />
        </a>
        <a href="#riskit" className="text-sm font-body font-medium text-foreground flex items-center gap-2">
          Lue lisää ↓
        </a>
      </motion.div>

      <div className="mt-auto pb-8 pt-16 flex flex-col items-center gap-4">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-body text-foreground/70">
          Suomessa suunniteltu kokonaispalvelu
        </div>
        <div className="flex items-center gap-12 md:gap-16">
          {["Antivirus", "BadUSB-esto", "USB Killer", "Hallinta", "Bitlocker"].map((t) => (
            <span key={t} className="text-2xl md:text-3xl font-heading italic text-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
