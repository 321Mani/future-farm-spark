// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { PageShell } from "@/components/site/PageShell";
// import { Calendar, MapPin } from "lucide-react";
// import ev1 from "@/assets/gallery-2.jpg";
// import ev2 from "@/assets/gallery-4.jpg";
// import ev3 from "@/assets/gallery-6.jpg";
// import ev4 from "@/assets/gallery-1.jpg";
// import ev5 from "@/assets/gallery-3.jpg";
// import ev6 from "@/assets/gallery-5.jpg";
// import World_Environment_Day from "@/assets/World Environment Day.jpg";
// import International_Day_for_Biological_Diversity from "@/assets/International Day for Biological Diversity.jpg";
// import new_ev1 from "@/assets/events/1 (1).jpg";
// import new_ev2 from "@/assets/events/1 (2).jpg";
// import new_ev4 from "@/assets/events/1 (4).jpg";
// import new_ev5 from "@/assets/events/1 (5).jpg";

// export const Route = createFileRoute("/life/events")({
//   head: () => ({
//     meta: [
//       { title: "Events \u2014 IIAT" },
//       {
//         name: "description",
//         content:
//           "Upcoming and past events at IIAT \u2014 conferences, workshops, cultural fests, study tours and RAWE exhibitions.",
//       },
//       { property: "og:title", content: "Events \u2014 IIAT" },
//       { property: "og:description", content: "Upcoming and past events at IIAT." },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: EventsPage,
// });

// type EventItem = {
//   image: string;
//   tag: string;
//   title: string;
//   date: string;
//   place: string;
//   chiefGuest: string;
//   status: "Upcoming" | "Past";
// };

// const events: EventItem[] = [
//   {
//     image: new_ev1,
//     tag: "",
//     title: "",
//     date: "",
//     place: "",
//     status: "Upcoming",
//     chiefGuest : ''
//   },
//   {
//     image: new_ev2,
//     tag: "",
//     title: "",
//     date: "",
//     place: "",
//     status: "Upcoming",
//     chiefGuest : ''
//   },
//   {
//     image: new_ev4,
//     tag: "",
//     title: "",
//     date: "",
//     place: "",
//     status: "Upcoming",
//     chiefGuest : ''
//   },
//   {
//     image: new_ev5,
//     tag: "",
//     title: "",
//     date: "",
//     place: "",
//     status: "Upcoming",
//     chiefGuest : ''
//   },
//   {
//     image: International_Day_for_Biological_Diversity,
//     tag: "",
//     title: "International Day for Biological Diversity",
//     date: "22 May 2026",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest:
//       "The programme was organized by ALCANDERS in association with the Nature Club.As part of the celebration, students created a beautiful rangoli art depicting the theme “SAVE BIODIVERSITY, SAVE EARTH”. The activity aimed to create awareness among students about the importance of biodiversity conservation and environmental protection.",
//   },
//     {
//     image: World_Environment_Day,
//     tag: "",
//     title: "World Environment Day",
//     date: "05 June 2026",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest:
//       "The programme was organized by ALCANDERS in association with the Nature Club. As part of the celebration, students planted trees to promote environmental protection and sustainability. A colorful rangoli art was also created in the campus based on the theme “Inspired by Nature; For Climate; For Our Future” to create awareness among students about the importance of nature conservation, climate action, and environmental security.",
//   },
//     {
//     image: ev5,
//     tag: "",
//     title: "Diverse Opportunities for Higher Studies Abroad",
//     date: "30 May 2025",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest:
//       "Dr. Raja Krishna Moorthy, Director of International Relations, Dean of Research and Development, Sri Venkateshwara University, Nellore, AP",
//   },
//   {
//     image: ev6,
//     tag: "",
//     title: "Third Graduation Day",
//     date: "23 March 2025",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest:
//       "Dr. V. Geethalakshmi, Vice Chancellor, TNAU, Coimbatore",
//   },
//   {
//     image: ev5,
//     tag: "",
//     title: "Fresher’s Day",
//     date: "12 May 2025",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest: "Mr. Erode Mahesh, Motivational Speaker",
//   },
//   {
//     image: ev6,
//     tag: "",
//     title: "12th Club Day",
//     date: "2025",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest:
//       "Selvi K. Shetrimayum Deepi Chanu, Assistant Collector, Trichy",
//   },
//   {
//     image: ev5,
//     tag: "",
//     title: "12th Club Day",
//     date: "2025",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest: "Ms. Devakottai Abirami, Singer, Vijay TV",
//   },
//   {
//     image: ev6,
//     tag: "",
//     title: "12th Sports Day",
//     date: "2025",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest: "Mr. Y. Suresh Kumar, B.L., DSP, Musiri",
//   },
//   {
//     image: ev5,
//     tag: "",
//     title: "Mupperum Vizha",
//     date: "27 July 2024",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest: "Mr. KPY Bala, Actor",
//   },
//   {
//     image: ev6,
//     tag: "",
//     title: "Pongal Vizha",
//     date: "08 January 2024",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest: "Aathiya TV Team",
//   },
//   {
//     image: ev5,
//     tag: "",
//     title: "Fresher’s Day",
//     date: "2023",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest: "Dr. A. Kaliyamurthy, IPS",
//   },
//   {
//     image: ev6,
//     tag: "",
//     title: "9th Club Day",
//     date: "2022",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest: "Dr. M. Ravi, IPS",
//   },
//   {
//     image: ev5,
//     tag: "",
//     title: "Velicham Veliyae Illai",
//     date: "24 April 2025",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest:
//       "Dr. A. Kumaravel, Professor & Head, Department of Veterinary Science, Namakkal – Motivational Speaker",
//   },
//   {
//     image: ev6,
//     tag: "",
//     title: "13th Sports Day",
//     date: "2026",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest: "Thiru Muthukumar, DSP, Musiri",
//   },
//   {
//     image: ev5,
//     tag: "",
//     title: "13th Club Day",
//     date: "2026",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest:
//       "Hon’ble Thiru M. Ravisankar, Deputy Speaker, Tamil Nadu Legislative Assembly",
//   },
//   {
//     image: ev6,
//     tag: "",
//     title: "Muthamizh Vizha",
//     date: "2026",
//     place: "IIAT Campus",
//     status: "Past",
//     chiefGuest: "A. Sasikala, Vijay TV – Kalakka Povathu Yaaru",
//   },
// ];

// function EventCard({ e, i }: { e: EventItem; i: number }) {
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: i * 0.08, duration: 0.5 }}
//       className="group rounded-3xl overflow-hidden bg-card border shadow-soft hover:shadow-glow transition-all hover:-translate-y-1"
//     >
//       <div className="relative overflow-hidden bg-muted">
//         <img
//           src={e.image}
//           alt={e.title}
//           loading="lazy"
//           className="h-auto w-full object-contain group-hover:scale-105 transition-transform duration-700"
//         />

//         <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground shadow-soft">
//           <Calendar className="h-3 w-3" />
//           {e.date}
//         </div>
//         <div
//           className={`absolute top-3 right-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-soft ${
//             e.status === "Upcoming"
//               ? "bg-primary text-primary-foreground"
//               : "bg-muted text-muted-foreground"
//           }`}
//         >
//           {e.status}
//         </div>
//       </div>
//       <div className="p-5">
//         <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">{e.tag}</div>
//         <h3 className="mt-2 font-display font-bold text-base leading-snug text-foreground line-clamp-2 min-h-[3rem]">
//           {e.title}
//         </h3>
//         <p className="text-sm text-muted-foreground mt-2">{e.chiefGuest??''}</p>
//         <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
//           <MapPin className="h-3.5 w-3.5 text-primary" /> {e.place}
//         </div>
//       </div>
//     </motion.article>
//   );
// }

// function EventsPage() {
//   const upcoming = events.filter((e) => e.status === "Upcoming");
//   const past = events.filter((e) => e.status === "Past");

//   return (
//     <PageShell
//       eyebrow="Life @ IIAT"
//       title="Events"
//       subtitle="Conferences, workshops, cultural fests and outreach programmes at IIAT."
//       breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Events" }]}
//     >
//     <div className="space-y-4 text-foreground/80 leading-relaxed">
//       <h2 className="font-display text-2xl font-bold text-primary inline-flex items-center gap-2">
//         Special Events & Distinguished Guests
//       </h2>
//       <p>
//         Our institution regularly organizes academic, cultural, motivational, and sports events featuring distinguished personalities from various fields. These programmes provide students with valuable opportunities for <strong>inspiration, knowledge sharing, leadership development, and personal growth.</strong>
//       </p>
//     </div>
//       <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest mt-10">
//         Upcoming Events
//       </div>
//       <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
//         {upcoming.map((e, i) => (
//           <EventCard key={e.title} e={e} i={i} />
//         ))}
//       </div>

//       <div className="mt-20 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
//         Past Events
//       </div>
//       <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
//         {past.map((e, i) => (
//           <EventCard key={e.title} e={e} i={i} />
//         ))}
//       </div>
//     </PageShell>
//   );
// }

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Calendar, MapPin } from "lucide-react";

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

// Point this at wherever events_api.php is hosted.
const EVENTS_API_URL = "https://application.imayamagri.org/events_api.php"; // <-- change this

type EventItem = {
  id: string;
  image: string;
  tag: string;
  title: string;
  date: string;
  place: string;
  chiefGuest: string;
  status: "Upcoming" | "Past";
};

function EventCard({ e, i }: { e: EventItem; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.5 }}
      className="group rounded-3xl overflow-hidden bg-card border shadow-soft hover:shadow-glow transition-all hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-visible">
        <img
          src={e.image}
          alt={e.title}
          loading="lazy"
          className="h-auto w-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {e.date && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-foreground shadow-soft">
            <Calendar className="h-3 w-3" />
            {e.date}
          </div>
        )}
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
        {e.tag && <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">{e.tag}</div>}
        {e.title && (
          <h3 className="mt-2 font-display font-bold text-base leading-snug text-foreground line-clamp-2 min-h-[3rem]">
            {e.title}
          </h3>
        )}
        {e.chiefGuest && <p className="text-sm text-muted-foreground mt-2">{e.chiefGuest}</p>}
        {e.place && (
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" /> {e.place}
          </div>
        )}
      </div>
    </motion.article>
  );
}

function SkeletonCard() {
  return <div className="aspect-[4/3] rounded-3xl bg-card border shadow-soft animate-pulse" />;
}

function EventsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(EVENTS_API_URL)
      .then((res) => res.json())
      .then((result) => {
        if (cancelled) return;
        if (result.success) {
          setEvents(result.events);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

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
          Our institution regularly organizes academic, cultural, motivational, and sports events featuring
          distinguished personalities from various fields. These programmes provide students with valuable
          opportunities for <strong>inspiration, knowledge sharing, leadership development, and personal growth.</strong>
        </p>
      </div>

      {error && (
        <p className="mt-10 text-sm text-destructive">
          Couldn't load events right now. Please try again shortly.
        </p>
      )}

      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest mt-10">
        Upcoming Events
      </div>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {loading
          ? [0, 1, 2, 3].map((i) => <SkeletonCard key={i} />)
          : upcoming.map((e, i) => <EventCard key={e.id} e={e} i={i} />)}
        {!loading && upcoming.length === 0 && !error && (
          <p className="text-sm text-muted-foreground col-span-full">No upcoming events right now — check back soon.</p>
        )}
      </div>

      <div className="mt-20 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
        Past Events
      </div>
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {loading
          ? [0, 1, 2, 3].map((i) => <SkeletonCard key={i} />)
          : past.map((e, i) => <EventCard key={e.id} e={e} i={i} />)}
        {!loading && past.length === 0 && !error && (
          <p className="text-sm text-muted-foreground col-span-full">No past events yet.</p>
        )}
      </div>
    </PageShell>
  );
}
