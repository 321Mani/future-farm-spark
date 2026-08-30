import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Sprout, Dna, FlaskConical, ArrowDown } from "lucide-react";
import IIATBroucher from "@/assets/documents/IIATBroucher.pdf";
import { Gallery } from "@/components/site/Gallery_div_improve";

export const Route = createFileRoute("/divisions/crop-improvement")({
  head: () => ({
    meta: [
      { title: "Crop Improvement \u2014 IIAT" },
      { name: "description", content: "Crop Improvement division at IIAT \u2014 Seed Science and Technology, Plant Breeding & Genetics, and Biotechnology." },
      { property: "og:title", content: "Crop Improvement \u2014 IIAT" },
      { property: "og:description", content: "Sections under the Crop Improvement department at IIAT." },
    ],
  }),
  component: CropImprovementPage,
});

const sections = [
  { icon: Sprout, title: "Seed Science and Technology", text: "Production, processing, quality testing and certification of seeds \u2014 ensuring genetically pure and physiologically sound planting material for farmers." },
  { icon: Dna, title: "Plant Breeding & Genetics", text: "Genetic improvement of crops for higher yield, quality, stress tolerance and resistance to pests and diseases." },
  { icon: FlaskConical, title: "Biotechnology", text: "Tissue culture, molecular markers and modern biotech tools applied to crop improvement and conservation of plant genetic resources." },
];

function CropImprovementPage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Crop Improvement"
      subtitle="About Crop Improvement and the sections that make up the department at IIAT."
      breadcrumbs={[{ label: "Divisions" }, { label: "Crop Improvement" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">About Crop Improvement</h2>
        <p>
          Department of Crop Improvement involves in teaching plant breeding and genetics of crops, developing new plant cultivars through hybridization and tissue culture, seed physiology, biology and pathology related to seed dormancy, germination, development, maturation, quality and deterioration and biochemical processes involved in plant growth and regulation.
        </p>
      </div>

      <div className="mt-12 max-w-10xl">
        <h2 className="font-display text-2xl font-bold mb-2">Sections in Crop Improvement</h2>
        <p className="text-muted-foreground mb-8">
          The Crop Improvement department is divided into multiple sectors to utilise the maximum potential of
          crop improvement techniques.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <div className="mt-4 font-display mb-4 text-xl font-bold">
            Disciplines
          </div>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Plant Breeding &amp; Genetics
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agricultural Biotechnology
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seed Science and Technology
              </p>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <div className="mt-4 font-display mb-4 text-xl font-bold">
            Instructional Units
          </div>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tissue Culture Unit
              </p>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <div className="mt-4 font-display mb-4 text-xl font-bold">
            Production Units
          </div>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Seed Production Unit
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-3xl bg-gradient-soft border p-8 mt-12">
        <div className="mt-4 font-display mb-4 text-xl font-bold">
          Hands-on Training
        </div>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dissection and evaluation of floral parts in various crops and breeding techniques
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Emasculation, crossing and selfing techniques for agricultural and horticultural crops
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              DNA isolation and MAS (Marker Assisted Selection)
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Seed germination, seed treatment methods, dormancy breaking methods, vigour &amp; viability test
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estimation of photosynthetic pigments and identification of nutritional deficiencies
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Assessment of abiotic stress-related parameters
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
