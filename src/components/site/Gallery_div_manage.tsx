import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import cropManagement1 from "@/assets/images/divisions/Crop Management/314A1197.jpg";
import cropManagement2 from "@/assets/images/divisions/Crop Management/314A1207.jpg";
import cropManagement3 from "@/assets/images/divisions/Crop Management/314A1213.jpg";
import cropManagement4 from "@/assets/images/divisions/Crop Management/314A1219.jpg";
import cropManagement5 from "@/assets/images/divisions/Crop Management/314A1225.jpg";
import cropManagement6 from "@/assets/images/divisions/Crop Management/314A1227.jpg";
import cropManagement7 from "@/assets/images/divisions/Crop Management/314A1231.jpg";
import cropManagement8 from "@/assets/images/divisions/Crop Management/314A1512.jpg";
import cropManagement9 from "@/assets/images/divisions/Crop Management/314A1520.jpg";
import cropManagement10 from "@/assets/images/divisions/Crop Management/314A1933.jpg";
import cropManagement11 from "@/assets/images/divisions/Crop Management/314A1937.jpg";
import cropManagement12 from "@/assets/images/divisions/Crop Management/314A1977.jpg";
import cropManagement13 from "@/assets/images/divisions/Crop Management/IMG_8747.jpg";
import cropManagement14 from "@/assets/images/divisions/Crop Management/JNP_5260.jpg";
import cropManagement15 from "@/assets/images/divisions/Crop Management/JNP_5307.jpg";
import cropManagement16 from "@/assets/images/divisions/Crop Management/JNP_5309.jpg";
import cropManagement17 from "@/assets/images/divisions/Crop Management/JNP_5350.jpg";
import cropManagement18 from "@/assets/images/divisions/Crop Management/JNP_5371.jpg";
import cropManagement19 from "@/assets/images/divisions/Crop Management/JNP_5378.jpg";
import cropManagement20 from "@/assets/images/divisions/Crop Management/JNP_5479.jpg";
import cropManagement21 from "@/assets/images/divisions/Crop Management/JNP_5483.jpg";
import cropManagement22 from "@/assets/images/divisions/Crop Management/JNP_5497.jpg";
import cropManagement23 from "@/assets/images/divisions/Crop Management/JNP_5513.jpg";
import cropManagement24 from "@/assets/images/divisions/Crop Management/JNP_5559.jpg";
import cropManagement25 from "@/assets/images/divisions/Crop Management/JNP_5571.jpg";
import cropManagement26 from "@/assets/images/divisions/Crop Management/JNP_5882.jpg";
import cropManagement27 from "@/assets/images/divisions/Crop Management/JNP_5904.jpg";
import cropManagement28 from "@/assets/images/divisions/Crop Management/sawdew.png.png.jpg";
import cropManagement29 from "@/assets/images/divisions/Crop Management/Screenshot 2026-08-27 115730.jpg";
import cropManagement30 from "@/assets/images/divisions/Crop Management/Screenshot 2026-08-27 115846.png.png.jpg";

const items = [
  { src: cropManagement1, cat: "Crop Management", h: "" },
  { src: cropManagement2, cat: "Crop Management", h: "" },
  { src: cropManagement3, cat: "Crop Management", h: "" },
  { src: cropManagement4, cat: "Crop Management", h: "" },
  { src: cropManagement5, cat: "Crop Management", h: "" },
  { src: cropManagement6, cat: "Crop Management", h: "" },
  { src: cropManagement7, cat: "Crop Management", h: "" },
  { src: cropManagement8, cat: "Crop Management", h: "" },
  { src: cropManagement9, cat: "Crop Management", h: "" },
  { src: cropManagement10, cat: "Crop Management", h: "" },
  { src: cropManagement11, cat: "Crop Management", h: "" },
  { src: cropManagement12, cat: "Crop Management", h: "" },
  { src: cropManagement13, cat: "Crop Management", h: "" },
  { src: cropManagement14, cat: "Crop Management", h: "" },
  { src: cropManagement15, cat: "Crop Management", h: "" },
  { src: cropManagement16, cat: "Crop Management", h: "" },
  { src: cropManagement17, cat: "Crop Management", h: "" },
  { src: cropManagement18, cat: "Crop Management", h: "" },
  { src: cropManagement19, cat: "Crop Management", h: "" },
  { src: cropManagement20, cat: "Crop Management", h: "" },
  { src: cropManagement21, cat: "Crop Management", h: "" },
  { src: cropManagement22, cat: "Crop Management", h: "" },
  { src: cropManagement23, cat: "Crop Management", h: "" },
  { src: cropManagement24, cat: "Crop Management", h: "" },
  { src: cropManagement25, cat: "Crop Management", h: "" },
  { src: cropManagement26, cat: "Crop Management", h: "" },
  { src: cropManagement27, cat: "Crop Management", h: "" },
  { src: cropManagement28, cat: "Crop Management", h: "" },
  { src: cropManagement29, cat: "Crop Management", h: "" },
  { src: cropManagement30, cat: "Crop Management", h: "" },

];

const cats = ["Crop Management"];

export function Gallery() {
  const [filter, setFilter] = useState("Crop Management");
  const [active, setActive] = useState<string | null>(null);
  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-sm font-semibold text-primary tracking-widest uppercase">Gallery</div>
        <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
          Crop Management <span className="text-gradient">Gallery.</span>
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

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-[250px] gap-4">
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
