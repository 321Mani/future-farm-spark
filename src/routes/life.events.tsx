import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Calendar, MapPin } from "lucide-react";
import ev1 from "@/assets/gallery-2.webp";
import ev2 from "@/assets/gallery-4.webp";
import ev3 from "@/assets/gallery-6.webp";
import ev4 from "@/assets/gallery-1.webp";
import ev5 from "@/assets/gallery-3.webp";
import ev6 from "@/assets/gallery-5.webp";

export const Route = createFileRoute("/life/events")({
  head: () => ({
    meta: [
      { title: "Events \u2014 IIAT" },
      {
        name: "description",
        content:
          "Upcoming and past events at IIAT \u2014 conferences, workshops, cultural fests, study tours and RAWE exhibitions.",
      },
      { property: "og:title", content: "Events \u2014 IIAT" },
      { property: "og:description", content: "Upcoming and past events at IIAT." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

type EventItem = {
  image: string;
  tag: string;
  title: string;
  date: string;
  place: string;
  status: "Upcoming" | "Past";
};

const events: EventItem[] = [
  {
    image: ev1,
    tag: "Conference",
    title: "AgriTech Summit 2026 \u2014 Precision Farming & AI",
    date: "12 Aug 2026",
    place: "IIAT Main Auditorium",
    status: "Upcoming",
  },
  {
    image: ev2,
    tag: "Workshop",
    title: "Hands-on Workshop on Hydroponics & Vertical Farming",
    date: "24 Aug 2026",
    place: "Horticulture Division",
    status: "Upcoming",
  },
  {
    image: ev3,
    tag: "Cultural",
    title: "IMAYOTSAV \u2014 Annual Cultural & Sports Fest",
    date: "05 Sep 2026",
    place: "IIAT Sports Ground",
    status: "Upcoming",
  },
  {
    image: ev4,
    tag: "Seminar",
    title: "National Seminar on Sustainable Crop Management",
    date: "18 Sep 2026",
    place: "Seminar Hall, Block A",
    status: "Upcoming",
  },
  {
    image: ev5,
    tag: "Study Tour",
    title: "All India Study Tour \u2014 Agricultural Universities & Research Stations",
    date: "14 Jan 2026",
    place: "Pan India",
    status: "Past",
  },
  {
    image: ev6,
    tag: "Exhibition",
    title: "RAWE Exhibition \u2014 Rural Agricultural Work Experience Showcase",
    date: "22 Mar 2026",
    place: "IIAT Campus",
    status: "Past",
  },
];

function EventCard({ e, i }: { e: EventItem; i: number }) {
  return (
    <motion.article
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
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground shadow-soft">
          <Calendar className="h-3 w-3" />
          {e.date}
        </div>
        <div
          className={`absolute top-3 right-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-soft ${
            e.status === "Upcoming"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {e.status}
        </div>
      </div>
      <div className="p-5">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">{e.tag}</div>
        <h3 className="mt-2 font-display font-bold text-base leading-snug text-foreground line-clamp-2 min-h-[3rem]">
          {e.title}
        </h3>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-primary" /> {e.place}
        </div>
      </div>
    </motion.article>
  );
}

function EventsPage() {
  const upcoming = events.filter((e) => e.status === "Upcoming");
  const past = events.filter((e) => e.status === "Past");

  return (
    <PageShell
      eyebrow="Life @ IIAT"
      title="Events"
      subtitle="Conferences, workshops, cultural fests and outreach programmes at IIAT."
      breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Events" }]}
    >
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest">
        Upcoming Events
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {upcoming.map((e, i) => (
          <EventCard key={e.title} e={e} i={i} />
        ))}
      </div>

      <div className="mt-20 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
        Past Events
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {past.map((e, i) => (
          <EventCard key={e.title} e={e} i={i} />
        ))}
      </div>
    </PageShell>
  );
}
