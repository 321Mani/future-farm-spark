import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function AdmissionCTA() {
  return (
    <section id="admission" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 lg:p-16 shadow-glow"
        >
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium text-white">
                Admissions 2025 · Now Open
              </div>
              <h2 className="mt-5 font-display text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                Join the future of agriculture.
              </h2>
              <p className="mt-4 max-w-xl text-primary-foreground/85 text-lg">
                Applications close 30 June 2025. Reserve your seat in India's most hands-on
                agriculture programme.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground shadow-soft hover:scale-[1.03] transition-transform"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl glass-dark px-7 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Brochure
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
