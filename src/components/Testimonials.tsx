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

const Testimonials = () => (
  <section className="py-24 px-8 lg:px-16 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <div className="inline-block liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-4">
        Kokemuksia
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9]">
        Älä usko meitä — kuuntele heitä.
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="liquid-glass rounded-2xl p-8">
          <p className="text-foreground/80 font-body font-light text-sm italic mb-6">"{t.quote}"</p>
          <div className="text-foreground font-body font-medium text-sm">{t.name}</div>
          <div className="text-foreground/50 font-body font-light text-xs">{t.role}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
