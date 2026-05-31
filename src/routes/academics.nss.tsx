import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Users, Heart, Sprout, HandHeart } from "lucide-react";

export const Route = createFileRoute("/academics/nss")({
  head: () => ({
    meta: [
      { title: "NSS — National Service Scheme — IIAT" },
      { name: "description", content: "NSS unit at IIAT organising community service, rural outreach and social awareness camps." },
      { property: "og:title", content: "NSS — IIAT" },
      { property: "og:description", content: "Not Me, But You — NSS at IIAT." },
    ],
  }),
  component: NSS,
});

const activities = [
  { icon: Sprout, title: "Village Adoption", text: "Tree plantation, soil testing, and demonstration of new agricultural practices in adopted villages." },
  { icon: Heart, title: "Health Camps", text: "Blood donation drives, free medical camps and awareness on hygiene and sanitation." },
  { icon: HandHeart, title: "Social Awareness", text: "Programmes on literacy, women empowerment, environmental protection and disaster response." },
  { icon: Users, title: "Special Camps", text: "Seven-day residential special camps in adopted villages every academic year." },
];

function NSS() {
  return (
    <PageShell
      eyebrow="Academics"
      title="National Service Scheme"
      subtitle='"Not Me, But You" — Developing student personality through community service.'
      breadcrumbs={[{ label: "Academics" }, { label: "NSS" }]}
    >
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          The NSS unit at IIAT engages students in meaningful community service activities that complement their academic learning. Volunteers earn certificates recognised by the Government of India and gain leadership experience through structured programmes.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-6xl">
        {activities.map((a) => (
          <div key={a.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <a.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
