import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Sprout, FlaskConical } from "lucide-react";
// import img1 from "@/assets/gallery-1.jpg";
// import img2 from "@/assets/gallery-3.jpg";
// import img3 from "@/assets/gallery-5.jpg";

import img1 from "@/assets/admission_new (1).webp";
import img2 from "@/assets/admission_new (2).webp";
import img3 from "@/assets/images/Admissions_2.webp";
import Broucher from "@/assets/documents/IIATBroucher.pdf";

const programs = [
  { icon: GraduationCap, label: "Undergraduate", href: "/academics/ug" },
  // { icon: Sprout, label: "Diploma", href: "/academics/diploma" },
  // { icon: FlaskConical, label: "Research", href: "/academics/research" },
];

export function AdmissionCTA() {
  return (
    <section id="admission" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — scattered image cluster */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[420px] sm:h-[500px] lg:h-[560px]"
          >
            {/* Decorative blobs */}
            <div className="absolute top-4 left-4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-8 right-12 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />

            {/* Image 1 — top left, large, tilted */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -12 }}
              whileInView={{ opacity: 1, y: 0, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="absolute top-0 left-0 w-[62%] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-glow border-4 border-card"
            >
              <img
                src={img1}
                alt="IIAT students on campus"
                className="h-full w-full object-cover"
              />
              {/* Accent pin */}
              <div className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-accent shadow-soft" />
            </motion.div>

            {/* Image 2 — right middle */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 8 }}
              whileInView={{ opacity: 1, y: 0, rotate: 4 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="absolute top-16 right-0 w-[46%] aspect-square rounded-[2rem] overflow-hidden shadow-glow border-4 border-card"
            >
              <img
                src={img2}
                alt="Laboratory research at IIAT"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Image 3 — bottom center */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="absolute bottom-0 left-[28%] w-[52%] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-glow border-4 border-card"
            >
              <img
                src={img3}
                alt="IIAT student reading in the library"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-6 right-0 rounded-2xl bg-card px-4 py-3 shadow-glow border"
            >
              <div className="font-display text-2xl font-bold text-primary">500+</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Seats Available
              </div>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
              <Sprout className="h-4 w-4" />
              Imayam Institute of Agriculture & Technology
            </div>

            <h2 className="mt-4 font-display text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
              Admissions
            </h2>

            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
              IIAT offers <span className="font-semibold text-foreground">B.Sc (Hons.) Agriculture</span>,{" "}
              <span className="font-semibold text-foreground">B.Sc (Hons.) Horticulture</span> and {" "}
              {/* <span className="font-semibold text-foreground">B.Tech Agricultural Engineering</span> and */}
              specialized diploma programmes — all affiliated to TNAU and accredited by ICAR. Full-time
              research (M.Sc / Ph.D.) opportunities in crop improvement, soil science, plant protection
              and agri-engineering are also open for the 2026 intake.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {programs.map((p, i) => (
                <motion.a
                  key={p.label}
                  href={p.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="group inline-flex items-center gap-2 rounded-full bg-card border-2 border-primary/20 px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-soft"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                  {p.label}
                </motion.a>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground max-w-lg">
              A student admitted should register in one of the divisions depending on the degree /
              programme selected to pursue.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* <a
                href="https://imayamagri.org/apply"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
              >
                Explore More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a> */}
              <a
                href={Broucher}
                className="inline-flex items-center gap-2 rounded-2xl bg-card border-2 border-border px-7 py-4 text-sm font-semibold text-foreground hover:border-primary transition-colors"
              >
                Download Broucher
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
