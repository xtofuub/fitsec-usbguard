import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const ShieldRadarBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute rounded-full"
      style={{
        width: 700,
        height: 500,
        left: "30%",
        top: "20%",
        background: "radial-gradient(ellipse, rgba(6,182,212,0.10) 0%, rgba(99,102,241,0.04) 50%, transparent 70%)",
        filter: "blur(50px)",
      }}
      animate={{
        x: [0, 50, -30, 0],
        y: [0, -40, 30, 0],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute"
      style={{
        width: 500,
        height: 500,
        left: "50%",
        top: "50%",
        marginLeft: -250,
        marginTop: -250,
        background: "conic-gradient(from 0deg, transparent 0deg, rgba(6,182,212,0.08) 30deg, transparent 60deg)",
        borderRadius: "50%",
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />

    {[150, 250, 350].map((size, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: size,
          height: size,
          left: "50%",
          top: "50%",
          marginLeft: -size / 2,
          marginTop: -size / 2,
          border: `1px solid rgba(6,182,212,${0.06 + i * 0.02})`,
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          delay: i * 0.6,
          ease: "easeInOut",
        }}
      />
    ))}

    {[
      { angle: 45, dist: 120, delay: 0 },
      { angle: 150, dist: 200, delay: 2 },
      { angle: 260, dist: 160, delay: 4 },
      { angle: 320, dist: 100, delay: 1 },
    ].map((blip, i) => {
      const rad = (blip.angle * Math.PI) / 180;
      const x = Math.cos(rad) * blip.dist;
      const y = Math.sin(rad) * blip.dist;
      return (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: "50%",
            top: "50%",
            marginLeft: x - 4,
            marginTop: y - 4,
            background: "rgba(6,182,212,0.6)",
            boxShadow: "0 0 12px 4px rgba(6,182,212,0.2)",
          }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1.2, 0.5] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: blip.delay,
            times: [0, 0.1, 0.5, 1],
          }}
        />
      );
    })}
  </div>
);

const StartSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6 lg:px-16 max-w-5xl mx-auto w-full" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
        className="relative z-10 flex flex-col items-center text-center liquid-glass-strong rounded-[3rem] p-12 md:p-24 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="inline-block liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white/80 font-body mb-8 tracking-widest uppercase"
        >
          Complete Service
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
          className="text-5xl md:text-7xl font-heading text-white tracking-tight leading-[0.95] max-w-3xl"
        >
          You focus on your work. <span className="text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">We handle the security.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
          className="mt-8 text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl"
        >
          USBGuard is an annual license-based complete service. Devices, maintenance, updates, antivirus licenses, and device warranty - everything is included.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7, ease: [0.32, 0.72, 0, 1] }}
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 group relative liquid-glass rounded-full pl-8 pr-2 py-2 text-base font-medium text-white flex items-center gap-6 transition-all hover:bg-white/5"
        >
          <span>Contact Us</span>
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
            <ArrowUpRight size={20} className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform duration-500" />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default StartSection;
