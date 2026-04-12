import { motion, useInView } from "motion/react";
import { useRef } from "react";

const testimonials = [
  {
    quote: "USBGuard toi organisaatioomme selkeän prosessin USB-laitteiden hallintaan. Enää ei tarvitse huolehtia tuntemattomista tikuista.",
    name: "Mika Korhonen",
    role: "IT-päällikkö, Teollisuusyritys",
  },
  {
    quote: "Kompakti ja helppokäyttöinen. Kosketusnäyttö opastaa selkeästi — loppukäyttäjien ei tarvitse olla teknisiä osaajia.",
    name: "Anna Virtanen",
    role: "Tietoturvapäällikkö, Logistiikka",
  },
  {
    quote: "BadUSB-hyökkäysten esto ja USB Killer -suojaus samassa paketissa. Tämä on juuri sitä, mitä kriittiset ympäristöt tarvitsevat.",
    name: "Jari Nieminen",
    role: "CISO, Energiayhtiö",
  },
];

const Testimonials = () => {
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
          Kokemuksia
        </div>
        <h2 className="text-5xl md:text-7xl font-heading text-white tracking-tight leading-[0.9]">
          Älä usko meitä — <span className="text-white/40 italic">kuuntele heitä.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15 + i * 0.15, ease: [0.32, 0.72, 0, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.5, ease: [0.32, 0.72, 0, 1] } }}
            className="group liquid-glass rounded-[2rem] p-2"
          >
            <div className="liquid-glass-strong rounded-[calc(2rem-0.5rem)] p-8 h-full flex flex-col justify-between">
              <p className="text-white/80 font-body font-light text-base leading-relaxed italic mb-8">"{t.quote}"</p>
              <div>
                <div className="text-white font-body font-medium text-sm mb-1">{t.name}</div>
                <div className="text-white/50 font-body font-light text-xs tracking-wide uppercase">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
