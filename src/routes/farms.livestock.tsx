import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Milk, Wheat, Beef, Recycle } from "lucide-react";

export const Route = createFileRoute("/farms/livestock")({
  head: () => ({
    meta: [
      { title: "Dairy & Livestock — IIAT Farm" },
      {
        name: "description",
        content:
          "Dairy and livestock management at IIAT Farm, Thuraiyur — housing, feeding, breeding, health care and farm waste management practices.",
      },
      { property: "og:title", content: "Dairy & Livestock — IIAT Farm" },
      {
        property: "og:description",
        content: "Practical dairy farming and livestock management training at IIAT Farm.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LivestockPage,
});

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border bg-card p-6 shadow-soft">
      <div className="flex items-center gap-3 mb-4">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="font-display text-xl font-bold">{title}</h2>
      </div>
      <div className="space-y-3 text-sm text-foreground/80 leading-relaxed">{children}</div>
    </section>
  );
}

function LivestockPage() {
  return (
    <PageShell
      eyebrow="Farms"
      title="Dairy & Live Stock"
      subtitle="Integrated dairy and livestock management — housing, feeding, breeding, health care and waste recycling."
      breadcrumbs={[{ label: "Farms" }, { label: "Dairy & Live Stock" }]}
    >
      <p className="max-w-4xl text-foreground/80 leading-relaxed">
        Dairy farming and livestock management are important components of an integrated
        agricultural system. During the farm visit to IIAT Farm, Thuraiyur, practical knowledge was
        gained about the management, feeding, housing, breeding and health care of dairy animals and
        other livestock.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Section icon={Milk} title="Dairy Farm Management">
          <p>
            Dairy animals are maintained in a clean and well-ventilated shed. Proper drainage is
            provided to prevent water stagnation. The animals are grouped according to{" "}
            <strong>age</strong>, <strong>breed</strong>, <strong>production stage</strong> and{" "}
            <strong>physiological condition</strong>.
          </p>
          <p className="font-medium text-foreground">Important management practices include:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Supplying green fodder, dry fodder and concentrates according to animal requirements.</li>
            <li>Maintaining cleanliness of the animal shed.</li>
            <li>Regular removal of dung and urine.</li>
            <li>Providing adequate ventilation and shade.</li>
            <li>Regular observation of animals for signs of disease.</li>
            <li>Maintaining records of breeding, calving, feeding and milk production.</li>
          </ul>
        </Section>

        <Section icon={Wheat} title="Feeding Management">
          <p>
            Proper nutrition is essential for maintaining animal health and obtaining good milk
            production. The ration generally consists of:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>
              <strong>Green fodder</strong> — provides vitamins, minerals and moisture.
            </li>
            <li>
              <strong>Dry fodder</strong> — provides fibre and helps maintain proper rumen function.
            </li>
            <li>
              <strong>Concentrate feed</strong> — supplies additional energy and protein.
            </li>
          </ol>
        </Section>

        <Section icon={Beef} title="Livestock Management">
          <p>
            Livestock farming may include animals such as <strong>goats</strong>,{" "}
            <strong>sheep</strong> and <strong>poultry</strong>. Their management involves:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Proper housing.</li>
            <li>Balanced feeding.</li>
            <li>Regular vaccination and deworming.</li>
            <li>Maintaining hygienic surroundings.</li>
            <li>Selection and breeding of healthy animals.</li>
          </ul>
        </Section>

        <Section icon={Recycle} title="Waste Management">
          <p>
            Animal dung and other farm wastes can be effectively utilized through{" "}
            <strong>composting</strong> or <strong>biogas production</strong>. Farmyard manure
            produced from livestock waste can be applied to agricultural fields, helping recycle
            nutrients and reduce waste.
          </p>
        </Section>
      </div>
    </PageShell>
  );
}
