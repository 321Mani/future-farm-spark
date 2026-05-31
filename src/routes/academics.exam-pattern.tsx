import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { FileCheck, ClipboardList, Award, Percent } from "lucide-react";

export const Route = createFileRoute("/academics/exam-pattern")({
  head: () => ({
    meta: [
      { title: "Exam Pattern — IIAT" },
      { name: "description", content: "Examination pattern, grading and evaluation system at IIAT following TNAU norms." },
      { property: "og:title", content: "Exam Pattern — IIAT" },
      { property: "og:description", content: "TNAU-prescribed examination and evaluation system." },
    ],
  }),
  component: ExamPattern,
});

const components = [
  { icon: ClipboardList, title: "Continuous Internal Assessment", weight: "40%", text: "Class tests, assignments, practicals and seminars conducted throughout the semester." },
  { icon: FileCheck, title: "End Semester Examination", weight: "60%", text: "Comprehensive written examinations conducted at the end of each semester." },
  { icon: Percent, title: "Grading System", weight: "10-Point", text: "Performance evaluated on a 10-point grade scale as per TNAU norms." },
  { icon: Award, title: "Minimum Pass Mark", weight: "50%", text: "Students must secure at least 50% aggregate to pass each course." },
];

const grades = [
  { grade: "S", range: "9.00 – 10.00", remark: "Outstanding" },
  { grade: "A+", range: "8.00 – 8.99", remark: "Excellent" },
  { grade: "A", range: "7.00 – 7.99", remark: "Very Good" },
  { grade: "B+", range: "6.00 – 6.99", remark: "Good" },
  { grade: "B", range: "5.00 – 5.99", remark: "Above Average" },
  { grade: "C", range: "4.00 – 4.99", remark: "Average" },
  { grade: "F", range: "Below 4.00", remark: "Fail" },
];

function ExamPattern() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Examination Pattern"
      subtitle="A transparent, continuous evaluation system aligned with TNAU and ICAR guidelines."
      breadcrumbs={[{ label: "Academics" }, { label: "Exam Pattern" }]}
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
        {components.map((c) => (
          <div key={c.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="flex items-start justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-accent-foreground">{c.weight}</span>
            </div>
            <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-4xl">
        <h2 className="font-display text-2xl font-bold mb-6">Grading Scale</h2>
        <div className="overflow-hidden rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Grade</th>
                <th className="px-6 py-3 text-left font-semibold">GPA Range</th>
                <th className="px-6 py-3 text-left font-semibold">Remark</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((g) => (
                <tr key={g.grade} className="border-t">
                  <td className="px-6 py-3 font-bold text-primary">{g.grade}</td>
                  <td className="px-6 py-3 text-muted-foreground">{g.range}</td>
                  <td className="px-6 py-3">{g.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  );
}
