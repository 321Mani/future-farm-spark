import { motion } from "framer-motion";
import {
  Wheat, Flower2, Cog, Bug, TestTube2, LineChart, ArrowUpRight,
} from "lucide-react";

const departments = [
  { icon: Wheat, name: "Agronomy", desc: "Crop production systems, field experiments, and sustainable farming practices." },
  { icon: Flower2, name: "Horticulture", desc: "Fruits, vegetables, floriculture and protected cultivation under polyhouse." },
  { icon: Cog, name: "Agricultural Engineering", desc: "Farm mechanisation, irrigation systems and precision agri-technology." },
  { icon: Bug, name: "Plant Protection", desc: "Entomology, pathology, IPM and biological control of crop diseases." },
  { icon: TestTube2, name: "Soil Science", desc: "Soil chemistry, fertility management, and water resource conservation." },
  { icon: LineChart, name: "Agricultural Economics", desc: "Farm management, agri-business, marketing and rural development." },
];

export function Departments() {
  return (
    <section id="departments" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold text-primary tracking-widest uppercase">Departments</div>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
            Six disciplines. <span className="text-gradient">One mission.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Each department combines classroom rigour with field, lab and farm-based learning.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.map((d, i) => (
            <motion.a
              href="#contact"
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-3xl border bg-card p-7 shadow-soft hover:shadow-glow transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <d.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{d.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Explore programme
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
