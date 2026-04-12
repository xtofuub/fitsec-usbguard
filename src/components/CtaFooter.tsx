import { motion, useInView } from "motion/react";
import { useRef } from "react";

/* ── Orbital mesh background ── */
const OrbitalBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Large color blobs */}
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 600,
        height: 600,
        left: "60%",
        top: "20%",
        background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(59,130,246,0.04) 50%, transparent 70%)",
        filter: "blur(60px)",
      }}
      animate={{
        x: [0, -80, 40, 0],
        y: [0, 60, -30, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 500,
        height: 500,
        left: "10%",
        top: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.10) 0%, rgba(139,92,246,0.03) 50%, transparent 70%)",
        filter: "blur(50px)",
      }}
      animate={{
        x: [0, 60, -40, 0],
        y: [0, -50, 30, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Hex grid — bolder */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
      <defs>
        <pattern id="hex-cta" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
          <path
            d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <path
            d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-cta)" />
    </svg>

    {/* Large orbiting rings with colored borders */}
    {[
      { size: 300, color: "6,182,212", dur: 25, dir: 1 },
      { size: 480, color: "139,92,246", dur: 35, dir: -1 },
      { size: 650, color: "99,102,241", dur: 45, dir: 1 },
    ].map((ring, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: ring.size,
          height: ring.size,
          left: "50%",
          top: "50%",
          marginLeft: -ring.size / 2,
          marginTop: -ring.size / 2,
          border: `1px solid rgba(${ring.color},0.08)`,
        }}
        animate={{ rotate: ring.dir > 0 ? [0, 360] : [360, 0] }}
        transition={{ duration: ring.dur, repeat: Infinity, ease: "linear" }}
      >
        {/* Node on ring */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 6,
            height: 6,
            top: -3,
            left: "50%",
            marginLeft: -3,
            background: `rgba(${ring.color},0.5)`,
            boxShadow: `0 0 12px 4px rgba(${ring.color},0.2)`,
          }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Opposite node */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 4,
            height: 4,
            bottom: -2,
            left: "50%",
            marginLeft: -2,
            background: `rgba(${ring.color},0.3)`,
            boxShadow: `0 0 8px 3px rgba(${ring.color},0.12)`,
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </motion.div>
    ))}

    {/* Center glow pulse */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: 200,
        height: 200,
        background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
      }}
      animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

const CtaFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="yhteystiedot" className="relative overflow-hidden mt-24" ref={ref}>
      <OrbitalBackground />
      <div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-[2px] z-0" />

      <div className="relative z-10 flex flex-col items-center text-center py-40 px-6 max-w-5xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
          className="text-6xl md:text-8xl font-heading text-white leading-[0.9] tracking-tight max-w-4xl"
        >
          Haluatko suojata <span className="text-white/40 italic">yrityksesi varat?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="mt-8 text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl"
        >
          Ota meihin yhteyttä aloittaaksesi. Järjestämme alkukeskustelun ja räätälöimme ratkaisun tarpeidenne mukaan.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <motion.a
            href="tel:+358442397242"
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass rounded-full px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/5"
          >
            +358 44 239 7242
          </motion.a>
          <motion.a
            href="mailto:support@fitsec.com"
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black rounded-full px-8 py-4 text-base font-medium transition-colors hover:bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            support@fitsec.com
          </motion.a>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mt-40 pt-8 border-t border-white/10 w-full flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <span className="text-white/40 text-xs font-body tracking-wide">
            © 2026 FitSec. Finnish Threat Intelligence Feed Provider since 2009.
          </span>
          <div className="flex items-center gap-8">
            {["Tietosuoja", "Ehdot", "Yhteystiedot"].map((link) => (
              <a key={link} href="#" className="text-white/40 text-xs font-body hover:text-white transition-colors uppercase tracking-widest">
                {link}
              </a>
            ))}
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default CtaFooter;
