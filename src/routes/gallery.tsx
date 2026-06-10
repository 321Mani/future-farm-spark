import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — IIAT" },
      { name: "description", content: "Glimpses of campus life, aerial views, labs, farms, sports and placements at IIAT." },
      { property: "og:title", content: "Gallery — IIAT" },
      { property: "og:description", content: "Aerial, campus, laboratory, farms, sports and placement photographs." },
    ],
  }),
  component: GalleryPage,
});

type Item = { src: string; cat: string };

const items: Item[] = [
  { src: "https://imayamagri.org/images/portfolio/01.jpg", cat: "Campus" },
  { src: "https://imayamagri.org/images/image22.jpeg", cat: "Aerial" },
  { src: "https://imayamagri.org/images/image24.jpeg", cat: "Aerial" },
  { src: "https://imayamagri.org/images/image25.jpeg", cat: "Aerial" },
  { src: "https://imayamagri.org/images/image36.jpg", cat: "Campus" },
  { src: "https://imayamagri.org/images/image35.jpg", cat: "Campus" },
  { src: "https://imayamagri.org/images/image12.jpg", cat: "Campus" },
  { src: "https://imayamagri.org/images/image8.jpg", cat: "Sports" },
  { src: "https://imayamagri.org/images/image7.jpg", cat: "Sports" },
  { src: "https://imayamagri.org/images/image10.jpg", cat: "Sports" },
  { src: "https://imayamagri.org/images/image11.jpg", cat: "Sports" },
  { src: "https://imayamagri.org/images/image37.jpg", cat: "Farms" },
  { src: "https://imayamagri.org/images/image38.jpg", cat: "Farms" },
  { src: "https://imayamagri.org/images/image29.jpg", cat: "Laboratory" },
  { src: "https://imayamagri.org/images/image42.jpg", cat: "Laboratory" },
  { src: "https://imayamagri.org/images/image43.jpg", cat: "Laboratory" },
  { src: "https://imayamagri.org/images/image44.jpg", cat: "Laboratory" },
  { src: "https://imayamagri.org/images/placement%20final%20interview/WhatsApp%20Image%202023-08-24%20at%2010.18.44%20AM.jpeg", cat: "Placement" },
  { src: "https://imayamagri.org/images/placement%20final%20interview/IMG_20230715_112841.jpg", cat: "Placement" },
];

const cats = ["All", "Aerial", "Campus", "Laboratory", "Farms", "Sports", "Placement"];

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<string | null>(null);
  const filtered = items.filter((i) => filter === "All" || i.cat === filter);

  return (
    <PageShell
      eyebrow="Gallery"
      title="Glimpses of IIAT"
      subtitle="Aerial, campus, laboratory, farms, sports and placement moments."
      breadcrumbs={[{ label: "Gallery" }]}
    >
      <div className="flex flex-wrap gap-2 mb-10">
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((img, i) => (
          <motion.button
            key={img.src}
            layout
            onClick={() => setActive(img.src)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft"
          >
            <img
              src={img.src}
              alt={img.cat}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
            <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-accent font-semibold">
              {img.cat}
            </div>
          </motion.button>
        ))}
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
    </PageShell>
  );
}
