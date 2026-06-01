import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Users, LineChart, BookOpen, Handshake } from "lucide-react";

export const Route = createFileRoute("/divisions/social-science")({
  head: () => ({
    meta: [
      { title: "Social Science — IIAT" },
      { name: "description", content: "Division of Social Science — agricultural economics, extension education and rural sociology." },
      { property: "og:title", content: "Social Science — IIAT" },
      { property: "og:description", content: "Economics, extension and the human dimensions of agriculture." },
    ],
  }),
  component: SocialSciencePage,
});

const focus = [
  { icon: LineChart, title: "Agricultural Economics", text: "Farm management, marketing, agri-business and policy analysis for profitable agriculture." },
  { icon: Handshake, title: "Agricultural Extension", text: "Transfer of technology, farmer training, communication and rural advisory services." },
  { icon: Users, title: "Rural Sociology", text: "Understanding rural communities, group dynamics and social change in agricultural settings." },
  { icon: BookOpen, title: "Statistics & Research Methods", text: "Experimental design, data analysis and research methodology for agricultural sciences." },
];

function SocialSciencePage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Social Science"
      subtitle="The economic, social and behavioural dimensions of agriculture and rural development."
      breadcrumbs={[{ label: "Divisions" }, { label: "Social Science" }]}
    >
      <div className="max-w-4xl text-foreground/80 leading-relaxed">
        <p className="text-lg">
          The Social Science division studies the people, policies and markets that shape agriculture. Students gain skills in economics,
          extension, communication and statistics — essential for translating technology into farmer impact.
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
