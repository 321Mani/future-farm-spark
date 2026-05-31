import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tv, Projector, Wifi, Presentation } from "lucide-react";

export const Route = createFileRoute("/academics/smart-class")({
  head: () => ({
    meta: [
      { title: "Smart Class — IIAT" },
      { name: "description", content: "Smart classrooms with interactive displays, projectors and modern teaching aids at IIAT." },
      { property: "og:title", content: "Smart Class — IIAT" },
      { property: "og:description", content: "Technology-enabled classrooms for immersive learning." },
    ],
  }),
  component: SmartClass,
});

const features = [
  { icon: Tv, title: "Interactive Displays", text: "Large-format LED smart boards in every classroom for dynamic, visual learning." },
  { icon: Projector, title: "HD Projection", text: "Ceiling-mounted projectors with crystal-clear visuals for lectures and presentations." },
  { icon: Wifi, title: "Connected Classrooms", text: "Wi-Fi enabled rooms allowing seamless access to e-resources during sessions." },
  { icon: Presentation, title: "Recorded Lectures", text: "Lecture-capture capability allowing students to revisit complex concepts anytime." },
];

function SmartClass() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Smart Classrooms"
      subtitle="Technology-enabled learning spaces designed to enhance student engagement and comprehension."
      breadcrumbs={[{ label: "Academics" }, { label: "Smart Class" }]}
    >
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Every classroom at IIAT is equipped with the latest audio-visual technology. Faculty use interactive boards, simulation software and multimedia content to teach complex agricultural concepts with clarity and impact.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-6xl">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
