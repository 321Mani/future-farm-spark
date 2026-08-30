import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Quote } from "lucide-react";
import chairman from "@/assets/images/chairman.jpg";

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
      <div className="grid lg:grid-cols-[500px_1fr] gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <div className="rounded-3xl overflow-hidden shadow-glow border bg-card aspect-[4/4] grid place-items-center bg-gradient-soft">
            <img src={chairman} alt="Chairman" className="mx-auto h-full w-full object-cover" />
            {/* <div className="text-center p-8">
              <div className="mt-6 font-display text-xl font-bold">Thiru. M. Manickam</div>
              <div className="text-sm text-muted-foreground mt-1">Chairman</div>
              <div className="text-xs text-primary mt-1">Imayam Educational Trust</div>
            </div> */}
          </div>
          <div className="rounded-2xl border bg-card p-5 shadow-soft space-y-3 text-sm">
            <div className="text-center px-8 py-2">
              <div className="mt-2 font-display text-xl font-bold">Rtn. A. Andi</div>
              <div className="text-sm text-muted-foreground mt-1">Secretary</div>
            </div>
          </div>
        </div>

        <article className="prose-base max-w-none">
          <Quote className="h-12 w-12 text-primary/30" />
          <div className="space-y-5 text-foreground/85 leading-relaxed text-lg mt-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">Why Choose Us?</div>
            <h2 className="mt-2 font-display text-3xl font-bold">Chairman's Message,</h2>
            <p>
              Society is long dependent on education to provide the necessary stepping stone on one's path towards individual growth, which contributes directly to the growth of a society and country as a whole. In view of the ever-increasing demand for professionally qualified youth, it has become imperative to increase the availability of quality higher education in diverse fields.
            </p>
            <p>
              Imayam Institute of Agriculture and Technology strives to establish itself as a citadel of quality education in the global arena of agriculture education. The college actively updates itself with foresight, vision and perspective of committed learning and training to meet the global demands for professional talents of international standards.
            </p>
            <p>
              I invite you to be part of this remarkable journey — and together, let us
              cultivate a stronger, greener, more self-reliant India.
            </p>
            {/* <p className="mt-8 font-display text-xl text-primary">
              With warm regards,
              <br />
              <span className="font-bold">M. Manickam</span>
              <br />
              <span className="text-sm text-muted-foreground font-sans">
                Chairman, Imayam Educational Trust
              </span>
            </p> */}
          </div>
        </article>
      </div>
    </PageShell>
  );
}
