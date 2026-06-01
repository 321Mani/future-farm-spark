import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Tractor, Cog, Zap, Factory } from "lucide-react";

export const Route = createFileRoute("/divisions/agriculture-engineering")({
  head: () => ({
    meta: [
      { title: "Agriculture Engineering — IIAT" },
      { name: "description", content: "Division of Agriculture Engineering — farm machinery, processing, renewable energy and structures." },
      { property: "og:title", content: "Agriculture Engineering — IIAT" },
      { property: "og:description", content: "Engineering solutions for modern, mechanised agriculture." },
    ],
  }),
  component: AgriEngineeringPage,
});

const focus = [
  { icon: Tractor, title: "Farm Machinery & Power", text: "Tractors, implements, precision equipment and ergonomics of mechanised field operations." },
  { icon: Factory, title: "Processing & Food Engineering", text: "Post-harvest processing, storage, packaging and value addition of agricultural produce." },
  { icon: Zap, title: "Renewable Energy in Agriculture", text: "Solar, biomass and bio-energy systems for farm applications and rural electrification." },
  { icon: Cog, title: "Farm Structures & Irrigation", text: "Design of farm buildings, micro-irrigation systems and water lifting devices." },
];

function AgriEngineeringPage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Agriculture Engineering"
      subtitle="Engineering tools, machines and structures that power modern, productive farming."
      breadcrumbs={[{ label: "Divisions" }, { label: "Agriculture Engineering" }]}
    >
      <div className="max-w-4xl text-foreground/80 leading-relaxed">
        <p className="text-lg">
          The Agriculture Engineering division bridges engineering and agriculture — designing and applying machinery, energy systems and
          processing technology that reduce drudgery, improve efficiency and add value across the farm value chain.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-6xl">
        {focus.map((f) => (
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
