import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "D.Sathiya",
    role: "B.Sc. (Hons.) Agriculture",
    text: "I am D. Sathiya, and I completed my B.Sc. (Hons.) Agriculture at Imayam Institute of Agriculture and Technology, Kannanur, Thuraiyur, during 2013–2017. I am very proud and happy to share that I am currently working as an Agriculture Field Officer, having been selected through the TNPSC examination. I sincerely thank the college management, teaching staff, and my family for their valuable guidance, encouragement, and support in helping me achieve my career goal.",
  },
  {
    name: "Priyadharshini E",
    role: "B.Sc. (Hons.) Agriculture",
    text: "I am Priyadharshini E, and I completed my B.Sc. (Hons.) Agriculture at Imayam Institute of Agriculture and Technology (IIAT) during 2018–2021. I am very happy and proud to share that I was selected for postgraduate higher studies at Tamil Nadu Agricultural University (TNAU). The education, practical training, and guidance I received at IIAT helped me build confidence and achieve my academic goals. I sincerely thank the college management, teaching staff, and my family for their constant encouragement, guidance, and support throughout my journey.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % reviews.length);
  const prev = () => setI((i - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-sm font-semibold text-primary tracking-widest uppercase">Voices</div>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
            Stories from our <span className="text-gradient">alumni.</span>
          </h2>
        </div>

        <div className="mt-14 max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-card border shadow-glow p-8 lg:p-12 overflow-hidden">
            <Quote className="absolute -top-2 -left-2 h-32 w-32 text-primary/5" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 font-display text-sm lg:text-sm leading-relaxed text-foreground">
                  "{reviews[i].text}"
                </p>
                <div className="mt-6">
                  <div className="font-display font-bold">{reviews[i].name}</div>
                  <div className="text-sm text-muted-foreground">{reviews[i].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              className="grid h-11 w-11 place-items-center rounded-full border bg-card hover:bg-primary/10"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-all ${
                    k === i ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to slide ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="grid h-11 w-11 place-items-center rounded-full border bg-card hover:bg-primary/10"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
