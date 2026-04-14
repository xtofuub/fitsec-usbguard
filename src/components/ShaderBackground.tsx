import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function ShaderBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030303] pointer-events-none">
      <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
        <motion.div
          className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(24,24,27,0.8) 0%, rgba(24,24,27,0) 65%)",
            filter: "blur(90px)",
          }}
          animate={{
            x: [0, 150, -50, 0],
            y: [0, 80, -120, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-[20%] -right-[15%] w-[65vw] h-[65vw] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(38,38,38,0.6) 0%, rgba(38,38,38,0) 60%)",
            filter: "blur(100px)",
          }}
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 150, -100, 0],
            scale: [1, 1.1, 1.4, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0) 70%)",
            filter: "blur(120px)",
          }}
          animate={{
            x: [-80, 100, -80],
            y: [50, -100, 50],
            scale: [0.8, 1.3, 0.8],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-[10%] right-[10%] w-[55vw] h-[55vw] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(31,41,55,0.6) 0%, rgba(31,41,55,0) 65%)",
            filter: "blur(110px)",
          }}
          animate={{
            x: [60, -90, 60],
            y: [-80, 120, -80],
            scale: [1.2, 0.9, 1.2],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute w-[40vw] h-[40vw] rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 50%)",
            filter: "blur(50px)",
          }}
          animate={{
            x: mousePosition.x - (typeof window !== "undefined" ? window.innerWidth * 0.2 : 0),
            y: mousePosition.y - (typeof window !== "undefined" ? window.innerWidth * 0.2 : 0),
          }}
          transition={{ type: "spring", damping: 50, stiffness: 40, mass: 1 }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 10%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 10%, transparent 80%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "linear-gradient(transparent 50%, rgba(0, 0, 0, 1) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      <div
        className="absolute inset-0 z-20 opacity-[0.035] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
