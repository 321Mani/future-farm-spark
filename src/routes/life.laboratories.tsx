import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import {
  Monitor,
  Leaf,
  FlaskConical,
  Dna,
  Sprout,
  Microscope,
  Bug,
  ShieldCheck,
  TestTube,
  Mountain,
  Tractor,
  CloudSun,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/life/laboratories")({
  head: () => ({
    meta: [
      { title: "Laboratories — IIAT Thuraiyur" },
      {
        name: "description",
        content:
          "Explore IIAT's laboratories: Computer, Biochemistry, Plant Breeding & Genetics, Seed Science, Microbiology, Plant Pathology, Entomology, Biotechnology, Soil Science, Agronomy and the Agrometeorology Observatory.",
      },
      { property: "og:title", content: "Laboratories — IIAT" },
      {
        property: "og:description",
        content: "Well-equipped teaching and research laboratories supporting hands-on agricultural education at IIAT.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Laboratories,
});

const labs = [
  {
    icon: Monitor,
    title: "Computer Lab",
    quote:
      "Computer Science is a science of abstraction — creating the right model for a problem and devising the appropriate mechanizable techniques to solve it.",
    text: "The campus has one richly equipped computer laboratory accessible to students during college hours, with advanced infrastructure in terms of hardware and software to cater to the requirements of the students, teachers and the curriculum.",
  },
  {
    icon: Leaf,
    title: "Environmental Science",
    text: "The Department of Environmental Science studies the interactions between humans and nature, focusing on sustainability, pollution control, biodiversity conservation, and the responsible management of natural resources.",
  },
  {
    icon: FlaskConical,
    title: "Biochemistry Lab",
    text: "This subject deals with the understanding of chemical processes associated with living cells at the molecular level. The lab provides controlled conditions in which experiments may be performed. Lab practices include evaluation of the nutritive value of cereals and pulses, and the biochemistry of disease and pest resistance.",
  },
  {
    icon: Dna,
    title: "Plant Breeding and Genetics Lab",
    quote:
      "A Plant Breeding and Genetics Laboratory enhances crop productivity, quality, and adaptability by integrating traditional breeding methods with modern molecular tools like marker-assisted selection and gene editing, aiming to develop improved, climate-resilient, high-yielding cultivars for food security.",
  },
  {
    icon: Sprout,
    title: "Seed Science & Technology Lab",
    text: "The department includes experts in seed technology offering specialised courses in seed legislation, certification and entrepreneurship development. It includes advanced laboratories for seed testing and experimental fields for practical experience. Key research focus areas include seed physiology, seed enhancement techniques (enhancement, coating and pelleting), seed pathology (seed health management), and seed processing and storage.",
  },
  {
    icon: Microscope,
    title: "Agricultural Microbiology Lab",
    quote: "Life would not long remain possible in the absence of microbes.",
    bullets: [
      "To impart quality education and research in the sphere of Agricultural Microbiology.",
      "Development of multifunctional biofertilizer strains for enhanced plant nutrition and soil health.",
      "To create awareness on biofertilizer technology among the farming community, supply quality biofertilizers and provide advisory services.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Plant Pathology",
    text: "The Plant Pathology lab deals with basic knowledge about laboratory equipment and their working, culture media, and procedures necessary for sterilization and culturing of microorganisms. Students are made familiar with the identification and growth of microorganisms in culture.",
  },
  {
    icon: Bug,
    title: "Entomology Lab",
    text: "Students gain knowledge about the taxonomic characters of insects, the beneficial and harmful nature of insects and their effect on the agro-ecosystem. They are also taught about major pests in field and horticultural crops, and how to recognise and control them.",
  },
  {
    icon: TestTube,
    title: "Agricultural Biotechnology Lab",
    text: "Agricultural biotechnology is one of the largest scientific and industrial research areas, developing new techniques for improving agricultural productivity, food security and the genomics revolution. Commercial plant tissue culture techniques are used especially for mass multiplication of banana, bamboo, rose and ornamental crops. Students are trained in media preparation techniques, handling of instruments and nursery technology, alongside several training courses in agricultural biotechnology.",
  },
  {
    icon: Mountain,
    title: "Soil Science and Agricultural Chemistry Lab",
    text: "The soil science and agricultural chemistry laboratory focuses on assessing the physical, chemical and biological properties of soil to determine fertility, suitability for agriculture and environmental health. The lab deals with the basic experiments used in the practice of soil analysis. Students understand the importance of soil texture, its nutritional value, soil management and field crop production. The lab is well equipped with all basic equipment required for soil testing.",
  },
  {
    icon: Tractor,
    title: "Agronomy",
    text: "Agronomy is a foundational subject in agricultural education, introducing students to essential inputs such as seeds, fertilizers, organic manures, chemicals, tools and implements. All agronomy courses include practical fieldwork where students actively participate in farming activities, building confidence and real-world understanding. Field visits to different cropping systems help students understand practical challenges and large-scale farming conditions. Special training programmes prepare students, especially those from farming backgrounds, for agricultural entrepreneurship and sustainable farming practices.",
  },
  {
    icon: CloudSun,
    title: "Agrometeorology Observatory",
    text: "The observatory is equipped with the latest weather forecasting equipment such as rain gauge, sunshine recorder, anemometer, soil thermometers, wind vane, max/min thermometers and dry/wet bulb thermometers.",
  },
  {
    icon: Wrench,
    title: "Machinery and Equipment in Workshop",
    text: "Farm machinery such as tractors and power tillers, along with agricultural engineering implements like bund former, rotavator and leveller, and tools such as hand hoe, spade, sickle and sprayer are available for farm use and teaching purposes.",
  },
];

function Laboratories() {
  return (
    <PageShell
      eyebrow="Life @ IIAT"
      title="Laboratories"
      subtitle="Well-equipped teaching and research laboratories where classroom theory turns into hands-on agricultural practice."
      breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Laboratories" }]}
    >
      <div className="max-w-3xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Every discipline at IIAT is supported by a dedicated laboratory or field facility. From molecular biology and
          soil testing to weather observation and farm machinery, students learn by doing across the 100-acre campus.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {labs.map((lab) => (
          <article
            key={lab.title}
            className="rounded-2xl border bg-card p-6 shadow-soft transition-all hover:shadow-glow"
          >
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <lab.icon className="h-6 w-6" />
            </div>
            <h2 className="font-display text-xl font-bold">{lab.title}</h2>
            {lab.quote && (
              <blockquote className="mt-3 border-l-2 border-primary/40 pl-4 text-sm italic text-foreground/80">
                {lab.quote}
              </blockquote>
            )}
            {lab.text && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lab.text}</p>}
            {lab.bullets && (
              <ul className="mt-3 space-y-2">
                {lab.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </PageShell>
  );
}
