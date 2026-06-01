import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Wheat, Droplets, Mountain, CloudSun } from "lucide-react";

export const Route = createFileRoute("/divisions/crop-management")({
  head: () => ({
    meta: [
      { title: "Crop Management — IIAT" },
      { name: "description", content: "Division of Crop Management — agronomy, soil science, water management and agro-meteorology." },
      { property: "og:title", content: "Crop Management — IIAT" },
      { property: "og:description", content: "Sustainable crop production through agronomy and resource management." },
    ],
  }),
  component: CropManagementPage,
});

const focus = [
  { icon: Wheat, title: "Agronomy", text: "Scientific cultivation practices, cropping systems and farm management for maximum productivity." },
  { icon: Mountain, title: "Soil Science", text: "Soil fertility, classification, conservation and nutrient management for sustainable agriculture." },
  { icon: Droplets, title: "Water Management", text: "Irrigation engineering, watershed planning and efficient water use in farming systems." },
  { icon: CloudSun, title: "Agro-Meteorology", text: "Weather-based crop advisories, climate-smart practices and forecasting for risk reduction." },
];

function CropManagementPage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Crop Management"
      subtitle="Sustainable and resource-efficient crop production through agronomy, soil and water management."
      breadcrumbs={[{ label: "Divisions" }, { label: "Crop Management" }]}
    >
      <div className="max-w-4xl text-foreground/80 leading-relaxed">
        <p className="text-lg">
          The Crop Management division focuses on integrated approaches to cultivate crops profitably while conserving natural resources.
          Students explore soil-plant-water relationships, nutrient cycles, and weather impacts to design productive farming systems.
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
