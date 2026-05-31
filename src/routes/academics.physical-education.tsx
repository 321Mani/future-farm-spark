import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Dumbbell, Trophy, Activity, Users } from "lucide-react";

export const Route = createFileRoute("/academics/physical-education")({
  head: () => ({
    meta: [
      { title: "Physical Education — IIAT" },
      { name: "description", content: "Sports and physical education facilities promoting fitness and team spirit at IIAT." },
      { property: "og:title", content: "Physical Education — IIAT" },
      { property: "og:description", content: "Sports for fitness, discipline and team spirit." },
    ],
  }),
  component: PhysicalEducation,
});

const facilities = [
  { icon: Trophy, title: "Outdoor Sports", text: "Cricket, football, volleyball, kabaddi, kho-kho courts and a 400m track." },
  { icon: Activity, title: "Indoor Games", text: "Table tennis, chess, carrom and badminton facilities for year-round play." },
  { icon: Dumbbell, title: "Fitness Centre", text: "Well-equipped gymnasium with cardio and strength-training equipment." },
  { icon: Users, title: "Inter-College Meets", text: "Active participation in TNAU zonal and inter-collegiate tournaments." },
];

function PhysicalEducation() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Physical Education"
      subtitle="Building healthy bodies, sharp minds and team spirit through structured sports and fitness programmes."
      breadcrumbs={[{ label: "Academics" }, { label: "Physical Education" }]}
    >
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          A dedicated Physical Director coordinates regular sports activities, fitness sessions and competitive tournaments at IIAT. Students have access to extensive outdoor and indoor facilities to balance academic rigour with physical wellbeing.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-6xl">
        {facilities.map((f) => (
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
