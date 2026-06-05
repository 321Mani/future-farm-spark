import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Calendar, Users } from "lucide-react";

export const Route = createFileRoute("/life/events")({
  head: () => ({
    meta: [
      { title: "Events \u2014 IIAT" },
      { name: "description", content: "Student tours, exhibitions and key events at IIAT including the All India Study Tour and RAWE Exhibition." },
      { property: "og:title", content: "Events \u2014 IIAT" },
      { property: "og:description", content: "Recent events at IIAT." },
    ],
  }),
  component: EventsPage,
});

const events = [
  {
    icon: Calendar,
    title: "All India Study Tour",
    text: "An immersive nationwide academic tour where students visit leading agricultural universities, research stations and farms across India \u2014 broadening exposure to diverse cropping systems, technologies and institutions.",
  },
  {
    icon: Users,
    title: "RAWE Exhibition",
    text: "The Rural Agricultural Work Experience (RAWE) exhibition showcases student projects, village survey outcomes and innovations developed during the RAWE programme.",
  },
];

function EventsPage() {
  return (
    <PageShell
      eyebrow="Life @ IIAT"
      title="Events"
      subtitle="Key academic, cultural and outreach events organised at IIAT."
      breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Events" }]}
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
        {events.map((e) => (
          <div key={e.title} className="rounded-2xl border bg-card p-7 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <e.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold">{e.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
