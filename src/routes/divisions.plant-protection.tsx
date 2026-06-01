import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Bug, ShieldCheck, Microscope, Leaf } from "lucide-react";

export const Route = createFileRoute("/divisions/plant-protection")({
  head: () => ({
    meta: [
      { title: "Plant Protection — IIAT" },
      { name: "description", content: "Division of Plant Protection — entomology, plant pathology, nematology and integrated pest management." },
      { property: "og:title", content: "Plant Protection — IIAT" },
      { property: "og:description", content: "Safeguarding crops from pests, diseases and weeds." },
    ],
  }),
  component: PlantProtectionPage,
});

const focus = [
  { icon: Bug, title: "Entomology", text: "Study of insect pests, beneficial insects and biological control agents in agriculture." },
  { icon: Microscope, title: "Plant Pathology", text: "Identification, epidemiology and management of fungal, bacterial and viral plant diseases." },
  { icon: ShieldCheck, title: "Integrated Pest Management", text: "Eco-friendly, science-based combinations of biological, cultural and chemical controls." },
  { icon: Leaf, title: "Nematology & Weed Science", text: "Management of plant-parasitic nematodes and competitive weeds in field crops." },
];

function PlantProtectionPage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Plant Protection"
      subtitle="Protecting crops from pests, pathogens and weeds through integrated, sustainable management."
      breadcrumbs={[{ label: "Divisions" }, { label: "Plant Protection" }]}
    >
      <div className="max-w-4xl text-foreground/80 leading-relaxed">
        <p className="text-lg">
          The Plant Protection division equips students with tools to diagnose, monitor and manage biotic stresses on crops. Emphasis is
          placed on integrated pest management that balances productivity, profitability and environmental safety.
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
