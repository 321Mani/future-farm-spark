import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import cropImprovement1 from "@/assets/images/divisions/Crop Improvement/314A1956.jpg";
import cropImprovement2 from "@/assets/images/divisions/Crop Improvement/314A1963.jpg";
import cropImprovement3 from "@/assets/images/divisions/Crop Improvement/314A1964.jpg";
import cropImprovement4 from "@/assets/images/divisions/Crop Improvement/IMG_6858.jpg";
import cropImprovement5 from "@/assets/images/divisions/Crop Improvement/IMG_6876.jpg";
import cropImprovement6 from "@/assets/images/divisions/Crop Improvement/IMG_6881.jpg";
import cropImprovement7 from "@/assets/images/divisions/Crop Improvement/IMG_6882.jpg";
import cropImprovement8 from "@/assets/images/divisions/Crop Improvement/IMG_6989.jpg";
import cropImprovement9 from "@/assets/images/divisions/Crop Improvement/IMG_6996.jpg";
import cropImprovement10 from "@/assets/images/divisions/Crop Improvement/IMG_7003.jpg";
import cropImprovement11 from "@/assets/images/divisions/Crop Improvement/JNP_5410.jpg";
import cropImprovement12 from "@/assets/images/divisions/Crop Improvement/JNP_5435.jpg";
import cropImprovement13 from "@/assets/images/divisions/Crop Improvement/JNP_5438.jpg";
import cropImprovement14 from "@/assets/images/divisions/Crop Improvement/JNP_5466.jpg";
import cropImprovement15 from "@/assets/images/divisions/Crop Improvement/JNP_6309.jpg";
import cropImprovement16 from "@/assets/images/divisions/Crop Improvement/JNP_6311.jpg";
import cropImprovement17 from "@/assets/images/divisions/Crop Improvement/JNP_6314.jpg";
import cropImprovement18 from "@/assets/images/divisions/Crop Improvement/JNP_6319.jpg";
import cropImprovement19 from "@/assets/images/divisions/Crop Improvement/JNP_6340.jpg";
import cropImprovement20 from "@/assets/images/divisions/Crop Improvement/Screenshot 2026-08-27 120910.jpg";

const items = [
{ src: cropImprovement1, cat: "Crop Improvement", h: "" },
  { src: cropImprovement2, cat: "Crop Improvement", h: "" },
  { src: cropImprovement3, cat: "Crop Improvement", h: "" },
  { src: cropImprovement4, cat: "Crop Improvement", h: "" },
  { src: cropImprovement5, cat: "Crop Improvement", h: "" },
  { src: cropImprovement6, cat: "Crop Improvement", h: "" },
  { src: cropImprovement7, cat: "Crop Improvement", h: "" },
  { src: cropImprovement8, cat: "Crop Improvement", h: "" },
  { src: cropImprovement9, cat: "Crop Improvement", h: "" },
  { src: cropImprovement10, cat: "Crop Improvement", h: "" },
  { src: cropImprovement11, cat: "Crop Improvement", h: "" },
  { src: cropImprovement12, cat: "Crop Improvement", h: "" },
  { src: cropImprovement13, cat: "Crop Improvement", h: "" },
  { src: cropImprovement14, cat: "Crop Improvement", h: "" },
  { src: cropImprovement15, cat: "Crop Improvement", h: "" },
  { src: cropImprovement16, cat: "Crop Improvement", h: "" },
  { src: cropImprovement17, cat: "Crop Improvement", h: "" },
  { src: cropImprovement18, cat: "Crop Improvement", h: "" },
  { src: cropImprovement19, cat: "Crop Improvement", h: "" },
  { src: cropImprovement20, cat: "Crop Improvement", h: "" },
];

const cats = ["Crop Improvement"];

export function Gallery() {
  const [filter, setFilter] = useState("Crop Improvement");
  const [active, setActive] = useState<string | null>(null);
  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-sm font-semibold text-primary tracking-widest uppercase">Gallery</div>
        <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
          Crop Improvement <span className="text-gradient">Gallery.</span>
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
