import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import principal from "@/assets/images/md_msg.jpg";

export const Route = createFileRoute("/about/mdirector")({
  head: () => ({
    meta: [
      { title: "Our Managing Director — IIAT" },
      { name: "description", content: "Meet the Managing Director of the Imayam Institute of Agriculture & Technology." },
      { property: "og:title", content: "Our Managing Director — IIAT" },
      { property: "og:description", content: "Academic leadership at IIAT." },
    ],
  }),
  component: Principal,
});

function Principal() {
  return (
    <PageShell
      eyebrow="About Us"
      title="Our Managing Director"
      subtitle="Academic leadership grounded in research, teaching excellence and student mentorship."
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Our Managing Director" }]}
    >
      <div className="grid lg:grid-cols-[500px_1fr] gap-12 items-start">
        <div>
          <div className="rounded-3xl overflow-hidden shadow-glow border bg-card aspect-[4/4] grid place-items-center bg-gradient-soft">
            <img src={principal} alt="Managing Director" className="mx-auto h-full w-full object-cover" />
            {/* <div className="text-center p-8">
              <div className="mt-6 font-display text-xl font-bold">Dr.S.Parthiban, M.Sc.(Hort.)., Ph.D.,</div>
              <div className="text-sm text-muted-foreground mt-1">Mobile No.: 9597927311</div>
              <div className="text-xs text-primary mt-1">Mail : deaniiat@tnau.ac.in</div>
            </div> */}
          </div>

          <div className="rounded-2xl border bg-card p-5 shadow-soft space-y-3 text-sm">
            <div className="text-center px-8 py-2">
              <div className="mt-2 font-display text-xl font-bold">A. Janarthanan</div>
              <div className="text-sm text-muted-foreground mt-1">B.Tech (IT), MBA</div>
            </div>
          </div>
        </div>

        <article className="space-y-5 text-foreground/85 leading-relaxed text-lg">
          <h2 className="font-display text-3xl font-bold text-foreground">A message from the Managing Director</h2>
          <p>
            <b>A. Janarthanan</b>, son of Rtn. A. Andi, proudly upholds a legacy rooted in vision, integrity and unwavering dedication. With a progressive mindset and a passion for excellence, he has emerged as a dynamic leader committed to driving meaningful transformation across education and industry.
          </p>
          <p>
            As the Managing Director of IEI, he plays a pivotal role in modernizing the institution by integrating innovative methodologies, advanced learning systems and a future‑oriented academic framework. His leadership is guided by a clear vision—to create an ecosystem that nurtures knowledge, skill development and holistic growth, preparing students to meet global challenges with confidence and competence.
          </p>
          <p>
            An accomplished entrepreneur with diverse business interests, he leads AGM Organics, JA Biotech Innovation Pvt. Ltd. and MB Blue Metals. Through these ventures, he actively contributes to sustainable agriculture, cutting‑edge biotechnology and infrastructure development. 
          </p>
          <p>
            His commitment to responsible business practices and innovation reflects his dedication to building industries that are both economically and environmentally sustainable.
          </p>
          <p>
            Renowned for his approachable and inspiring leadership style, he cultivates a culture of discipline, collaboration and continuous improvement. He strongly believes that true success lies not only in professional achievements but also in developing individuals with strong ethics, social responsibility and a commitment to lifelong learning. Under his guidance, both students and staff are encouraged to strive for excellence while upholding the highest standards of integrity and professionalism.
          </p>
          <p>
            His vision extends beyond institutional success— he is deeply committed to shaping future leaders who are capable, compassionate and socially responsible.
          </p>
          <p>
            <b>“True leadership is not about control, but about inspiring others to rise and shine.”</b>
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
