import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import faculty_1 from "@/assets/faculty/1.jpeg.webp";
import faculty_2 from "@/assets/faculty/2.jpeg.webp";
import faculty_3 from "@/assets/faculty/3.jpeg.webp";
import faculty_4 from "@/assets/faculty/4.jpeg.webp";
import faculty_5 from "@/assets/faculty/5.jpeg.webp";
import faculty_6 from "@/assets/faculty/6.jpeg.webp";
import faculty_7 from "@/assets/faculty/7.jpeg.webp";
import faculty_8 from "@/assets/faculty/8.jpeg.webp";
import faculty_9 from "@/assets/faculty/9.webp";
import faculty_10 from "@/assets/faculty/10.jpeg.webp";
import faculty_11 from "@/assets/faculty/11.jpeg.webp";
import faculty_12 from "@/assets/faculty/12.jpeg.webp";
import faculty_13 from "@/assets/faculty/13.jpeg.webp";
import faculty_14 from "@/assets/faculty/14.jpeg.webp";
import faculty_15 from "@/assets/faculty/15.jpeg.webp";
import faculty_16 from "@/assets/faculty/16.jpeg.webp";
import faculty_17 from "@/assets/faculty/17.jpeg.webp";
import faculty_18 from "@/assets/faculty/18.jpeg.webp";
import faculty_19 from "@/assets/faculty/19.jpeg.webp";
import faculty_20 from "@/assets/faculty/20.jpeg.webp";
import faculty_21 from "@/assets/faculty/21.jpeg.webp";
import faculty_22 from "@/assets/faculty/22.jpeg.webp";
import faculty_23 from "@/assets/faculty/23.jpeg.webp";
import faculty_24 from "@/assets/faculty/24.jpeg.webp";
import faculty_25 from "@/assets/faculty/25.webp";
import faculty_26 from "@/assets/faculty/26.jpeg.webp";
import faculty_27 from "@/assets/faculty/27.jpeg.webp";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty Profile — IIAT" },
      { name: "description", content: "Meet the faculty members across departments at Imayam Institute of Agriculture and Technology." },
      { property: "og:title", content: "Faculty Profile — IIAT" },
      { property: "og:description", content: "Departments of Crop Management, Plant Protection, Social Science, Horticulture, Crop Improvement and Agricultural Engineering." },
    ],
  }),
  component: FacultyPage,
});

type Member = { name: string; role?: string; img?: string; href?: string };

const departments: { title: string; members: Member[] }[] = [
  {
    title: "Department of Crop Management",
    members: [
      { name: "Dr. P. Elamparithi", role: "Assoc. Prof (AGM)", img: faculty_1 },
      { name: "Dr. M. Manimaran", role: "Assoc. Prof (SAC)", img: faculty_2 },
      { name: "Mrs. M. Rajakumari Malliga", role: "Asst. Prof (SAC)", img: faculty_3, href: "/faculty/rajakumari-malliga" },
      { name: "Mr. R. Purushothaman", role: "Asst. Prof (AGR)", img: faculty_4 },
      { name: "Dr. C. Vengatesan", role: "Asst. Prof (AGR)", img: faculty_5 },
      { name: "Dr. S. Bojaraj", role: "Asst. Prof (AGR)", img: faculty_6 },
      { name: "Ms. S. Kaviya", role: "Asst. Prof (ENS)", img: faculty_7 },
      { name: "Mrs. E. Kanmani", role: "Asst. Prof (CRP)", img: faculty_8 },
      { name: "Er. R. Maniyarasu", img: faculty_9 },
    ],
  },
  {
    title: "Department of Plant Protection",
    members: [
      { name: "Dr. S. Palanivel", role: "Asst. Prof (ENTO)", img: faculty_10 },
      { name: "Dr. P. SaravanaKumar", role: "Asst. Prof (ENTO)", img: faculty_11 },
      { name: "Dr. K. Ganeshan", role: "Asst. Prof (ANM)", img: faculty_12 },
      { name: "Mr. A. Arshath Khan", role: "Asst. Prof (PAT)", img: faculty_13 },
      { name: "Dr. Bhuvaneswari", role: "Asst. Prof (PAT)", img: faculty_14 },
    ],
  },
  {
    title: "Department of Social Science",
    members: [
      { name: "Dr. V. Keerthana", role: "Asst. Prof (AEC)", img: faculty_15 },
      { name: "Ms. R. Radha", role: "Asst. Prof (AEC)", img: faculty_16 },
      { name: "Mr. P. Sanjith Kumar", role: "Asst. Prof (AEX)", img: faculty_17 },
      { name: "Dr. S. Raja", role: "DDPE", img: faculty_18 },
      { name: "Mr. G. Saravanan", role: "Asst. Prof (ENG)", img: faculty_19 },
      { name: "Ms. R. Kiruthiga", role: "Asst. Prof (AEX)", img: faculty_20 },
      { name: "Ms. P. Kavitha", role: "Asst. Prof (MATHS)", img: faculty_21 },
      { name: "Ms. V. Deepa", role: "Physical Director", img: faculty_22 },
    ],
  },
  {
    title: "Department of Horticulture",
    members: [
      { name: "Mr. M. Muruganantham", role: "Asst. Prof (HORT)", img: faculty_23 },
      { name: "Dr. P. Jayasankar", role: "Asst. Prof (HORT)", img: faculty_24 },
    ],
  },
  {
    title: "Department of Crop Improvement",
    members: [
      { name: "Mrs. R. Suguna", role: "Asst. Prof (PBG)", img: faculty_25 },
      { name: "Ms. S. Keerthana", role: "Asst. Prof (PBG)", img: faculty_26 },
      { name: "Dr. R. Karthick", role: "Asst. Prof (ABT)", img: faculty_27 },
    ],
  },
];

function initials(name: string) {
  const parts = name.replace(/^(Dr|Mr|Mrs|Ms|Er)\.?\s*/i, "").split(/[\s.]+/).filter(Boolean);
  return (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
}

function FacultyPage() {
  return (
    <PageShell
      eyebrow="Faculty"
      title="Faculty Profile"
      subtitle="Dedicated educators and researchers driving excellence across our departments."
      breadcrumbs={[{ label: "Faculty" }]}
    >
      <div className="space-y-16">
        {departments.map((dept) => (
          <div key={dept.title}>
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8 border-l-4 border-primary pl-4">
              {dept.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {dept.members.map((m, i) => {
                const Card = (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="rounded-2xl bg-card border shadow-soft overflow-hidden hover:shadow-glow transition-all h-full"
                  >
                    <div className="aspect-square relative overflow-hidden bg-muted group">
                      {m.img ? (
                        <>
                          <img
                            src={m.img}
                            alt={m.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-105 group-hover:brightness-110"
                          />
                          <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100" />
                        </>
                      ) : (
                        <div className="h-full w-full grid place-items-center bg-gradient-primary text-primary-foreground font-display text-3xl font-bold transition-transform duration-500 will-change-transform group-hover:scale-105 group-hover:brightness-110">
                          {initials(m.name)}
                        </div>
                      )}
                    </div>
                    <div className="p-3 text-center">
                      <div className="text-sm font-semibold text-foreground">{m.name}</div>
                      {m.role && <div className="text-xs text-muted-foreground mt-0.5">{m.role}</div>}
                    </div>
                  </motion.div>
                );
                return m.href ? (
                  <Link key={m.name} to={m.href} className="block">{Card}</Link>
                ) : (
                  <div key={m.name}>{Card}</div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
