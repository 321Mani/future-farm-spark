import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowRight } from "lucide-react";
import rules_pdf from "@/assets/documents/UG Rules and regulation.pdf";

export const Route = createFileRoute("/academics/rules-regulation")({
  head: () => ({
    meta: [
      { title: "Rules and Regulation — IIAT" },
      { name: "description", content: "The PDF specifically covers student discipline, misconduct, anti-ragging, complaints, and disciplinary action under Rule 16." },
      { property: "og:title", content: "Rules and Regulation — IIAT" },
      { property: "og:description", content: "The PDF specifically covers student discipline, misconduct, anti-ragging, complaints, and disciplinary action under Rule 16." },
    ],
  }),
  component: RulesRegulation,
});

const sections: { title: string; body: string }[] = [
  {
    title: "Undergraduate Degree Programs – Rules & Regulations",
    body: "The Undergraduate Degree Programs of Tamil Nadu Agricultural University are governed by the University’s prescribed Rules and Regulations. These regulations establish the academic, administrative, examination, attendance, discipline, fee, and other requirements applicable to students pursuing Bachelor’s Degree Programs.",
  },
  {
    title: "Regulations",
    body: "The Rules and Regulations apply to the Bachelor’s Degree Programs offered by the University, including Agriculture, Horticulture, Forestry, Food, Nutrition and Dietetics, Agricultural Engineering, Sericulture, Agribusiness Management, Food Technology, Biotechnology, and Energy and Environmental Engineering.",
  },
  {
    title: "Anti-Ragging",
    body: "Ragging is strictly prohibited within or outside the educational institution. Complaints relating to ragging are to be investigated immediately, and disciplinary action may be taken against students found responsible.",
  },
  {
    title: "Discipline & Decorum",
    body: "Students are expected to maintain a high standard of discipline, diligence and obedience during academic activities. Any form of indiscipline during theory or practical classes may be subject to disciplinary action.",
  },
  {
    title: "Compliance with University Rules",
    body: "All students are required to observe the rules and regulations in force. The regulations also provide the concerned Deans with powers to take disciplinary action, including fine, suspension or expulsion, where applicable.",
  },
];

function RulesRegulation() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Rules and Regulation"
      subtitle="The PDF specifically covers student discipline, misconduct, anti-ragging, complaints, and disciplinary action under Rule 16."
      breadcrumbs={[{ label: "Academics" }, { label: "Rules and Regulation" }]}
    >
      <div className="max-w-4xl space-y-6">
        {sections.map((s) => (
          <div key={s.title} className="rounded-2xl border bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg font-bold text-primary">{s.title}</h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <a
        href={rules_pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm mt-8 font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow self-start lg:self-auto"
      >
        Rules and Regulations <ArrowRight className="h-4 w-4" />
      </a>
    </PageShell>
  );
}
