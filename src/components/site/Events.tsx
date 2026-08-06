import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import ev1 from "@/assets/gallery-2.webp";
import ev2 from "@/assets/gallery-4.webp";
import ev3 from "@/assets/gallery-6.webp";
import ev4 from "@/assets/gallery-1.webp";

const events = [
  {
    image: ev1,
    tag: "Conference",
    title: "AgriTech Summit 2026 — Precision Farming & AI",
    date: "12 Aug 2026",
    place: "IIAT Main Auditorium",
  },
  {
    image: ev2,
    tag: "Workshop",
    title: "Hands-on Workshop on Hydroponics & Vertical Farming",
    date: "24 Aug 2026",
    place: "Horticulture Division",
  },
  {
    image: ev3,
    tag: "Cultural",
    title: "IMAYOTSAV — Annual Cultural & Sports Fest",
    date: "05 Sep 2026",
    place: "IIAT Sports Ground",
  },
  {
    image: ev4,
    tag: "Seminar",
    title: "National Seminar on Sustainable Crop Management",
    date: "18 Sep 2026",
    place: "Seminar Hall, Block A",
  },
];

export function Events() {
  return (
    <section id="events" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest">
              Upcoming Events
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-foreground max-w-2xl leading-tight">
              What&apos;s happening at <span className="text-primary">IIAT</span>
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Stay updated with our conferences, workshops, cultural fests and farmer outreach programs.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 self-start lg:self-auto">
            <a
              href="/life/events"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/80 px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.55)] hover:-translate-y-0.5"
            >
              <span className="relative z-10">View all events</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary-glow/40 via-primary/30 to-transparent transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="/life/event-photos"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-card/80 px-6 py-3 text-sm font-bold text-primary shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow hover:-translate-y-0.5"
            >
              <span>View event photos</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-card border shadow-soft hover:shadow-glow transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground shadow-soft">
                  {e.tag}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-base leading-snug text-foreground line-clamp-2 min-h-[3rem]">
                  {e.title}
                </h3>
                <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-primary" /> {e.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-primary" /> {e.place}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
