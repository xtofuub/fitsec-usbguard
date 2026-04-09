import { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const BlurText = ({ text, className = "", delay = 200 }: BlurTextProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <h1 ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.3em] transition-all"
          style={{
            filter: isVisible ? "blur(0px)" : "blur(10px)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transitionProperty: "filter, opacity, transform",
            transitionDuration: "0.35s",
            transitionDelay: `${i * delay}ms`,
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
};

export default BlurText;
