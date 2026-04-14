import { motion, useInView } from "motion/react";
import { useRef } from "react";
import {
  MonitorCog,
  MousePointerClick,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Total Protection",
    desc: "USBGuard combines file management, antivirus scanning, BadUSB prevention, and USB Killer protection.",
  },
  {
    icon: MousePointerClick,
    title: "Easy to Use",
    desc: "The interface clearly guides the user. The main view shows only what is essential, keeping workflows smooth.",
  },
  {
    icon: MonitorCog,
    title: "Admin Dashboard",
    desc: "A centralized dashboard keeps devices, statuses, and operations visible in one place without clutter.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customizable",
    desc: "The solution can be adapted to different environments without the core concept becoming heavy or complex.",
  },
];

const SolutionSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const benefits = [
    "Antivirus License",
    "BadUSB Prevention",
    "USB Killer Protection",
    "Hardware Warranty",
  ];

  return (
    <section id="solution" className="mx-auto w-full max-w-7xl px-6 py-28 lg:px-16" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="text-center"
      >
        <div className="mb-8 inline-flex rounded-full liquid-glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
          Solution
        </div>
        <h2 className="font-heading text-[clamp(3rem,6vw,5.5rem)] italic leading-none tracking-[-0.04em] text-white">
          Practical security. <span className="text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">In a single device.</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-6 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.06, ease: [0.32, 0.72, 0, 1] }}
              className="group relative rounded-[2rem] liquid-glass hover:brightness-110 p-8 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 mb-10 flex h-12 w-12 items-center justify-center rounded-xl liquid-glass text-white/90 shadow-[0_4px_16px_rgba(255,255,255,0.05)] group-hover:shadow-[0_8px_24px_rgba(255,255,255,0.1)] transition-all duration-500">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="relative z-10 font-heading text-[1.55rem] italic leading-tight text-white">{feature.title}</h3>
              <p className="relative z-10 mt-4 text-[0.96rem] leading-7 text-white/60">{feature.desc}</p>
            </motion.article>
          );
        })}
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {benefits.map((benefit) => (
          <motion.span
            key={benefit}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group rounded-full liquid-glass hover:brightness-110 px-5 py-2.5 text-sm text-white/80 transition-all duration-300 cursor-pointer"
          >
            {benefit}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;
