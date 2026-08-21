import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { motion } from "framer-motion";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Our Timeline — Milestones of IIAT" },
      {
        name: "description",
        content:
          "The journey of Imayam Institute of Agriculture & Technology — from its founding at Kannanur, Thuraiyur to TNAU affiliation, ICAR accreditation and a growing 100-acre campus.",
      },
      { property: "og:title", content: "Our Timeline — IIAT" },
      { property: "og:description", content: "Milestones in the growth of IIAT, Thuraiyur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TimelinePage,
});

const milestones = [
  {
    year: "1998",
    title: "The Imayam vision begins",
    text: "The Imayam Educational Trust is founded with a mission to bring quality professional education to the rural belt of Tiruchirappalli district.",
  },
  {
    year: "2011",
    title: "IIAT established",
    text: "Imayam Institute of Agriculture & Technology is established at Kannanur, Thuraiyur, on a 100-acre campus dedicated to agricultural education and farm research.",
  },
  {
    year: "2012",
    title: "TNAU affiliation",
    text: "The institute is affiliated to Tamil Nadu Agricultural University, Coimbatore, and the first batch of B.Sc. (Hons.) Agriculture students joins the campus.",
  },
  {
    year: "2014",
    title: "Farms and laboratories commissioned",
    text: "The north and south farms, orchard, nursery and core teaching laboratories — soil science, plant pathology, entomology and biochemistry — become fully operational.",
  },
  {
    year: "2016",
    title: "First graduating batch",
    text: "The maiden batch of agriculture graduates passes out, with students placed in agri-input companies, banks and government services.",
  },
  {
    year: "2018",
    title: "ICAR accreditation",
    text: "The institute receives ICAR accreditation, strengthening academic standards, research quality and national recognition of its degree.",
  },
  {
    year: "2020",
    title: "Smart classrooms and digital learning",
    text: "Smart classrooms, an upgraded computer centre and campus-wide high-speed connectivity are introduced to support blended learning.",
  },
  {
    year: "2022",
    title: "Expanded programmes",
    text: "New divisions and specialised facilities in horticulture, agricultural engineering and biotechnology broaden the academic offering.",
  },
  {
    year: "2025",
    title: "A growing green campus",
    text: "With hostels, sports facilities, an agrometeorology observatory and active NSS and cultural clubs, IIAT continues to grow as a complete residential agricultural campus.",
  },
];

function TimelinePage() {
  return (
    <PageShell
      eyebrow="About Us"
      title="Our Timeline"
      subtitle="Milestones in the journey of Imayam Institute of Agriculture & Technology."
      breadcrumbs={[{ label: "About Us" }, { label: "Timeline" }]}
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent md:left-1/2" />

        <div className="space-y-10">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className={`relative pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              <span
                className={`absolute left-[9px] top-6 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-accent/20 md:left-auto ${
                  i % 2 === 0 ? "md:-right-[7px]" : "md:-left-[7px]"
                }`}
              />
              <div className="rounded-2xl border bg-card p-6 shadow-soft transition-all hover:shadow-glow">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{m.year}</div>
                <h2 className="mt-2 font-display text-xl font-bold">{m.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
