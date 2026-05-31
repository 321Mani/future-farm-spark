import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Flower2, Brain, HeartPulse, Wind } from "lucide-react";

export const Route = createFileRoute("/academics/yoga")({
  head: () => ({
    meta: [
      { title: "Yoga — IIAT" },
      { name: "description", content: "Yoga and meditation sessions promoting holistic wellbeing of IIAT students." },
      { property: "og:title", content: "Yoga — IIAT" },
      { property: "og:description", content: "Yoga for body, mind and spirit." },
    ],
  }),
  component: Yoga,
});

const benefits = [
  { icon: HeartPulse, title: "Physical Wellbeing", text: "Improves flexibility, strength, posture and overall physical health." },
  { icon: Brain, title: "Mental Clarity", text: "Reduces stress, sharpens focus and enhances academic performance." },
  { icon: Wind, title: "Pranayama", text: "Breath-control techniques for energy regulation and emotional balance." },
  { icon: Flower2, title: "Meditation", text: "Guided meditation sessions cultivating mindfulness and inner peace." },
];

function Yoga() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Yoga & Wellbeing"
      subtitle="Holistic wellness through ancient practice — a daily ritual for body, mind and spirit."
      breadcrumbs={[{ label: "Academics" }, { label: "Yoga" }]}
    >
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          IIAT integrates yoga into student life through dedicated sessions led by trained instructors. Regular practice helps students manage academic pressure, build resilience and develop discipline that carries into every aspect of their lives.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-6xl">
        {benefits.map((b) => (
          <div key={b.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <b.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">{b.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
