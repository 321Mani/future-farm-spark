import { createFileRoute } from "@tanstack/react-router";
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

const rows: { name: string; links: { label: string; href: string }[] }[] = [
  { name: "Zumba \u2013 LH", links: [{ label: "View Photos", href: "/gallery" }] },
  {
    name: "Nasha Mukta Yuva for Viksit Bharat Sankalp Abhiyaan Launch",
    links: [{ label: "View Photos", href: "/gallery" }],
  },
  {
    name: "Academia Industrial Conclave",
    links: [
      { label: "Inaugural Photos", href: "/gallery" },
      { label: "Valedictory Photos", href: "/gallery" },
    ],
  },
  { name: "All India Study Tour", links: [{ label: "View Photos", href: "/gallery" }] },
  { name: "RAWE Exhibition", links: [{ label: "View Photos", href: "/gallery" }] },
  {
    name: "Annual Sports Meet",
    links: [
      { label: "View Photos", href: "/gallery" },
      { label: "View Videos", href: "/gallery" },
    ],
  },
  { name: "Independence Day Celebration", links: [{ label: "View Photos", href: "/gallery" }] },
  { name: "NSS Special Camp", links: [{ label: "View Photos", href: "/gallery" }] },
];

function EventPhotosPage() {
  return (
    <PageShell
      eyebrow="Life @ IIAT"
      title="Events Photos & Videos"
      subtitle="Photo and video albums from events, celebrations and outreach programmes at IIAT."
      breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Events Photos & Videos" }]}
    >
      <div className="max-w-5xl overflow-hidden rounded-2xl border shadow-soft">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-foreground text-background">
              <th className="px-6 py-4 font-display text-base font-bold text-center">Event Name</th>
              <th className="px-6 py-4 font-display text-base font-bold text-center w-64">Link</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.name} className={i % 2 === 0 ? "bg-muted/40" : "bg-card"}>
                <td className="px-6 py-4 align-top border-t text-foreground">{r.name}</td>
                <td className="px-6 py-4 align-top border-t border-l">
                  <div className="flex flex-col gap-1">
                    {r.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
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
    </PageShell>
  );
}
