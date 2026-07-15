import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import principal from "@/assets/images/principle.webp";

export const Route = createFileRoute("/about/principal")({
  head: () => ({
    meta: [
      { title: "Our Principal — IIAT" },
      { name: "description", content: "Meet the Principal of the Imayam Institute of Agriculture & Technology." },
      { property: "og:title", content: "Our Principal — IIAT" },
      { property: "og:description", content: "Academic leadership at IIAT." },
    ],
  }),
  component: Principal,
});

function Principal() {
  return (
    <PageShell
      eyebrow="About Us"
      title="Our Principal"
      subtitle="Academic leadership grounded in research, teaching excellence and student mentorship."
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Our Principal" }]}
    >
      <div className="grid lg:grid-cols-[500px_1fr] gap-12 items-start">
        <div>
          <div className="rounded-3xl overflow-hidden shadow-glow border bg-card aspect-[4/4] grid place-items-center bg-gradient-soft">
            <img src={principal} alt="Principal" className="mx-auto h-full w-full object-cover" />
            <div className="text-center p-8">
              <div className="mt-6 font-display text-xl font-bold">Dr.S.Parthiban, M.Sc.(Hort.)., Ph.D.,</div>
              <div className="text-sm text-muted-foreground mt-1">Mobile No.: 9597927311</div>
              <div className="text-xs text-primary mt-1">Mail : deaniiat@tnau.ac.in</div>
            </div>
          </div>

          {/* <div className="mt-6 rounded-2xl border bg-card p-5 shadow-soft space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
              <span><strong>Ph.D.</strong> in Agronomy, TNAU Coimbatore</span>
            </div>
            <div className="flex items-start gap-3">
              <BookOpen className="h-5 w-5 text-primary mt-0.5" />
              <span>30+ years in teaching & research</span>
            </div>
            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-primary mt-0.5" />
              <span>Multiple state & national awards</span>
            </div>
          </div> */}
        </div>

        <article className="space-y-5 text-foreground/85 leading-relaxed text-lg">
          <h2 className="font-display text-3xl font-bold text-foreground">A message from the Principal</h2>
          <p>
            Welcome to IIAT — an institute where agriculture is taught not as a subject,
            but as a living discipline that touches food, ecology, economy and society.
            As Principal, I take great pride in leading a faculty that is deeply
            committed to academic rigour, scientific inquiry and the personal growth of
            every student who walks through our gates.
          </p>
          <p>
            Our curriculum follows the standards set by Tamil Nadu Agricultural
            University and the Indian Council of Agricultural Research. But what makes
            IIAT distinctive is how we deliver it — every theoretical concept is paired
            with field practice, every research idea finds its way to a working plot,
            and every student is mentored individually.
          </p>
          <p>
            We focus equally on outcomes — academic excellence, placement readiness,
            entrepreneurial confidence and value-based citizenship. Our alumni today
            serve as agricultural officers, scientists, agribusiness leaders, and
            change-makers across rural India.
          </p>
          <p>
            I encourage every aspiring agriculturist to consider IIAT as their academic
            home — and our team will work alongside you, every step of the way.
          </p>
          {/* <p className="font-display text-xl text-primary pt-4">
            <span className="font-bold">Dr. P. Kumar</span>
            <br />
            <span className="text-sm text-muted-foreground font-sans">Principal, IIAT</span>
          </p> */}
        </article>
      </div>
    </PageShell>
  );
}
