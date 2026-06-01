import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Apple, Flower2, TreePine, Carrot } from "lucide-react";

export const Route = createFileRoute("/divisions/horticulture")({
  head: () => ({
    meta: [
      { title: "Horticulture — IIAT" },
      { name: "description", content: "Division of Horticulture — fruits, vegetables, flowers, plantation and spice crops." },
      { property: "og:title", content: "Horticulture — IIAT" },
      { property: "og:description", content: "Pomology, olericulture, floriculture and post-harvest technology." },
    ],
  }),
  component: HorticulturePage,
});

const focus = [
  { icon: Apple, title: "Pomology", text: "Cultivation, propagation and orchard management of tropical and sub-tropical fruit crops." },
  { icon: Carrot, title: "Olericulture", text: "Production technology of vegetables — both protected and open-field cultivation systems." },
  { icon: Flower2, title: "Floriculture & Landscaping", text: "Commercial flower production, garden design and ornamental plant management." },
  { icon: TreePine, title: "Plantation & Spice Crops", text: "Coconut, cashew, cocoa, turmeric and pepper — agronomy and value addition." },
];

function HorticulturePage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Horticulture"
      subtitle="Cultivating high-value fruits, vegetables, flowers and spice crops for nutrition and livelihood."
      breadcrumbs={[{ label: "Divisions" }, { label: "Horticulture" }]}
    >
      <div className="max-w-4xl text-foreground/80 leading-relaxed">
        <p className="text-lg">
          The Horticulture division covers the science and business of high-value crops. From orchard establishment to protected cultivation
          and post-harvest handling, students learn how horticulture drives nutrition, exports and rural income.
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
