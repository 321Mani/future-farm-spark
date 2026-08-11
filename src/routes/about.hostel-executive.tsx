import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Shield, Phone, Mail, Users, FileCheck2, Lock } from "lucide-react";

export const Route = createFileRoute("/about/hostel-executive")({
  head: () => ({
    meta: [
      { title: "Hostel Executive Committee Policy — IIAT" },
      { name: "description", content: "IIAT's Internal Complaints Committee and policy on prevention of Hostel Executive Committee at the workplace." },
      { property: "og:title", content: "Hostel Executive Committee — IIAT" },
      { property: "og:description", content: "Hostel Executive Committee — IIAT" },
    ],
  }),
  component: HostelExeCommittee,
});

const icc = [
  { name: "Mr. E.Rahamathullah", role: "Advisior (IEI)"},
  { name: "Dr. V. Keerthana", role: "Assistant. Professor (AEC)"},
  { name: "Mrs.S.Dhanamani", role: "Assistant. Professor (CS)"},
];

function HostelExeCommittee() {
  return (
    <PageShell
      eyebrow="Governance"
      title="Hostel Executive Committee — ICC"
      subtitle="A safe, respectful and dignified campus for every student, faculty and staff member."
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Governance" }, { label: "Hostel Executive Committee" }]}
    >
      {/* <div className="rounded-3xl bg-gradient-primary p-10 text-primary-foreground shadow-glow mb-12">
        <Shield className="h-12 w-12" />
        <h2 className="mt-4 font-display text-3xl font-bold">Zero-Tolerance Policy</h2>
        <p className="mt-3 max-w-3xl opacity-95">
          IIAT is fully committed to the prevention, prohibition and redressal of
          sexual harassment in compliance with the <strong>Sexual Harassment of Women at
          Workplace (Prevention, Prohibition and Redressal) Act, 2013</strong> and UGC
          (Prevention, prohibition and redressal of sexual harassment of women
          employees and students in higher educational institutions) Regulations, 2015.
        </p>
      </div> */}

      <div>
        <div className="lg:col-span-2 space-y-5 text-foreground/85 leading-relaxed text-lg">
          <p>
            The <strong>Hostel Executive Committee</strong> at IIAT is constituted to ensure the efficient administration of the institute's hostels and to promote a safe, disciplined, and student-friendly residential environment. The Committee oversees hostel management, addresses student concerns, and ensures the effective implementation of hostel rules and regulations.
          </p>
          <p>
            Working in close coordination with the Chief Warden, Wardens, and hostel staff, the Committee strives to maintain high standards of cleanliness, security, discipline, and student welfare. It also encourages active student participation in creating a harmonious and inclusive hostel community.
          </p>
        </div>
        <div className="rounded-3xl bg-gradient-soft border p-8 mt-8">
          <div className="mt-4 font-display text-xl font-bold">Objectives</div>
          <ul className="mt-3 text-sm text-foreground/80 space-y-1">
            <li>· Ensure the smooth and efficient administration of hostel facilities.</li>
            <li>· Promote discipline, safety, and a healthy residential environment.</li>
            <li>· Address hostel-related grievances and resolve issues promptly.</li>
            <li>· Monitor cleanliness, hygiene, maintenance, and security within the hostels.</li>
            <li>· Encourage student participation in hostel activities and decision-making.</li>
            <li>· Recommend improvements to enhance the quality of hostel life.</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-gradient-soft border p-8 mt-8 mb-8">
          <div className="mt-4 font-display text-xl font-bold">Functions</div>
          <ul className="mt-3 text-sm text-foreground/80 space-y-1">
            <li>· Review hostel administration and operational matters.</li>
            <li>· Monitor compliance with hostel rules and code of conduct.</li>
            <li>· Coordinate maintenance and infrastructure improvements.</li>
            <li>· Address grievances related to accommodation and hostel services.</li>
            <li>· Organize meetings to review student welfare and hostel facilities.</li>
            <li>· Recommend measures for improving safety, comfort, and overall residential experience.</li>
          </ul>
        </div>

        <p className="mb-8">
          The Hostel Executive Committee is committed to providing a secure, comfortable, and supportive living environment that enables students to focus on their academic and personal development.
        </p>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          <div className="rounded-3xl bg-gradient-soft border p-8">
            <Users className="h-10 w-10 text-primary" />
            <div className="mt-4 font-display text-xl font-bold">Chairperson</div>
            <ul className="mt-3 text-sm text-foreground/80 space-y-1">
              <div className="mt-3 font-display font-bold">Mrs. R. Suguna, Assistant. Professor (PBG)</div>
            </ul>
          </div>

          <aside>
            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-primary">Internal Complaints Committee</div>
              <h2 className="mt-2 font-display text-2xl font-bold">ICC Members</h2>
              <div className="mt-5 grid gap-3">
                {icc.map((c) => (
                  <div key={c.name} className="flex items-center gap-3 rounded-2xl border bg-card p-4 shadow-soft">
                    <div className="h-10 w-10 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground">
                      <Users className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-display font-bold text-sm truncate">{c.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{c.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* <div className="grid lg:grid-cols-3 gap-6 mb-12">
        <div className="rounded-2xl border bg-card p-6 shadow-soft">
          <Lock className="h-8 w-8 text-primary" />
          <div className="mt-4 font-display font-bold">Confidential Reporting</div>
          <p className="mt-2 text-sm text-muted-foreground">
            All complaints are received and processed in strict confidentiality. The
            identity of the complainant is protected throughout.
          </p>
        </div>
        <div className="rounded-2xl border bg-card p-6 shadow-soft">
          <FileCheck2 className="h-8 w-8 text-primary" />
          <div className="mt-4 font-display font-bold">Time-Bound Redressal</div>
          <p className="mt-2 text-sm text-muted-foreground">
            The ICC investigates every complaint within the statutory 90-day window
            and recommends action through the Principal.
          </p>
        </div>
        <div className="rounded-2xl border bg-card p-6 shadow-soft">
          <Shield className="h-8 w-8 text-primary" />
          <div className="mt-4 font-display font-bold">Anti-Retaliation</div>
          <p className="mt-2 text-sm text-muted-foreground">
            Any form of retaliation against complainants or witnesses is itself a
            punishable offence under this policy.
          </p>
        </div>
      </div> */}

      {/* <div className="grid lg:grid-cols-[1fr_380px] gap-10"> */}
      {/* <div>

        
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">How to File a Complaint</div>
          <h2 className="mt-2 font-display text-3xl font-bold">Reporting Procedure</h2>
          <ol className="mt-6 space-y-4 text-foreground/85">
            <li className="flex gap-4">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">1</span>
              <span>Submit a written complaint to the Presiding Officer of the Internal Complaints Committee (ICC) within 3 months of the incident.</span>
            </li>
            <li className="flex gap-4">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">2</span>
              <span>The ICC acknowledges receipt and may initiate informal conciliation if requested by the complainant.</span>
            </li>
            <li className="flex gap-4">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">3</span>
              <span>A formal inquiry is conducted with both parties heard, witnesses examined, and evidence reviewed — all within 90 days.</span>
            </li>
            <li className="flex gap-4">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">4</span>
              <span>Findings and recommendations are forwarded to the Principal for action, which may include warning, suspension, expulsion or termination.</span>
            </li>
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:iccimayamagri@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft">
              <Mail className="h-4 w-4" /> iccimayamagri@gmail.com
            </a>
            <a href="tel:+919800000000" className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold">
              <Phone className="h-4 w-4" /> +91 63745 85926
            </a>
          </div>
        </div>
      </div> */}
    </PageShell>
  );
}
