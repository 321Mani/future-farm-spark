import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ShieldAlert, Phone, Mail, AlertOctagon, Users, FileText } from "lucide-react";

export const Route = createFileRoute("/about/anti-ragging")({
  head: () => ({
    meta: [
      { title: "Anti-Ragging — IIAT" },
      { name: "description", content: "IIAT maintains a strict zero-tolerance anti-ragging policy as per UGC regulations." },
      { property: "og:title", content: "Anti-Ragging — IIAT" },
      { property: "og:description", content: "Zero-tolerance anti-ragging policy and helplines." },
    ],
  }),
  component: AntiRagging,
});

const committee = [
  { name: "Dr. S. Raja", role: "Deputy Director of Physical Education & Deputy warden", phone: "" },
  { name: "Dr. M. Manimaran", role: "Associate. Prof (SS&AC)", phone: "" },
  { name: "Dr. P. Elamparithi", role: "Associate. Professor (AGM)", phone: "" },
  { name: "Dr. V. Keerthana", role: "Assistant. Professor (AEC)", phone: "" },
  { name: "Ms V.Deepa", role: "PED", phone: "" },
];

function AntiRagging() {
  return (
    <PageShell
      eyebrow="Governance"
      title="Anti-Ragging Policy"
      subtitle="A zero-tolerance commitment to student safety, dignity and well-being — in line with UGC regulations."
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Governance" }, { label: "Anti-Ragging" }]}
    >
      {/* <div className="rounded-3xl bg-destructive/10 border border-destructive/30 p-8 mb-12 flex gap-5">
        <AlertOctagon className="h-10 w-10 text-destructive flex-shrink-0" />
        <div>
          <div className="font-display text-2xl font-bold text-destructive">Ragging is a Punishable Offence</div>
          <p className="mt-2 text-foreground/85">
            As per the UGC Regulations on Curbing the Menace of Ragging in Higher
            Educational Institutions, 2009, ragging in any form is strictly prohibited
            on IIAT campus, hostels, transport and during off-campus activities. Any
            student found involved will face severe disciplinary action including
            suspension, expulsion and criminal proceedings.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        <div className="rounded-2xl border bg-card p-6 shadow-soft">
          <Phone className="h-8 w-8 text-primary" />
          <div className="mt-4 font-display font-bold">National Anti-Ragging Helpline</div>
          <a href="tel:18001805522" className="mt-2 block text-2xl font-display font-bold text-primary">1800-180-5522</a>
          <div className="text-xs text-muted-foreground mt-1">24x7 toll-free</div>
        </div>
        <div className="rounded-2xl border bg-card p-6 shadow-soft">
          <Mail className="h-8 w-8 text-primary" />
          <div className="mt-4 font-display font-bold">Email Helpline</div>
          <a href="mailto:helpline@antiragging.in" className="mt-2 block text-primary font-semibold">helpline@antiragging.in</a>
          <div className="text-xs text-muted-foreground mt-1">UGC monitored</div>
        </div>
        <div className="rounded-2xl border bg-card p-6 shadow-soft">
          <ShieldAlert className="h-8 w-8 text-primary" />
          <div className="mt-4 font-display font-bold">IIAT Campus Committee</div>
          <a href="mailto:antiragging@imayamagri.org" className="mt-2 block text-primary font-semibold">antiragging@imayamagri.org</a>
          <div className="text-xs text-muted-foreground mt-1">Confidential reporting</div>
        </div>
      </div> */}

      <div className="grid lg:grid-cols-3 gap-10 mb-12">
        <div className="lg:col-span-2 space-y-5 text-foreground/85 leading-relaxed text-lg">
          <p>
            IIAT maintains a <strong>zero-tolerance policy</strong> towards ragging. In accordance with the <strong>UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009</strong>, ragging in any form is strictly prohibited on the institute campus, in hostels, on institute transport, and during all academic, extracurricular, and off-campus activities.
          </p>
          <p>
            Any student found involved in ragging, either directly or indirectly, will be subject to strict disciplinary action. Depending on the nature and severity of the offence, penalties may include suspension from classes, expulsion from the institute and hostel, cancellation of admission, withholding of scholarships or other benefits, and initiation of criminal proceedings as prescribed under the law.
          </p>
          <p>
            IIAT is committed to providing a safe, respectful, and inclusive learning environment where every student can pursue their education with dignity and confidence.
          </p>
        </div>
        <div className="rounded-3xl bg-gradient-soft border p-8">
          <Users className="h-10 w-10 text-primary" />
          <div className="mt-4 font-display text-xl font-bold">Chairperson</div>
          <ul className="mt-3 text-sm text-foreground/80 space-y-1">
            <div className="mt-3 font-display font-bold">Dr. Dr. S. PARTHIBAN, M.Sc. (Hort.)., Ph.D.,</div>
            <div className="text-sm text-primary mt-0.5">Principal</div>
          </ul>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">What Counts as Ragging</div>
          <h2 className="mt-2 font-display text-3xl font-bold">Definition</h2>
          <ul className="mt-5 space-y-3 text-foreground/85">
            <li className="flex gap-3"><FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" /> Any conduct that causes physical, mental or emotional harm to a student.</li>
            <li className="flex gap-3"><FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" /> Teasing, abuse, threats or coercion of any junior student.</li>
            <li className="flex gap-3"><FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" /> Acts that deprive a student of fundamental rights, dignity or freedom.</li>
            <li className="flex gap-3"><FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" /> Forcing students to do acts they would not voluntarily do.</li>
          </ul>
        </div> */}

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">Anti-Ragging Committee</div>
          <h2 className="mt-2 font-display text-3xl font-bold">Reach our Committee</h2>
          <div className="mt-5 grid gap-3">
            {committee.map((c) => (
              <div key={c.name} className="flex items-center gap-4 rounded-2xl border bg-card p-4 shadow-soft">
                <div className="h-11 w-11 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground">
                  <Users className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold text-sm">{c.name}</div>
                  <div className="text-xs text-muted-foreground">{c.role}</div>
                </div>
                <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="text-sm font-semibold text-primary">{c.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
