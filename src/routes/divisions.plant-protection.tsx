import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Bug, Microscope } from "lucide-react";

export const Route = createFileRoute("/divisions/plant-protection")({
  head: () => ({
    meta: [
      { title: "Plant Protection \u2014 IIAT" },
      { name: "description", content: "Plant Protection division at IIAT \u2014 Plant Pathology and Entomology." },
      { property: "og:title", content: "Plant Protection \u2014 IIAT" },
      { property: "og:description", content: "Sections under the Plant Protection department at IIAT." },
    ],
  }),
  component: PlantProtectionPage,
});

const sections = [
  { icon: Microscope, title: "Plant Pathology", text: "Plant Pathology is one of the divisions under the Department of Plant Protection at IIAT. Microscopic slides of several plant pathogens are maintained. A laminar air-flow chamber, hot-air oven and autoclave are used for culture maintenance and sterilisation." },
  { icon: Bug, title: "Entomology", text: "Students gain knowledge of the taxonomic characters of insects, the beneficial and harmful nature of insects and their effect on the agro-ecosystem. They are also taught about major pests in field and horticultural crops and how to recognise and control them." },
];

function PlantProtectionPage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Plant Protection"
      subtitle="About Plant Protection and the sections that make up the department at IIAT."
      breadcrumbs={[{ label: "Divisions" }, { label: "Plant Protection" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">About Plant Protection</h2>
        <p>
          <strong>Plant Pathology:</strong> One of the divisions under the Department of Plant Protection at
          IIAT. Microscopic slides of several plant pathogens are maintained, and a laminar air-flow chamber,
          hot-air oven and autoclave are used for culture maintenance and sterilisation purposes.
        </p>
        <p>
          <strong>Entomology:</strong> Students gain knowledge about the taxonomic characters of insects, the
          beneficial and harmful nature of insects and their effect on the agro-ecosystem. They are also taught
          about major pests in field and horticultural crops and how to recognise and control them.
        </p>
      </div>

      <div className="mt-12 max-w-5xl">
        <h2 className="font-display text-2xl font-bold mb-2">Sections in Plant Protection</h2>
        <p className="text-muted-foreground mb-8">
          The Plant Protection department is divided into multiple sectors to utilise the maximum potential of
          plant protection techniques.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
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
