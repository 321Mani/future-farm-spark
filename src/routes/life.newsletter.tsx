import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Trophy, Medal, ArrowRight } from "lucide-react";

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
          News Letter
        </h2>
        <div className="rounded-2xl border bg-secondary mb-6 p-10">
          <ul className="list-disc list-inside space-y-2">
            <li>Pongal Celebrations </li>
            <li>National Voters Day</li>
            <li>Republic Day celebration</li>
            <li>TNAU Standing Committee Visits</li>
            <li>Cybercrime awareness program</li>
            <li>All-India Study Tour</li>
            <li>Agripreneurship Stall</li>
            <li>Celebration of International Women’s Day</li>
            <li>Students Club and Sport Inaugural Celebration</li>
            <li>RAWE Exhibition</li>
            <li>Farmers meeting</li>
          </ul>
        </div>
      </div>

      <a
        href="https://imayamnaturopathy.com/docs/news%20letter%205%20copy.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm mt-8 font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow self-start lg:self-auto"
      >
        Skill Enhancement Course Syllabus (1) <ArrowRight className="h-4 w-4" />
      </a>
    </PageShell>
  );
}
