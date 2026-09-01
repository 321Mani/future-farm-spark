// import { motion } from "framer-motion";
// import { Calendar, MapPin, ArrowRight } from "lucide-react";
// import ev1 from "@/assets/events/1 (1).jpg";
// import ev2 from "@/assets/events/1 (2).jpg";
// import ev3 from "@/assets/events/1 (3).jpg";
// import ev4 from "@/assets/events/1 (4).jpg";
// import ev5 from "@/assets/events/1 (5).jpg";

// const events = [
//   {
//     image: ev1,
//     tag: "Conference",
//     title: "AgriTech Summit 2026 — Precision Farming & AI",
//     date: "12 Aug 2026",
//     place: "IIAT Main Auditorium",
//     link: "https://www.instagram.com/p/DcDmM1JkzbJ/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA%3D%3D",
//   },
//   {
//     image: ev2,
//     tag: "Workshop",
//     title: "Hands-on Workshop on Hydroponics & Vertical Farming",
//     date: "24 Aug 2026",
//     place: "Horticulture Division",
//     link: "https://www.instagram.com/p/DbfsP-gEzPk/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA%3D%3D"
//   },
//   // {
//   //   image: ev3,
//   //   tag: "Cultural",
//   //   title: "IMAYOTSAV — Annual Cultural & Sports Fest",
//   //   date: "05 Sep 2026",
//   //   place: "IIAT Sports Ground",
//   // },
//   {
//     image: ev4,
//     tag: "Seminar",
//     title: "National Seminar on Sustainable Crop Management",
//     date: "18 Sep 2026",
//     place: "Seminar Hall, Block A",
//     link: "https://www.instagram.com/p/DbS_Aotk27M/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA%3D%3D"
//   },
//   {
//     image: ev5,
//     tag: "Seminar",
//     title: "National Seminar on Sustainable Crop Management",
//     date: "18 Sep 2026",
//     place: "Seminar Hall, Block A",
//     link: "https://www.instagram.com/p/DbxqZRAEzyf/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA%3D%3D"
//   },
// ];

// export function Events() {
//   return (
//     <section id="events" className="py-24 lg:py-32 bg-gradient-soft">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
//           <div>
//             {/* <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest">
//               Upcoming Events
//             </div> */}
//             <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-foreground max-w-2xl leading-tight">
//               What&apos;s happening at <span className="text-primary">IIAT</span>
//             </h2>
//             <p className="mt-3 max-w-xl text-muted-foreground">
//               Stay updated with our conferences, workshops, cultural fests and farmer outreach programs.
//             </p>
//           </div>
//           <div className="flex flex-wrap gap-3 self-start lg:self-auto">
//             <a
//               href="/life/events"
//               className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-primary/80 px-6 py-3 text-sm font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.55)] hover:-translate-y-0.5"
//             >
//               <span className="relative z-10">View all events</span>
//               <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//               <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary-light/50 via-primary/30 to-transparent transition-transform duration-500 group-hover:translate-x-0" />
//             </a>
//             <a
//               href="/life/event-photos"
//               className="group inline-flex items-center gap-2 rounded-full border-2 border-primary/30 bg-card/80 px-6 py-3 text-sm font-bold text-primary shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow hover:-translate-y-0.5"
//             >
//               <span>View event photos</span>
//               <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </a>
//           </div>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//           {events.map((e, i) => (
//             <motion.article
//               key={e.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.08, duration: 0.5 }}
//               className="group rounded-3xl overflow-hidden bg-card border shadow-soft hover:shadow-glow transition-all hover:-translate-y-1"
//             >
//               <a href={e.link} className="block overflow-hidden bg-muted" target="_blank" rel="noopener noreferrer">
//                 <img
//                   src={e.image}
//                   alt={e.title}
//                   loading="lazy"
//                   className="h-auto w-full object-contain group-hover:scale-105 transition-transform duration-700"
//                 />
//               </a>
//               {/* <div className="p-5">
//                 <h3 className="font-display font-bold text-base leading-snug text-foreground line-clamp-2 min-h-[3rem]">
//                   {e.title}
//                 </h3>
//                 <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
//                   <div className="flex items-center gap-2">
//                     <Calendar className="h-3.5 w-3.5 text-primary" /> {e.date}
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <MapPin className="h-3.5 w-3.5 text-primary" /> {e.place}
//                   </div>
//                 </div>
//               </div> */}
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Point this at wherever events_api.php is hosted.
const EVENTS_API_URL = "https://application.imayamagri.org/events_api.php"; // <-- change this

type EventItem = {
  id: string;
  image: string;
  tag: string;
  title: string;
  date: string;
  place: string;
  status: "Upcoming" | "Past";
  chiefGuest: string;
};

export function Events() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetch(EVENTS_API_URL)
      .then((res) => res.json())
      .then((result) => {
        if (cancelled) return;
        if (result.success) {
          // Show up to 4 on the homepage, newest first (API already sorts this way).
          setEvents(result.events.slice(0, 4));
        }
      })
      .catch(() => {
        // Fail quietly on the homepage — the section just won't render events.
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="events" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
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
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary-light/50 via-primary/30 to-transparent transition-transform duration-500 group-hover:translate-x-0" />
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

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/3] rounded-3xl bg-card border shadow-soft animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {events.map((e, i) => (
              <motion.article
                key={e.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group rounded-3xl overflow-hidden bg-card border shadow-soft hover:shadow-glow transition-all hover:-translate-y-1"
              >
                <a
                  href="/life/events"
                  className="relative aspect-[4/3] overflow-hidden block"
                >
                  <img
                    src={e.image}
                    alt={e.title || "Event"}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute top-3 right-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-soft ${
                      e.status === "Upcoming"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card/90 text-muted-foreground"
                    }`}
                  >
                    {e.status}
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
