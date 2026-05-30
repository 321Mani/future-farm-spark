import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Target, Compass, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — IIAT" },
      { name: "description", content: "Vision, mission and core values guiding the Imayam Institute of Agriculture & Technology." },
      { property: "og:title", content: "Vision & Mission — IIAT" },
      { property: "og:description", content: "Our compass for sustainable agriculture education." },
    ],
  }),
  component: VisionMission,
});

const objectives = [
  "Deliver field-first, research-grade agricultural education aligned with TNAU & ICAR standards.",
  "Empower rural youth with technical skills, scientific temper and entrepreneurial confidence.",
  "Translate laboratory science into farm-ready practices for Tamil Nadu's farming community.",
  "Champion sustainable, climate-resilient and resource-efficient agriculture.",
  "Foster industry, government and farmer partnerships for real-world learning.",
  "Cultivate ethical, socially-responsible agricultural professionals and leaders.",
];

function VisionMission() {
  return (
    <PageShell
      eyebrow="About Us"
      title="Vision & Mission"
      subtitle="The compass that shapes every classroom, every field, and every graduate at IIAT."
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Vision & Mission" }]}
    >
      <div className="grid lg:grid-cols-2 gap-6 mb-16">
        <div className="rounded-3xl border bg-gradient-soft p-10 shadow-soft">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-glow">
            <Target className="h-7 w-7" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold">Our Vision</h2>
          <p className="mt-4 text-foreground/85 leading-relaxed text-lg">
            To be South India's reference institute for sustainable agriculture and
            agri-technology — producing graduates who shape the future of food, farming
            and rural prosperity.
          </p>
        </div>

        <div className="rounded-3xl border bg-card p-10 shadow-soft">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-foreground shadow-glow">
            <Compass className="h-7 w-7" />
          </div>
          <h2 className="mt-6 font-display text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 text-foreground/85 leading-relaxed text-lg">
            To empower rural youth with hands-on research, modern technology and
            value-driven education that transforms Indian farms and uplifts farming
            communities.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border bg-card p-10 shadow-soft">
        <div className="text-xs font-semibold uppercase tracking-widest text-primary">
          Strategic Objectives
        </div>
        <h3 className="mt-2 font-display text-3xl font-bold">What we commit to</h3>
        <ul className="mt-8 grid md:grid-cols-2 gap-x-8 gap-y-4">
          {objectives.map((o) => (
            <li key={o} className="flex gap-3 text-foreground/85">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
