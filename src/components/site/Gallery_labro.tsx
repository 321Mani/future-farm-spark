import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import g1 from "@/assets/images/Laboratories/Agricultural Biotechnology Lab/JNP_6309.jpg";
import g2 from "@/assets/images/Laboratories/Agricultural Biotechnology Lab/JNP_6311.jpg";
import g3 from "@/assets/images/Laboratories/Agricultural Biotechnology Lab/JNP_6314.jpg";
import g4 from "@/assets/images/Laboratories/Agricultural Biotechnology Lab/JNP_6319.jpg";
import g5 from "@/assets/images/Laboratories/Agricultural Biotechnology Lab/JNP_6340.jpg";

import g6 from "@/assets/images/Laboratories/Agricultural Microbiology Lab/314A1197.jpg";
import g7 from "@/assets/images/Laboratories/Agricultural Microbiology Lab/314A1207.jpg";
import g8 from "@/assets/images/Laboratories/Agricultural Microbiology Lab/314A1977.jpg";
import g9 from "@/assets/images/Laboratories/Agricultural Microbiology Lab/JNP_5479.jpg";
import g10 from "@/assets/images/Laboratories/Agricultural Microbiology Lab/JNP_5483.jpg";
import g11 from "@/assets/images/Laboratories/Agricultural Microbiology Lab/JNP_5497.jpg";
import g12 from "@/assets/images/Laboratories/Agricultural Microbiology Lab/JNP_5513.jpg";
import g13 from "@/assets/images/Laboratories/Agricultural Microbiology Lab/JNP_5559.jpg";
import g14 from "@/assets/images/Laboratories/Agricultural Microbiology Lab/JNP_5571.jpg";

import g15 from "@/assets/images/Laboratories/Agrometeorology Observatory/314A1559.jpg";
import g16 from "@/assets/images/Laboratories/Agrometeorology Observatory/314A1569.jpg";

import g17 from "@/assets/images/Laboratories/Agronomy/314A1213.jpg";
import g18 from "@/assets/images/Laboratories/Agronomy/314A1219.jpg";
import g19 from "@/assets/images/Laboratories/Agronomy/314A1225.jpg";
import g20 from "@/assets/images/Laboratories/Agronomy/314A1227.jpg";
import g21 from "@/assets/images/Laboratories/Agronomy/314A1231.jpg";
import g22 from "@/assets/images/Laboratories/Agronomy/JNP_5882.jpg";
import g23 from "@/assets/images/Laboratories/Agronomy/JNP_5904.jpg";
import g24 from "@/assets/images/Laboratories/Agronomy/Screenshot 2026-08-27 121054.png";
import g25 from "@/assets/images/Laboratories/Agronomy/Screenshot 2026-08-27 121205.png";

import g26 from "@/assets/images/Laboratories/Biochemistry Lab/314A1512.jpg";
import g27 from "@/assets/images/Laboratories/Biochemistry Lab/314A1520.jpg";
import g28 from "@/assets/images/Laboratories/Biochemistry Lab/314A1933.jpg";
import g29 from "@/assets/images/Laboratories/Biochemistry Lab/314A1937.jpg";

import g30 from "@/assets/images/Laboratories/Computer Lab/cc 2.jpg";
import g31 from "@/assets/images/Laboratories/Computer Lab/cc 3.jpg";
import g32 from "@/assets/images/Laboratories/Computer Lab/cc.jpg";

import g33 from "@/assets/images/Laboratories/Entomology Lab/314A1360.jpg";
import g34 from "@/assets/images/Laboratories/Entomology Lab/314A1362.jpg";
import g35 from "@/assets/images/Laboratories/Entomology Lab/314A1370.jpg";
import g36 from "@/assets/images/Laboratories/Entomology Lab/JNP_6370.jpg";
import g37 from "@/assets/images/Laboratories/Entomology Lab/JNP_6373.jpg";
import g38 from "@/assets/images/Laboratories/Entomology Lab/Plant Protectio3.jpg";
import g39 from "@/assets/images/Laboratories/Entomology Lab/Plant Protection.jpg";
import g40 from "@/assets/images/Laboratories/Entomology Lab/Plant Protection2.jpg";
import g41 from "@/assets/images/Laboratories/Entomology Lab/Plant Protection3.jpg";

import g42 from "@/assets/images/Laboratories/Environmental Science/IMG_8747.jpg";
import g43 from "@/assets/images/Laboratories/Environmental Science/JNP_5309.jpg";
import g44 from "@/assets/images/Laboratories/Environmental Science/JNP_5350.jpg";
import g45 from "@/assets/images/Laboratories/Environmental Science/JNP_5378.jpg";
import g46 from "@/assets/images/Laboratories/Environmental Science/sawdew.jpg";
import g47 from "@/assets/images/Laboratories/Environmental Science/Screenshot 2026-08-27 115730.jpg";
import g48 from "@/assets/images/Laboratories/Environmental Science/Screenshot 2026-08-27 115846.jpg";

import g49 from "@/assets/images/Laboratories/Machinery and Equipment in Workshop/Agricultural Engineering.jpg";
import g50 from "@/assets/images/Laboratories/Machinery and Equipment in Workshop/Agricultural Engineering2.jpg";
import g51 from "@/assets/images/Laboratories/Machinery and Equipment in Workshop/Agricultural Engineering3.jpg";
import g52 from "@/assets/images/Laboratories/Machinery and Equipment in Workshop/Agricultural EngineeringSDFW.jpg";

import g53 from "@/assets/images/Laboratories/Plant Breeding and Genetics Lab/314A1956.jpg";
import g54 from "@/assets/images/Laboratories/Plant Breeding and Genetics Lab/JNP_5410.jpg";
import g55 from "@/assets/images/Laboratories/Plant Breeding and Genetics Lab/JNP_5435.jpg";
import g56 from "@/assets/images/Laboratories/Plant Breeding and Genetics Lab/JNP_5438.jpg";
import g57 from "@/assets/images/Laboratories/Plant Breeding and Genetics Lab/JNP_5466.jpg";

import g58 from "@/assets/images/Laboratories/Plant Pathology/JNP_6417.jpg";
import g59 from "@/assets/images/Laboratories/Plant Pathology/JNP_6426.jpg";

import g60 from "@/assets/images/Laboratories/Seed Science & Technology Lab/314A1963.jpg";
import g61 from "@/assets/images/Laboratories/Seed Science & Technology Lab/314A1964.jpg";

import g62 from "@/assets/images/Laboratories/Soil Science and Agricultural Chemistry Lab/314A1520.jpg";
import g63 from "@/assets/images/Laboratories/Soil Science and Agricultural Chemistry Lab/JNP_5260.jpg";
import g64 from "@/assets/images/Laboratories/Soil Science and Agricultural Chemistry Lab/JNP_5307.jpg";
import g65 from "@/assets/images/Laboratories/Soil Science and Agricultural Chemistry Lab/JNP_5371.jpg";

const items = [
  // Agricultural Biotechnology Lab
  { src: g1, cat: "Agricultural Biotechnology Lab", h: "" },
  { src: g2, cat: "Agricultural Biotechnology Lab", h: "" },
  { src: g3, cat: "Agricultural Biotechnology Lab", h: "" },
  { src: g4, cat: "Agricultural Biotechnology Lab", h: "" },
  { src: g5, cat: "Agricultural Biotechnology Lab", h: "" },

  // Agricultural Microbiology Lab
  { src: g6, cat: "Agricultural Microbiology Lab", h: "" },
  { src: g7, cat: "Agricultural Microbiology Lab", h: "" },
  { src: g8, cat: "Agricultural Microbiology Lab", h: "" },
  { src: g9, cat: "Agricultural Microbiology Lab", h: "" },
  { src: g10, cat: "Agricultural Microbiology Lab", h: "" },
  { src: g11, cat: "Agricultural Microbiology Lab", h: "" },
  { src: g12, cat: "Agricultural Microbiology Lab", h: "" },
  { src: g13, cat: "Agricultural Microbiology Lab", h: "" },
  { src: g14, cat: "Agricultural Microbiology Lab", h: "" },

  // Agrometeorology Observatory
  { src: g15, cat: "Agrometeorology Observatory", h: "" },
  { src: g16, cat: "Agrometeorology Observatory", h: "" },

  // Agronomy
  { src: g17, cat: "Agronomy", h: "" },
  { src: g18, cat: "Agronomy", h: "" },
  { src: g19, cat: "Agronomy", h: "" },
  { src: g20, cat: "Agronomy", h: "" },
  { src: g21, cat: "Agronomy", h: "" },
  { src: g22, cat: "Agronomy", h: "" },
  { src: g23, cat: "Agronomy", h: "" },
  { src: g24, cat: "Agronomy", h: "" },
  { src: g25, cat: "Agronomy", h: "" },

  // Biochemistry Lab
  { src: g26, cat: "Biochemistry Lab", h: "" },
  { src: g27, cat: "Biochemistry Lab", h: "" },
  { src: g28, cat: "Biochemistry Lab", h: "" },
  { src: g29, cat: "Biochemistry Lab", h: "" },

  // Computer Lab
  { src: g30, cat: "Computer Lab", h: "" },
  { src: g31, cat: "Computer Lab", h: "" },
  { src: g32, cat: "Computer Lab", h: "" },

  // Entomology Lab
  { src: g33, cat: "Entomology Lab", h: "" },
  { src: g34, cat: "Entomology Lab", h: "" },
  { src: g35, cat: "Entomology Lab", h: "" },
  { src: g36, cat: "Entomology Lab", h: "" },
  { src: g37, cat: "Entomology Lab", h: "" },
  { src: g38, cat: "Entomology Lab", h: "" },
  { src: g39, cat: "Entomology Lab", h: "" },
  { src: g40, cat: "Entomology Lab", h: "" },
  { src: g41, cat: "Entomology Lab", h: "" },

  // Environmental Science
  { src: g42, cat: "Environmental Science", h: "" },
  { src: g43, cat: "Environmental Science", h: "" },
  { src: g44, cat: "Environmental Science", h: "" },
  { src: g45, cat: "Environmental Science", h: "" },
  { src: g46, cat: "Environmental Science", h: "" },
  { src: g47, cat: "Environmental Science", h: "" },
  { src: g48, cat: "Environmental Science", h: "" },

  // Machinery and Equipment in Workshop
  { src: g49, cat: "Machinery and Equipment in Workshop", h: "" },
  { src: g50, cat: "Machinery and Equipment in Workshop", h: "" },
  { src: g51, cat: "Machinery and Equipment in Workshop", h: "" },
  { src: g52, cat: "Machinery and Equipment in Workshop", h: "" },

  // Plant Breeding and Genetics Lab
  { src: g53, cat: "Plant Breeding and Genetics Lab", h: "" },
  { src: g54, cat: "Plant Breeding and Genetics Lab", h: "" },
  { src: g55, cat: "Plant Breeding and Genetics Lab", h: "" },
  { src: g56, cat: "Plant Breeding and Genetics Lab", h: "" },
  { src: g57, cat: "Plant Breeding and Genetics Lab", h: "" },

  // Plant Pathology
  { src: g58, cat: "Plant Pathology", h: "" },
  { src: g59, cat: "Plant Pathology", h: "" },

  // Seed Science & Technology Lab
  { src: g60, cat: "Seed Science & Technology Lab", h: "" },
  { src: g61, cat: "Seed Science & Technology Lab", h: "" },

  // Soil Science and Agricultural Chemistry Lab
  { src: g62, cat: "Soil Science and Agricultural Chemistry Lab", h: "" },
  { src: g63, cat: "Soil Science and Agricultural Chemistry Lab", h: "" },
  { src: g64, cat: "Soil Science and Agricultural Chemistry Lab", h: "" },
  { src: g65, cat: "Soil Science and Agricultural Chemistry Lab", h: "" },
];

const cats = [
  "Agricultural Biotechnology Lab",
  "Agricultural Microbiology Lab",
  "Agrometeorology Observatory",
  "Agronomy",
  "Biochemistry Lab",
  "Computer Lab",
  "Entomology Lab",
  "Environmental Science",
  "Machinery and Equipment in Workshop",
  "Plant Breeding and Genetics Lab",
  "Plant Pathology",
  "Seed Science & Technology Lab",
  "Soil Science and Agricultural Chemistry Lab",
];

export function Gallery() {
  const [filter, setFilter] = useState("Agricultural Biotechnology Lab");
  const [active, setActive] = useState<string | null>(null);
  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-sm font-semibold text-primary tracking-widest uppercase">Gallery</div>
        <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
          Labratory <span className="text-gradient">Gallery.</span>
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
