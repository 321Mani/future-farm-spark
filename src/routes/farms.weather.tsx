import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CloudSun } from "lucide-react";

export const Route = createFileRoute("/farms/weather")({
  head: () => ({
    meta: [
      { title: "Weather Data — IIAT" },
      { name: "description", content: "Real-time meteorological data from the IIAT North Farm observatory — rainfall, temperature, humidity and wind speed records." },
    ],
  }),
  component: WeatherDataPage,
});

const rows = [
  { sno: "1", year: "2020", max: "37", min: "24", hum: "65.9", wind: "13", rain: "969" },
  { sno: "2", year: "2021", max: "36", min: "22.5", hum: "69", wind: "12", rain: "1050" },
  { sno: "3", year: "2022", max: "38", min: "23", hum: "70", wind: "12", rain: "1117" },
  { sno: "4", year: "2023", max: "34", min: "24", hum: "73", wind: "13", rain: "808" },
  { sno: "5", year: "2024 (till April)", max: "36", min: "24", hum: "73", wind: "15", rain: "15.5" },
];

function WeatherDataPage() {
  return (
    <PageShell
      eyebrow="Farms"
      title="Weather Data"
      subtitle="Meteorological records from our on-farm observatory at North Farm."
      breadcrumbs={[{ label: "Farms" }, { label: "Weather Data" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
            <CloudSun className="h-6 w-6" />
          </div>
          <p>
            Our meteorology observatory is situated in North Farm. For the purpose of managing crops
            and protecting them, this observatory provides real-time meteorological information.
            Rainfall, maximum and minimum temperatures, relative humidity, soil temperature, wind
            speed and direction, and evapotranspiration are all recorded.
          </p>
        </div>
      </div>

      <div className="mt-12 max-w-5xl">
        <h2 className="font-display text-2xl font-bold mb-4">Annual Weather Summary</h2>
        <div className="overflow-x-auto rounded-2xl border bg-card shadow-soft">
          <table className="w-full text-sm">
            <thead className="bg-primary/10 text-foreground">
              <tr>
                <th className="text-left p-4 font-semibold">S.No.</th>
                <th className="text-left p-4 font-semibold">Year</th>
                <th className="text-left p-4 font-semibold">Max Temp (°C)</th>
                <th className="text-left p-4 font-semibold">Min Temp (°C)</th>
                <th className="text-left p-4 font-semibold">Humidity (%)</th>
                <th className="text-left p-4 font-semibold">Avg Wind (km/hr)</th>
                <th className="text-left p-4 font-semibold">Rainfall (mm)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.sno} className="border-t">
                  <td className="p-4">{r.sno}</td>
                  <td className="p-4 font-medium">{r.year}</td>
                  <td className="p-4">{r.max}</td>
                  <td className="p-4">{r.min}</td>
                  <td className="p-4">{r.hum}</td>
                  <td className="p-4">{r.wind}</td>
                  <td className="p-4">{r.rain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageShell>
  );
}
