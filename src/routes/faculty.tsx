import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";


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
      { name: "Dr. P. Elamparithi", role: "Assoc. Prof (AGM)", img: "https://imayamagri.org/images/staff-profile-pic/Elamparithi.jpg" },
      { name: "Dr. M. Manimaran", role: "Assoc. Prof (SAC)" },
      { name: "Mrs. M. Rajakumari Malliga", role: "Asst. Prof (SAC)", img: "https://imayamagri.org/images/staff-profile-pic/Mrs.M.RAJAKUMARI%20MALLIGA.jpg", href: "/faculty/rajakumari-malliga" },
      { name: "Mr. R. Purushothaman", role: "Asst. Prof (AGR)", img: "https://imayamagri.org/images/staff-profile-pic/Purushothaman.jpg" },
      { name: "Dr. C. Vengatesan", role: "Asst. Prof (AGR)", img: "https://imayamagri.org/images/staff-profile-pic/vengatesan.jpg" },
      { name: "Dr. S. Bojaraj", role: "Asst. Prof (AGR)" },
      { name: "Ms. S. Kaviya", role: "Asst. Prof (ENS)" },
      { name: "Mrs. E. Kanmani", role: "Asst. Prof (CRP)" },
      { name: "Er. R. Maniyarasu", img: "https://imayamagri.org/images/staff-profile-pic/Maniyarasu.jpg" },
    ],
  },
  {
    title: "Department of Plant Protection",
    members: [
      { name: "Dr. S. Palanivel", role: "Asst. Prof (ENTO)", img: "https://imayamagri.org/images/staff-profile-pic/PALANIVEL.jpg" },
      { name: "Dr. P. SaravanaKumar", role: "Asst. Prof (ENTO)", img: "https://imayamagri.org/images/staff-profile-pic/Saravana%20Kumar.jpg" },
      { name: "Dr. K. Ganeshan", role: "Asst. Prof (ANM)", img: "https://imayamagri.org/images/staff-profile-pic/Ganeshan.jpg" },
      { name: "Mr. A. Arshath Khan", role: "Asst. Prof (PAT)" },
      { name: "Dr. Bhuvaneswari", role: "Asst. Prof (PAT)" },
    ],
  },
  {
    title: "Department of Social Science",
    members: [
      { name: "Dr. V. Keerthana", role: "Asst. Prof (AEC)", img: "https://imayamagri.org/images/staff-profile-pic/Keerthana.jpg" },
      { name: "Ms. R. Radha", role: "Asst. Prof (AEC)" },
      { name: "Mr. P. Sanjith Kumar", role: "Asst. Prof (AEX)", img: "https://imayamagri.org/images/staff-profile-pic/Mr.P.%20SANJITH%20KUMAR.JPG" },
      { name: "Dr. S. Raja", role: "DDPE", img: "https://imayamagri.org/images/staff-profile-pic/Raja.jpg" },
      { name: "Mr. G. Saravanan", role: "Asst. Prof (ENG)", img: "https://imayamagri.org/images/staff-profile-pic/Saravanan.jpg" },
      { name: "Ms. R. Kiruthiga", role: "Asst. Prof (AEX)" },
      { name: "Ms. P. Kavitha", role: "Asst. Prof (MATHS)" },
      { name: "Ms. V. Deepa", role: "Physical Director" },
    ],
  },
  {
    title: "Department of Horticulture",
    members: [
      { name: "Mr. M. Muruganantham", role: "Asst. Prof (HORT)", img: "https://imayamagri.org/images/staff-profile-pic/Muruganantham.jpg" },
      { name: "Dr. P. Jayasankar", role: "Asst. Prof (HORT)" },
    ],
  },
  {
    title: "Department of Crop Improvement",
    members: [
      { name: "Mrs. R. Suguna", role: "Asst. Prof (PBG)" },
      { name: "Ms. S. Keerthana", role: "Asst. Prof (PBG)" },
      { name: "Dr. R. Karthick", role: "Asst. Prof (ABT)" },
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
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={m.img}
                        alt={m.name}
                        loading="lazy"
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <div className="text-sm font-semibold text-foreground">{m.name}</div>
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
