import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { MapPin, Plane, TrainFront, Bus, Car, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location & How to Reach — IIAT Thuraiyur" },
      {
        name: "description",
        content:
          "IIAT is located at Kannanur, Thuraiyur (Tk), Tiruchirappalli District, Tamil Nadu 621 206. Directions by road, rail and air with campus map.",
      },
      { property: "og:title", content: "Location & How to Reach — IIAT" },
      {
        property: "og:description",
        content: "Find Imayam Institute of Agriculture & Technology in Kannanur, Thuraiyur, Tiruchirappalli District.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocationPage,
});

const routes = [
  {
    icon: Bus,
    title: "By Road",
    text: "The campus is on the Thuraiyur–Perambalur road at Kannanur, about 6 km from Thuraiyur bus stand. Frequent town buses and share autos connect Thuraiyur with the campus gate.",
  },
  {
    icon: Car,
    title: "From Tiruchirappalli",
    text: "Approximately 45 km (about 1 hour) north of Trichy city via NH-45 and the Thuraiyur road. Perambalur is roughly 35 km away.",
  },
  {
    icon: TrainFront,
    title: "By Rail",
    text: "Tiruchirappalli Junction is the nearest major railway station (about 48 km), with connections to Chennai, Coimbatore, Madurai and Bengaluru.",
  },
  {
    icon: Plane,
    title: "By Air",
    text: "Tiruchirappalli International Airport is roughly 55 km from campus, with domestic and international connections.",
  },
];

function LocationPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title="Location"
      subtitle="A 100-acre green campus at Kannanur, Thuraiyur — in the heart of Tiruchirappalli district's farming belt."
      breadcrumbs={[{ label: "About Us" }, { label: "Location" }]}
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-bold">Campus Address</h2>
          <ul className="mt-5 space-y-4">
            <li className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="text-muted-foreground">
                Imayam Institute of Agriculture &amp; Technology,
                <br /> Kannanur, Thuraiyur (Tk),
                <br /> Tiruchirappalli District, Tamil Nadu — 621 206
              </span>
            </li>
            <li className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <span className="text-muted-foreground">+91 90035 55666</span>
            </li>
            <li className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <span className="text-muted-foreground">admissions@imayamagri.org</span>
            </li>
          </ul>

          <a
            href="https://maps.google.com/?q=IIAT+Imayam+Institute+of+Agriculture+%26+Technology"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            Get Directions
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border shadow-soft">
          <iframe
            title="IIAT campus location map"
            loading="lazy"
            className="h-[360px] w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.5656546261635!2d78.56513220782891!3d11.103590198025008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa54a040473625%3A0x90afcb83f7fd8d73!2sIIAT%20-%20Imayam%20Institute%20of%20Agriculture%20%26%20Technology!5e0!3m2!1sen!2sin!4v1573523956216!5m2!1sen!2sin"
          />
        </div>
      </div>

      <h2 className="mt-16 font-display text-2xl font-bold">How to Reach</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {routes.map((r) => (
          <div key={r.title} className="rounded-2xl border bg-card p-6 shadow-soft transition-all hover:shadow-glow">
            <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <r.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
