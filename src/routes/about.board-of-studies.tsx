import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Users } from "lucide-react";

export const Route = createFileRoute("/about/board-of-studies")({
  head: () => ({
    meta: [
      { title: "Board of Studies — IIAT" },
      { name: "description", content: "The Board of Studies guiding academic standards and curriculum at IIAT." },
      { property: "og:title", content: "Board of Studies — IIAT" },
      { property: "og:description", content: "Academic governance and curriculum oversight." },
    ],
  }),
  component: BoardOfStudies,
});

const members = [
  { name: "Dr. P. Kumar", role: "Chairperson", affil: "Principal, IIAT" },
  { name: "Dr. S. Ramesh", role: "Member — Agronomy", affil: "Professor, TNAU" },
  { name: "Dr. V. Lakshmi", role: "Member — Horticulture", affil: "Sr. Scientist, ICAR" },
  { name: "Dr. K. Senthil", role: "Member — Plant Pathology", affil: "Subject Expert" },
  { name: "Dr. R. Anitha", role: "Member — Soil Science", affil: "Subject Expert" },
  { name: "Mr. M. Velmurugan", role: "Industry Member", affil: "Agribusiness Leader" },
  { name: "Mrs. K. Priya", role: "Alumni Representative", affil: "IIAT Alumni" },
  { name: "Dr. T. Bharathi", role: "Member Secretary", affil: "Dean of Academics, IIAT" },
];

function BoardOfStudies() {
  return (
    <PageShell
      eyebrow="Governance"
      title="Board of Studies"
      subtitle="The academic body that frames, reviews and continuously enhances every programme at IIAT."
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Governance" }, { label: "Board of Studies" }]}
    >
      <div className="grid lg:grid-cols-3 gap-10 mb-12">
        <div className="lg:col-span-2 space-y-5 text-foreground/85 leading-relaxed text-lg">
          <p>
            The <strong>Board of Studies (BoS)</strong> is the principal academic body
            of IIAT, responsible for designing curricula, recommending textbooks,
            framing examination patterns and continuously upgrading the academic
            offering of the institute in line with TNAU and ICAR norms.
          </p>
          <p>
            The Board comprises senior faculty, subject experts from peer
            universities, scientists from ICAR institutes, industry representatives
            and an alumni member — together ensuring that every student receives an
            education that is academically rigorous, industry-relevant and
            future-ready.
          </p>
        </div>
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <Users className="h-10 w-10 text-primary" />
          <div className="mt-4 font-display text-xl font-bold">Composition</div>
          <ul className="mt-3 text-sm text-foreground/80 space-y-1">
            <li>· Chairperson — Principal</li>
            <li>· Subject Experts (Internal)</li>
            <li>· Subject Experts (External)</li>
            <li>· Industry Representative</li>
            <li>· Alumni Representative</li>
            <li>· Member Secretary</li>
          </ul>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {members.map((m) => (
          <div key={m.name} className="rounded-2xl border bg-card p-5 shadow-soft">
            <div className="h-12 w-12 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-display font-bold">
              {m.name.split(" ").slice(-1)[0][0]}
            </div>
            <div className="mt-3 font-display font-bold text-sm">{m.name}</div>
            <div className="text-xs text-primary mt-0.5">{m.role}</div>
            <div className="text-xs text-muted-foreground mt-1">{m.affil}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
