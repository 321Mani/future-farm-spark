import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { FileText, Download, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/about/approvals")({
  head: () => ({
    meta: [
      { title: "Approval Letters — IIAT" },
      { name: "description", content: "Official approval letters and statutory recognitions for IIAT." },
      { property: "og:title", content: "Approval Letters — IIAT" },
      { property: "og:description", content: "Government and university approvals." },
    ],
  }),
  component: Approvals,
});

const approvals = [
  { authority: "Tamil Nadu Agricultural University (TNAU)", description: "Affiliation for B.Sc (Hons.) Agriculture and allied programmes.", year: "Renewed Annually" },
  { authority: "Indian Council of Agricultural Research (ICAR)", description: "National accreditation under ICAR Deans' Committee norms.", year: "Accredited" },
  { authority: "Government of Tamil Nadu — G.O.", description: "Government Order recognising the institute under State higher-education framework.", year: "G.O. (Ms) No." },
  { authority: "AICTE / Statutory Bodies", description: "Statutory approvals for technical programmes where applicable.", year: "Approved" },
  { authority: "MoU Partners", description: "Memoranda of Understanding with research stations, agri-corporates and farms.", year: "Active" },
];

function Approvals() {
  return (
    <PageShell
      eyebrow="About Us"
      title="Approval Letters"
      subtitle="Every programme at IIAT is offered under proper statutory and academic recognition."
      breadcrumbs={[{ label: "About", href: "/about" }, { label: "Approval Letters" }]}
    >
      <div className="grid gap-4 max-w-4xl">
        {approvals.map((a) => (
          <div
            key={a.authority}
            className="group flex items-start gap-5 rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary flex-shrink-0">
              <FileText className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {a.year}
                </span>
              </div>
              <div className="mt-1 font-display text-lg font-bold">{a.authority}</div>
              <p className="text-sm text-muted-foreground mt-1">{a.description}</p>
            </div>
            <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <Download className="h-4 w-4" /> View
            </button>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted-foreground max-w-3xl">
        For copies of any of the above approval documents, please write to the
        institute office at <a className="text-primary underline" href="mailto:info@imayamagri.org">info@imayamagri.org</a>.
      </p>
    </PageShell>
  );
}
