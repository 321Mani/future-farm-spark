import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { motion } from "framer-motion";
import { Sprout, Trophy, Users, Building2, GraduationCap, Leaf } from "lucide-react";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About IIAT — Imayam Institute of Agriculture & Technology" },
      { name: "description", content: "Discover the story, legacy and ethos of the Imayam Institute of Agriculture & Technology, Thuraiyur." },
      { property: "og:title", content: "About IIAT" },
      { property: "og:description", content: "Premier TNAU-affiliated agriculture institute in Tamil Nadu." },
    ],
  }),
  component: AboutIIAT,
});

const highlights = [
  { icon: Sprout, label: "Est. 2013", note: "A decade of agri-education" },
  { icon: Building2, label: "100+ Acres", note: "Living instructional campus" },
  { icon: GraduationCap, label: "TNAU Affiliated", note: "ICAR accredited" },
  { icon: Trophy, label: "Top Placements", note: "Govt & agribusiness recruiters" },
  { icon: Users, label: "Expert Faculty", note: "PhDs from premier institutes" },
  { icon: Leaf, label: "Sustainable", note: "Eco-first research culture" },
];

function AboutIIAT() {
  return (
    <PageShell
      eyebrow="About Us"
      title="About IIAT"
      subtitle="A purpose-built agricultural institute nurturing the next generation of agripreneurs, scientists and rural innovators."
      breadcrumbs={[{ label: "About IIAT" }]}
    >
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6 text-foreground/85 leading-relaxed">
          <p className="text-lg">
            The <strong>Imayam Institute of Agriculture and Technology (IIAT)</strong> was founded in 2013
            under the Imayam Educational Trust with a singular vision — to deliver
            world-class agriculture education rooted in Tamil Nadu's farming heritage.
            Located in Kannanur, Thuraiyur (Tiruchirappalli district), the institute is
            affiliated to <strong>Tamil Nadu Agricultural University (TNAU)</strong> and
            accredited by the <strong>Indian Council of Agricultural Research (ICAR)</strong>.
          </p>
          <p>
            Spread across a verdant 100+ acre campus, IIAT brings together modern
            laboratories, instructional farms, polyhouses, livestock units and
            student-led research plots. Every undergraduate experiences the field as
            their primary classroom — learning soil science with their hands, crop
            management with the seasons, and innovation through real entrepreneurial
            projects.
          </p>
          <p>
            Our flagship <strong>B.Sc (Hons.) Agriculture</strong> programme, along with
            specialised divisions in Horticulture, Agri-Engineering and Food Technology,
            prepares students for careers across the public sector, agri-corporates,
            research, and rural enterprise. Beyond academics, IIAT is a community —
            students, faculty, alumni and farming neighbours co-creating a more
            sustainable Indian agriculture.
          </p>
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-glow">
            <div className="text-xs uppercase tracking-widest opacity-80">At a glance</div>
            <div className="mt-3 font-display text-3xl font-bold">Imayam IIAT</div>
            <ul className="mt-5 space-y-2 text-sm">
              <li>· Founded 2013</li>
              <li>· Affiliated to TNAU</li>
              <li>· ICAR accredited</li>
              <li>· 100+ acre living campus</li>
              <li>· Thuraiyur, Tamil Nadu</li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-shadow"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <h.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 font-display font-bold text-lg">{h.label}</div>
            <div className="text-sm text-muted-foreground mt-1">{h.note}</div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
