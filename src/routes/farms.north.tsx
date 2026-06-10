import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Apple, Tent, Droplets, Flower2, Salad, Trees } from "lucide-react";

export const Route = createFileRoute("/farms/north")({
  head: () => ({
    meta: [
      { title: "North Farm — IIAT" },
      { name: "description", content: "North Farm at IIAT — orchard, shade net house, mist chamber, herbal garden, kitchen garden and botanical garden." },
    ],
  }),
  component: NorthFarmPage,
});

const units = [
  { icon: Apple, title: "Orchard", text: "Commercial fruit trees including guava, jamun, cashew, sapota, mango, pomegranate, banana, sweet orange and acid lime. Demonstrates High Density Planting, inter-cultural operations and propagation methods such as grafting, budding and layering." },
  { icon: Tent, title: "Shade Net House", text: "A shadenet-enclosed structure producing quality fruit, vegetable and ornamental planting materials for commercial sale and experiential learning in nursery production techniques." },
  { icon: Droplets, title: "Mist Chamber", text: "Polypropylene-sheet structure with overhead foggers and high-pressure mist sprayers that maintain artificial relative humidity to induce rooting of cuttings." },
  { icon: Flower2, title: "Herbal Garden", text: "Various species of medicinal and aromatic plants maintained for education and to create awareness of traditional medicinal plants among students." },
  { icon: Salad, title: "Kitchen Garden", text: "Tomato, brinjal, chillies, bhendi, cluster bean and green leafy vegetables are raised year-round to teach vegetable production techniques and support family-level nutritional security." },
  { icon: Trees, title: "Botanical Garden", text: "Collection and maintenance of various ornamental plants and tree species for educational and recreational purposes." },
];

function NorthFarmPage() {
  return (
    <PageShell
      eyebrow="Farms"
      title="North Farm"
      subtitle="Horticulture, nursery production and demonstration units for hands-on student learning."
      breadcrumbs={[{ label: "Farms" }, { label: "North Farm" }]}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {units.map((u) => (
          <div key={u.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <u.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">{u.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{u.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
