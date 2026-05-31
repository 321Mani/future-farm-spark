import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GraduationCap, BookOpen, CheckCircle2, Calendar } from "lucide-react";

export const Route = createFileRoute("/academics/courses")({
  head: () => ({
    meta: [
      { title: "Courses Offered — IIAT" },
      { name: "description", content: "Undergraduate and postgraduate agriculture programmes offered at Imayam Institute of Agriculture & Technology." },
      { property: "og:title", content: "Courses Offered — IIAT" },
      { property: "og:description", content: "B.Sc (Hons.) Agriculture and allied programmes under TNAU affiliation." },
    ],
  }),
  component: Courses,
});

const courses = [
  { name: "B.Sc. (Hons.) Agriculture", duration: "4 Years", seats: "60", eligibility: "10+2 with Maths/Biology, Physics, Chemistry" },
  { name: "B.Sc. (Hons.) Horticulture", duration: "4 Years", seats: "30", eligibility: "10+2 with Physics, Chemistry, Biology" },
  { name: "B.Tech Agricultural Engineering", duration: "4 Years", seats: "30", eligibility: "10+2 with Physics, Chemistry, Maths" },
  { name: "B.Sc. Food Technology", duration: "3 Years", seats: "30", eligibility: "10+2 with Science stream" },
];

function Courses() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Courses Offered"
      subtitle="Industry-aligned undergraduate programmes affiliated to Tamil Nadu Agricultural University (TNAU)."
      breadcrumbs={[{ label: "Academics" }, { label: "Courses Offered" }]}
    >
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
        {courses.map((c) => (
          <div key={c.name} className="rounded-2xl border bg-card p-7 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold">{c.name}</h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Duration: <span className="font-semibold text-foreground">{c.duration}</span></div>
              <div className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary" /> Intake: <span className="font-semibold text-foreground">{c.seats} seats</span></div>
              <div className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" /> <span>{c.eligibility}</span></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border bg-secondary/40 p-8 max-w-6xl">
        <h2 className="font-display text-2xl font-bold">Curriculum & Syllabi</h2>
        <p className="mt-3 text-muted-foreground max-w-3xl">
          Curriculum and Syllabi prescribed by Tamil Nadu Agricultural University (TNAU) is followed for the undergraduate programmes. Students admitted from 2017-18 onwards follow the revised ICAR Vth Deans' Committee syllabus.
        </p>
      </div>
    </PageShell>
  );
}
