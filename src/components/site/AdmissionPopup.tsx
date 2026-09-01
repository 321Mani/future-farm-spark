import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight, GraduationCap } from "lucide-react";
import imayaminstaLogo from "@/assets/images/imayam_logo.jpg";
import admission1 from "@/assets/images/Admissions_1.jpg";
import admission2 from "@/assets/images/Admissions_2.jpg";
import admission3 from "@/assets/images/Admissions_3.jpg";

const bannerImages = [admission1, admission2, admission3];
const STORAGE_KEY = "iiat:admission-popup-index";

export function AdmissionPopup() {
  const [open, setOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    try {
      const stored = Number(localStorage.getItem(STORAGE_KEY) ?? "-1");
      const nextIndex = (Number.isFinite(stored) ? stored + 1 : 0) % bannerImages.length;
      setImgIndex(nextIndex);
      localStorage.setItem(STORAGE_KEY, String(nextIndex));
    } catch {
      setImgIndex(0);
    }
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      (window as any).__iiatPopupClosed = true;
      window.dispatchEvent(new Event("iiat:popup-closed"));
    }
  };


  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Admissions 2026 Newsletter"
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-card shadow-2xl ring-1 ring-white/10"
          >
            {/* gradient banner */}
            <div className="relative h-32 bg-[linear-gradient(135deg,#15803d_0%,#16a34a_45%,#facc15_120%)]">
              <div className="absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(255,255,255,0.35),transparent_60%)]" />
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/30 text-white hover:bg-black/50 transition"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 grid place-items-center rounded-2xl bg-white shadow-lg ring-4 ring-card" style={{ width: "150px"}}>
                <img src={imayaminstaLogo} alt="Imayam" className="object-contain" style={{ borderRadius: "50%" }} />
              </div>
            </div>

            <div className="px-6 pt-12 pb-6 text-center">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
                <Sparkles className="h-3 w-3" />
                Admissions 2026 Open
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-foreground">
                Shape the Future of Agriculture
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Apply now to B.Sc Agriculture & Horticulture 
                at our TNAU-affiliated 123-acre living campus.
              </p>

              <div className="mt-5 flex items-center justify-center gap-4 text-xs text-foreground/70">
                <span className="inline-flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  TNAU Affiliated
                </span>
                <span className="h-1 w-1 rounded-full bg-foreground/30" />
                <span>123-Acre Campus</span>
              </div>

              <a
                href="https://application.imayamagri.org/admission-form.html"
                target="_blank"
                rel="noopener"
                onClick={close}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#16a34a_0%,#22c55e_55%,#facc15_140%)] px-5 py-3.5 font-display font-bold text-white shadow-[0_15px_40px_-10px_rgba(22,163,74,0.6)] ring-1 ring-white/20 transition hover:scale-[1.02]"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={close}
                className="mt-3 text-xs text-muted-foreground hover:text-foreground transition"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
