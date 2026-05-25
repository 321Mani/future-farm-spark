import { motion } from "framer-motion";
import { Presentation, FlaskConical, Library, BedDouble, Bus, Trophy, Wifi, Sprout } from "lucide-react";

const items = [
  { icon: Presentation, name: "Smart Classrooms" },
  { icon: FlaskConical, name: "Research Labs" },
  { icon: Library, name: "Digital Library" },
  { icon: BedDouble, name: "Hostel Living" },
  { icon: Bus, name: "Transport" },
  { icon: Trophy, name: "Sports Complex" },
  { icon: Wifi, name: "Campus-wide WiFi" },
  { icon: Sprout, name: "Polyhouse Training" },
];

export function Facilities() {
  return (
    <section id="facilities" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-primary tracking-widest uppercase">Facilities</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
              Built for <span className="text-gradient">hands-on learning.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            From precision agriculture labs to a fully residential green campus — everything you need under one roof.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="group glass rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display font-semibold text-foreground">{f.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
