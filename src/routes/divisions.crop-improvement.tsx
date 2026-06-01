import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Sprout, Dna, FlaskConical, Leaf } from "lucide-react";

export const Route = createFileRoute("/divisions/crop-improvement")({
  head: () => ({
    meta: [
      { title: "Crop Improvement — IIAT" },
      { name: "description", content: "Division of Crop Improvement at IIAT — genetics, plant breeding, biotechnology and seed science." },
      { property: "og:title", content: "Crop Improvement — IIAT" },
      { property: "og:description", content: "Advancing crop genetics, breeding and biotechnology." },
    ],
  }),
  component: CropImprovementPage,
});

const focus = [
  { icon: Dna, title: "Genetics & Plant Breeding", text: "Conventional and molecular breeding for developing high-yielding, climate-resilient crop varieties." },
  { icon: FlaskConical, title: "Biotechnology", text: "Tissue culture, marker-assisted selection and genomics applied to crop improvement programs." },
  { icon: Sprout, title: "Seed Science & Technology", text: "Seed production, certification, storage and quality testing to ensure superior planting material." },
  { icon: Leaf, title: "Crop Physiology", text: "Understanding plant growth, stress response and yield-determining processes for higher productivity." },
];

function CropImprovementPage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Crop Improvement"
      subtitle="Developing high-yielding, stress-tolerant and nutrient-rich crop varieties through genetics, breeding and biotechnology."
      breadcrumbs={[{ label: "Divisions" }, { label: "Crop Improvement" }]}
    >
      <div className="prose-invert max-w-4xl text-foreground/80 leading-relaxed">
        <p className="text-lg">
          The Division of Crop Improvement at IIAT integrates classical plant breeding with modern biotechnological tools to address the
          challenges of food security, climate change and farmer profitability. The division trains students in the science of developing
          better crops, from gene to field.
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
