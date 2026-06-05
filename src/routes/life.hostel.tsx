import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Home, Droplet, Utensils, BookOpen } from "lucide-react";

export const Route = createFileRoute("/life/hostel")({
  head: () => ({
    meta: [
      { title: "Hostel \u2014 IIAT" },
      { name: "description", content: "Hostel facilities for girl students at IIAT \u2014 safe accommodation, hygienic mess and dedicated residential tutors." },
      { property: "og:title", content: "Hostel \u2014 IIAT" },
      { property: "og:description", content: "About the IIAT hostel." },
    ],
  }),
  component: HostelPage,
});

const features = [
  { icon: Home, title: "Furnished Rooms", text: "Each student is provided with a separate cot, bed, bookshelf, table, chair and good lighting facility." },
  { icon: Droplet, title: "Safe Drinking Water", text: "A common R.O. water plant supplies safe drinking water to all residents." },
  { icon: Utensils, title: "Hygienic Mess", text: "The mess is equipped with modern cooking equipment; food is cooked hygienically and served in a clean environment." },
  { icon: BookOpen, title: "Daily Study Hours", text: "Residential tutors in the cadre of Assistant Professors supervise the hostel; daily study hours of one and a half hours are observed." },
];

function HostelPage() {
  return (
    <PageShell
      eyebrow="Life @ IIAT"
      title="Hostel"
      subtitle="A safe, well-equipped residential home for our girl students."
      breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Hostel" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">About Hostel</h2>
        <p>
          The girls\u2019 hostel is provided with a separate cot, bed, bookshelf, table, chair and good lighting
          facility for every student. A common R.O. water plant supplies safe drinking water. All girl students
          are well accommodated in the available rooms. The mess is equipped with modern cooking equipment, and
          the food is cooked hygienically and served in a clean environment. The hostel is located around
          150 metres away from the college and is easily reachable.
        </p>
        <p>
          The girl students in the hostel are taken care of by two women residential tutors in the cadre of
          Assistant Professors. Every day, study hours of one and a half hours duration are observed. Two
          separate buildings are available for accommodating girl students with a total area of 11,159 sq. ft.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-6xl">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
