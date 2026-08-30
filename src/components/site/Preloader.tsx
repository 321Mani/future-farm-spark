import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/images/imayam_logo.jpg";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const t = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* subtle radial glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(22,163,74,0.12),transparent_60%)]" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative flex h-38 w-38 items-center justify-center rounded-3xl bg-card p-4 shadow-2xl ring-1 ring-primary/20">
              <img
                src={logo}
                alt="IIAT Logo"
                className="h-full w-full object-contain"
              />
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-primary/30"
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 font-display text-xl font-bold tracking-tight text-foreground"
          >
            Imayam Institute
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-1 text-sm text-muted-foreground"
          >
            of Agriculture & Technology
          </motion.p>

          {/* progress bar */}
          <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-3 text-xs text-muted-foreground"
          >
            Loading experience…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
