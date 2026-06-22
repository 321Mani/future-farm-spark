import { motion } from "framer-motion";

export function ApplyNowSticky() {
  return (
    <motion.a
      href="https://forms.gle/sZDYU2U9T4HH8wdq5"
      target="_blank"
      rel="noopener"
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.05, x: -4 }}
      aria-label="Apply Now"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center
                 rounded-l-2xl bg-gradient-to-b from-[#16a34a] to-[#15803d]
                 px-3 py-6 text-white font-display font-bold tracking-[0.25em] uppercase
                 shadow-[0_10px_40px_-8px_rgba(22,163,74,0.6)] ring-1 ring-white/20
                 hover:from-[#15803d] hover:to-[#166534] transition-colors"
      style={{ writingMode: "vertical-rl" }}
    >
      <span className="absolute -left-1 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-accent animate-ping" />
      Apply Now
    </motion.a>
  );
}
