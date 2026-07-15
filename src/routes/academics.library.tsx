import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { BookOpen, Library as LibraryIcon, Newspaper, Globe } from "lucide-react";
import { Gallery } from "@/components/site/Gallery_liby";

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
  { icon: BookOpen, title: "Crop Management", text: "850" , text1: "67" , text2: "5" , text3: "575" },
  { icon: Newspaper, title: "Crop Improvement", text: "335", text1: "11" , text2: "0" , text3: "0" },
  { icon: Globe, title: "Crop Protection", text: "472", text1: "11" , text2: "0" , text3: "0" },
  { icon: LibraryIcon, title: "Horticulture", text: "509", text1: "25" , text2: "0" , text3: "5" },
  { icon: Globe, title: "Social Science", text: "523", text1: "15" , text2: "0" , text3: "11" },
  { icon: Newspaper, title: "General Books", text: "30", text1: "65" , text2: "0" , text3: "10" },
  { icon: LibraryIcon, title: "Agricultural Engineering", text: "190", text1: "3" , text2: "20" , text3: "" },
];

function LibraryPage() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Central Library"
      subtitle="A modern knowledge centre supporting teaching, learning and research in agricultural sciences."
      breadcrumbs={[{ label: "Academics" }, { label: "Library" }]}
    >
       <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <p>
          The library is equipped with all the essential books required for under graduate teaching. More than 4,000 text and reference books are available. Reprographic facilities (printer, scanners, and copier machines) are also available for the benefit of the students.
        </p>
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border bg-card p-6 text-center shadow-soft">
            <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div> */}

      <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-8xl">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">Division: {f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Books: {f.text}</p>
            <p className="mt-2 text-sm text-muted-foreground">Reference Books: {f.text1}</p>
            <p className="mt-2 text-sm text-muted-foreground">Journals & Magazines: {f.text2}</p>
            <p className="mt-2 text-sm text-muted-foreground">E-Books: {f.text3}</p>
          </div>
        ))}
      </div>
      <Gallery />
    </PageShell>
  );
}
