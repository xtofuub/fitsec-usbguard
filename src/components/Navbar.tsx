import { ArrowUpRight } from "lucide-react";

const links = ["Koti", "Palvelut", "Riskit", "Ratkaisu", "Yhteystiedot"];

const Navbar = () => (
  <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between">
    <div className="font-heading italic text-2xl text-foreground tracking-tight">
      FitSec
    </div>
    <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-foreground transition-colors"
        >
          {link}
        </a>
      ))}
      <a
        href="#yhteystiedot"
        className="flex items-center gap-1 bg-foreground text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body"
      >
        Ota yhteyttä <ArrowUpRight size={14} />
      </a>
    </div>
  </nav>
);

export default Navbar;
