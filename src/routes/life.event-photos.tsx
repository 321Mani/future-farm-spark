// import { createFileRoute } from "@tanstack/react-router";
// import { PageShell } from "@/components/site/PageShell";
// import { ExternalLink } from "lucide-react";

// export const Route = createFileRoute("/life/event-photos")({
//   head: () => ({
//     meta: [
//       { title: "Events Photos & Videos \u2014 IIAT" },
//       {
//         name: "description",
//         content:
//           "Photo and video galleries of events held at Imayam Institute of Agriculture and Technology.",
//       },
//       { property: "og:title", content: "Events Photos & Videos \u2014 IIAT" },
//       { property: "og:description", content: "Browse photo and video albums from IIAT events." },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: EventPhotosPage,
// });

// // const rows: { name: string; links: { label: string; href: string }[] }[] = [
// //   { name: "Zumba \u2013 LH", links: [{ label: "View Photos", href: "/gallery" }] },
// //   {
// //     name: "Nasha Mukta Yuva for Viksit Bharat Sankalp Abhiyaan Launch",
// //     links: [{ label: "View Photos", href: "/gallery" }],
// //   },
// //   {
// //     name: "Academia Industrial Conclave",
// //     links: [
// //       { label: "Inaugural Photos", href: "/gallery" },
// //       { label: "Valedictory Photos", href: "/gallery" },
// //     ],
// //   },
// //   { name: "All India Study Tour", links: [{ label: "View Photos", href: "/gallery" }] },
// //   { name: "RAWE Exhibition", links: [{ label: "View Photos", href: "/gallery" }] },
// //   {
// //     name: "Annual Sports Meet",
// //     links: [
// //       { label: "View Photos", href: "/gallery" },
// //       { label: "View Videos", href: "/gallery" },
// //     ],
// //   },
// //   { name: "Independence Day Celebration", links: [{ label: "View Photos", href: "/gallery" }] },
// //   { name: "NSS Special Camp", links: [{ label: "View Photos", href: "/gallery" }] },
// // ];
// const rows: {
//   name: string;
//   date: string;
//   links: { label: string; href: string }[];
// }[] = [
//   {
//     name: "International Day for Biological Diversity",
//     date: "22 May 2026",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "World Environment Day",
//     date: "05 June 2026",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "Diverse Opportunities for Higher Studies Abroad",
//     date: "30 May 2025",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "Third Graduation Day",
//     date: "23 March 2025",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "Fresher’s Day",
//     date: "12 May 2025",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "12th Club Day",
//     date: "2025",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "12th Club Day",
//     date: "2025",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "12th Sports Day",
//     date: "2025",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "Mupperum Vizha",
//     date: "27 July 2024",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "Pongal Vizha",
//     date: "08 January 2024",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "Fresher’s Day",
//     date: "2023",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "9th Club Day",
//     date: "2022",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "Velicham Veliyae Illai",
//     date: "24 April 2025",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "13th Sports Day",
//     date: "2026",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "13th Club Day",
//     date: "2026",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
//   {
//     name: "Muthamizh Vizha",
//     date: "2026",
//     links: [{ label: "View Photos", href: "/gallery" }],
//   },
// ];

// function EventPhotosPage() {
//   return (
//     <PageShell
//       eyebrow="Life @ IIAT"
//       title="Events Photos & Videos"
//       subtitle="Photo and video albums from events, celebrations and outreach programmes at IIAT."
//       breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Events Photos & Videos" }]}
//     >
//       <div className="max-w-5xl overflow-hidden rounded-2xl border shadow-soft">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="bg-foreground text-background">
//               <th className="px-6 py-4 font-display text-base font-bold text-center">Event Name</th>
//               <th className="px-6 py-4 font-display text-base font-bold text-center">Event Date</th>
//               <th className="px-6 py-4 font-display text-base font-bold text-center w-64">Link</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((r, i) => (
//               <tr key={r.name} className={i % 2 === 0 ? "bg-muted/40" : "bg-card"}>
//                 <td className="px-6 py-4 align-top border-t text-foreground">{r.name}</td>
//                 <td className="px-6 py-4 align-top border-t text-foreground">{r.date}</td>
//                 <td className="px-6 py-4 align-top border-t border-l">
//                   <div className="flex flex-col gap-1">
//                     {r.links.map((l) => (
//                       <a
//                         key={l.label}
//                         href={l.href}
//                         className="inline-flex items-center gap-1.5 text-primary hover:underline"
//                       >
//                         {l.label}
//                         <ExternalLink className="h-3.5 w-3.5" />
//                       </a>
//                     ))}
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </PageShell>
//   );
// }

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/life/event-photos")({
  head: () => ({
    meta: [
      { title: "Events Photos & Videos \u2014 IIAT" },
      {
        name: "description",
        content:
          "Photo and video galleries of events held at Imayam Institute of Agriculture and Technology.",
      },
      { property: "og:title", content: "Events Photos & Videos \u2014 IIAT" },
      { property: "og:description", content: "Browse photo and video albums from IIAT events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventPhotosPage,
});

// Point this at wherever event_photos_api.php is hosted.
const EVENT_PHOTOS_API_URL = "https://application.imayamagri.org/event_photos_api.php"; // <-- change this

type LinkItem = { label: string; href: string };
type EventPhotoRow = { id: string; name: string; date: string; links: LinkItem[] };

function EventPhotosPage() {
  const [rows, setRows] = useState<EventPhotoRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(EVENT_PHOTOS_API_URL)
      .then((res) => res.json())
      .then((result) => {
        if (cancelled) return;
        if (result.success) setRows(result.rows);
        else setError(true);
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

  return (
    <PageShell
      eyebrow="Life @ IIAT"
      title="Events Photos & Videos"
      subtitle="Photo and video albums from events, celebrations and outreach programmes at IIAT."
      breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Events Photos & Videos" }]}
    >
      {error && (
        <p className="mb-6 text-sm text-destructive">Couldn't load this list right now. Please try again shortly.</p>
      )}

      {loading ? (
        <div className="max-w-5xl space-y-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-14 rounded-xl bg-card border animate-pulse" />
          ))}
        </div>
      ) : rows.length === 0 && !error ? (
        <p className="text-sm text-muted-foreground">No events listed yet — check back soon.</p>
      ) : (
        <div className="max-w-5xl overflow-hidden rounded-2xl border shadow-soft">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-foreground text-background">
                <th className="px-6 py-4 font-display text-base font-bold text-center">Event Name</th>
                <th className="px-6 py-4 font-display text-base font-bold text-center">Event Date</th>
                <th className="px-6 py-4 font-display text-base font-bold text-center w-64">Link</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.id} className={i % 2 === 0 ? "bg-muted/40" : "bg-card"}>
                  <td className="px-6 py-4 align-top border-t text-foreground">{r.name}</td>
                  <td className="px-6 py-4 align-top border-t text-foreground">{r.date}</td>
                  <td className="px-6 py-4 align-top border-t border-l">
                    <div className="flex flex-col gap-1">
                      {r.links.map((l, j) => (
                        <a
                          key={j}
                          href={l.href}
                          target={l.href?.startsWith("http") ? "_blank" : undefined}
                          rel={l.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1.5 text-primary hover:underline"
                        >
                          {l.label}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </PageShell>
  );
}
