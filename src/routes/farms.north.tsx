import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Apple, Tent, Droplets, Flower2, Salad, Trees } from "lucide-react";

export const Route = createFileRoute("/farms/north")({
  head: () => ({
    meta: [
      { title: "Horticulture — IIAT" },
      { name: "description", content: "North Farm at IIAT — orchard, shade net house, mist chamber, herbal garden, kitchen garden and botanical garden." },
    ],
  }),
  component: NorthFarmPage,
});

const units = [
  
  { icon: Apple, title: "Orchard", text: "Commercial fruit trees including guava, jamun, cashew, sapota, mango, pomegranate, banana, sweet orange and acid lime. Demonstrates High Density Planting, inter-cultural operations and propagation methods such as grafting, budding and layering." },
  
  { icon: Flower2, title: "Herbal Garden", text: "Various species of medicinal and aromatic plants maintained for education and to create awareness of traditional medicinal plants among students." },

  { icon: Tent, title: "Shade Net House", text: "The shade net facility provides hands-on training for B.Sc. (Hons.) Agriculture and Horticulture students in protected cultivation. Students gain practical knowledge of nursery management, seed sowing, seedling production, irrigation, fertigation, temperature and humidity management, pest and disease control, plant growth monitoring, hardening of seedlings, and transplanting techniques." },
  
  { icon: Droplets, title: "Mist Chamber", text: "The mist chamber is used in horticulture for the rapid propagation and production of healthy plants through cuttings, grafting, budding, and tissue-culture hardening. It maintains suitable humidity and temperature, reduces moisture loss, and promotes faster root and shoot development. It provides valuable hands-on training for B.Sc. (Hons.) Agriculture and Horticulture students in plant propagation and nursery management." },
    
  { icon: Flower2, title: "Vegetable Unit", text: "Vegetable crop resources provide practical knowledge in identifying and cultivating solanaceous vegetables, cucurbits, peas and beans, cole crops, bulb crops, root crops, tuber crops, pot herbs and greens, salad crops, and perennial vegetables, supporting B.Sc. (Hons.) Agriculture and Horticulture students, farmers, and researchers in learning crop identification, propagation, planting, irrigation, nutrient management, pest and disease management, harvesting, and post-harvest practices.." },

  { icon: Flower2, title: "Florticulture Garden", text: "The garden can serve as a practical learning facility where students gain hands-on experience in the identification, cultivation, propagation, management, and landscaping of important ornamental and flowering plants. It can also provide exposure to nursery techniques, planting designs, seasonal flower production, and sustainable garden management." },
  
  { icon: Salad, title: "Kitchen Garden", text: "Tomato, brinjal, chillies, bhendi, cluster bean and green leafy vegetables are raised year-round to teach vegetable production techniques and support family-level nutritional security." },
  
  { icon: Trees, title: "Botanical Garden", text: "Collection and maintenance of various ornamental plants and tree species for educational and recreational purposes." },
  
];

function NorthFarmPage() {
  return (
    <PageShell
      eyebrow="Farms"
      title="Horticulture"
      subtitle="Horticulture, nursery production and demonstration units for hands-on student learning."
      breadcrumbs={[{ label: "Farms" }, { label: "Horticulture" }]}
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
