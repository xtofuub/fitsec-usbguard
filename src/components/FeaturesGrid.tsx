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

const FeaturesGrid = () => (
  <section className="py-24 px-8 lg:px-16 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <div className="inline-block liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-4">
        Toiminnot
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]">
        Kaikki mitä tarvitset.
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((f, i) => (
        <div key={i} className="liquid-glass rounded-2xl p-6">
          <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
            <f.icon size={18} className="text-foreground" />
          </div>
          <h3 className="text-foreground font-body font-semibold text-base mb-2">{f.title}</h3>
          <p className="text-foreground/60 font-body font-light text-sm">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesGrid;
