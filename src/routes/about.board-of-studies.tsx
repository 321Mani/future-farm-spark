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
  { name: "Dr. M. Manimaran", role: "Associate", affil: "Prof (SS&AC)" },
  { name: "Dr. P. Elamparithi", role: "Associate", affil: "Professor (AGM)" },
  { name: "Dr. V. Keerthana", role: "Assistant", affil: "Professor (AEC)" },
  { name: "Mrs.M.RajakumariMalliga", role: "Assistant", affil: "Professor (SS&AC)" },
  { name: "Dr.P.Saravanakumar", role: "Assistant", affil: "Professor (AEN)" },
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
            The <strong>Board of Studies (BoS)</strong> is the principal academic body of IIAT, entrusted with the responsibility of ensuring academic excellence and relevance across all programmes. It plays a pivotal role in designing and periodically revising curricula, recommending textbooks and reference materials, framing examination patterns, and continuously enhancing the institute's academic offerings in alignment with the guidelines of TNAU and ICAR.
          </p>
          <p>
            The Board comprises distinguished senior faculty members, subject experts from leading universities, scientists from ICAR institutes, industry professionals, and an alumni representative. This diverse composition ensures that the curriculum remains academically rigorous, industry-oriented, and responsive to emerging developments, equipping students with the knowledge, skills, and competencies needed for successful careers and lifelong learning.
          </p>
        </div>
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <Users className="h-10 w-10 text-primary" />
          <div className="mt-4 font-display text-xl font-bold">Chairperson</div>
          <ul className="mt-3 text-sm text-foreground/80 space-y-1">
            <div className="mt-3 font-display font-bold">Dr. Dr. S. PARTHIBAN, M.Sc. (Hort.)., Ph.D.,</div>
            <div className="text-sm text-primary mt-0.5">Principal</div>
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
