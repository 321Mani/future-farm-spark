import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ShieldCheck, BookOpen, Award, Globe } from "lucide-react";

export const Route = createFileRoute("/about/icar")({
  head: () => ({
    meta: [
      { title: "ICAR — IIAT" },
      { name: "description", content: "Indian Council of Agricultural Research (ICAR) recognition and accreditation at IIAT." },
      { property: "og:title", content: "ICAR — IIAT" },
      { property: "og:description", content: "ICAR accreditation, recognition and benefits." },
    ],
  }),
  component: ICAR,
});

const benefits = [
  { icon: BookOpen, title: "Standardised Curriculum", text: "ICAR's Vth Dean's committee model curriculum delivered in every classroom." },
  { icon: ShieldCheck, title: "National Recognition", text: "Degrees recognised nationwide for higher studies and government services." },
  { icon: Award, title: "Quality Assurance", text: "Regular accreditation reviews ensure teaching, infrastructure and research quality." },
  { icon: Globe, title: "Global Mobility", text: "ICAR-accredited credentials open doors to international scholarships and careers." },
];

function ICAR() {
  return (
    <PageShell
      eyebrow="Approvals"
      title="ICAR Accreditation"
      subtitle="Imayam IIAT is accredited by the Indian Council of Agricultural Research — the apex body for agricultural education in India."
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "ICAR" }]}
    >
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-5 text-foreground/85 leading-relaxed">
          <p className="text-lg">
            The <strong>Indian Council of Agricultural Research (ICAR)</strong> is the
            apex national body responsible for coordinating, guiding and managing
            agricultural research and education across India. As an ICAR-accredited
            institute, IIAT delivers programmes that meet the highest national
            standards of curriculum, infrastructure, faculty and research output.
          </p>
          <p>
            ICAR accreditation guarantees that the B.Sc (Hons.) Agriculture and
            allied programmes offered at IIAT follow the model curriculum framed by
            ICAR's Deans' Committee, ensuring our students are eligible for
            postgraduate admissions, ICAR fellowships, NET examinations and roles
            across government and private agri-sectors.
          </p>
          <p>
            Our accreditation is regularly reviewed by ICAR's accreditation board,
            covering academics, hands-on training, library, instructional farms,
            laboratories, faculty competence and student outcomes.
          </p>
        </div>

        <div className="rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-glow">
          <ShieldCheck className="h-10 w-10" />
          <div className="mt-4 font-display text-2xl font-bold">ICAR Accredited</div>
          <p className="mt-3 text-sm opacity-90">
            Recognised under the National Agricultural Education System with full
            credit transfer and academic mobility across India.
          </p>
        </div>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((b) => (
          <div key={b.title} className="rounded-2xl border bg-card p-6 shadow-soft">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <b.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 font-display font-bold">{b.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
