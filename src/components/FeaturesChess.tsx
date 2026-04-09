import feature1 from "@/assets/feature-1.gif";
import feature2 from "@/assets/feature-2.gif";

const rows = [
  {
    title: "BadUSB-hyökkäysten esto.",
    body: "BadUSB tekee USB-massamuistista vakavan tietoturvariskin. Se ohjelmoi massamuistin toimimaan esimerkiksi näppäimistönä. USBGuard skannaa massamuistit ja estää BadUSB:n toiminnan automaattisesti.",
    btn: "Lue lisää",
    img: feature1,
    reverse: false,
  },
  {
    title: "USB Killer -suojaus.",
    body: "USB Killer on tavalliselta tikulta näyttävä laite, joka tuhoaa tietokoneen korkeiden virtapiikkien avulla. Jos kytketty laite on USB Killer, USBGuard suojaa tietokoneesi — ja tuhoutuneen laitteen korvaus kuuluu palveluun.",
    btn: "Tutustu tarkemmin",
    img: feature2,
    reverse: true,
  },
];

const FeaturesChess = () => (
  <section id="riskit" className="py-24 px-8 lg:px-16 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <div className="inline-block liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-4">
        Riskit & Suojaus
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]">
        Tunne uhat. Torju ne.
      </h2>
    </div>

    {rows.map((row, i) => (
      <div
        key={i}
        className={`flex flex-col lg:flex-row items-center gap-12 mb-20 ${
          row.reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl md:text-4xl font-heading italic text-foreground leading-tight">
            {row.title}
          </h3>
          <p className="text-foreground/60 font-body font-light text-sm md:text-base leading-relaxed">
            {row.body}
          </p>
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-body font-medium text-foreground">
            {row.btn}
          </button>
        </div>
        <div className="flex-1 liquid-glass rounded-2xl overflow-hidden">
          <img src={row.img} alt={row.title} className="w-full h-auto" />
        </div>
      </div>
    ))}
  </section>
);

export default FeaturesChess;
