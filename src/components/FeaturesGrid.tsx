import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { FileText, ScanLine, Copy, HardDrive } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Tiedostolistaus",
    desc: "Tiedostojen selaus ja valinnainen poisto. Valitse vain ne tiedostot, jotka haluat siirtää.",
  },
  {
    icon: ScanLine,
    title: "Skannaus",
    desc: "Antivirusskannaus ja BadUSB-hyökkäysten esto. Havaitsee uhat automaattisesti.",
  },
  {
    icon: Copy,
    title: "Kopiointi",
    desc: "Turvallinen tiedostojen vaihto massamuistien välillä ilman riskiä.",
  },
  {
    icon: HardDrive,
    title: "Alustus",
    desc: "Massamuistin tyhjennys tietoturvallisesti. Varmista, ettei dataa jää jäljelle.",
  },
];

const FeaturesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 lg:px-16 max-w-7xl mx-auto w-full" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="text-center mb-24"
      >
        <div className="inline-block liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white/80 font-body mb-6 tracking-widest uppercase">
          Toiminnot
        </div>
        <h2 className="text-5xl md:text-7xl font-heading text-white tracking-tight leading-[0.9]">
          Kaikki mitä <span className="text-white/40 italic">tarvitset.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 + i * 0.1, ease: [0.32, 0.72, 0, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] } }}
            className="group liquid-glass rounded-[2rem] p-2"
          >
            <div className="liquid-glass-strong rounded-[calc(2rem-0.5rem)] p-8 h-full flex flex-col">
              <div className="liquid-glass rounded-full w-12 h-12 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                <f.icon size={20} className="text-white" />
              </div>
              <h3 className="text-white font-body font-semibold text-lg mb-3">{f.title}</h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
