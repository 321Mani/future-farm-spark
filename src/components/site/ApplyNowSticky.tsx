import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function ApplyNowSticky() {
  return (
    <motion.a
      href="https://forms.gle/sZDYU2U9T4HH8wdq5"
      target="_blank"
      rel="noopener"
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.7, type: "spring", stiffness: 110, damping: 14 }}
      whileHover={{ scale: 1.04, x: -6 }}
      whileTap={{ scale: 0.97 }}
      aria-label="Apply Now for Admissions 2025"
      style={{ "top": "85%" }}
      className="group fixed right-3 bottom-24 sm:right-5 sm:bottom-auto sm:-translate-y-1/2 z-50
                 inline-flex items-center gap-2 sm:gap-2.5 overflow-hidden
                 rounded-2xl px-4 py-3 sm:px-5 sm:py-4
                 text-white font-display font-bold text-sm sm:text-[15px] tracking-wide
                 bg-[linear-gradient(135deg,#16a34a_0%,#22c55e_55%,#facc15_140%)]
                 shadow-[0_20px_50px_-12px_rgba(22,163,74,0.65),0_0_0_1px_rgba(255,255,255,0.18)_inset]
                 ring-1 ring-white/20
                 before:absolute before:inset-0 before:rounded-2xl before:opacity-0
                 before:bg-[radial-gradient(120%_60%_at_50%_0%,rgba(255,255,255,0.35),transparent_60%)]
                 hover:before:opacity-100 before:transition-opacity"
    >
      {/* shimmer sweep */}
      <span className="pointer-events-none absolute -inset-y-2 -left-1/2 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm
                       translate-x-0 group-hover:translate-x-[260%] transition-transform duration-[1100ms] ease-out" />

      {/* pulse dot */}
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow-300 ring-2 ring-white/60" />
      </span>

      <Sparkles className="relative h-4 w-4 text-yellow-200 drop-shadow" />
      <span className="relative whitespace-nowrap">Apply Now</span>
      <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </motion.a>
  );
}
