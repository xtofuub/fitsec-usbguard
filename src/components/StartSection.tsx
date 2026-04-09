import { ArrowUpRight } from "lucide-react";
import HlsVideo from "./HlsVideo";

const StartSection = () => (
  <section id="palvelut" className="relative overflow-hidden">
    <HlsVideo
      src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div
      className="absolute top-0 left-0 right-0 pointer-events-none"
      style={{ height: 200, background: "linear-gradient(to bottom, black, transparent)" }}
    />
    <div
      className="absolute bottom-0 left-0 right-0 pointer-events-none"
      style={{ height: 200, background: "linear-gradient(to top, black, transparent)" }}
    />

    <div className="relative z-10 flex flex-col items-center text-center py-32 px-8" style={{ minHeight: 500 }}>
      <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body mb-6">
        Kokonaispalvelu
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground tracking-tight leading-[0.9] max-w-2xl">
        Sinä keskityt työhösi. Me hoidamme tietoturvan.
      </h2>
      <p className="mt-6 text-foreground/60 font-body font-light text-sm md:text-base max-w-md">
        USBGuard on vuosilisenssipohjainen kokonaispalvelu. Laitteet, ylläpito, päivitykset, antiviruslisenssi ja laitetakuu — kaikki sisältyy.
      </p>
      <a
        href="#yhteystiedot"
        className="mt-8 liquid-glass-strong rounded-full px-6 py-3 text-sm font-body font-medium text-foreground flex items-center gap-2"
      >
        Ota yhteyttä <ArrowUpRight size={16} />
      </a>
    </div>
  </section>
);

export default StartSection;
