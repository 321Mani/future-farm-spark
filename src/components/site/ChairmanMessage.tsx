import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, ArrowRight, X } from "lucide-react";
import chairman from "@/assets/images/chairman.jpg";
import mdMsg from "@/assets/images/md_msg.jpg";
import campus from "@/assets/images/campus.jpg";
import building from "@/assets/images/building.jpg";
import farm from "@/assets/images/farm.jpg";
import lab from "@/assets/images/lab.jpg";
import classroom from "@/assets/images/calssroom.jpg";
import celebrity_1 from "@/assets/celebrity/1.jpg";
import celebrity_2 from "@/assets/celebrity/2.jpg";
import celebrity_3 from "@/assets/celebrity/3.jpg";
import celebrity_4 from "@/assets/celebrity/4.jpg";
import celebrity_5 from "@/assets/celebrity/5.jpg";
import celebrity_6 from "@/assets/celebrity/6.jpg";
import celebrity_7 from "@/assets/celebrity/7.jpg";
import celebrity_8 from "@/assets/celebrity/8.jpg";
import celebrity_9 from "@/assets/celebrity/9.jpg";
import celebrity_10 from "@/assets/celebrity/10.jpg";
import celebrity_11 from "@/assets/celebrity/11.jpg";
import celebrity_12 from "@/assets/celebrity/12.jpg";
import celebrity_13 from "@/assets/celebrity/13.jpg";
import celebrity_14 from "@/assets/celebrity/14.jpg";
import celebrity_15 from "@/assets/celebrity/15.jpg";

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
  { src: celebrity_1, alt: "celebrity_1" },
  { src: celebrity_2, alt: "celebrity_2" },
  { src: celebrity_3, alt: "celebrity_3" },
  { src: celebrity_4, alt: "celebrity_4" },
  { src: celebrity_5, alt: "celebrity_5" },
  { src: celebrity_6, alt: "celebrity_6" },
  { src: celebrity_7, alt: "celebrity_7" },
  { src: celebrity_8, alt: "celebrity_8" },
  { src: celebrity_9, alt: "celebrity_9" },
  { src: celebrity_10, alt: "celebrity_10" },
  { src: celebrity_11, alt: "celebrity_11" },
  { src: celebrity_12, alt: "celebrity_12" },
  { src: celebrity_13, alt: "celebrity_13" },
  { src: celebrity_14, alt: "celebrity_14" },
  { src: celebrity_15, alt: "celebrity_15" },
];

export function ChairmanMessage() {
  const [index, setIndex] = useState(0);
  const [campusImageIndex, setCampusImageIndex] = useState(0);
  const [isHoveringGallery, setIsHoveringGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % people.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + people.length) % people.length), []);

  const goToCampusImage = useCallback((direction: number) => {
    setCampusImageIndex((current) => (current + direction + campusImages.length) % campusImages.length);
  }, []);

  const nextCampusImage = useCallback(() => {
    goToCampusImage(1);
  }, [goToCampusImage]);

  const prevCampusImage = useCallback(() => {
    goToCampusImage(-1);
  }, [goToCampusImage]);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next, index]);

  const active = people[index];
  const marqueeImages = [...campusImages, ...campusImages];

  return (
    <section id="chairman" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-8 lg:gap-16 items-start">
          {/* Carousel */}
          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden border shadow-glow bg-gradient-soft">
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
              {/* Name overlay only on lg+; on mobile it lives below the image for cleaner stacking */}
              <div className="hidden lg:block absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
                <div className="font-display text-xl font-bold text-white">{active.name}</div>
                <div className="text-sm text-white/80">{active.role}</div>
              </div>
            </div>

            {/* Mobile/tablet name caption placed after the image */}
            <div className="lg:hidden mt-4 rounded-2xl border bg-card p-4 shadow-soft text-center">
              <div className="font-display text-lg sm:text-xl font-bold text-foreground">{active.name}</div>
              <div className="text-sm text-muted-foreground">{active.role}</div>
            </div>

            <div className="mt-5 flex items-center justify-center lg:justify-start gap-4">
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
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
              {active.heading[0]} <span className="text-gradient">{active.heading[1]}</span>
            </h2>
            <Quote className="mt-4 h-8 w-8 sm:h-10 sm:w-10 text-primary/30" />
            <div className="mt-3 space-y-3 text-foreground/80 leading-relaxed text-sm sm:text-base lg:text-lg">
              {active.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <a
              href={active.href}
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow"
            >
              Read full message <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Campus image carousel */}
        <div
          className="mt-16 lg:mt-20"
          onMouseEnter={() => setIsHoveringGallery(true)}
          onMouseLeave={() => setIsHoveringGallery(false)}
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-primary tracking-widest uppercase">
                Moments of Leadership
              </h3>
            </div>
            {/* <div className="flex gap-2">
              <button
                onClick={prevCampusImage}
                aria-label="Previous"
                className="grid h-10 w-10 place-items-center rounded-full border bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextCampusImage}
                aria-label="Next"
                className="grid h-10 w-10 place-items-center rounded-full border bg-card text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div> */}
          </div>
          <div className="mt-6 overflow-hidden -mx-4 px-4">
            <div
              className="flex w-max gap-5"
              style={{
                animation: "marquee 75s linear infinite",
                animationPlayState: isHoveringGallery ? "paused" : "running",
              }}
              onMouseEnter={() => setIsHoveringGallery(true)}
              onMouseLeave={() => setIsHoveringGallery(false)}
            >
              {marqueeImages.map((img, i) => (
                <motion.button
                  key={`${img.alt}-${i}`}
                  type="button"
                  onClick={() => setSelectedImage(img.src)}
                  whileHover={{ y: -6 }}
                  className={`shrink-0 w-[280px] sm:w-[340px] overflow-hidden rounded-3xl border bg-card shadow-soft ${i % campusImages.length === campusImageIndex ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-[210px] sm:h-[240px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.button>
              ))}
            </div>
          </div>
          {/* <div className="mt-4 flex gap-2 justify-center">
            {campusImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCampusImageIndex(i)}
                aria-label={`Show image ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === campusImageIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"}`}
              />
            ))}
          </div> */}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[120] grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
            >
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage}
                alt="Leadership moments"
                className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-glow"
                onClick={(event) => event.stopPropagation()}
              />
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedImage(null);
                }}
                className="fixed right-4 top-4 z-[130] grid h-12 w-12 place-items-center rounded-full bg-white/90 text-black shadow-lg hover:bg-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
