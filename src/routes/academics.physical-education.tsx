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

const outdoor = [
  { icon: Trophy, title: "Volley Ball", text: "02" },
  { icon: Activity, title: "Foot Ball", text: "01" },
  { icon: Dumbbell, title: "Basket Ball", text: "Under Progress" },
  { icon: Users, title: "Kabbadi", text: "01" },
  { icon: Users, title: "Kho-Kho", text: "02" },
  { icon: Users, title: "Tennis", text: "01" },
];

const indoor = [
  { icon: Users, title: "Shuttle Badminton", text: "02" },
  { icon: Users, title: "Carrom", text: "02" },
  { icon: Users, title: "Chess", text: "02" },
  { icon: Users, title: "Gymnasium", text: "Boys-1, Girls-1" },
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
          This Institute lays considerable emphasis on students participation in various games, sports and track and field activities. The spacious grounds of the institute are laid out into playfields for Cricket, Football, Basketball, Volleyball, Lawn Tennis and Badminton ,Kabaddi, Kho- Kho and Indoor Games etc., carrom board , chess, shuttle badminton, Table tennis etc
        </p>
      </div>
      <h2 className="text-lg text-muted-foreground leading-relaxed pt-8">
        <b>The details of the Outdoor Games facilities is as follows</b>
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl">
        {outdoor.map((f) => (
          <div key={f.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Total No's : {f.text}</p>
          </div>
        ))}
      </div>
      <h2 className="text-lg text-muted-foreground leading-relaxed pt-8">
        <b>The details of the Indoor Games facilities is as follows</b>
      </h2>

      <div className="mt-12 grid md:grid-cols-4 gap-6 max-w-8xl">
        {indoor.map((f) => (
          <div key={f.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Total No's : {f.text}</p>
          </div>
        ))}
      </div>

    </PageShell>
  );
}
