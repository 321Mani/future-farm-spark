import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import chairman from "@/assets/images/chairman.webp";
import mdMsg from "@/assets/images/md_msg.webp";
import principle from "@/assets/images/principle.webp";

const people = [
  { image: chairman, name: "Rtn. A. Andi", role: "Secretary, Imayam Educational Trust" },
  { image: mdMsg, name: "Managing Director", role: "Imayam Educational Trust" },
  { image: principle, name: "Principal", role: "Imayam Institute of Agriculture & Technology" },
];

export function ChairmanMessage() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % people.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + people.length) % people.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, index]);

  const active = people[index];

  return (
    <section id="chairman" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[460px_1fr] gap-12 lg:gap-16 items-center">
          {/* Carousel */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border shadow-glow bg-gradient-soft">
              <AnimatePresence mode="sync">
                <motion.img
                  key={index}
                  src={active.image}
                  alt={active.name}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
                <div className="font-display text-xl font-bold text-white">{active.name}</div>
                <div className="text-sm text-white/80">{active.role}</div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="grid h-10 w-10 place-items-center rounded-full border bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="grid h-10 w-10 place-items-center rounded-full border bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="flex gap-2">
                {people.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => setIndex(i)}
                    aria-label={`Show ${p.name}`}
                    className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <div className="text-sm font-semibold text-primary tracking-widest uppercase">
              Chairman&apos;s Message
            </div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold leading-tight">
              Education that <span className="text-gradient">grows a nation.</span>
            </h2>
            <Quote className="mt-6 h-10 w-10 text-primary/30" />
            <div className="mt-4 space-y-4 text-foreground/80 leading-relaxed text-lg">
              <p>
                Society has long depended on education to provide the stepping stone towards
                individual growth, which contributes directly to the growth of a society and the
                country as a whole. With the ever-increasing demand for professionally qualified
                youth, quality higher education in diverse fields has become imperative.
              </p>
              <p>
                Imayam Institute of Agriculture and Technology strives to establish itself as a
                citadel of quality education in the global arena of agricultural education —
                updating itself with foresight, vision and committed learning that meets
                international standards.
              </p>
            </div>
            <a
              href="/about/chairman"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow"
            >
              Read full message <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
