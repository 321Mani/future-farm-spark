import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Music, Drama, Mic2, Sparkles } from "lucide-react";

export const Route = createFileRoute("/life/culturals")({
  head: () => ({
    meta: [
      { title: "Culturals \u2014 IIAT" },
      { name: "description", content: "Cultural activities, festivals and student talent showcases at IIAT." },
      { property: "og:title", content: "Culturals \u2014 IIAT" },
      { property: "og:description", content: "Cultural life on the IIAT campus." },
    ],
  }),
  component: CulturalsPage,
});

const highlights = [
  { icon: Music, title: "Music & Dance", text: "Solo and group performances showcasing classical, folk and contemporary styles." },
  { icon: Drama, title: "Drama & Mime", text: "Skits and theatre that bring out the creativity and confidence of our students." },
  { icon: Mic2, title: "Literary Events", text: "Debates, elocution, poetry and quiz contests across the academic year." },
  { icon: Sparkles, title: "Annual Day", text: "A flagship celebration uniting the campus through art, performance and recognition." },
];

function CulturalsPage() {
  return (
    <PageShell
      eyebrow="Life @ IIAT"
      title="Culturals"
      subtitle="Music, dance, drama and literary events that bring the IIAT campus to life."
      breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Culturals" }]}
    >
      <div className="max-w-4xl text-foreground/80 leading-relaxed">
        <p>
          Cultural activities are an integral part of student life at IIAT. Students participate in a vibrant
          calendar of inter-class and inter-college events that nurture creativity, teamwork and a sense of
          community.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-6xl">
        {highlights.map((h) => (
          <div key={h.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <h.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">{h.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
