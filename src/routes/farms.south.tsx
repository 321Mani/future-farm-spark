import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Sprout, Wheat, Leaf, Apple, Landmark, Presentation, CloudSun, Recycle, Beef, Egg } from "lucide-react";

export const Route = createFileRoute("/farms/south")({
  head: () => ({
    meta: [
      { title: "Agriculture — IIAT" },
      { name: "description", content: "Agriculture at IIAT — central farm, crop cafeteria, forage unit, orchard, field museum, observatory, vermi-composting, animal husbandry and poultry." },
    ],
  }),
  component: SouthFarmPage,
});

const units = [
  { icon: Sprout, title: "Central Farm", text: "A hub for farming, livestock rearing and crop production. Serves research, development and training for students and farmers with crop fields, livestock enclosures, greenhouses and laboratories." },
  { icon: Wheat, title: "Crop Cafeteria", text: "A facility where animals are fed with a variety of crops — grains, fruits and vegetables — supplied as per dietary requirements to ensure a balanced ration." },
  { icon: Leaf, title: "Forage Crops Unit", text: "Grasses, legumes and other nutrient-rich plants cultivated as livestock feed — a cost-effective and nutritious feed base for animal husbandry." },
  { icon: Apple, title: "Orchard", text: "Fruit trees cultivated for commercial purposes, providing income and contributing to the local economy." },
  { icon: Landmark, title: "Field Museum", text: "Showcases farming practices, crop production and livestock rearing through exhibits, interactive displays and educational programmes." },
  { icon: Presentation, title: "Field Lecture Hall", text: "An outdoor venue equipped with seating and audio-visual aids for agricultural lectures, presentations and hands-on learning." },
  { icon: CloudSun, title: "Meteorological Observatory", text: "Collects and analyses weather data with thermometers, barometers and anemometers to support informed crop and livestock decisions." },
  { icon: Recycle, title: "Vermi Composting Unit", text: "Organic waste converted into nutrient-rich compost using earthworms — a sustainable fertilizer source for the farm." },
  { icon: Beef, title: "Animal Husbandry Unit", text: "Enclosures for cows, goats and other livestock with feeding, watering and medical facilities for commercial rearing and breeding." },
  { icon: Egg, title: "Poultry Unit", text: "Chickens, turkeys and other poultry raised with proper feeding, watering and medical care — a vital income and food source." },
];

function SouthFarmPage() {
  return (
    <PageShell
      eyebrow="Farms"
      title="Agriculture"
      subtitle="A complete instructional farm with crop fields, orchards, livestock and learning facilities."
      breadcrumbs={[{ label: "Farms" }, { label: "Agriculture" }]}
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
