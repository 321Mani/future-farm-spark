import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Phone, CreditCard } from "lucide-react";

export const Route = createFileRoute("/life/fee-payment")({
  head: () => ({
    meta: [
      { title: "Online Fee Payment \u2014 IIAT" },
      { name: "description", content: "Online fee payment bank details for Imayam Institute of Agriculture and Technology (IIAT), Thuraiyur." },
      { property: "og:title", content: "Online Fee Payment \u2014 IIAT" },
      { property: "og:description", content: "Bank details for online fee payment at IIAT." },
    ],
  }),
  component: FeePaymentPage,
});

const bank = [
  { k: "Bank Name / Branch", v: "State Bank of India / Thuraiyur" },
  { k: "Account Number", v: "33974959758" },
  { k: "MICR Code", v: "620002021" },
  { k: "IFSC Code", v: "SBIN0000765" },
  { k: "Name of the Account", v: "Imayam Institute of Agriculture and Technology" },
  { k: "Type of Account", v: "Current" },
];

function FeePaymentPage() {
  return (
    <PageShell
      eyebrow="Life @ IIAT"
      title="Online Fee Payment"
      subtitle="Bank details for online fee payment to IIAT, Thuraiyur."
      breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Online Fee Payment" }]}
    >
      <div className="max-w-3xl">
        <h2 className="font-display text-2xl font-bold mb-6">Bank Details</h2>
        <div className="overflow-hidden rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold w-16">Sl. No</th>
                <th className="px-4 py-3 text-left font-semibold">Particulars</th>
                <th className="px-4 py-3 text-left font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {bank.map((row, i) => (
                <tr key={row.k} className="border-t">
                  <td className="px-4 py-3 text-muted-foreground">{String(i + 1).padStart(2, "0")}</td>
                  <td className="px-4 py-3 font-semibold">{row.k}</td>
                  <td className="px-4 py-3">{row.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-4xl">
        <div className="rounded-2xl border bg-card p-6 shadow-soft">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
            <Phone className="h-6 w-6" />
          </div>
          <h3 className="font-display text-lg font-bold">Contact Numbers</h3>
          <p className="mt-2 text-sm text-muted-foreground">For payment assistance, call:</p>
          <p className="mt-2 font-semibold">9944722709 &nbsp;&middot;&nbsp; 9655239054</p>
        </div>
        <a
          href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all"
        >
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent mb-4">
            <CreditCard className="h-6 w-6" />
          </div>
          <h3 className="font-display text-lg font-bold">Pay via SBI Collect</h3>
          <p className="mt-2 text-sm text-muted-foreground">Click here to make your fee payment through SBI Collect.</p>
        </a>
      </div>
    </PageShell>
  );
}
