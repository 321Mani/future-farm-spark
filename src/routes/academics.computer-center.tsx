import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Monitor, Wifi, Cpu, Server } from "lucide-react";

export const Route = createFileRoute("/academics/computer-center")({
  head: () => ({
    meta: [
      { title: "Computer Center — IIAT" },
      { name: "description", content: "State-of-the-art computer centre with modern systems and high-speed internet at IIAT." },
      { property: "og:title", content: "Computer Center — IIAT" },
      { property: "og:description", content: "Modern IT infrastructure supporting agricultural informatics." },
    ],
  }),
  component: ComputerCenter,
});

const features = [
  { icon: Monitor, title: "Modern Workstations", text: "60+ branded desktop systems with latest configurations for student use." },
  { icon: Wifi, title: "High-Speed Internet", text: "Dedicated leased-line broadband and campus-wide Wi-Fi connectivity." },
  { icon: Cpu, title: "Specialised Software", text: "GIS, statistical packages, remote sensing tools and agri-informatics applications." },
  { icon: Server, title: "Server Room", text: "Centralised servers hosting student records, e-learning and library management systems." },
];

function ComputerCenter() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Computer Center"
      subtitle="A digital-first learning environment empowering students with modern computing infrastructure."
      breadcrumbs={[{ label: "Academics" }, { label: "Computer Center" }]}
    >
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          The IIAT Computer Center supports academics, research and administration with reliable, well-maintained IT facilities. Students gain hands-on exposure to agri-informatics, GIS, remote sensing and statistical analysis tools that are integral to modern agriculture.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-6xl">
        {features.map((f) => (
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
