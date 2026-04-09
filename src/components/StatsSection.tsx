import HlsVideo from "./HlsVideo";

const stats = [
  { value: "2009", label: "Perustettu" },
  { value: "100%", label: "Suomalainen" },
  { value: "24/7", label: "Hallintanäkymä" },
  { value: "5pv", label: "Toimitusaika" },
];

const StatsSection = () => (
  <section className="relative overflow-hidden py-24 px-8 lg:px-16">
    <HlsVideo
      src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ filter: "saturate(0)" }}
    />
    <div
      className="absolute top-0 left-0 right-0 pointer-events-none"
      style={{ height: 200, background: "linear-gradient(to bottom, black, transparent)" }}
    />
    <div
      className="absolute bottom-0 left-0 right-0 pointer-events-none"
      style={{ height: 200, background: "linear-gradient(to top, black, transparent)" }}
    />

    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="liquid-glass rounded-3xl p-12 md:p-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-foreground">
                {s.value}
              </div>
              <div className="text-foreground/60 font-body font-light text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
