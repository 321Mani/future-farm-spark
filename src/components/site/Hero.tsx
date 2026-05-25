import { motion } from "framer-motion";
import { ArrowRight, Play, Award, Users, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-campus.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Aerial view of Imayam Institute campus surrounded by farmland"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

      <div className="relative container mx-auto px-4 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs font-medium text-white">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Admissions Open 2025 · TNAU Affiliated
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02] text-white">
            Cultivating the
            <br />
            <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
              future of agriculture.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/85 leading-relaxed">
            Imayam Institute of Agriculture and Technology trains the next generation of
            agronomists, scientists and innovators on a 100-acre living laboratory in
            Thuraiyur, Tamil Nadu.
          </p>

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
        </motion.div>

        {/* Floating stat cards */}
        <div className="relative mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Users, value: "2,400+", label: "Students" },
            { icon: Leaf, value: "100", label: "Acres of farmland" },
            { icon: Award, value: "92%", label: "Placement rate" },
            { icon: Leaf, value: "6", label: "Departments" },
          ].map((s, i) => (
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
