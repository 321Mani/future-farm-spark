import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import g38 from "@/assets/images/Farms/Horticulture Farm/314A1293.jpg";
import g39 from "@/assets/images/Farms/Horticulture Farm/314A1297.jpg";
import g40 from "@/assets/images/Farms/Horticulture Farm/314A1311.jpg";
import g41 from "@/assets/images/Farms/Horticulture Farm/314A1325.jpg";
import g42 from "@/assets/images/Farms/Horticulture Farm/314A1327.jpg";
import g43 from "@/assets/images/Farms/Horticulture Farm/314A1329.jpg";
import g44 from "@/assets/images/Farms/Horticulture Farm/314A1331.jpg";
import g45 from "@/assets/images/Farms/Horticulture Farm/314A1335.jpg";
import g46 from "@/assets/images/Farms/Horticulture Farm/314A1344.jpg";
import g47 from "@/assets/images/Farms/Horticulture Farm/314A1679.jpg";
import g48 from "@/assets/images/Farms/Horticulture Farm/314A1691.jpg";
import g49 from "@/assets/images/Farms/Horticulture Farm/314A1701.jpg";
import g50 from "@/assets/images/Farms/Horticulture Farm/314A1708.jpg";
import g51 from "@/assets/images/Farms/Horticulture Farm/314A1710.jpg";
import g52 from "@/assets/images/Farms/Horticulture Farm/314A1712.jpg";
import g53 from "@/assets/images/Farms/Horticulture Farm/314A1718.jpg";
import g54 from "@/assets/images/Farms/Horticulture Farm/314A1720.jpg";
import g55 from "@/assets/images/Farms/Horticulture Farm/314A1724.jpg";
import g56 from "@/assets/images/Farms/Horticulture Farm/314A1777.jpg";
import g57 from "@/assets/images/Farms/Horticulture Farm/314A1782.jpg";
import g58 from "@/assets/images/Farms/Horticulture Farm/314A1786.jpg";
import g59 from "@/assets/images/Farms/Horticulture Farm/Horticulture1.jpg";
import g60 from "@/assets/images/Farms/Horticulture Farm/Horticulture2.jpg";
import g61 from "@/assets/images/Farms/Horticulture Farm/Horticulture3.jpg";
import g62 from "@/assets/images/Farms/Horticulture Farm/IMG_0641.jpg";
import g63 from "@/assets/images/Farms/Horticulture Farm/IMG_0663.jpg";
import g64 from "@/assets/images/Farms/Horticulture Farm/IMG_0668.jpg";
import g65 from "@/assets/images/Farms/Horticulture Farm/IMG_0690.jpg";
import g66 from "@/assets/images/Farms/Horticulture Farm/IMG_0700.jpg";
import g67 from "@/assets/images/Farms/Horticulture Farm/IMG_9061-2.jpg";
import g68 from "@/assets/images/Farms/Horticulture Farm/IMG_9077.jpg";
import g69 from "@/assets/images/Farms/Horticulture Farm/South Farm 2.jpg";
import g70 from "@/assets/images/Farms/Horticulture Farm/South Farm 6.jpg";
import g71 from "@/assets/images/Farms/Horticulture Farm/South Farm3.jpg";
import g72 from "@/assets/images/Farms/Horticulture Farm/South Farm4.jpg";

const items = [
  { src: g38, cat: "Horticulture Farm", h: "" },
  { src: g39, cat: "Horticulture Farm", h: "" },
  { src: g40, cat: "Horticulture Farm", h: "" },
  { src: g41, cat: "Horticulture Farm", h: "" },
  { src: g42, cat: "Horticulture Farm", h: "" },
  { src: g43, cat: "Horticulture Farm", h: "" },
  { src: g44, cat: "Horticulture Farm", h: "" },
  { src: g45, cat: "Horticulture Farm", h: "" },
  { src: g46, cat: "Horticulture Farm", h: "" },
  { src: g47, cat: "Horticulture Farm", h: "" },
  { src: g48, cat: "Horticulture Farm", h: "" },
  { src: g49, cat: "Horticulture Farm", h: "" },
  { src: g50, cat: "Horticulture Farm", h: "" },
  { src: g51, cat: "Horticulture Farm", h: "" },
  { src: g52, cat: "Horticulture Farm", h: "" },
  { src: g53, cat: "Horticulture Farm", h: "" },
  { src: g54, cat: "Horticulture Farm", h: "" },
  { src: g55, cat: "Horticulture Farm", h: "" },
  { src: g56, cat: "Horticulture Farm", h: "" },
  { src: g57, cat: "Horticulture Farm", h: "" },
  { src: g58, cat: "Horticulture Farm", h: "" },
  { src: g59, cat: "Horticulture Farm", h: "" },
  { src: g60, cat: "Horticulture Farm", h: "" },
  { src: g61, cat: "Horticulture Farm", h: "" },
  { src: g62, cat: "Horticulture Farm", h: "" },
  { src: g63, cat: "Horticulture Farm", h: "" },
  { src: g64, cat: "Horticulture Farm", h: "" },
  { src: g65, cat: "Horticulture Farm", h: "" },
  { src: g66, cat: "Horticulture Farm", h: "" },
  { src: g67, cat: "Horticulture Farm", h: "" },
  { src: g68, cat: "Horticulture Farm", h: "" },
  { src: g69, cat: "Horticulture Farm", h: "" },
  { src: g70, cat: "Horticulture Farm", h: "" },
  { src: g71, cat: "Horticulture Farm", h: "" },
  { src: g72, cat: "Horticulture Farm", h: "" },
];

const cats = ["Horticulture Farm"];

export function Gallery() {
  const [filter, setFilter] = useState("Horticulture Farm");
  const [active, setActive] = useState<string | null>(null);
  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-sm font-semibold text-primary tracking-widest uppercase">Gallery</div>
        <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
          Horticulture Farm <span className="text-gradient">Gallery.</span>
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
