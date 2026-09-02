import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/activities/activities (1).jpg";
import g_1 from "@/assets/activities/activities (1).png";

import g2 from "@/assets/activities/activities (2).jpg";
import g_2 from "@/assets/activities/activities (2).png";

import g3 from "@/assets/activities/activities (3).jpg";
import g_3 from "@/assets/activities/activities (3).png";

import g4 from "@/assets/activities/activities (4).jpg";
import g_4 from "@/assets/activities/activities (4).jpg";

import g5 from "@/assets/activities/activities (5).jpg";
import g6 from "@/assets/activities/activities (6).jpg";
import g7 from "@/assets/activities/activities (7).jpg";
import g8 from "@/assets/activities/activities (8).jpg";
import g9 from "@/assets/activities/activities (9).jpg";
import g10 from "@/assets/activities/activities (10).jpg";
import g11 from "@/assets/activities/activities (11).jpg";
import g12 from "@/assets/activities/activities (12).jpg";
import g13 from "@/assets/activities/activities (13).jpg";
import g14 from "@/assets/activities/activities (14).jpg";


// Volunteers - JPG
import v1 from "@/assets/activities/volunteers (1).jpg";
import v2 from "@/assets/activities/volunteers (2).jpg";
import v3 from "@/assets/activities/volunteers (3).jpg";
import v4 from "@/assets/activities/volunteers (4).jpg";
import v5 from "@/assets/activities/volunteers (5).jpg";
import v6 from "@/assets/activities/volunteers (6).jpg";
import v7 from "@/assets/activities/volunteers (7).jpg";
import v8 from "@/assets/activities/volunteers (8).jpg";
import v9 from "@/assets/activities/volunteers (9).jpg";
import v10 from "@/assets/activities/volunteers (10).jpg";
import v11 from "@/assets/activities/volunteers (11).jpg";
import v12 from "@/assets/activities/volunteers (12).jpg";
import v13 from "@/assets/activities/volunteers (13).jpg";


// Volunteers - PNG
import v_1 from "@/assets/activities/volunteers (1).png";
import v_2 from "@/assets/activities/volunteers (2).png";
import v_3 from "@/assets/activities/volunteers (3).png";
import v_4 from "@/assets/activities/volunteers (4).png";
import v_5 from "@/assets/activities/volunteers (5).png";
import v_6 from "@/assets/activities/volunteers (6).png";
import v_7 from "@/assets/activities/volunteers (7).png";


const items = [
  // Activities
  { src: g1, cat: "NSS Activities", h: "" },
  { src: g_1, cat: "NSS Activities", h: "" },
  { src: g2, cat: "NSS Activities", h: "" },
  { src: g_2, cat: "NSS Activities", h: "" },
  { src: g3, cat: "NSS Activities", h: "" },
  { src: g_3, cat: "NSS Activities", h: "" },
  { src: g4, cat: "NSS Activities", h: "" },
  { src: g_4, cat: "NSS Activities", h: "" },
  { src: g5, cat: "NSS Activities", h: "" },
  { src: g6, cat: "NSS Activities", h: "" },
  { src: g7, cat: "NSS Activities", h: "" },
  { src: g8, cat: "NSS Activities", h: "" },
  { src: g9, cat: "NSS Activities", h: "" },
  { src: g10, cat: "NSS Activities", h: "" },
  { src: g11, cat: "NSS Activities", h: "" },
  { src: g12, cat: "NSS Activities", h: "" },
  { src: g13, cat: "NSS Activities", h: "" },
  { src: g14, cat: "NSS Activities", h: "" },

  // Volunteers - JPG
  { src: v1, cat: "Volunteers", h: "" },
  { src: v2, cat: "Volunteers", h: "" },
  { src: v3, cat: "Volunteers", h: "" },
  { src: v4, cat: "Volunteers", h: "" },
  { src: v5, cat: "Volunteers", h: "" },
  { src: v6, cat: "Volunteers", h: "" },
  { src: v7, cat: "Volunteers", h: "" },
  { src: v8, cat: "Volunteers", h: "" },
  { src: v9, cat: "Volunteers", h: "" },
  { src: v10, cat: "Volunteers", h: "" },
  { src: v11, cat: "Volunteers", h: "" },
  { src: v12, cat: "Volunteers", h: "" },
  { src: v13, cat: "Volunteers", h: "" },

  // Volunteers - PNG
  { src: v_1, cat: "Volunteers", h: "" },
  { src: v_2, cat: "Volunteers", h: "" },
  { src: v_3, cat: "Volunteers", h: "" },
  { src: v_4, cat: "Volunteers", h: "" },
  { src: v_5, cat: "Volunteers", h: "" },
  { src: v_6, cat: "Volunteers", h: "" },
  { src: v_7, cat: "Volunteers", h: "" },
];

const cats = ["NSS Activities", "Volunteers"];

export function Gallery() {
  const [filter, setFilter] = useState("NSS Activities");
  const [active, setActive] = useState<string | null>(null);
  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-sm font-semibold text-primary tracking-widest uppercase">Gallery</div>
        <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
          NSS <span className="text-gradient">Gallery.</span>
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
              className={`group relative overflow-hidden rounded-2xl shadow-soft`}
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
