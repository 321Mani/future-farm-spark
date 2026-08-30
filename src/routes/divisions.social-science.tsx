import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { LineChart, Users, Monitor, Calculator, Dumbbell, ArrowDown } from "lucide-react";
import IIATBroucher from "@/assets/documents/IIATBroucher.pdf";
import { Gallery } from "@/components/site/Gallery_div_improve";

export const Route = createFileRoute("/divisions/social-science")({
  head: () => ({
    meta: [
      { title: "Social Science \u2014 IIAT" },
      { name: "description", content: "Social Science and Physical Science divisions at IIAT \u2014 Agricultural Economics, Extension, Computer Science, Mathematics and Physical Education." },
      { property: "og:title", content: "Social Science \u2014 IIAT" },
      { property: "og:description", content: "Sections under Social Science and Physical Science at IIAT." },
    ],
  }),
  component: SocialSciencePage,
});

const socialSections = [
  { icon: LineChart, title: "Agricultural Economics", text: "Farm management, agricultural marketing, finance and policy applied to agricultural enterprises." },
  { icon: Users, title: "Agricultural Extension and Rural Sociology", text: "Communication, technology transfer and the social dynamics of rural communities." },
  { icon: Monitor, title: "Computer Science", text: "Foundational computing and applications relevant to modern agricultural practice." },
  { icon: Calculator, title: "Mathematics", text: "Mathematical and statistical foundations supporting agricultural research and analysis." },
  { icon: Dumbbell, title: "Physical Education", text: "Sports, fitness and wellness for an all-round development of students." },
];

const physicalSections = [
  { icon: Calculator, title: "Mathematics & Agricultural Statistics", text: "Statistical methods and mathematical tools for experimental design and agricultural data analysis." },
  { icon: Monitor, title: "Computer Science", text: "The campus has a richly equipped computer laboratory accessible to students during college hours, with advanced hardware and software to cater to the requirements of students, teachers and the curriculum, including the basic MS Office package." },
];

function SocialSciencePage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Social Science"
      subtitle="Social Science and Physical Science at IIAT \u2014 building communication, analytical and life skills."
      breadcrumbs={[{ label: "Divisions" }, { label: "Social Science" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">About Social Science</h2>
        <p>
          Department of Social Sciences instructs about the cost economics of crop production, marketing and finance, transfer of technology, rural communication models, use of extension aids, entrepreneurial skills in agribusiness, descriptive and inferential statistics, mathematical applications, IT applications, soft skills, heritage concepts and physical education.
        </p>
      </div>

      <div className="mt-10 max-w-6xl">
        <h2 className="font-display text-2xl font-bold mb-2">Sections in Social Science</h2>
        <p className="text-muted-foreground mb-8">
          The Social Science department is divided into multiple sectors to utilise the maximum potential of
          social science techniques.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <div className="mt-4 mb-4 font-display text-xl font-bold">
            Disciplines
          </div>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agricultural Economics
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agri Business Management
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agricultural Extension
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agricultural Statistics
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                English
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Computer Science
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tamil
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Library
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Physical Education
              </p>
            </li>
            <li>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Yoga
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
                Audio Visual Aids &amp; Entrepreneurship Development
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
                Agri Business Incubation Center
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
              Identifying and analyzing problems faced by farmers
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conducting group discussions and brainstorming sessions to improve leadership qualities among students
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Assessment of demand and supply and price determination of agricultural commodities through market arrivals using software
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SWOC analysis of opportunities available in agri-business
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Training on statistical software such as SPSS, SYSTAT and R Programmes
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Using internet facilities to collect assignment resources, study materials, project review materials, general knowledge and other academic resources
            </p>
          </li>
          <li>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Focusing on skill-oriented programmes such as listening, speaking, reading, writing and comprehension
            </p>
          </li>
        </ul>
      </div>

      {/* <div className="mt-12 max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">About Physical Science</h2>
        <p>
          <strong>Computer Science:</strong> The campus has one richly equipped computer laboratory accessible
          to students during college hours, with advanced infrastructure in terms of hardware and software to
          cater to the requirements of students, teachers and the curriculum. The laboratory caters to
          students\u2019 basic MS Office package needs.
        </p>
      </div>

      <div className="mt-10 max-w-5xl">
        <h2 className="font-display text-2xl font-bold mb-2">Sections in Physical Science</h2>
        <p className="text-muted-foreground mb-8">
          The Physical Science department is divided into multiple sectors to utilise the maximum potential of
          physical science techniques.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {physicalSections.map((s) => (
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
