import { motion } from "framer-motion";
import { Target, Compass, BadgeCheck } from "lucide-react";
import aboutImg from "@/assets/about-campus.jpg";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img
                src={aboutImg}
                alt="Imayam Institute campus architecture"
                width={1280}
                height={1280}
                loading="lazy"
                className="h-[520px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-soft max-w-[220px] hidden sm:block">
              <BadgeCheck className="h-6 w-6 text-primary" />
              <div className="mt-2 font-display font-bold text-foreground">TNAU Affiliated</div>
              <div className="text-xs text-muted-foreground mt-1">
                Tamil Nadu Agricultural University recognised programmes
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-sm font-semibold text-primary tracking-widest uppercase">
              About the Institute
            </div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold leading-tight">
              A living campus where{" "}
              <span className="text-gradient">science meets soil.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Founded under the Imayam Educational Trust, our institute blends
              field-first learning with research-grade laboratories. Students train across
              100 acres of working farmland, polyhouses, and smart agriculture facilities.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-card p-6 shadow-soft">
                <Target className="h-6 w-6 text-primary" />
                <div className="mt-3 font-display font-bold text-lg">Our Vision</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  To be South India's reference institute for sustainable agriculture and
                  agri-technology education.
                </p>
              </div>
              <div className="rounded-2xl border bg-card p-6 shadow-soft">
                <Compass className="h-6 w-6 text-primary" />
                <div className="mt-3 font-display font-bold text-lg">Our Mission</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Empower rural youth with research, hands-on practice, and modern tools
                  that transform Indian farms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
