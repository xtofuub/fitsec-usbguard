import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "motion/react";

const faqs = [
  {
    question: "What exactly does USBGuard do?",
    answer: "USBGuard is a compact, portable device designed to protect your systems from malicious USB mass storage devices. It acts as an intermediary checkpoint that securely scans files, blocking malware and malicious payloads before they hit your machine."
  },
  {
    question: "How does it protect against BadUSB attacks?",
    answer: "BadUSB malware reprograms generic USB devices to act like keyboards or other peripherals to inject malicious commands. USBGuard scans devices for BadUSB properties and immediately blocks them from running, alerting you to remove the compromised device."
  },
  {
    question: "What if someone inserts a 'USB Killer'?",
    answer: "A USB Killer is designed to destroy computers by discharging high voltage spikes. If one is inserted into USBGuard, our device absorbs the fatal spike, getting destroyed instead of your valuable computer hardware. A replacement device is usually included as part of our total service package."
  },
  {
    question: "Does it come with built-in antivirus software?",
    answer: "Yes, an integrated, automatic antivirus license is included. It actively scans for known and zero-day threats, allowing you to safely delete infected files to restore the usability of the mass storage device."
  },
  {
    question: "Do I need technical skills to use it?",
    answer: "Not at all. USBGuard features an intuitive touchscreen interface with simple instructions. Operations like virus scanning, safe copying, formatting, and file listing are guided step-by-step for anyone to use effortlessly."
  },
  {
    question: "Can we monitor multiple devices centrally?",
    answer: "Yes, our service includes an online management dashboard. You can centrally monitor all your organization's USBGuard devices, ensuring they are up to date and tracking alerts for malware or BadUSB detections."
  }
];

export default function FaqSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
    },
  };

  return (
    <section className="py-32 px-6 lg:px-16 mx-auto w-full relative max-w-4xl z-10" ref={containerRef}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="text-center mb-24"
      >
        <div className="inline-block liquid-glass rounded-full px-4 py-1.5 text-xs font-medium text-white/80 font-body mb-6 tracking-widest uppercase">
          FAQ
        </div>
        <h2 className="text-5xl md:text-7xl font-heading text-white tracking-tight leading-[0.9]">
          Frequently Asked <span className="text-white italic drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Questions</span>
        </h2>
        <p className="text-white/60 font-body font-light text-lg max-w-2xl mx-auto mt-8">
          Everything you need to know about hardware-based USB protection.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
        className="group liquid-glass rounded-[2rem] p-2 hover:scale-[1.01] transition-transform duration-700 ease-out"
      >
        <div className="liquid-glass-strong rounded-[calc(2rem-0.5rem)] p-6 md:p-8 flex flex-col gap-4">
          <Accordion type="single" collapsible className="w-full relative z-10 space-y-4 font-body">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {faqs.map((faq, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <AccordionItem 
                    value={`item-${i}`} 
                    className="liquid-glass rounded-2xl px-6 data-[state=open]:bg-white/[0.04] transition-all duration-300 hover:bg-white/[0.02]"
                  >
                    <AccordionTrigger className="text-white hover:no-underline py-6 text-left text-lg md:text-xl font-medium [&>svg]:text-white/50 [&>svg]:transition-transform">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/80 font-light leading-relaxed pb-6 text-base md:text-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </motion.div>
          </Accordion>
        </div>
      </motion.div>
    </section>
  );
}