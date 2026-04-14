import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Cpu, Keyboard, Search, ShieldAlert, ShieldCheck, Usb, Zap } from "lucide-react";

const BadUSBVisual = () => (
  <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl liquid-glass">
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />

    <motion.div
      className="absolute h-40 w-40 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(239,68,68,0.16) 0%, transparent 70%)" }}
      animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.8, 0.35] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute left-0 right-0 h-[2px]"
      style={{ background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.65), transparent)" }}
      animate={{ top: ["12%", "88%", "12%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="relative z-10 flex flex-col items-center gap-4">
      <motion.div
        className="flex h-20 w-20 items-center justify-center rounded-2xl liquid-glass-strong"
        animate={{ rotateY: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Usb size={36} className="text-foreground/80" />
      </motion.div>

      <motion.div
        className="liquid-glass flex items-center gap-2 rounded-lg px-3 py-2"
        animate={{ opacity: [0, 1, 1, 0], x: [-18, 0, 0, 18] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Keyboard size={14} className="text-red-400/80" />
        <span className="text-[10px] font-medium text-red-400/80">HID BLOCKED</span>
      </motion.div>

      <motion.div
        className="absolute -right-8 -top-2"
        animate={{ scale: [0.85, 1.1, 1], opacity: [0, 1, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full liquid-glass-strong">
          <ShieldAlert size={18} className="text-foreground/90" />
        </div>
      </motion.div>
    </div>

    <div className="absolute left-4 top-4 flex items-center gap-2">
      <motion.div
        className="h-2 w-2 rounded-full bg-red-400/60"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className="text-[9px] uppercase tracking-widest text-foreground/30">Scanning</span>
    </div>

    <div className="absolute bottom-4 right-4">
      <motion.div
        className="liquid-glass flex items-center gap-1.5 rounded-full px-2.5 py-1"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Cpu size={10} className="text-foreground/40" />
        <span className="text-[9px] text-foreground/40">USBGuard Active</span>
      </motion.div>
    </div>
  </div>
);

const USBKillerVisual = () => (
  <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl liquid-glass">
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />

    {[...Array(3)].map((_, idx) => (
      <motion.div
        key={idx}
        className="absolute w-px"
        style={{
          height: 60 + idx * 20,
          background: `linear-gradient(to bottom, transparent, rgba(168,85,247,${0.35 + idx * 0.12}), transparent)`,
          left: `${35 + idx * 15}%`,
          transformOrigin: "top center",
        }}
        animate={{
          rotate: [-(10 + idx * 5), 10 + idx * 5, -(10 + idx * 5)],
          opacity: [0, 0.85, 0],
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

    <motion.div
      className="absolute h-48 w-48 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)" }}
      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="relative z-10 flex flex-col items-center gap-5">
      <div className="relative">
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-2xl liquid-glass-strong"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Usb size={36} className="text-foreground/80" />
        </motion.div>

        <motion.div
          className="absolute -right-3 -top-3"
          animate={{ rotate: [0, 15, -15, 0], scale: [0.9, 1.2, 0.9] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <Zap size={22} className="text-purple-400/80" fill="rgba(168,85,247,0.3)" />
        </motion.div>
      </div>

      <motion.div
        className="liquid-glass flex items-center gap-2 rounded-lg px-4 py-2"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
      >
        <motion.div
          className="h-2 w-2 rounded-full bg-green-400/80"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        <span className="text-[10px] font-medium text-foreground/60">Surge absorbed - device protected</span>
      </motion.div>
    </div>

    <div className="absolute left-4 top-4 flex items-center gap-2">
      <motion.div
        className="h-2 w-2 rounded-full bg-purple-400/60"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <span className="text-[9px] uppercase tracking-widest text-foreground/30">Voltage Monitor</span>
    </div>

    <div className="absolute bottom-4 right-4">
      <motion.div
        className="liquid-glass flex items-center gap-1.5 rounded-full px-2.5 py-1"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        <span className="text-[9px] text-foreground/40">Hardware Shield</span>
      </motion.div>
    </div>
  </div>
);

const UnknownUSBVisual = () => (
  <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl liquid-glass">
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />

    <motion.div
      className="absolute h-48 w-48 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)" }}
      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.div
      className="absolute left-0 right-0 h-[2px]"
      style={{ background: "linear-gradient(90deg, transparent, rgba(14,165,233,0.5), transparent)" }}
      animate={{ top: ["20%", "80%", "20%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />

    <div className="relative z-10 flex flex-col items-center gap-5">
      <div className="relative">
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-2xl liquid-glass-strong"
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Usb size={36} className="text-foreground/80" />
        </motion.div>
        <motion.div
          className="absolute -right-4 -bottom-4 flex h-10 w-10 items-center justify-center rounded-full liquid-glass-strong"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <Search size={18} className="text-sky-400" />
        </motion.div>
      </div>

      <motion.div
        className="liquid-glass flex items-center gap-2 rounded-lg px-4 py-2"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
      >
        <ShieldCheck size={14} className="text-sky-400" />
        <span className="text-[10px] font-medium text-sky-400/80">Scanning payload...</span>
      </motion.div>
    </div>

    <div className="absolute left-4 top-4 flex items-center gap-2">
      <motion.div
        className="h-2 w-2 rounded-full bg-sky-400/60"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className="text-[9px] uppercase tracking-widest text-foreground/30">Sandboxed</span>
    </div>

    <div className="absolute bottom-4 right-4">
      <motion.div
        className="liquid-glass flex items-center gap-1.5 rounded-full px-2.5 py-1"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        <ShieldCheck size={10} className="text-foreground/40" />
        <span className="text-[9px] text-foreground/40">Zero Trust</span>
      </motion.div>
    </div>
  </div>
);

const rows = [
  {
    title: "BadUSB Attack Prevention.",
    body:
      "BadUSB turns USB mass storage into a severe security risk. It can program the device to act as a keyboard, for example. USBGuard scans storage devices and automatically blocks BadUSB activity.",
    btn: "Read more",
    visual: <BadUSBVisual />,
    reverse: false,
  },
  {
    title: "USB Killer Protection.",
    body:
      "USB Killer is a device disguised as a standard flash drive that destroys computers using high voltage spikes. If a connected device is a USB Killer, USBGuard protects your computer, and hardware warranty covers the destroyed device.",
    btn: "Learn more",
    visual: <USBKillerVisual />,
    reverse: true,
  },
  {
    title: "Unknown USBs",
    body: "An infected USB drive can silently spread malware to every system it connects to. USBGuard isolates and scans every file before transfer.",
    btn: "Read more",
    visual: <UnknownUSBVisual />,
    reverse: false,
  },
];

const FeaturesChess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="risks" ref={ref} className="mx-auto w-full max-w-7xl px-6 py-32 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="mb-32 text-center"
      >
        <div className="mb-6 inline-block liquid-glass rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80 font-body">
          Risks & Protection
        </div>
        <h2 className="text-5xl leading-[0.9] tracking-tight text-white md:text-7xl font-heading">
          Know the threats. <span className="text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Block them.</span>
        </h2>
      </motion.div>

      {rows.map((row, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          className={`mb-32 flex flex-col items-center gap-16 last:mb-0 lg:gap-24 ${row.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
        >
          <div className="max-w-xl flex-1 space-y-8">
            <h3 className="text-4xl leading-[1.1] tracking-tight text-white md:text-5xl font-heading">
              {row.title}
            </h3>
            <p className="text-lg leading-relaxed text-white/60 font-light">{row.body}</p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 rounded-full liquid-glass px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              {row.btn} <Zap size={14} className="text-white/60" />
            </motion.a>
          </div>

          <div className="relative w-full flex-1">
            <div className="rounded-[2rem] liquid-glass p-2">
              <div className="relative overflow-hidden rounded-[calc(2rem-0.5rem)] liquid-glass-strong">
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
