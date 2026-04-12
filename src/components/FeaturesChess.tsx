import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ShieldAlert, Zap, Keyboard, Cpu, CircuitBoard, Usb } from "lucide-react";

/* ── Animated visual panel for BadUSB ── */
const BadUSBVisual = () => (
  <div className="relative w-full aspect-[4/3] liquid-glass rounded-2xl overflow-hidden flex items-center justify-center">
    {/* Background grid */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    />

    {/* Pulsing glow behind the USB */}
    <motion.div
      className="absolute w-40 h-40 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)" }}
      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Scan line sweeping */}
    <motion.div
      className="absolute left-0 right-0 h-[2px]"
      style={{ background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.6), transparent)" }}
      animate={{ top: ["10%", "90%", "10%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Center USB icon */}
    <div className="relative z-10 flex flex-col items-center gap-4">
      <motion.div
        className="w-20 h-20 liquid-glass-strong rounded-2xl flex items-center justify-center"
        animate={{ rotateY: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Usb size={36} className="text-foreground/80" />
      </motion.div>

      {/* Keyboard icon trying to activate — blocked */}
      <div className="flex items-center gap-3">
        <motion.div
          className="liquid-glass rounded-lg px-3 py-2 flex items-center gap-2"
          animate={{ opacity: [0, 1, 1, 0], x: [-20, 0, 0, 20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Keyboard size={14} className="text-red-400/80" />
          <span className="text-[10px] font-body font-medium text-red-400/80">HID BLOCKED</span>
        </motion.div>
      </div>

      {/* Shield appears */}
      <motion.div
        className="absolute -top-2 -right-8"
        animate={{ scale: [0.8, 1.1, 1], opacity: [0, 1, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
      >
        <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center">
          <ShieldAlert size={18} className="text-foreground/90" />
        </div>
      </motion.div>
    </div>

    {/* Corner accents */}
    <div className="absolute top-4 left-4 flex items-center gap-2">
      <motion.div
        className="w-2 h-2 rounded-full bg-red-400/60"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className="text-[9px] font-body text-foreground/30 uppercase tracking-widest">Scanning</span>
    </div>

    <div className="absolute bottom-4 right-4">
      <motion.div
        className="flex items-center gap-1.5 liquid-glass rounded-full px-2.5 py-1"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Cpu size={10} className="text-foreground/40" />
        <span className="text-[9px] font-body text-foreground/40">USBGuard Active</span>
      </motion.div>
    </div>
  </div>
);

/* ── Animated visual panel for USB Killer ── */
const USBKillerVisual = () => (
  <div className="relative w-full aspect-[4/3] liquid-glass rounded-2xl overflow-hidden flex items-center justify-center">
    {/* Background grid */}
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    />

    {/* Electric discharge effect */}
    {[...Array(3)].map((_, idx) => (
      <motion.div
        key={idx}
        className="absolute w-px"
        style={{
          height: 60 + idx * 20,
          background: `linear-gradient(to bottom, transparent, rgba(168,85,247,${0.4 + idx * 0.1}), transparent)`,
          left: `${35 + idx * 15}%`,
          transformOrigin: "top center",
        }}
        animate={{
          rotate: [-(10 + idx * 5), 10 + idx * 5, -(10 + idx * 5)],
          opacity: [0, 0.8, 0],
          scaleY: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: 1.5 + idx * 0.3,
          repeat: Infinity,
          delay: idx * 0.4,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* Pulsing danger glow */}
    <motion.div
      className="absolute w-48 h-48 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)" }}
      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Center content */}
    <div className="relative z-10 flex flex-col items-center gap-5">
      {/* USB icon with voltage sparks */}
      <div className="relative">
        <motion.div
          className="w-20 h-20 liquid-glass-strong rounded-2xl flex items-center justify-center"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Usb size={36} className="text-foreground/80" />
        </motion.div>

        {/* Voltage bolt */}
        <motion.div
          className="absolute -top-3 -right-3"
          animate={{ rotate: [0, 15, -15, 0], scale: [0.9, 1.2, 0.9] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <Zap size={22} className="text-purple-400/80" fill="rgba(168,85,247,0.3)" />
        </motion.div>
      </div>

      {/* Voltage absorbed indicator */}
      <motion.div
        className="liquid-glass rounded-lg px-4 py-2 flex items-center gap-2"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-green-400/80"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        <span className="text-[10px] font-body font-medium text-foreground/60">
          Surge absorbed — device protected
        </span>
      </motion.div>
    </div>

    {/* Corner accents */}
    <div className="absolute top-4 left-4 flex items-center gap-2">
      <motion.div
        className="w-2 h-2 rounded-full bg-purple-400/60"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <span className="text-[9px] font-body text-foreground/30 uppercase tracking-widest">Voltage Monitor</span>
    </div>

    <div className="absolute bottom-4 right-4">
      <motion.div
        className="flex items-center gap-1.5 liquid-glass rounded-full px-2.5 py-1"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        <CircuitBoard size={10} className="text-foreground/40" />
        <span className="text-[9px] font-body text-foreground/40">Hardware Shield</span>
      </motion.div>
    </div>
  </div>
);

/* ── Main section ── */
const rows = [
  {
    title: "BadUSB-hyökkäysten esto.",
    body: "BadUSB tekee USB-massamuistista vakavan tietoturvariskin. Se ohjelmoi massamuistin toimimaan esimerkiksi näppäimistönä. USBGuard skannaa massamuistit ja estää BadUSB:n toiminnan automaattisesti.",
    btn: "Lue lisää",
    visual: <BadUSBVisual />,
    reverse: false,
  },
  {
    title: "USB Killer -suojaus.",
    body: "USB Killer on tavalliselta tikulta näyttävä laite, joka tuhoaa tietokoneen korkeiden virtapiikkien avulla. Jos kytketty laite on USB Killer, USBGuard suojaa tietokoneesi — ja tuhoutuneen laitteen korvaus kuuluu palveluun.",
    btn: "Tutustu tarkemmin",
    visual: <USBKillerVisual />,
    reverse: true,
  },
];

const FeaturesChess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="riskit" className="py-32 px-6 lg:px-16 max-w-7xl mx-auto w-full" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="text-center mb-32"
      >
        <div className="inline-block liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white/80 font-body mb-6 tracking-widest uppercase">
          Riskit & Suojaus
        </div>
        <h2 className="text-5xl md:text-7xl font-heading text-white tracking-tight leading-[0.9]">
          Tunne uhat. <span className="text-white/40 italic">Torju ne.</span>
        </h2>
      </motion.div>

      {rows.map((row, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32 last:mb-0 ${
            row.reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="flex-1 space-y-8 max-w-xl">
            <h3 className="text-4xl md:text-5xl font-heading text-white leading-[1.1] tracking-tight">
              {row.title}
            </h3>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              {row.body}
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white items-center gap-3 transition-colors hover:bg-white/5"
            >
              {row.btn} <Zap size={14} className="text-white/60" />
            </motion.a>
          </div>

          <div className="flex-1 w-full relative">
            <div className="liquid-glass rounded-[2rem] p-2">
              <div className="liquid-glass-strong rounded-[calc(2rem-0.5rem)] overflow-hidden relative">
                {row.visual}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default FeaturesChess;
