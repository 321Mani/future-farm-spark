import { motion } from "framer-motion";
import { Building2, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

const recruiters = ["ITC Agri", "Mahindra", "Rallis", "Coromandel", "UPL", "Syngenta", "Bayer", "Godrej Agrovet"];

export function Placements() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-semibold text-primary tracking-widest uppercase">Placements & Career</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
              Graduates that <span className="text-gradient">India hires.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From multinational agri-corporations to research labs and family farms — our placement cell opens
              every door.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: TrendingUp, value: "92%", label: "Placement rate" },
                { icon: Briefcase, value: "₹6.4 LPA", label: "Average package" },
                { icon: Building2, value: "120+", label: "Recruiting partners" },
                { icon: GraduationCap, value: "350+", label: "Internships / year" },
              ].map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border bg-card p-5 shadow-soft"
                >
                  <s.icon className="h-5 w-5 text-primary" />
                  <div className="mt-2 font-display text-2xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {recruiters.map((r, i) => (
              <motion.div
                key={r}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl py-6 px-4 grid place-items-center shadow-soft"
              >
                <span className="font-display font-bold text-foreground/80">{r}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
