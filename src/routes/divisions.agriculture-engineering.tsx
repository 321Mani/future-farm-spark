import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowDown, Cog, Utensils } from "lucide-react";
import IIATBroucher from "@/assets/documents/IIATBroucher.pdf";
import { Gallery } from "@/components/site/Gallery_ae";

export const Route = createFileRoute("/divisions/agriculture-engineering")({
  head: () => ({
    meta: [
      { title: "Agriculture Engineering \u2014 IIAT" },
      { name: "description", content: "Agricultural Engineering division at IIAT \u2014 Agricultural Engineering and Food Technology." },
      { property: "og:title", content: "Agriculture Engineering \u2014 IIAT" },
      { property: "og:description", content: "Sections under the Agricultural Engineering department at IIAT." },
    ],
  }),
  component: AgEngPage,
});

const sections = [
  { icon: Cog, title: "Agricultural Engineering", text: "Engineering that deals with the design of farm machinery, the location and planning of farm structures, farm drainage, soil management and erosion control, water supply and irrigation, rural electrification, and the processing of farm products." },
  { icon: Utensils, title: "Food Technology", text: "The Food Science laboratory can accommodate fifty students at a time and is well equipped with modernised lab equipment and good ventilation. It is attached with a staff room and a storage room used for storing instruments, glassware and chemicals." },
];

function AgEngPage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Agriculture Engineering"
      subtitle="About Agricultural Engineering and the sections that make up the department at IIAT."
      breadcrumbs={[{ label: "Divisions" }, { label: "Agriculture Engineering" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">About Agricultural Engineering</h2>
        <p>
          <strong>Agricultural Engineering:</strong> Engineering that deals with the design of farm machinery,
          the location and planning of farm structures, farm drainage, soil management and erosion control,
          water supply and irrigation, rural electrification, and the processing of farm products.
        </p>
        <p>
          <strong>Food Technology:</strong> The Food Science laboratory accommodates fifty students at a time
          and is well equipped with modernised lab equipment and good ventilation. The laboratory is attached
          with a staff room and a storage room used for storing instruments, glassware and chemicals.
        </p>
      </div>

      <div className="mt-12 max-w-8xl">
        <h2 className="font-display text-2xl font-bold mb-2">Sections in Agricultural Engineering</h2>
        <p className="text-muted-foreground mb-8">
          The Agricultural Engineering department is divided into multiple sectors to utilise the maximum
          potential of agricultural engineering techniques.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
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
      <a
        href={IIATBroucher}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-md mt-8 font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow self-start lg:self-auto"
      >
        Download Brochure <ArrowDown className="h-4 w-4" />
      </a>
      <Gallery />
    </PageShell>
  );
}
