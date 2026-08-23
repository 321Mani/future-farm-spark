import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowDown, Bug, Microscope } from "lucide-react";
import { Gallery } from "@/components/site/Gallery_pp";
import IIATBroucher from "@/assets/documents/IIATBroucher.pdf";

export const Route = createFileRoute("/divisions/plant-protection")({
  head: () => ({
    meta: [
      { title: "Crop Protection \u2014 IIAT" },
      { name: "description", content: "Crop Protection division at IIAT \u2014 Crop Pathology and Entomology." },
      { property: "og:title", content: "Crop Protection \u2014 IIAT" },
      { property: "og:description", content: "Sections under the Crop Protection department at IIAT." },
    ],
  }),
  component: PlantProtectionPage,
});

const sections = [
  { icon: Microscope, title: "Plant Pathology", text: "Plant Pathology is one of the divisions under the Department of Plant Protection at IIAT. Microscopic slides of several plant pathogens are maintained. A laminar air-flow chamber, hot-air oven and autoclave are used for culture maintenance and sterilisation." },
  { icon: Bug, title: "Entomology", text: "Students gain knowledge of the taxonomic characters of insects, the beneficial and harmful nature of insects and their effect on the agro-ecosystem. They are also taught about major pests in field and horticultural crops and how to recognise and control them." },
];

function PlantProtectionPage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Crop Protection"
      subtitle="About Crop Protection and the sections that make up the department at IIAT."
      breadcrumbs={[{ label: "Divisions" }, { label: "Crop Protection" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">About Crop Protection</h2>
        <p>
          Department of Crop Protection carries out teaching on pests and disease management of field & horticultural crops, storage pest, nematode management, bee keeping, sericulture and mushroom production technologies.
        </p>
      </div>

      <div className="mt-12 max-w-8xl">
        <h2 className="font-display text-2xl font-bold mb-2">Sections in Crop Protection</h2>
        <p className="text-muted-foreground mb-8">
          The Crop Protection department is divided into multiple sectors to utilise the maximum potential of
          crop protection techniques.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <div className="mt-4 font-display text-xl font-bold mb-4">
            Disciplines
          </div>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agricultural Entomology
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Plant Nematology
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Plant Pathology
              </p>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <div className="mt-4 mb-4 font-display text-xl font-bold">
            Instructional Units
          </div>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sick Plot Unit - Pests &amp; Disease
              </p>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <div className="mt-4 mb-4 font-display text-xl font-bold">
            Production Units
          </div>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mushroom Production Unit
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Apiculture Unit &amp; Sericulture Unit
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-3xl bg-gradient-soft border mt-12 p-8">
        <div className="mt-4 mb-4 font-display text-xl font-bold">
          Hands-on Training
        </div>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rearing crop pests and mass culturing of predators and parasitoids, along with their releasing methods
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Practicing plant protection components such as light traps, yellow sticky traps, sex pheromone traps and aggregation traps in fields
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Identification and diagnosis of plant diseases based on characteristic symptoms and isolation of microorganisms
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Extraction of nematodes through specific techniques such as Cobb’s decanting method and centrifugal flotation method
            </p>
          </li>
        </ul>
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
