import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/about/chairman")({
  head: () => ({
    meta: [
      { title: "Chairman's Message — IIAT" },
      { name: "description", content: "A message from the Chairman of Imayam Educational Trust." },
      { property: "og:title", content: "Chairman's Message — IIAT" },
      { property: "og:description", content: "Vision and values shared by our Chairman." },
    ],
  }),
  component: Chairman,
});

function Chairman() {
  return (
    <PageShell
      eyebrow="About Us"
      title="Chairman's Message"
      subtitle="Leadership rooted in values, vision and an unwavering belief in agricultural India."
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Chairman's Message" }]}
    >
      <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <div className="rounded-3xl overflow-hidden shadow-glow border bg-card aspect-[3/4] grid place-items-center bg-gradient-soft">
            <div className="text-center p-8">
              <div className="mx-auto h-32 w-32 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-display text-4xl font-bold shadow-glow">
                M
              </div>
              <div className="mt-6 font-display text-xl font-bold">Thiru. M. Manickam</div>
              <div className="text-sm text-muted-foreground mt-1">Chairman</div>
              <div className="text-xs text-primary mt-1">Imayam Educational Trust</div>
            </div>
          </div>
        </div>

        <article className="prose-base max-w-none">
          <Quote className="h-12 w-12 text-primary/30" />
          <div className="space-y-5 text-foreground/85 leading-relaxed text-lg mt-4">
            <p>
              Dear Students, Parents and Well-wishers,
            </p>
            <p>
              It gives me immense pride to welcome you to the <strong>Imayam Institute
              of Agriculture and Technology</strong>. Agriculture is not just an
              occupation in our country — it is the very backbone of our economy, our
              culture and our future. The decisions made on our farms today will shape
              the food security, livelihoods and ecological balance of generations to
              come.
            </p>
            <p>
              We founded IIAT with one conviction: that rural India deserves access to
              world-class agricultural education without leaving its roots behind. Our
              campus is designed to feel like a working farm — because the best
              classroom for an agriculturist is the field itself. From soil pits to
              polyhouses, from livestock units to bioreactors, our students learn by
              doing.
            </p>
            <p>
              At IIAT, we don't just train graduates — we mentor agriprofessionals who
              are technically excellent, scientifically curious, socially rooted and
              ethically grounded. Whether they go on to serve in government, lead
              agribusinesses, start their own enterprises, or return to transform their
              family farms, our students carry the Imayam spirit with them.
            </p>
            <p>
              I invite you to be part of this remarkable journey — and together, let us
              cultivate a stronger, greener, more self-reliant India.
            </p>
            <p className="mt-8 font-display text-xl text-primary">
              With warm regards,
              <br />
              <span className="font-bold">M. Manickam</span>
              <br />
              <span className="text-sm text-muted-foreground font-sans">
                Chairman, Imayam Educational Trust
              </span>
            </p>
          </div>
        </article>
      </div>
    </PageShell>
  );
}
