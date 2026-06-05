import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Sprout, Dna, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/divisions/crop-improvement")({
  head: () => ({
    meta: [
      { title: "Crop Improvement \u2014 IIAT" },
      { name: "description", content: "Crop Improvement division at IIAT \u2014 Seed Science and Technology, Plant Breeding & Genetics, and Biotechnology." },
      { property: "og:title", content: "Crop Improvement \u2014 IIAT" },
      { property: "og:description", content: "Sections under the Crop Improvement department at IIAT." },
    ],
  }),
  component: CropImprovementPage,
});

const sections = [
  { icon: Sprout, title: "Seed Science and Technology", text: "Production, processing, quality testing and certification of seeds \u2014 ensuring genetically pure and physiologically sound planting material for farmers." },
  { icon: Dna, title: "Plant Breeding & Genetics", text: "Genetic improvement of crops for higher yield, quality, stress tolerance and resistance to pests and diseases." },
  { icon: FlaskConical, title: "Biotechnology", text: "Tissue culture, molecular markers and modern biotech tools applied to crop improvement and conservation of plant genetic resources." },
];

function CropImprovementPage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Crop Improvement"
      subtitle="About Crop Improvement and the sections that make up the department at IIAT."
      breadcrumbs={[{ label: "Divisions" }, { label: "Crop Improvement" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">About Crop Improvement</h2>
        <p>
          Crop improvement refers to the genetic alteration of plants to satisfy human needs. In prehistory, human
          forebears in various parts of the world brought into cultivation a few hundred species from the hundreds
          of thousands available. In the process they transformed elements of these species into crops through
          genetic alterations that involved conscious and unconscious selection, the differential reproduction of
          variants.
        </p>
        <p>
          Through a long history of trial and error, a relatively few plant species have become the mainstay of
          agriculture and thus the world\u2019s food supply. This process of domestication involved the identification
          of certain useful wild species combined with a process of selection that brought about changes in
          appearance, quality, and productivity.
        </p>
      </div>

      <div className="mt-12 max-w-6xl">
        <h2 className="font-display text-2xl font-bold mb-2">Sections in Crop Improvement</h2>
        <p className="text-muted-foreground mb-8">
          The Crop Improvement department is divided into multiple sectors to utilise the maximum potential of
          crop improvement techniques.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
