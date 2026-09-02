import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import g73 from "@/assets/images/Farms/Seed Production/314A1961.jpg";
import g74 from "@/assets/images/Farms/Seed Production/314A1964.jpg";
import g75 from "@/assets/images/Farms/Seed Production/IMG_6858.jpg";
import g76 from "@/assets/images/Farms/Seed Production/IMG_6876.jpg";
import g77 from "@/assets/images/Farms/Seed Production/IMG_6881.jpg";
import g78 from "@/assets/images/Farms/Seed Production/IMG_6882.jpg";
import g79 from "@/assets/images/Farms/Seed Production/IMG_6989.jpg";
import g80 from "@/assets/images/Farms/Seed Production/IMG_6996.jpg";
import g81 from "@/assets/images/Farms/Seed Production/IMG_7003.jpg";
import g82 from "@/assets/images/Farms/Seed Production/Screenshot 2026-08-27 120910.png.jpg";

const items = [
  { src: g73, cat: "Seed Production", h: "" },
  { src: g74, cat: "Seed Production", h: "" },
  { src: g75, cat: "Seed Production", h: "" },
  { src: g76, cat: "Seed Production", h: "" },
  { src: g77, cat: "Seed Production", h: "" },
  { src: g78, cat: "Seed Production", h: "" },
  { src: g79, cat: "Seed Production", h: "" },
  { src: g80, cat: "Seed Production", h: "" },
  { src: g81, cat: "Seed Production", h: "" },
  { src: g82, cat: "Seed Production", h: "" },
];

const cats = [
  "Seed Production",
];

export function Gallery() {
  const [filter, setFilter] = useState("Seed Production");
  const [active, setActive] = useState<string | null>(null);
  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-sm font-semibold text-primary tracking-widest uppercase">Gallery</div>
        <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
          Seed Production <span className="text-gradient">Gallery.</span>
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === c
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {filtered.map((img, i) => (
            <motion.button
              key={img.src}
              layout
              onClick={() => setActive(img.src)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`group relative self-start overflow-hidden rounded-2xl shadow-soft`}
            >
              <img
                src={img.src}
                // alt={img.title}
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-4 text-left">
                <div className="text-[10px] uppercase tracking-widest text-accent">{img.cat}</div>
                {/* <div className="text-sm font-semibold text-white">{img.title}</div> */}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-sm grid place-items-center p-4"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={active}
              alt=""
              className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-glow"
            />
            <button
              onClick={() => setActive(null)}
              className="fixed top-4 right-4 z-[130] grid h-12 w-12 place-items-center rounded-full bg-white/90 text-black shadow-lg hover:bg-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
