import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Wheat, Mountain, Microscope, Leaf, FlaskConical, Cog } from "lucide-react";

export const Route = createFileRoute("/divisions/crop-management")({
  head: () => ({
    meta: [
      { title: "Crop Management \u2014 IIAT" },
      { name: "description", content: "Crop Management division at IIAT \u2014 Agronomy, Soil Science, Agricultural Microbiology, Crop Physiology, Biochemistry and Agricultural Engineering." },
      { property: "og:title", content: "Crop Management \u2014 IIAT" },
      { property: "og:description", content: "Sections under the Crop Management department at IIAT." },
    ],
  }),
  component: CropManagementPage,
});

const sections = [
  { icon: Wheat, title: "Agronomy", text: "Study of crops and the soils in which they grow. Agronomists work to develop methods that improve the use of soil and increase the production of food and fibre crops." },
  { icon: Mountain, title: "Soil Science", text: "Soil fertility, classification, conservation and nutrient management for sustainable agricultural production." },
  { icon: Microscope, title: "Agricultural Microbiology", text: "Study of microorganisms important to agriculture \u2014 soil microbes, biofertilizers, biopesticides and microbial processes that support crop health." },
  { icon: Leaf, title: "Crop Physiology", text: "Plant functions and responses of crops grown in various environments. Understanding how crop plants react to their field environment is essential for crop improvement, solving crop management problems, and making good management decisions." },
  { icon: FlaskConical, title: "Biochemistry", text: "Biochemical processes within plants \u2014 metabolism, nutrient uptake, and the chemistry that underpins growth, yield and quality of agricultural produce." },
  { icon: Cog, title: "Agricultural Engineering", text: "Engineering principles applied to farm operations \u2014 machinery, soil-water engineering and processing technology supporting modern crop management." },
];

function CropManagementPage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Crop Management"
      subtitle="About Crop Management and the sections that make up the department at IIAT."
      breadcrumbs={[{ label: "Divisions" }, { label: "Crop Management" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">About Crop Management</h2>
        <p>
          <strong>Agronomy:</strong> Study of crops and the soils in which they grow. Agronomists work to develop
          methods that will improve the use of soil and increase the production of food and fibre crops.
        </p>
        <p>
          <strong>Crop Physiology:</strong> Plant functions and responses of crops grown in various environments.
          Knowing why and how crop plants react to their field environment is essential for crop improvement,
          solving crop management problems, and making good management decisions.
        </p>
      </div>

      <div className="mt-12 max-w-6xl">
        <h2 className="font-display text-2xl font-bold mb-2">Sections in Crop Management</h2>
        <p className="text-muted-foreground mb-8">
          The Crop Management department is divided into multiple sectors to utilise the maximum potential of
          crop management techniques.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
