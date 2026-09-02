import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/images/Farms/Agriculture Farm/314A1197.jpg";
import g2 from "@/assets/images/Farms/Agriculture Farm/314A1207.jpg";
import g3 from "@/assets/images/Farms/Agriculture Farm/314A1213.jpg";
import g4 from "@/assets/images/Farms/Agriculture Farm/314A1219.jpg";
import g5 from "@/assets/images/Farms/Agriculture Farm/314A1225.jpg";
import g6 from "@/assets/images/Farms/Agriculture Farm/314A1227.jpg";
import g7 from "@/assets/images/Farms/Agriculture Farm/314A1231.jpg";
import g8 from "@/assets/images/Farms/Agriculture Farm/314A1265.jpg";
import g9 from "@/assets/images/Farms/Agriculture Farm/314A1754.jpg";
import g10 from "@/assets/images/Farms/Agriculture Farm/314A1757.jpg";
import g11 from "@/assets/images/Farms/Agriculture Farm/314A1764.jpg";
import g12 from "@/assets/images/Farms/Agriculture Farm/314A1772.jpg";
import g13 from "@/assets/images/Farms/Agriculture Farm/314A1777.jpg";
import g14 from "@/assets/images/Farms/Agriculture Farm/314A1782.jpg";
import g15 from "@/assets/images/Farms/Agriculture Farm/314A1786.jpg";
import g16 from "@/assets/images/Farms/Agriculture Farm/314A1797.jpg";
import g17 from "@/assets/images/Farms/Agriculture Farm/Agricultural Engineering.jpg";
import g18 from "@/assets/images/Farms/Agriculture Farm/IMG_8200-2.jpg";
import g19 from "@/assets/images/Farms/Agriculture Farm/IMG_8242-2.jpg";
import g20 from "@/assets/images/Farms/Agriculture Farm/IMG_8246-2.jpg";
import g21 from "@/assets/images/Farms/Agriculture Farm/IMG_8251-2.jpg";
import g22 from "@/assets/images/Farms/Agriculture Farm/IMG_8252-2.jpg";
import g23 from "@/assets/images/Farms/Agriculture Farm/IMG_8315.jpg";
import g24 from "@/assets/images/Farms/Agriculture Farm/JNP_5870.jpg";
import g25 from "@/assets/images/Farms/Agriculture Farm/JNP_5882.jpg";
import g26 from "@/assets/images/Farms/Agriculture Farm/JNP_5904.jpg";
import g27 from "@/assets/images/Farms/Agriculture Farm/JNP_5907.jpg";
import g28 from "@/assets/images/Farms/Agriculture Farm/South Farm.jpg";
import g29 from "@/assets/images/Farms/Agriculture Farm/Where every field.jpg";

const items = [
  { src: g1, cat: "Agriculture Farm", h: "" },
  { src: g2, cat: "Agriculture Farm", h: "" },
  { src: g3, cat: "Agriculture Farm", h: "" },
  { src: g4, cat: "Agriculture Farm", h: "" },
  { src: g5, cat: "Agriculture Farm", h: "" },
  { src: g6, cat: "Agriculture Farm", h: "" },
  { src: g7, cat: "Agriculture Farm", h: "" },
  { src: g8, cat: "Agriculture Farm", h: "" },
  { src: g9, cat: "Agriculture Farm", h: "" },
  { src: g10, cat: "Agriculture Farm", h: "" },
  { src: g11, cat: "Agriculture Farm", h: "" },
  { src: g12, cat: "Agriculture Farm", h: "" },
  { src: g13, cat: "Agriculture Farm", h: "" },
  { src: g14, cat: "Agriculture Farm", h: "" },
  { src: g15, cat: "Agriculture Farm", h: "" },
  { src: g16, cat: "Agriculture Farm", h: "" },
  { src: g17, cat: "Agriculture Farm", h: "" },
  { src: g18, cat: "Agriculture Farm", h: "" },
  { src: g19, cat: "Agriculture Farm", h: "" },
  { src: g20, cat: "Agriculture Farm", h: "" },
  { src: g21, cat: "Agriculture Farm", h: "" },
  { src: g22, cat: "Agriculture Farm", h: "" },
  { src: g23, cat: "Agriculture Farm", h: "" },
  { src: g24, cat: "Agriculture Farm", h: "" },
  { src: g25, cat: "Agriculture Farm", h: "" },
  { src: g26, cat: "Agriculture Farm", h: "" },
  { src: g27, cat: "Agriculture Farm", h: "" },
  { src: g28, cat: "Agriculture Farm", h: "" },
  { src: g29, cat: "Agriculture Farm", h: "" },
];

const cats = ["Agriculture Farm"];

export function Gallery() {
  const [filter, setFilter] = useState("Agriculture Farm");
  const [active, setActive] = useState<string | null>(null);
  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-sm font-semibold text-primary tracking-widest uppercase">Gallery</div>
        <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
          Agriculture Farm <span className="text-gradient">Gallery.</span>
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
