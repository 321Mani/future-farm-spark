import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BookOpen, Library as LibraryIcon, Newspaper, Globe } from "lucide-react";

export const Route = createFileRoute("/academics/library")({
  head: () => ({
    meta: [
      { title: "Library — IIAT" },
      { name: "description", content: "Central library at IIAT with extensive collection of books, journals and digital resources." },
      { property: "og:title", content: "Library — IIAT" },
      { property: "og:description", content: "A knowledge hub for agricultural sciences." },
    ],
  }),
  component: LibraryPage,
});

const stats = [
  { value: "8,000+", label: "Books & Volumes" },
  { value: "45+", label: "Journals & Periodicals" },
  { value: "200+", label: "Reference Texts" },
  { value: "24/7", label: "Digital Access" },
];

const features = [
  { icon: BookOpen, title: "Textbooks & References", text: "Comprehensive collection covering agronomy, horticulture, soil science, entomology and allied disciplines." },
  { icon: Newspaper, title: "Journals & Magazines", text: "National and international agricultural journals, periodicals and current affairs magazines." },
  { icon: Globe, title: "Digital Resources", text: "Access to e-journals, CeRA consortium, and online databases for research and study." },
  { icon: LibraryIcon, title: "Reading Hall", text: "Spacious, well-lit silent reading area with seating capacity for 100+ students." },
];

function LibraryPage() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Central Library"
      subtitle="A modern knowledge centre supporting teaching, learning and research in agricultural sciences."
      breadcrumbs={[{ label: "Academics" }, { label: "Library" }]}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border bg-card p-6 text-center shadow-soft">
            <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
          </div>
        ))}
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
