import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Home, Droplet, Utensils, BookOpen, Wifi, Building2, Power, Stethoscope, Dumbbell, HeartPulse, Store,
} from "lucide-react";

export const Route = createFileRoute("/life/hostel")({
  head: () => ({
    meta: [
      { title: "Hostel \u2014 IIAT" },
      { name: "description", content: "Hostel facilities for girl students at IIAT \u2014 safe accommodation, hygienic mess and dedicated residential tutors." },
      { property: "og:title", content: "Hostel \u2014 IIAT" },
      { property: "og:description", content: "About the IIAT hostel." },
    ],
  }),
  component: HostelPage,
});

const features = [
  {
    icon: Home,
    title: "Furnished Rooms",
    text: "Each student is provided with a separate cot, bed, bookshelf, table, chair and good lighting facility.",
  },
  {
    icon: Droplet,
    title: "Safe Drinking Water",
    text: "A common R.O. water plant supplies safe drinking water to all residents.",
  },
  {
    icon: Utensils,
    title: "Hygienic Mess",
    text: "The mess is equipped with modern cooking equipment; food is cooked hygienically and served in a clean environment.",
  },
  {
    icon: BookOpen,
    title: "Daily Study Hours",
    text: "Residential tutors in the cadre of Assistant Professors supervise the hostel; daily study hours of one and a half hours are observed.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Enabled",
    text: "Wi-Fi enabled facilities with aesthetically built architecture provide a comfortable and connected residential environment.",
  },
  {
    icon: BookOpen,
    title: "Exclusive Study Room",
    text: "An exclusive, uninterrupted study room is available for students after college hours.",
  },
  {
    icon: Power,
    title: "Uninterrupted Power Supply",
    text: "Uninterrupted power supply is provided along with a separate generator facility for students.",
  },
  {
    icon: Stethoscope,
    title: "Medical Facility",
    text: "Medical facilities are available with free medicines provided to students who are sick.",
  },
  {
    icon: Droplet,
    title: "Mineral Water",
    text: "Mineral water is provided to all students for safe and healthy drinking.",
  },
  {
    icon: Utensils,
    title: "Modern Dining Hall",
    text: "A modern dining hall serves nutritious and hygienic vegetarian and non-vegetarian food.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Centre",
    text: "A well-equipped fitness centre is available for students to maintain their health and fitness.",
  },
  {
    icon: HeartPulse,
    title: "Yoga Sessions",
    text: "Regular yoga sessions are provided to promote physical fitness, mental well-being and relaxation.",
  },
  {
    icon: Store,
    title: "Stationery Shop",
    text: "A stationery shop is available within the hostel premises for students' academic and daily needs.",
  },
];

function HostelPage() {
  return (
    <PageShell
      eyebrow="Life @ IIAT"
      title="Hostel"
      subtitle="A safe, well-equipped residential home for our girl students."
      breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Hostel" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">About Hostel</h2>
        <p>
          In our institution separate hostels for boys and girls with good infrastructure are provided. The aesthetically designed modern hostels provide home atmosphere. All the rooms have enough space and furnished with intercom facilities.
        </p>
        <p>
          Both vegetarian and non-vegetarian foods are provided in a hygienic way. Boys’ hostel is equipped with GYM, recreational facilities. Medical service is available 24 hours a day. 
        </p>
      </div>

      <h3 className="font-display text-2xl font-bold text-primary mt-12">Following facilities are provided in the Hostel</h3>

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-6xl">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
