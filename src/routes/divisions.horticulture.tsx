import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowDown } from "lucide-react";
import IIATBroucher from "@/assets/documents/IIATBroucher.pdf";
import { Gallery } from "@/components/site/Gallery_hc";

export const Route = createFileRoute("/divisions/horticulture")({
  head: () => ({
    meta: [
      { title: "Horticulture \u2014 IIAT" },
      { name: "description", content: "Horticulture division at IIAT \u2014 cultivation of fruits, vegetables, flowers, ornamentals and medicinal plants." },
      { property: "og:title", content: "Horticulture \u2014 IIAT" },
      { property: "og:description", content: "About Horticulture at IIAT." },
    ],
  }),
  component: HorticulturePage,
});

function HorticulturePage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Horticulture"
      subtitle="The art and science of cultivating gardens \u2014 fruits, vegetables, flowers and ornamentals."
      breadcrumbs={[{ label: "Divisions" }, { label: "Horticulture" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">About Horticulture</h2>
        <p>
          Department of Horticulture and Food Science imparts education on technologies involved in the cultivation of fruits, vegetables, flowers, medicinal plants, spices & condiments, landscaping, food science along with value addition in agricultural crops and Agro Forestry.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <div className="mt-4 mb-4 font-display text-xl font-bold">
            Disciplines
          </div>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Horticulture
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Food Science &amp; Technology
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
                Model Orchard
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Roof Garden
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Polyhouse Unit
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trellis
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Botanical Garden
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kitchen Garden
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Shade Net
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
                Nursery Unit
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Food Processing and Value Addition
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fruits &amp; Vegetables Sales Outlet
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Flower Production Unit
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-3xl bg-gradient-soft border p-8 mt-12">
        <div className="mt-4 mb-4 font-display text-xl font-bold">
          Hands-on Training
        </div>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Layout and planting of fruit trees and other horticultural crops
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Practicing asexual methods of propagation such as cutting, layering, budding and grafting
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nursery management, dry flower arrangement, bonsai, terrarium and herbarium making
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sensory evaluation of food samples, nutritional analysis of foods and microbial study of foods
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Food safety issues and food plant sanitation
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
