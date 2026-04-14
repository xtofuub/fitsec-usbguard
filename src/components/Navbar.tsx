import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import fitsecSilverLogo from "../../fitsec_silver.png";

const links = ["Home", "Services", "Risks", "Solution", "Contact"];

const Navbar = () => (
  <motion.nav
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
    className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3 flex items-center justify-between"
  >
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="font-heading italic text-2xl text-foreground tracking-tight flex items-center"
    >
      <img src={fitsecSilverLogo} alt="FitSec Logo" className="h-8 object-contain" />
    </motion.div>
    <div className="hidden md:flex items-center liquid-glass rounded-full px-1.5 py-1">
      {links.map((link) => (
        <motion.a
          key={link}
          href={`#${link.toLowerCase()}`}
          whileHover={{ y: -1 }}
          className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-foreground transition-colors"
        >
          {link}
        </motion.a>
      ))}
      <motion.a
        href="#contact"
        whileHover={{ scale: 0.98 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center gap-1 bg-foreground text-black rounded-full px-3.5 py-1.5 text-sm font-medium font-body"
      >
        Contact Us <ArrowUpRight size={14} />
      </motion.a>
    </div>
  </motion.nav>
);

export default Navbar;
