import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Wheat, Mountain, Microscope, Leaf, FlaskConical, Cog, ArrowDown, Users } from "lucide-react";
import IIATBroucher from "@/assets/documents/IIATBroucher.pdf";
import { Gallery } from "@/components/site/Gallery_div_manage";

export const Route = createFileRoute("/divisions/crop-management")({
  head: () => ({
    meta: [
      { title: "Crop Management \u2014 IIAT" },
      { name: "description", content: "Crop Management division at IIAT \u2014 Agronomy, Soil Science, Agricultural Microbiology, Crop Physiology, Biochemistry and Agricultural Engineering." },
      { property: "og:title", content: "Crop Management \u2014 IIAT" },
      { property: "og:description", content: "Sections under the Crop Management department at IIAT." },
    ],
  }),
  component: CropManagementPage,
});

function CropManagementPage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Crop Management"
      subtitle="About Crop Management and the sections that make up the department at IIAT."
      breadcrumbs={[{ label: "Divisions" }, { label: "Crop Management" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">About Crop Management</h2>
        <p>
          Department of Crop Management is functioning with multidisciplinary activities viz., teaching on soil testing and nutrient management, field and crop management, water stress, nutritional deficiency, role of microbes in eco system, soil and water pollution management, technology in the management of livestock, poultry, goat and piggery.
        </p>

      </div>
      <div className="grid lg:grid-cols-3 gap-10 mb-12 mt-12">
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <div className="mt-4 font-display text-xl font-bold mb-4">Disciplines</div>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agronomy
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soil Science & Agricultural Chemistry
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agricultural Microbiology
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Environmental Science
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agro forestry
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agricultural Engineering
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Biochemistry 
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Crop Physiology  
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Animal Husbandry 
              </p>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <div className="mt-4 font-display text-xl font-bold mb-4">
            Instructional Units
          </div>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Crop Cafeteria Unit
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Irrigation Cafeteria Unit
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vermicomposting Unit
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Farm Waste Compost Unit
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sewage Treatment Plant
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                IFS Unit (Farm Pond) – Wet Land Based
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                IFS Unit – Garden Land Based
              </p>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <div className="mt-4 font-display text-xl font-bold mb-4">
            Production Units
          </div>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Azolla Production Unit
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dairy Unit
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Piggery Unit
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dairy Products Outlet
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Biofertilizer Unit
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Poultry Unit
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Goat Unit
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-3xl bg-gradient-soft border p-8">
        <div className="mt-4 font-display text-xl font-bold mb-4">
          Hands-on Training
        </div>

        <ul className="list-disc pl-5 space-y-2">
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sowing and maintenance of Crop Cafeteria
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cultivation of wetland and garden land crops under Crop Production Course
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soil sampling, soil profile study, land utilization plan and soil quality assessment
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Isolation, characterization and identification of different microorganisms
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Biofertilizer and Azolla production
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Assessment of wastewater quality, biodiversity index and air quality
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Recording readings of different instruments and interpretation of weather data
              collected from the B-Class meteorological observatory
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technical identification of external parts of dairy cattle and birds, study of
              dentition and determination of the age of farm animals
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Restraining methods and appliances used for farm animals
            </p>
          </li>
        </ul>
      </div>

      {/* <div className="mt-12 max-w-10xl">
        <h2 className="font-display text-2xl font-bold mb-2">Sections in Crop Management</h2>
        <p className="text-muted-foreground mb-8">
          The Crop Management department is divided into multiple sectors to utilise the maximum potential of
          crop management techniques.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div> */}
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
