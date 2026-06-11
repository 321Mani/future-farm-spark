import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Mail, Calendar, GraduationCap, Award, BookOpen, Briefcase } from "lucide-react";

export const Route = createFileRoute("/faculty_/rajakumari-malliga")({
  head: () => ({
    meta: [
      { title: "Mrs. M. Rajakumari Malliga — Faculty Profile — IIAT" },
      { name: "description", content: "Profile of Mrs. M. Rajakumari Malliga, Assistant Professor, Department of Soil Science and Agricultural Chemistry at IIAT." },
    ],
  }),
  component: Profile,
});

const details = [
  { icon: Calendar, label: "Date of Birth", value: "30.05.1990" },
  { icon: Briefcase, label: "Designation", value: "Assistant Professor" },
  { icon: GraduationCap, label: "Department", value: "Soil Science and Agricultural Chemistry" },
  { icon: Mail, label: "Email", value: "Malligamariappan8389@gmail.com" },
];

function Profile() {
  return (
    <PageShell
      eyebrow="Faculty"
      title="Mrs. M. Rajakumari Malliga"
      subtitle="Assistant Professor — Department of Soil Science and Agricultural Chemistry"
      breadcrumbs={[{ label: "Faculty", href: "/faculty" }, { label: "Mrs. M. Rajakumari Malliga" }]}
    >
      <div className="grid lg:grid-cols-[320px_1fr] gap-10 max-w-6xl">
        <div className="space-y-4">
          <div className="rounded-2xl overflow-hidden border bg-card shadow-soft">
            <img
              src="https://imayamagri.org/images/staff-profile-pic/Mrs.M.RAJAKUMARI%20MALLIGA.jpg"
              alt="Mrs. M. Rajakumari Malliga"
              className="w-full aspect-square object-cover"
            />
            <div className="bg-primary text-primary-foreground text-center py-3 font-semibold">
              Mrs. M. Rajakumari Malliga
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {details.map((d) => (
              <div key={d.label} className="rounded-2xl border bg-card p-5 shadow-soft">
                <div className="flex items-center gap-2 text-primary">
                  <d.icon className="h-4 w-4" />
                  <div className="text-xs font-semibold uppercase tracking-wider">{d.label}</div>
                </div>
                <div className="mt-2 text-sm font-medium text-foreground break-words">{d.value}</div>
              </div>
            ))}
          </div>

          <Section icon={GraduationCap} title="Qualification">
            <p>M.Sc (Agrl.)</p>
          </Section>

          <Section icon={Award} title="Additional Qualification">
            <p><strong>NET/SLET:</strong> ASRB (NET) Cleared</p>
          </Section>

          <Section icon={Briefcase} title="Teaching Experience">
            <ul className="list-disc pl-5 space-y-1">
              <li>Teaching — 8 years 6 months</li>
              <li>Research — 8 years</li>
              <li>Extension — 5 years</li>
            </ul>
          </Section>

          <Section icon={BookOpen} title="Publications">
            <ul className="list-disc pl-5 space-y-1">
              <li>National: 01</li>
              <li>Popular Articles: 10</li>
              <li>Book Chapters: 1</li>
              <li>Books: 1</li>
            </ul>
          </Section>

          <Section icon={Award} title="Awards / Achievements">
            <p>2 awards / achievements to date.</p>
          </Section>
        </div>
      </div>
    </PageShell>
  );
}

function Section({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-soft">
      <h3 className="flex items-center gap-2 font-display text-lg font-bold text-primary">
        <Icon className="h-5 w-5" /> {title}
      </h3>
      <div className="mt-3 text-sm text-foreground/80 leading-relaxed">{children}</div>
    </div>
  );
}
