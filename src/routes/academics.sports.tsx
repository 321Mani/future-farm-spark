import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Dumbbell, Trophy, Activity, Users } from "lucide-react";
import { Gallery } from "@/components/site/Gallery_Sports";

export const Route = createFileRoute("/academics/sports")({
  head: () => ({
    meta: [
      { title: "Sports — IIAT" },
      { name: "description", content: "Sports and Sports facilities promoting fitness and team spirit at IIAT." },
      { property: "og:title", content: "Sports — IIAT" },
      { property: "og:description", content: "Sports for fitness, discipline and team spirit." },
    ],
  }),
  component: PhysicalEducation,
});

// const outdoor = [
//   { icon: Trophy, title: "Volley Ball", text: "02" },
//   { icon: Activity, title: "Foot Ball", text: "01" },
//   { icon: Dumbbell, title: "Basket Ball", text: "Under Progress" },
//   { icon: Users, title: "Kabbadi", text: "01" },
//   { icon: Users, title: "Kho-Kho", text: "02" },
//   { icon: Users, title: "Tennis", text: "01" },
// ];

// const indoor = [
//   { icon: Users, title: "Shuttle Badminton", text: "02" },
//   { icon: Users, title: "Carrom", text: "02" },
//   { icon: Users, title: "Chess", text: "02" },
//   { icon: Users, title: "Gymnasium", text: "Boys-1, Girls-1" },
// ];

function PhysicalEducation() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Sports"
      subtitle="Building healthy bodies, sharp minds and team spirit through structured sports and fitness programmes."
      breadcrumbs={[{ label: "Academics" }, { label: "Sports" }]}
    >
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          This Institute lays considerable emphasis on students participation in various games, sports and track and field activities. The spacious grounds of the institute are laid out into playfields for Cricket, Football, Basketball, Volleyball, Lawn Tennis and Badminton ,Kabaddi, Kho- Kho and Indoor Games etc., carrom board , chess, shuttle badminton, Table tennis etc
        </p>
      </div>
      <Gallery />
    </PageShell>
  );
}
