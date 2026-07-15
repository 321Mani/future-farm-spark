import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Monitor, Wifi, Cpu, Server } from "lucide-react";
import { Gallery } from "@/components/site/Gallery_cc";

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
  { icon: Monitor, title: "Computer(Dell & HP)", text: "40" },
  { icon: Wifi, title: "Head phone", text: "18" },
  { icon: Cpu, title: "Battery-10KVA", text: "20" },
  { icon: Server, title: "Server M/C Dell", text: "1" },
  { icon: Server, title: "External Hard disc 2 TP", text: "1" },
  { icon: Server, title: "External LG USB Drive", text: "1" },
  { icon: Server, title: "Web Camera", text: "4" },
  { icon: Server, title: "Camera (Economics)", text: "1" },
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
          The campus has equipped computer laboratory with hardware and software to cater the requirements of the students, teachers and the curriculum.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Computer Lab, faculty rooms, Library, Administration and Section Office are connected to the WIFI, through high speed Routers.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold mt-8">Particulars</h2>
      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-10xl">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Quantity: {f.text}</p>
          </div>
        ))}
      </div>
      
      <Gallery />
    </PageShell>
  );
}
