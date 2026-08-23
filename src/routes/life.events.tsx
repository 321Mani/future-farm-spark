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
import World_Environment_Day from "@/assets/World Environment Day.jpg";
import International_Day_for_Biological_Diversity from "@/assets/International Day for Biological Diversity.jpg";

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
  chiefGuest: string;
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
    chiefGuest : ''
  },
  {
    image: ev2,
    tag: "Workshop",
    title: "Hands-on Workshop on Hydroponics & Vertical Farming",
    date: "24 Aug 2026",
    place: "Horticulture Division",
    status: "Upcoming",
    chiefGuest : ''
  },
  {
    image: ev3,
    tag: "Cultural",
    title: "IMAYOTSAV \u2014 Annual Cultural & Sports Fest",
    date: "05 Sep 2026",
    place: "IIAT Sports Ground",
    status: "Upcoming",
    chiefGuest : ''
  },
  {
    image: ev4,
    tag: "Seminar",
    title: "National Seminar on Sustainable Crop Management",
    date: "18 Sep 2026",
    place: "Seminar Hall, Block A",
    status: "Upcoming",
    chiefGuest : ''
  },
  {
    image: International_Day_for_Biological_Diversity,
    tag: "",
    title: "International Day for Biological Diversity",
    date: "22 May 2026",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest:
      "The programme was organized by ALCANDERS in association with the Nature Club.As part of the celebration, students created a beautiful rangoli art depicting the theme “SAVE BIODIVERSITY, SAVE EARTH”. The activity aimed to create awareness among students about the importance of biodiversity conservation and environmental protection.",
  },
    {
    image: World_Environment_Day,
    tag: "",
    title: "World Environment Day",
    date: "05 June 2026",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest:
      "The programme was organized by ALCANDERS in association with the Nature Club. As part of the celebration, students planted trees to promote environmental protection and sustainability. A colorful rangoli art was also created in the campus based on the theme “Inspired by Nature; For Climate; For Our Future” to create awareness among students about the importance of nature conservation, climate action, and environmental security.",
  },
    {
    image: ev5,
    tag: "",
    title: "Diverse Opportunities for Higher Studies Abroad",
    date: "30 May 2025",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest:
      "Dr. Raja Krishna Moorthy, Director of International Relations, Dean of Research and Development, Sri Venkateshwara University, Nellore, AP",
  },
  {
    image: ev6,
    tag: "",
    title: "Third Graduation Day",
    date: "23 March 2025",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest:
      "Dr. V. Geethalakshmi, Vice Chancellor, TNAU, Coimbatore",
  },
  {
    image: ev5,
    tag: "",
    title: "Fresher’s Day",
    date: "12 May 2025",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest: "Mr. Erode Mahesh, Motivational Speaker",
  },
  {
    image: ev6,
    tag: "",
    title: "12th Club Day",
    date: "2025",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest:
      "Selvi K. Shetrimayum Deepi Chanu, Assistant Collector, Trichy",
  },
  {
    image: ev5,
    tag: "",
    title: "12th Club Day",
    date: "2025",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest: "Ms. Devakottai Abirami, Singer, Vijay TV",
  },
  {
    image: ev6,
    tag: "",
    title: "12th Sports Day",
    date: "2025",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest: "Mr. Y. Suresh Kumar, B.L., DSP, Musiri",
  },
  {
    image: ev5,
    tag: "",
    title: "Mupperum Vizha",
    date: "27 July 2024",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest: "Mr. KPY Bala, Actor",
  },
  {
    image: ev6,
    tag: "",
    title: "Pongal Vizha",
    date: "08 January 2024",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest: "Aathiya TV Team",
  },
  {
    image: ev5,
    tag: "",
    title: "Fresher’s Day",
    date: "2023",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest: "Dr. A. Kaliyamurthy, IPS",
  },
  {
    image: ev6,
    tag: "",
    title: "9th Club Day",
    date: "2022",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest: "Dr. M. Ravi, IPS",
  },
  {
    image: ev5,
    tag: "",
    title: "Velicham Veliyae Illai",
    date: "24 April 2025",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest:
      "Dr. A. Kumaravel, Professor & Head, Department of Veterinary Science, Namakkal – Motivational Speaker",
  },
  {
    image: ev6,
    tag: "",
    title: "13th Sports Day",
    date: "2026",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest: "Thiru Muthukumar, DSP, Musiri",
  },
  {
    image: ev5,
    tag: "",
    title: "13th Club Day",
    date: "2026",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest:
      "Hon’ble Thiru M. Ravisankar, Deputy Speaker, Tamil Nadu Legislative Assembly",
  },
  {
    image: ev6,
    tag: "",
    title: "Muthamizh Vizha",
    date: "2026",
    place: "IIAT Campus",
    status: "Past",
    chiefGuest: "A. Sasikala, Vijay TV – Kalakka Povathu Yaaru",
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
        <p className="text-sm text-muted-foreground mt-2">{e.chiefGuest??''}</p>
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
    <div className="space-y-4 text-foreground/80 leading-relaxed">
      <h2 className="font-display text-2xl font-bold text-primary inline-flex items-center gap-2">
        Special Events & Distinguished Guests
      </h2>
      <p>
        Our institution regularly organizes academic, cultural, motivational, and sports events featuring distinguished personalities from various fields. These programmes provide students with valuable opportunities for <strong>inspiration, knowledge sharing, leadership development, and personal growth.</strong>
      </p>
    </div>
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest mt-10">
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
