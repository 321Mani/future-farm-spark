import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
// import g1 from "@/assets/gallery-1.jpg";
import g1 from "@/assets/gal_aerial_1.jpg";
// import g2 from "@/assets/gallery-2.jpg";
// import g3 from "@/assets/gallery-3.jpg";
// import g4 from "@/assets/gallery-4.jpg";
// import g5 from "@/assets/gallery-5.jpg";
// import g6 from "@/assets/gallery-6.jpg";
import s1 from "@/assets/gal_sports_1.jpg";
import s2 from "@/assets/gal_sports_2.jpg";
import s3 from "@/assets/gal_sports_3.jpg";
import s4 from "@/assets/gal_sports_4.jpg";
// import s5 from "@/assets/gal_sports_5.jpg";
import s6 from "@/assets/gal_sports_6.jpg";
import s7 from "@/assets/gal_sports_7.jpg";

import aerial_1 from "@/assets/images/aerial/1 (1).jpg";
import aerial_2 from "@/assets/images/aerial/1 (2).jpg";
import aerial_3 from "@/assets/images/aerial/1 (3).jpg";
import aerial_4 from "@/assets/images/aerial/1 (4).jpg";

import campus_1 from "@/assets/images/campus/1 (1).jpg";
import campus_2 from "@/assets/images/campus/1 (2).jpg";
import campus_3 from "@/assets/images/campus/1 (3).jpg";
import campus_4 from "@/assets/images/campus/1 (4).jpg";
import campus_5 from "@/assets/images/campus/1 (5).jpg";
import campus_6 from "@/assets/images/campus/1 (6).jpg";
import campus_7 from "@/assets/images/campus/1 (7).jpg";
import campus_8 from "@/assets/images/campus/1 (8).jpg";

import labJNP_6309 from "@/assets/images/Laboratories/Agricultural Biotechnology Lab/JNP_6309.jpg";
import lab314A1197 from "@/assets/images/Laboratories/Agricultural Microbiology Lab/314A1197.jpg";
import lab314A1559 from "@/assets/images/Laboratories/Agrometeorology Observatory/314A1559.jpg";
import lab314A1213 from "@/assets/images/Laboratories/Agronomy/314A1213.jpg";
import lab314A1512 from "@/assets/images/Laboratories/Biochemistry Lab/314A1512.jpg";
import lab2 from "@/assets/images/Laboratories/Computer Lab/cc 2.jpg";
import lab314A1360 from "@/assets/images/Laboratories/Entomology Lab/314A1360.jpg";
import labIMG_8747 from "@/assets/images/Laboratories/Environmental Science/IMG_8747.jpg";
import labEngineering from "@/assets/images/Laboratories/Machinery and Equipment in Workshop/Agricultural Engineering.jpg";
import lab314A1956 from "@/assets/images/Laboratories/Plant Breeding and Genetics Lab/314A1956.jpg";
import labJNP_6417 from "@/assets/images/Laboratories/Plant Pathology/JNP_6417.jpg";
import lab314A1963 from "@/assets/images/Laboratories/Seed Science & Technology Lab/314A1963.jpg";
import labJNP_5260 from "@/assets/images/Laboratories/Soil Science and Agricultural Chemistry Lab/JNP_5260.jpg";

import Farms_314A1559 from "@/assets/images/Farms/Weather Data/314A1559.jpg";
import Farms_314A1961 from "@/assets/images/Farms/Seed Production/314A1961.jpg";
import Farms_314A1797 from "@/assets/images/Farms/Daily & Live Stock/314A1797.jpg";
import Farms_314A1197 from "@/assets/images/Farms/Agriculture Farm/314A1197.jpg";
import Farms_314A1293 from "@/assets/images/Farms/Horticulture Farm/314A1293.jpg";

const items = [
  // { src: g1, cat: "Aerial", title: "Paddy fields at dawn", h: "row-span-2" },
  // { src: g1, cat: "Aerial", h: "row-span-2" },
  { src: aerial_1, cat: "Aerial", h: "row-span-2" },
  { src: aerial_2, cat: "Aerial", h: "row-span-2" },
  { src: aerial_3, cat: "Aerial", h: "row-span-2" },
  { src: aerial_4, cat: "Aerial", h: "row-span-2" },

  { src: campus_1, cat: "Campus", h: "row-span-2" },
  { src: campus_2, cat: "Campus", h: "row-span-2" },
  { src: campus_3, cat: "Campus", h: "row-span-2" },
  { src: campus_4, cat: "Campus", h: "row-span-2" },
  { src: campus_5, cat: "Campus", h: "row-span-2" },
  { src: campus_6, cat: "Campus", h: "row-span-2" },
  { src: campus_7, cat: "Campus", h: "row-span-2" },
  { src: campus_8, cat: "Campus", h: "row-span-2" },

  { src: labJNP_6309, cat: "Laboratory", h: "row-span-2" },
  { src: lab314A1197, cat: "Laboratory", h: "row-span-2" },
  { src: lab314A1559, cat: "Laboratory", h: "row-span-2" },
  { src: lab314A1213, cat: "Laboratory", h: "row-span-2" },
  { src: lab314A1512, cat: "Laboratory", h: "row-span-2" },
  { src: lab2, cat: "Laboratory", h: "row-span-2" },
  { src: lab314A1360, cat: "Laboratory", h: "row-span-2" },
  { src: labIMG_8747, cat: "Laboratory", h: "row-span-2" },
  { src: labEngineering, cat: "Laboratory", h: "row-span-2" },
  { src: lab314A1956, cat: "Laboratory", h: "row-span-2" },
  { src: labJNP_6417, cat: "Laboratory", h: "row-span-2" },
  { src: lab314A1963, cat: "Laboratory", h: "row-span-2" },
  { src: labJNP_5260, cat: "Laboratory", h: "row-span-2" },

  { src: Farms_314A1559, cat: "Farms", h: "row-span-2" },
  { src: Farms_314A1961, cat: "Farms", h: "row-span-2" },
  { src: Farms_314A1797, cat: "Farms", h: "row-span-2" },
  { src: Farms_314A1197, cat: "Farms", h: "row-span-2" },
  { src: Farms_314A1293, cat: "Farms", h: "row-span-2" },

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
  const [filter, setFilter] = useState("Aerial");
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
