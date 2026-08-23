import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CalendarDays } from "lucide-react";

export const Route = createFileRoute("/academics/academic-calendar")({
  head: () => ({
    meta: [
      { title: "Academic Calendar — IIAT" },
      { name: "description", content: "Semester schedule, examination dates and vacation periods for the academic year at Imayam Institute of Agriculture & Technology." },
      { property: "og:title", content: "Academic Calendar — IIAT" },
      { property: "og:description", content: "TNAU-aligned semester and examination schedule at IIAT, Thuraiyur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AcademicCalendar,
});

const oddSemester = [
  { event: "Commencement of Odd Semester classes", period: "July (1st week)" },
  { event: "Mid-Semester Examinations", period: "August (last week)" },
  { event: "Independence Day celebration", period: "15 August" },
  { event: "Institutional / Industrial visits", period: "September" },
  { event: "Final Practical Examinations", period: "November (2nd week)" },
  { event: "Final Theory Examinations", period: "November (last week) – December (1st week)" },
  { event: "Semester break", period: "December (2nd week)" },
];

const evenSemester = [
  { event: "Commencement of Even Semester classes", period: "December (3rd week)" },
  { event: "Republic Day celebration", period: "26 January" },
  { event: "Mid-Semester Examinations", period: "February (2nd week)" },
  { event: "Annual Sports & Culturals", period: "March" },
  { event: "Final Practical Examinations", period: "April (3rd week)" },
  { event: "Final Theory Examinations", period: "May (1st week)" },
  { event: "Summer vacation", period: "May – June" },
];

const notes = [
  "The academic calendar follows the schedule prescribed by Tamil Nadu Agricultural University (TNAU), Coimbatore.",
  "Each semester consists of a minimum of 105 working days excluding examination days.",
  "A minimum of 80% attendance separately in theory and practical is mandatory to appear for the final examinations.",
  "Reappearance and improvement examinations are conducted along with the regular examinations of junior batches.",
  "Dates are indicative; any revision notified by the Controller of Examinations, TNAU shall be final.",
];

function Table({ title, rows }: { title: string; rows: { event: string; period: string }[] }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold mb-4">{title}</h2>
      <div className="overflow-x-auto rounded-2xl border">
        <table className="w-full text-sm">
          <thead className="bg-secondary">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Activity</th>
              <th className="px-4 py-3 text-left font-semibold">Tentative Period</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.event} className="border-t">
                <td className="px-4 py-3 font-semibold">{r.event}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AcademicCalendar() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Academic Calendar"
      subtitle="Semester schedule, examinations and vacation periods followed at IIAT as per TNAU norms."
      breadcrumbs={[{ label: "Academics" }, { label: "Academic Calendar" }]}
    >
      <div className="max-w-5xl space-y-12">
        <Table title="Odd Semester (I, III, V, VII)" rows={oddSemester} />
        <Table title="Even Semester (II, IV, VI, VIII)" rows={evenSemester} />

        <div className="rounded-2xl border bg-secondary/40 p-8">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
            <CalendarDays className="h-6 w-6" />
          </div>
          <h2 className="font-display text-2xl font-bold">Important Notes</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {notes.map((n) => (
              <li key={n} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
