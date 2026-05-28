import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Award, Users, Leaf, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-campus.jpg";
import slide2 from "@/assets/about-campus.jpg";
import slide3 from "@/assets/gallery-1.jpg";
import slide4 from "@/assets/gallery-3.jpg";
import slide5 from "@/assets/gallery-5.jpg";

const slides = [
  {
    image: heroImg,
    alt: "Aerial view of Imayam Institute campus surrounded by farmland",
    badge: "Admissions Open 2025 · TNAU Affiliated",
    titleTop: "Cultivating the",
    titleBottom: "future of agriculture.",
    text: "Imayam Institute of Agriculture and Technology trains the next generation of agronomists, scientists and innovators on a 100-acre living laboratory in Thuraiyur, Tamil Nadu.",
  },
  {
    image: slide2,
    alt: "Imayam Institute academic campus buildings",
    badge: "A Living Campus",
    titleTop: "Learn where",
    titleBottom: "innovation grows.",
    text: "World-class laboratories, smart farms and research stations designed to turn curious students into confident agricultural professionals.",
  },
  {
    image: slide3,
    alt: "Students working in the agricultural research fields",
    badge: "Hands-on Learning",
    titleTop: "From classroom",
    titleBottom: "to the open field.",
    text: "Every program blends theory with real practice across our farmland, greenhouses and modern agri-tech facilities.",
  },
  {
    image: slide4,
    alt: "Modern agriculture laboratory at Imayam Institute",
    badge: "Research & Technology",
    titleTop: "Powering tomorrow's",
    titleBottom: "agri-scientists.",
    text: "Advanced laboratories and precision-farming tools give students the edge in a rapidly evolving industry.",
  },
  {
    image: slide5,
    alt: "Green fields and greenhouses on the Imayam campus",
    badge: "100 Acres of Green",
    titleTop: "A campus that",
    titleBottom: "breathes nature.",
    text: "Sustainable, eco-friendly and futuristic — our campus is a model of modern green agriculture education.",
  },
];

const stats = [
  { icon: Users, value: "2,400+", label: "Students" },
  { icon: Leaf, value: "100", label: "Acres of farmland" },
  { icon: Award, value: "92%", label: "Placement rate" },
  { icon: Leaf, value: "6", label: "Departments" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, index]);

  const active = slides[index];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Slider images */}
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={active.image}
          alt={active.alt}
          width={1920}
          height={1080}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 7, ease: "linear" } }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Overlays tuned for strong text contrast while keeping pictures visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />


      <div className="relative container mx-auto px-4 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium text-white">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              {active.badge}
            </div>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02] text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.7)]">
              {active.titleTop}
              <br />
              <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent drop-shadow-none">
                {active.titleBottom}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white leading-relaxed font-medium [text-shadow:0_2px_12px_rgba(0,0,0,0.85)]">
              {active.text}
            </p>

            </p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#admission"
            className="group inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground shadow-glow hover:scale-[1.03] transition-transform"
          >
            Apply Now
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-2xl glass-dark px-7 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            <Play className="h-4 w-4" />
            Explore Campus
          </a>
        </div>

        {/* Slider controls */}
        <div className="mt-10 flex items-center gap-4">
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="grid h-11 w-11 place-items-center rounded-full glass-dark text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="grid h-11 w-11 place-items-center rounded-full glass-dark text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-accent" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="relative mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-5 shadow-soft"
            >
              <s.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 font-display text-3xl font-bold text-foreground">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
