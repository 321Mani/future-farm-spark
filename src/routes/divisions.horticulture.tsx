import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/divisions/horticulture")({
  head: () => ({
    meta: [
      { title: "Horticulture \u2014 IIAT" },
      { name: "description", content: "Horticulture division at IIAT \u2014 cultivation of fruits, vegetables, flowers, ornamentals and medicinal plants." },
      { property: "og:title", content: "Horticulture \u2014 IIAT" },
      { property: "og:description", content: "About Horticulture at IIAT." },
    ],
  }),
  component: HorticulturePage,
});

function HorticulturePage() {
  return (
    <PageShell
      eyebrow="Divisions"
      title="Horticulture"
      subtitle="The art and science of cultivating gardens \u2014 fruits, vegetables, flowers and ornamentals."
      breadcrumbs={[{ label: "Divisions" }, { label: "Horticulture" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">About Horticulture</h2>
        <p>
          Horticulture is the art of cultivating plants in gardens to produce food and medicinal ingredients,
          or for comfort and ornamental purposes. Horticulturists grow flowers, fruits and nuts, vegetables and
          herbs, as well as ornamental trees and lawns.
        </p>
        <p>
          Horticulture is divided into several categories which focus on the cultivation and processing of
          different types of plants and food items for specific purposes. In order to conserve the science of
          horticulture, multiple organisations worldwide educate, encourage, and promote the advancement of
          horticulture. Some notable horticulturists include Luca Ghini, Luther Burbank, and Tony Avent.
        </p>
      </div>
    </PageShell>
  );
}
