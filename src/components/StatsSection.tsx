import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 2009, label: "Founded", suffix: "", isYear: true },
  { value: 100, label: "Finnish", suffix: "%", isYear: false },
  { value: 24, label: "Support", suffix: "/7", isYear: false },
  { value: 5, label: "Delivery Time", suffix: "d", isYear: false },
];

function AnimatedNumber({
  value,
  suffix,
  isYear,
  isInView,
}: {
  value: number;
  suffix: string;
  isYear: boolean;
  isInView: boolean;
}) {
  const [display, setDisplay] = useState(isYear ? value : 0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const start = performance.now();
    const from = isYear ? value - 15 : 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(from + (value - from) * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value, isYear]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

const MatrixBackground = () => {
  const columns = 20;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 400,
          left: "40%",
          top: "30%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {[...Array(columns)].map((_, i) => {
        const left = (i / columns) * 100;
        const duration = 3 + (i % 5) * 0.8;
        const delay = (i % 7) * 0.5;
        const height = 40 + (i % 4) * 20;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              width: 1,
              height: `${height}px`,
              background: `linear-gradient(to bottom, transparent, rgba(255,255,255,${0.03 + (i % 3) * 0.02}), transparent)`,
            }}
            animate={{ top: ["-10%", "110%"] }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          />
        );
      })}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${10 + i * 11}%`,
            background: "rgba(255,255,255,0.4)",
            boxShadow: "0 0 8px 3px rgba(255,255,255,0.1)",
          }}
          animate={{
            top: ["-3%", "103%"],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: 5 + i * 0.7,
            repeat: Infinity,
            delay: i * 0.9,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6 lg:px-16 w-full" ref={ref}>
      <MatrixBackground />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto relative liquid-glass rounded-[3rem] p-12 md:p-24 shadow-2xl backdrop-blur-2xl border border-white/10 overflow-hidden flex flex-col items-center">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 blur-[100px] pointer-events-none rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
            className="text-center mb-24 relative z-10"
          >
            <div className="inline-block liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white/80 font-body mb-6 tracking-widest uppercase">
              Reliability
            </div>
            <h2 className="text-5xl md:text-7xl font-heading text-white tracking-tight leading-[0.9]">
              Security you <span className="text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">can trust.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl mx-auto relative z-10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                className="flex flex-col items-center text-center group relative z-10"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-4 group-hover:scale-105 transition-transform duration-700 ease-out">
                  <AnimatedNumber
                    value={s.value}
                    suffix={s.suffix}
                    isYear={s.isYear}
                    isInView={isInView}
                  />
                </div>
                <div className="text-white/60 font-body font-light text-sm uppercase tracking-widest">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
