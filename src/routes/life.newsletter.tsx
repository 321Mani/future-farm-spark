import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Trophy, Medal } from "lucide-react";

export const Route = createFileRoute("/life/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter \u2014 IIAT" },
      { name: "description", content: "IIAT newsletter \u2014 Inter Collegiate Tournament, All India Inter Agri Tournament and ICT EVENTS November 2023." },
      { property: "og:title", content: "Newsletter \u2014 IIAT" },
      { property: "og:description", content: "Sports and event highlights from IIAT." },
    ],
  }),
  component: NewsletterPage,
});

const ictRows = [
  { gold: "110 m Hurdle \u2014 1", silver: "100 m \u2014 1", bronze: "1500 m \u2014 1" },
  { gold: "Javelin \u2014 1", silver: "Triple Jump \u2014 2", bronze: "Shot put \u2014 1" },
  { gold: "Long Jump \u2014 1", silver: "\u2014", bronze: "Silambam \u2014 1" },
  { gold: "Relay Men (4\u00D7100) \u2014 1", silver: "\u2014", bronze: "400 m \u2014 1" },
];

function NewsletterPage() {
  return (
    <PageShell
      eyebrow="Life @ IIAT"
      title="Newsletter"
      subtitle="Sports achievements and event highlights from the IIAT campus."
      breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Newsletter" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground inline-flex items-center gap-2">
          <Trophy className="h-6 w-6 text-accent" />
          Inter Collegiate Tournament & All India Inter Agri Tournament
        </h2>
        <p>
          Tamil Nadu Agricultural University organised the Inter Collegiate Tournament 2022, a state-level
          Agri sports meet held from 01.12.2022 to 06.12.2022 at HC&RI, Periyakulam (zone level) and from
          11.12.2022 to 16.12.2022 at TNAU, Coimbatore. A total of 41 agricultural colleges participated;
          89 students from IIAT, Thuraiyur participated and won medals in various games.
        </p>
        <p>
          The 21st All India Inter Agri Tournament was held at Chaudhary Charan Singh Haryana Agricultural
          University, Hisar, Haryana, where TNAU won the overall athletics runners-up trophy. IIAT student
          M. S. Logeshwaran (2021 batch) won an individual Silver Medal in the 4\u00D7100 Relay.
        </p>
      </div>

      <div className="mt-12 max-w-5xl">
        <h2 className="font-display text-2xl font-bold text-foreground inline-flex items-center gap-2 mb-4">
          <Medal className="h-6 w-6 text-accent" />
          ICT Events \u2014 November 2023
        </h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          Imayam Institute of Agriculture and Technology (IIAT) participated in ICT \u2014 Madurai, B-Zone. In the
          Games (Men) category, IIAT secured Runners-up in Volleyball and Badminton. In Athletics, IIAT students
          secured four Gold, three Silver and four Bronze medals.
        </p>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Gold</th>
                <th className="px-4 py-3 text-left font-semibold">Silver</th>
                <th className="px-4 py-3 text-left font-semibold">Bronze</th>
              </tr>
            </thead>
            <tbody>
              {ictRows.map((r, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-3">{r.gold}</td>
                  <td className="px-4 py-3">{r.silver}</td>
                  <td className="px-4 py-3">{r.bronze}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  );
}
