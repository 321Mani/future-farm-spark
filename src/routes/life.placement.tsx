import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/life/placement")({
  head: () => ({
    meta: [
      { title: "Placement \u2014 IIAT" },
      { name: "description", content: "Placement Cell at IIAT \u2014 initiatives, placement record (2018\u20132022) and detailed batch-wise placement outcomes." },
      { property: "og:title", content: "Placement \u2014 IIAT" },
      { property: "og:description", content: "Placement record and initiatives at IIAT, Thuraiyur." },
    ],
  }),
  component: PlacementPage,
});

const initiatives = [
  "Coaching for Competitive Examinations in collaboration with Trichy NR IAS Academy.",
  "Special lectures by market executives, financial officers, research experts, progressive farmers, NGO leaders and private input dealers.",
  "Interaction meetings arranged with industry experts.",
  "Model group discussions conducted regularly.",
  "Campus interviews \u2014 e.g., Bio Green Tech (Pollachi) conducted a campus drive on 07.04.2018.",
  "51% of B.Sc. (Agri.) graduates secured employment in private and public sector firms and institutions \u2014 Union Bank, Bank of India, Canara Bank, IFFCO, Rasi Seeds, Bayer, etc.",
];

const summary = [
  { p: "State Govt", y2018: "1", y2019: "2", y2020: "3", y2021: "3", y2022: "8", total: "17" },
  { p: "Banks", y2018: "\u2013", y2019: "3", y2020: "4", y2021: "2", y2022: "2", total: "11" },
  { p: "Private Sector", y2018: "30", y2019: "25", y2020: "35", y2021: "26", y2022: "37", total: "153" },
  { p: "Entrepreneurs", y2018: "6", y2019: "11", y2020: "25", y2021: "25", y2022: "35", total: "102" },
  { p: "Total", y2018: "37", y2019: "39", y2020: "67", y2021: "56", y2022: "82", total: "283" },
];

const batches: { year: string; rows: { n: string; text: string }[] }[] = [
  {
    year: "2013 \u2013 2017",
    rows: [
      { n: "03", text: "Cleared TNPSC-AO exam and joined as Agricultural Officer (Government of Tamil Nadu)." },
      { n: "01", text: "Working as Assistant Professor in Mother Teresa College of Agriculture, Pudukottai." },
      { n: "02", text: "Working as Vocational Teacher." },
      { n: "23", text: "Working in various organisations \u2014 Rasi Seeds, IFFCO, Excel Crop Care Ltd., Green Tech Bio Pvt. Ltd., National Agro Foundation, EID Parry, Trichy." },
      { n: "02", text: "Pursuing PG Plant Pathology at TNAU, Coimbatore." },
      { n: "02", text: "Pursuing PG Soil Science at TNAU, Coimbatore and Killikulam." },
      { n: "02", text: "Pursuing PG Agronomy at TNAU Madurai and Annamalai University." },
      { n: "13", text: "Preparing for Competitive exams at various coaching institutes in Tamil Nadu & New Delhi." },
    ],
  },
  {
    year: "2014 \u2013 2018",
    rows: [
      { n: "02", text: "Working as Forester in Govt. of Tamil Nadu." },
      { n: "03", text: "Probationary Officer in Union Bank and Agriculture Field Officer in Bank of India and Canara Bank." },
      { n: "02", text: "Chief Executive Officer in Er Uzhavan Collective Farmers Producer Company Ltd." },
      { n: "02", text: "Junior Research Fellow at TNAU, Coimbatore." },
      { n: "01", text: "Breeding Assistant in Rasi Seeds." },
      { n: "01", text: "Project Officer, Bayer Crop Science." },
      { n: "01", text: "Entrepreneur \u2014 Gramathan Cold Pressed Oil." },
      { n: "01", text: "Pursuing higher studies at the University of Manchester, United Kingdom." },
      { n: "01", text: "Pursuing higher studies at the Australian College of Agriculture & Horticulture, Australia." },
      { n: "01", text: "Cleared ICAR PG Entrance and pursuing Agricultural Biotechnology at GBPUA&T, Pantnagar." },
      { n: "01", text: "Pursuing post-graduation at Kerala Agricultural University, Kerala." },
      { n: "06", text: "Pursuing PG Entomology and Agri-Business Management at TNAU, Coimbatore." },
      { n: "07", text: "Pursuing PG Agronomy at Annamalai University, Chidambaram." },
      { n: "14", text: "Working in private organisations \u2014 IFFCO, cut-flower industry, soil testing labs, Green Tech Bio Pvt. Ltd., Bayer Crop Science, Madathukulam Fine Farmers Producer Company Ltd." },
      { n: "25", text: "Preparing for competitive exams at coaching institutes in Tamil Nadu & New Delhi." },
    ],
  },
  {
    year: "2015 \u2013 2019",
    rows: [
      { n: "02", text: "Specialist Officer in Union Bank of India." },
      { n: "02", text: "Specialist Officer in Canara Bank." },
      { n: "19", text: "Joined as Public Relation Officer in Micro Finance Pvt. Ltd., Erode." },
      { n: "38", text: "Preparing for UPSC, TNPSC & Banking exams at coaching institutes in Tamil Nadu." },
      { n: "15", text: "Working in private sectors." },
    ],
  },
  {
    year: "2016 \u2013 2020",
    rows: [
      { n: "03", text: "Vocational Trainer in Government Higher Secondary Schools \u2014 Erode, Ervadi (SABMH) and Dharmapuri." },
      { n: "03", text: "Assistant Branch Post Master." },
      { n: "01", text: "Marketing Development Officer in FMC." },
      { n: "01", text: "Field Officer in Chinnasalem." },
      { n: "01", text: "Garden Supervisor in Phoenix Mall." },
      { n: "13", text: "Working in private sectors." },
      { n: "01", text: "Selected for MANAGE, IRMA and awaiting IIM results." },
      { n: "01", text: "Pursuing PG Diploma in Management at the Indian Institute of Plantation Management, Bangalore." },
      { n: "01", text: "Pursuing PG in Agricultural Economics and Farm Management at Assam Agricultural University." },
      { n: "01", text: "Pursuing PG in Floriculture and Landscaping at Lovely Professional University, Punjab." },
      { n: "03", text: "Pursuing higher studies at TNAU in Soil Science and Agricultural Economics." },
      { n: "29", text: "Preparing for UPSC, TNPSC, TNUSRB & Banking exams at coaching institutes in Tamil Nadu." },
    ],
  },
];

const federal = [
  { id: "186697", name: "SOWMIYA M" },
  { id: "186647", name: "KSHANTHAPRIYA" },
  { id: "187513", name: "JEVINI J" },
  { id: "186898", name: "LAKSHAYA K" },
];

function PlacementPage() {
  return (
    <PageShell
      eyebrow="Life @ IIAT"
      title="Placement"
      subtitle="The Placement Cell of IIAT, Thuraiyur has been undertaking placement activities from 2013 onwards."
      breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Placement" }]}
    >
      <div className="max-w-4xl text-foreground/80 leading-relaxed space-y-4">
        <h2 className="font-display text-2xl font-bold text-foreground">Students Placement Profile</h2>
        <p>
          The Placement Cell of Imayam Institute of Agriculture and Technology, Thuraiyur (area: 540 sq. ft.) has
          been undertaking the placement process from the year 2013 onwards. The following placement initiatives
          have been taken for the benefit of students.
        </p>
      </div>

      <div className="mt-10 max-w-5xl">
        <h3 className="font-display text-xl font-bold mb-4">Placement Initiatives</h3>
        <ul className="space-y-2">
          {initiatives.map((it) => (
            <li key={it} className="flex gap-3 text-sm text-foreground/80">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 max-w-5xl">
        <h3 className="font-display text-xl font-bold mb-4">Placement Summary (2018 – 2022)</h3>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Particulars</th>
                <th className="px-4 py-3 text-left font-semibold">2018</th>
                <th className="px-4 py-3 text-left font-semibold">2019</th>
                <th className="px-4 py-3 text-left font-semibold">2020</th>
                <th className="px-4 py-3 text-left font-semibold">2021</th>
                <th className="px-4 py-3 text-left font-semibold">2022</th>
                <th className="px-4 py-3 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {summary.map((r) => (
                <tr key={r.p} className="border-t">
                  <td className="px-4 py-3 font-semibold">{r.p}</td>
                  <td className="px-4 py-3">{r.y2018}</td>
                  <td className="px-4 py-3">{r.y2019}</td>
                  <td className="px-4 py-3">{r.y2020}</td>
                  <td className="px-4 py-3">{r.y2021}</td>
                  <td className="px-4 py-3">{r.y2022}</td>
                  <td className="px-4 py-3 font-bold text-primary">{r.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 max-w-5xl space-y-8">
        <h3 className="font-display text-xl font-bold">Detailed Placement Report</h3>
        {batches.map((b) => (
          <div key={b.year} className="rounded-2xl border bg-card p-6 shadow-soft">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">{b.year}</div>
            <div className="space-y-2">
              {b.rows.map((row, idx) => (
                <div key={idx} className="flex gap-4 text-sm">
                  <span className="font-bold text-primary w-10 shrink-0">{row.n}</span>
                  <span className="text-foreground/80">{row.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-3xl">
        <h3 className="font-display text-xl font-bold mb-4">Shortlisted Candidates for Federal Bank</h3>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Candidate ID</th>
                <th className="px-4 py-3 text-left font-semibold">Name</th>
                <th className="px-4 py-3 text-left font-semibold">Course</th>
              </tr>
            </thead>
            <tbody>
              {federal.map((f) => (
                <tr key={f.id} className="border-t">
                  <td className="px-4 py-3 font-semibold text-primary">{f.id}</td>
                  <td className="px-4 py-3">{f.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">B.Sc — IIAT, Trichy</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  );
}
