import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
// import g1 from "@/assets/gallery-1.webp";
import g1 from "@/assets/gal_aerial_1.webp";
// import g2 from "@/assets/gallery-2.webp";
// import g3 from "@/assets/gallery-3.webp";
// import g4 from "@/assets/gallery-4.webp";
// import g5 from "@/assets/gallery-5.webp";
// import g6 from "@/assets/gallery-6.webp";
import s1 from "@/assets/gal_sports_1.webp";
import s2 from "@/assets/gal_sports_2.webp";
import s3 from "@/assets/gal_sports_3.webp";
import s4 from "@/assets/gal_sports_4.webp";
// import s5 from "@/assets/gal_sports_5.webp";
import s6 from "@/assets/gal_sports_6.webp";
import s7 from "@/assets/gal_sports_7.webp";

const items = [
  // { src: g1, cat: "Aerial", title: "Paddy fields at dawn", h: "row-span-2" },
  { src: g1, cat: "Aerial", h: "row-span-2" },
  // { src: g2, cat: "Campus", title: "Plant pathology lab", h: "" },
  // { src: g3, cat: "Aerial", title: "Polyhouse training", h: "" },
  // { src: g4, cat: "Laboratory", title: "Mechanised harvest", h: "row-span-2" },
  // { src: g5, cat: "Sports", title: "Graduation 2024", h: "" },
  { src: s1, cat: "Sports", h: "" },
  { src: s2, cat: "Sports", h: "" },
  { src: s3, cat: "Sports", h: "" },
  { src: s4, cat: "Sports", h: "" },
  // { src: s5, cat: "Sports", h: "" },
  { src: s6, cat: "Sports", h: "" },
  { src: s7, cat: "Sports", h: "" },
  // { src: g6, cat: "Farms", title: "From soil to sprout", h: "" },
];

const cats = ["All", "Aerial", "Campus", "Laboratory", "Farms", "Sports"];

export function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<string | null>(null);
  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-sm font-semibold text-primary tracking-widest uppercase">Gallery</div>
        <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
          Life on <span className="text-gradient">our campus.</span>
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

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {filtered.map((img, i) => (
            <motion.button
              key={img.src}
              layout
              onClick={() => setActive(img.src)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft ${img.h}`}
            >
              <img
                src={img.src}
                // alt={img.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
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
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm grid place-items-center p-4"
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
              className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full glass text-foreground"
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
