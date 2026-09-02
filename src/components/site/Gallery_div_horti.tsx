import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import horticulture1 from "@/assets/images/divisions/Horticulture/314A1293.jpg";
import horticulture2 from "@/assets/images/divisions/Horticulture/314A1297.jpg";
import horticulture3 from "@/assets/images/divisions/Horticulture/314A1311.jpg";
import horticulture4 from "@/assets/images/divisions/Horticulture/314A1325.jpg";
import horticulture5 from "@/assets/images/divisions/Horticulture/314A1327.jpg";
import horticulture6 from "@/assets/images/divisions/Horticulture/314A1329.jpg";
import horticulture7 from "@/assets/images/divisions/Horticulture/314A1331.jpg";
import horticulture8 from "@/assets/images/divisions/Horticulture/314A1335.jpg";
import horticulture9 from "@/assets/images/divisions/Horticulture/314A1344.jpg";
import horticulture10 from "@/assets/images/divisions/Horticulture/314A1679.jpg";
import horticulture11 from "@/assets/images/divisions/Horticulture/314A1691.jpg";
import horticulture12 from "@/assets/images/divisions/Horticulture/314A1701.jpg";
import horticulture13 from "@/assets/images/divisions/Horticulture/314A1708.jpg";
import horticulture14 from "@/assets/images/divisions/Horticulture/314A1710.jpg";
import horticulture15 from "@/assets/images/divisions/Horticulture/314A1712.jpg";
import horticulture16 from "@/assets/images/divisions/Horticulture/314A1718.jpg";
import horticulture17 from "@/assets/images/divisions/Horticulture/314A1720.jpg";
import horticulture18 from "@/assets/images/divisions/Horticulture/314A1724.jpg";
import horticulture19 from "@/assets/images/divisions/Horticulture/314A1777.jpg";
import horticulture20 from "@/assets/images/divisions/Horticulture/314A1782.jpg";
import horticulture21 from "@/assets/images/divisions/Horticulture/314A1786.jpg";
import horticulture22 from "@/assets/images/divisions/Horticulture/Horticulture1.jpg";
import horticulture23 from "@/assets/images/divisions/Horticulture/Horticulture2.jpg";
import horticulture24 from "@/assets/images/divisions/Horticulture/Horticulture3.jpg";
import horticulture25 from "@/assets/images/divisions/Horticulture/IMG_0641.jpg";
import horticulture26 from "@/assets/images/divisions/Horticulture/IMG_0663.jpg";
import horticulture27 from "@/assets/images/divisions/Horticulture/IMG_0668.jpg";
import horticulture28 from "@/assets/images/divisions/Horticulture/IMG_0690.jpg";
import horticulture29 from "@/assets/images/divisions/Horticulture/IMG_0700.jpg";
import horticulture30 from "@/assets/images/divisions/Horticulture/IMG_9061-2.jpg";
import horticulture31 from "@/assets/images/divisions/Horticulture/IMG_9077.jpg";
import horticulture32 from "@/assets/images/divisions/Horticulture/South Farm 2.jpg";
import horticulture33 from "@/assets/images/divisions/Horticulture/South Farm 6.jpg";
import horticulture34 from "@/assets/images/divisions/Horticulture/South Farm4.jpg";


const items = [
  { src: horticulture1, cat: "Horticulture", h: "" },
  { src: horticulture2, cat: "Horticulture", h: "" },
  { src: horticulture3, cat: "Horticulture", h: "" },
  { src: horticulture4, cat: "Horticulture", h: "" },
  { src: horticulture5, cat: "Horticulture", h: "" },
  { src: horticulture6, cat: "Horticulture", h: "" },
  { src: horticulture7, cat: "Horticulture", h: "" },
  { src: horticulture8, cat: "Horticulture", h: "" },
  { src: horticulture9, cat: "Horticulture", h: "" },
  { src: horticulture10, cat: "Horticulture", h: "" },
  { src: horticulture11, cat: "Horticulture", h: "" },
  { src: horticulture12, cat: "Horticulture", h: "" },
  { src: horticulture13, cat: "Horticulture", h: "" },
  { src: horticulture14, cat: "Horticulture", h: "" },
  { src: horticulture15, cat: "Horticulture", h: "" },
  { src: horticulture16, cat: "Horticulture", h: "" },
  { src: horticulture17, cat: "Horticulture", h: "" },
  { src: horticulture18, cat: "Horticulture", h: "" },
  { src: horticulture19, cat: "Horticulture", h: "" },
  { src: horticulture20, cat: "Horticulture", h: "" },
  { src: horticulture21, cat: "Horticulture", h: "" },
  { src: horticulture22, cat: "Horticulture", h: "" },
  { src: horticulture23, cat: "Horticulture", h: "" },
  { src: horticulture24, cat: "Horticulture", h: "" },
  { src: horticulture25, cat: "Horticulture", h: "" },
  { src: horticulture26, cat: "Horticulture", h: "" },
  { src: horticulture27, cat: "Horticulture", h: "" },
  { src: horticulture28, cat: "Horticulture", h: "" },
  { src: horticulture29, cat: "Horticulture", h: "" },
  { src: horticulture30, cat: "Horticulture", h: "" },
  { src: horticulture31, cat: "Horticulture", h: "" },
  { src: horticulture32, cat: "Horticulture", h: "" },
  { src: horticulture33, cat: "Horticulture", h: "" },
  { src: horticulture34, cat: "Horticulture", h: "" },

];

const cats = ["Horticulture"];

export function Gallery() {
  const [filter, setFilter] = useState("Horticulture");
  const [active, setActive] = useState<string | null>(null);
  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-sm font-semibold text-primary tracking-widest uppercase">Gallery</div>
        <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
          Horticulture <span className="text-gradient">Gallery.</span>
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
