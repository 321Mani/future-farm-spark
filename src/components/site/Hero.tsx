import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import { ArrowRight, Play, Award, Users, Leaf, ChevronLeft, ChevronRight } from "lucide-react";
// import heroImg from "@/assets/hero-campus.jpg";
// import slide2 from "@/assets/gallery-1.jpg";
// import slide3 from "@/assets/gallery-3.jpg";
// import slide4 from "@/assets/gallery-5.jpg";

import heroImg from "@/assets/images/slide_1.webp";
import slide2 from "@/assets/images/slide_2.webp";
import slide3 from "@/assets/images/slide_3.webp";
import slide4 from "@/assets/images/slide_4.webp";
import hortiImg from "@/assets/images/Horticulture1.webp";

const slides = [
  {
    image: heroImg,
    alt: "Imayam Institute of Agriculture & Technology campus",
    badge: "Admissions Open 2026 · TNAU Affiliated",
    titleTop: "Welcome to",
    titleBottom: "Imayam College.",
    text: "A 100-acre living campus in Thuraiyur, Tamil Nadu — home to India's next generation of agricultural leaders, scientists and innovators.",
  },
  {
    image: hortiImg,
    alt: "Horticulture orchards and gardens at IIAT",
    badge: "Horticulture Department",
    titleTop: "Growing Skills",
    titleBottom: "and futures.",
    text: "Experience modern horticulture through orchards, nurseries, polyhouses, herbal gardens, and protected cultivation. Learn practical techniques in fruit, vegetable, floriculture, and landscape production with hands-on field training.",
  },
  {
    image: slide2,
    alt: "Students working in the agricultural fields at IIAT",
    badge: "Fields of Learning",
    titleTop: "Where every field",
    titleBottom: "is a classroom.",
    text: "Hands-on crop cultivation, soil study and precision-farming across our sprawling instructional farms and research plots.",
  },
  {
    image: slide3,
    alt: "Modern agriculture research laboratory at IIAT",
    badge: "Research & Laboratory",
    titleTop: "Advanced labs.",
    titleBottom: "Real research.",
    text: "State-of-the-art laboratories for plant pathology, biotechnology, soil and food sciences — powering student-led innovation.",
  },
  {
    image: slide4,
    alt: "Students at sports and cultural committee events",
    badge: "Sports & Committees",
    titleTop: "Beyond the",
    titleBottom: "classroom.",
    text: "Vibrant sports, cultural fests, NSS, YRC and student committees that build leaders, teamwork and lifelong friendships.",
  },
];

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Students" },
  { icon: Leaf, value: 123, suffix: "", label: "Acres of farmland" },
  { icon: Award, value: 90, suffix: "%", label: "Placement rate" },
  { icon: Users, value: 120, suffix: "+", label: "Recruiting partners" },
];

const typingPhrases = [
  "Cultivating tomorrow's agri-scientists.",
  "Innovating on 100+ acres of green campus.",
  "TNAU affiliated · ICAR accredited.",
  "Where knowledge meets the soil.",
];

function useTypewriter(phrases: string[], typeSpeed = 55, pauseTime = 1800) {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && text === "") {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1),
          );
        },
        deleting ? 30 : typeSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx, phrases, typeSpeed, pauseTime]);

  return text;
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Hero() {
  const [index, setIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const typed = useTypewriter(typingPhrases);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, index]);

  const active = slides[index];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
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
            transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: "linear" } }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

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
              <span className="text-yellow-300 [text-shadow:0_4px_28px_rgba(0,0,0,0.95)]">
                {active.titleBottom}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white leading-relaxed font-medium [text-shadow:0_2px_12px_rgba(0,0,0,0.85)]">
              {active.text}
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
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center gap-2 rounded-2xl glass-dark px-7 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            <Play className="h-4 w-4" />
            Explore Campus
          </button>

        </div>

        {/* Typing animation under buttons */}
        <div className="mt-6 h-8 flex items-center">
          <span className="inline-flex items-center gap-1 rounded-full glass-dark px-4 py-1.5 text-sm sm:text-base font-medium text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.85)]">
            <span className="text-accent">›</span>
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-4 w-0.5 bg-accent animate-pulse" />
          </span>
        </div>

        {/* Slider controls */}
        <div className="mt-8 flex items-center gap-4">
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

        {/* Floating stat cards with count-up */}
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
              <div className="mt-3 font-display text-3xl font-bold text-foreground">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
