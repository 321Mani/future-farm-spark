import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Shield, Phone, Mail, Users, FileCheck2, Lock } from "lucide-react";

export const Route = createFileRoute("/about/sexual-harassment")({
  head: () => ({
    meta: [
      { title: "Sexual Harassment Policy — IIAT" },
      { name: "description", content: "IIAT's Internal Complaints Committee and policy on prevention of sexual harassment at the workplace." },
      { property: "og:title", content: "Anti-Sexual Harassment — IIAT" },
      { property: "og:description", content: "Internal Complaints Committee, POSH Act 2013 compliance." },
    ],
  }),
  component: SexualHarassment,
});

const icc = [
  { name: "Dr. T. Bharathi", role: "Presiding Officer", phone: "+91 98XXXX2345" },
  { name: "Mrs. K. Anitha", role: "Member — Faculty", phone: "+91 98XXXX4567" },
  { name: "Mr. R. Suresh", role: "Member — Non-Teaching", phone: "+91 98XXXX3456" },
  { name: "Adv. S. Meena", role: "External Member (NGO/Legal)", phone: "+91 98XXXX5678" },
  { name: "Ms. P. Divya", role: "Student Representative", phone: "+91 98XXXX6789" },
];

function SexualHarassment() {
  return (
    <PageShell
      eyebrow="Governance"
      title="Sexual Harassment — ICC"
      subtitle="A safe, respectful and dignified campus for every student, faculty and staff member."
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Governance" }, { label: "Sexual Harassment" }]}
    >
      <div className="rounded-3xl bg-gradient-primary p-10 text-primary-foreground shadow-glow mb-12">
        <Shield className="h-12 w-12" />
        <h2 className="mt-4 font-display text-3xl font-bold">Zero-Tolerance Policy</h2>
        <p className="mt-3 max-w-3xl opacity-95">
          IIAT is fully committed to the prevention, prohibition and redressal of
          sexual harassment in compliance with the <strong>Sexual Harassment of Women at
          Workplace (Prevention, Prohibition and Redressal) Act, 2013</strong> and UGC
          (Prevention, prohibition and redressal of sexual harassment of women
          employees and students in higher educational institutions) Regulations, 2015.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-12">
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
      </div>

      <div className="grid lg:grid-cols-[1fr_380px] gap-10">
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
            <a href="mailto:icc@imayamagri.org" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft">
              <Mail className="h-4 w-4" /> icc@imayamagri.org
            </a>
            <a href="tel:+919800000000" className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold">
              <Phone className="h-4 w-4" /> +91 98000 00000
            </a>
          </div>
        </div>

        <aside>
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
        </aside>
      </div>
    </PageShell>
  );
}
