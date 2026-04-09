import HlsVideo from "./HlsVideo";

const CtaFooter = () => (
  <section id="yhteystiedot" className="relative overflow-hidden">
    <HlsVideo
      src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
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

    <div className="relative z-10 flex flex-col items-center text-center py-32 px-8">
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-foreground leading-[0.85] max-w-3xl">
        Haluatko suojata yrityksesi varat?
      </h2>
      <p className="mt-6 text-foreground/60 font-body font-light text-sm md:text-base max-w-md">
        Ota meihin yhteyttä aloittaaksesi. Järjestämme alkukeskustelun ja räätälöimme ratkaisun tarpeidenne mukaan.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <a
          href="tel:+358442397242"
          className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-body font-medium text-foreground"
        >
          +358 44 239 7242
        </a>
        <a
          href="mailto:support@fitsec.com"
          className="bg-foreground text-black rounded-full px-6 py-3 text-sm font-body font-medium"
        >
          support@fitsec.com
        </a>
      </div>

      <footer className="mt-32 pt-8 border-t border-foreground/10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-foreground/40 text-xs font-body">
          © 2026 FitSec. Finnish Threat Intelligence Feed Provider since 2009.
        </span>
        <div className="flex items-center gap-6">
          {["Tietosuoja", "Ehdot", "Yhteystiedot"].map((link) => (
            <a key={link} href="#" className="text-foreground/40 text-xs font-body hover:text-foreground/70 transition-colors">
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  </section>
);

export default CtaFooter;
