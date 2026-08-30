import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Sprout } from "lucide-react";
import { Gallery } from "@/components/site/Gallery_seed";

export const Route = createFileRoute("/farms/seed-production")({
  head: () => ({
    meta: [
      { title: "Seed Production — IIAT Farm" },
      {
        name: "description",
        content:
          "Seed production at IIAT Farm — Experiential Learning Programme covering black gram, green gram, maize and rice from field preparation to seed processing and storage.",
      },
      { property: "og:title", content: "Seed Production — IIAT Farm" },
      {
        property: "og:description",
        content: "Hands-on seed production training at IIAT Farm, Thuraiyur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SeedProductionPage,
});

const crops = [
  {
    sno: "1",
    crop: "Black gram",
    activities:
      "Sowing of quality seed, crop management, rouging, harvesting, threshing, cleaning and drying",
  },
  {
    sno: "2",
    crop: "Green gram",
    activities:
      "Crop establishment, nutrient and water management, rouging, harvesting and seed processing",
  },
  {
    sno: "3",
    crop: "Maize",
    activities:
      "Maintenance of isolation, removal of off-types, pollination management, harvesting and seed grading",
  },
  {
    sno: "4",
    crop: "Rice",
    activities:
      "Nursery raising, transplanting, field inspection, rouging, harvesting, threshing and seed cleaning",
  },
];

function SeedProductionPage() {
  return (
    <PageShell
      eyebrow="Farms"
      title="Seed Production"
      subtitle="Experiential Learning Programme activities that turn field practice into genetically pure, viable seed."
      breadcrumbs={[{ label: "Farms" }, { label: "Seed Production" }]}
    >
      <div className="max-w-4xl space-y-5 text-foreground/80 leading-relaxed">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
            <Sprout className="h-6 w-6" />
          </div>
          <p>
            At IIAT Farm, final-year students undergo Experiential Learning Programme (ELP)
            activities related to seed production as part of their practical training in
            agricultural crop management. Through this programme, students gain hands-on experience
            in the complete seed production process, from variety selection and field preparation to
            harvesting, seed processing and storage.
          </p>
        </div>
        <p>
          Seed production aims to obtain genetically pure, physically pure, healthy and viable seed
          for subsequent crop production.
        </p>
      </div>

      <div className="mt-12 max-w-5xl">
        <h2 className="font-display text-2xl font-bold mb-4">Major Seed Crops</h2>
        <div className="overflow-x-auto rounded-2xl border bg-card shadow-soft">
          <table className="w-full text-sm">
            <thead className="bg-primary/10 text-foreground">
              <tr>
                <th className="text-left p-4 font-semibold">S.No.</th>
                <th className="text-left p-4 font-semibold">Crop</th>
                <th className="text-left p-4 font-semibold">Major Seed Production Activities</th>
              </tr>
            </thead>
            <tbody>
              {crops.map((c) => (
                <tr key={c.sno} className="border-t">
                  <td className="p-4">{c.sno}</td>
                  <td className="p-4 font-medium">{c.crop}</td>
                  <td className="p-4 text-muted-foreground">{c.activities}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Gallery />
    </PageShell>
  );
}
