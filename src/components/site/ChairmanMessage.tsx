import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import chairman from "@/assets/images/chairman.webp";
import mdMsg from "@/assets/images/md_msg.webp";
import campus from "@/assets/images/campus.webp";
import building from "@/assets/images/building.webp";
import farm from "@/assets/images/farm.webp";
import lab from "@/assets/images/lab.webp";
import classroom from "@/assets/images/calssroom.webp";
import library from "@/assets/images/lib_1.webp";

const people = [
  {
    image: chairman,
    name: "Rtn. A. Andi",
    role: "Secretary, Imayam Educational Trust",
    eyebrow: "Chairman's Message",
    heading: ["Education that", "grows a nation."],
    paragraphs: [
      "Society has long depended on education to provide the stepping stone towards individual growth, which contributes directly to the growth of a society and the country as a whole. With the ever-increasing demand for professionally qualified youth, quality higher education in diverse fields has become imperative.",
      "Imayam Institute of Agriculture and Technology strives to establish itself as a citadel of quality education in the global arena of agricultural education — updating itself with foresight, vision and committed learning that meets international standards.",
    ],
    href: "/about/chairman",
  },
  {
    image: mdMsg,
    name: "A. Janarthanan",
    role: "Managing Director, B.Tech (IT), MBA",
    eyebrow: "Managing Director's Message",
    heading: ["Leadership that", "inspires growth."],
    paragraphs: [
      "A. Janarthanan, son of Rtn. A. Andi, upholds a legacy rooted in vision, integrity and unwavering dedication — modernising the institution with innovative methodologies, advanced learning systems and a future-oriented academic framework.",
      "An accomplished entrepreneur across sustainable agriculture, biotechnology and infrastructure, he cultivates a culture of discipline, collaboration and continuous improvement, shaping leaders who are capable, compassionate and socially responsible.",
    ],
    href: "/about/mdirector",
  },
];

const campusImages = [
  { src: campus, alt: "IIAT campus view" },
  { src: building, alt: "Academic block at IIAT" },
  { src: farm, alt: "Instructional farm" },
  { src: lab, alt: "Research laboratory" },
  { src: classroom, alt: "Classroom session" },
  { src: library, alt: "Central library" },
];

export function ChairmanMessage() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % people.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + people.length) % people.length), []);

  useEffect(() => {
    const t = setInterval(next, 7000);
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
              {active.eyebrow}
            </div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold leading-tight">
              {active.heading[0]} <span className="text-gradient">{active.heading[1]}</span>
            </h2>
            <Quote className="mt-6 h-10 w-10 text-primary/30" />
            <div className="mt-4 space-y-4 text-foreground/80 leading-relaxed text-lg">
              {active.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <a
              href={active.href}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow"
            >
              Read full message <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Campus image carousel */}
        <div className="mt-16 lg:mt-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-primary tracking-widest uppercase">
                Glimpses of IIAT
              </div>
              <h3 className="mt-2 font-display text-2xl lg:text-3xl font-bold">
                Life on our 100-acre campus
              </h3>
            </div>
          </div>
          <div className="mt-6 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-none">
            {campusImages.map((img) => (
              <motion.figure
                key={img.alt}
                whileHover={{ y: -6 }}
                className="snap-start shrink-0 w-[280px] sm:w-[340px] overflow-hidden rounded-3xl border bg-card shadow-soft"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-[210px] sm:h-[240px] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <figcaption className="px-5 py-3 text-sm font-medium text-foreground/80">
                  {img.alt}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
