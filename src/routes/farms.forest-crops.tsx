import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { TreePine } from "lucide-react";

export const Route = createFileRoute("/farms/forest-crops")({
  head: () => ({
    meta: [
      { title: "Forest Crops — IIAT Farm" },
      {
        name: "description",
        content:
          "Forest and tree species maintained at IIAT Farm, Thuraiyur — teak, casuarina, eucalyptus, melia, neem and subabul for agroforestry studies and practical learning.",
      },
      { property: "og:title", content: "Forest Crops — IIAT Farm" },
      {
        property: "og:description",
        content: "Tree and forest species for identification, nursery and agroforestry studies at IIAT.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ForestCropsPage,
});

const trees = [
  { sno: "1", name: "Teak", sci: "Tectona grandis", use: "Timber" },
  { sno: "2", name: "Casuarina", sci: "Casuarina equisetifolia", use: "Poles, fuelwood, windbreak" },
  { sno: "3", name: "Eucalyptus", sci: "Eucalyptus spp.", use: "Pulpwood, timber, fuelwood" },
  { sno: "4", name: "Melia", sci: "Melia dubia", use: "Timber, plywood" },
  { sno: "5", name: "Neem", sci: "Azadirachta indica", use: "Medicinal products, timber, biopesticide" },
  { sno: "6", name: "Subabul", sci: "Leucaena leucocephala", use: "Fodder, fuelwood, green manure" },
];

function ForestCropsPage() {
  return (
    <PageShell
      eyebrow="Farms"
      title="Forest Crops"
      subtitle="Tree and forest species maintained for identification, nursery practice and agroforestry studies."
      breadcrumbs={[{ label: "Farms" }, { label: "Forest Crops" }]}
    >
      <div className="max-w-4xl flex items-start gap-4 text-foreground/80 leading-relaxed">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
          <TreePine className="h-6 w-6" />
        </div>
        <p>
          IIAT Farm, Thuraiyur, maintains different tree and forest species for{" "}
          <strong>student identification</strong>, <strong>practical learning</strong>,{" "}
          <strong>nursery maintenance</strong>, <strong>agroforestry studies</strong> and{" "}
          <strong>environmental management</strong>.
        </p>
      </div>

      <div className="mt-12 max-w-5xl">
        <h2 className="font-display text-2xl font-bold mb-4">Forest & Tree Crops</h2>
        <div className="overflow-x-auto rounded-2xl border bg-card shadow-soft">
          <table className="w-full text-sm">
            <thead className="bg-primary/10 text-foreground">
              <tr>
                <th className="text-left p-4 font-semibold">S.No.</th>
                <th className="text-left p-4 font-semibold">Forest / Tree Crop</th>
                <th className="text-left p-4 font-semibold">Scientific Name</th>
                <th className="text-left p-4 font-semibold">Major Use</th>
              </tr>
            </thead>
            <tbody>
              {trees.map((t) => (
                <tr key={t.sno} className="border-t">
                  <td className="p-4">{t.sno}</td>
                  <td className="p-4 font-semibold">{t.name}</td>
                  <td className="p-4 italic text-muted-foreground">{t.sci}</td>
                  <td className="p-4">{t.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  );
}
