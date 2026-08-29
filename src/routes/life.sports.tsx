import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Trophy, Dumbbell, Activity, Users, HeartPulse, Medal } from "lucide-react";

import sports_19 from "@/assets/images/19-sports.jpg";
import sports_20 from "@/assets/images/20-sports.jpg";
import sports_21 from "@/assets/images/21-sports.png";
// import g4 from "@/assets/images/ae_4.webp";

export const Route = createFileRoute("/life/sports")({
  head: () => ({
    meta: [
      { title: "Sports Activities — IIAT" },
      { name: "description", content: "Sports activities, fitness programmes and athletic opportunities at IIAT for holistic student growth." },
      { property: "og:title", content: "Sports Activities — IIAT" },
      { property: "og:description", content: "Sports and physical fitness for discipline, teamwork and leadership at IIAT." },
    ],
  }),
  component: SportsPage,
});

const sports = [
  {
    no: 1,
    title: "Cricket",
    text: "Teamwork, coordination and physical fitness",
  },
  {
    no: 2,
    title: "Volleyball",
    text: "Team spirit, agility and coordination",
  },
  {
    no: 3,
    title: "Kabaddi",
    text: "Strength, speed and team strategy",
  },
  {
    no: 4,
    title: "Football",
    text: "Endurance, coordination and teamwork",
  },
  {
    no: 5,
    title: "Athletics",
    text: "Speed, stamina and physical fitness",
  },
  {
    no: 6,
    title: "Badminton",
    text: "Agility, reflexes and concentration",
  },
  {
    no: 7,
    title: "Table Tennis",
    text: "Hand-eye coordination and quick reflexes",
  },
  {
    no: 8,
    title: "Carrom",
    text: "Concentration and precision",
  },
  {
    no: 9,
    title: "Chess",
    text: "Strategic thinking and mental concentration",
  },
];

const students = [
  {
    no: 1,
    name: "Mr. N.R. Hariharan",
    gender: "Male",
    year: "II",
    game: "Athletics",
  },
  {
    no: 2,
    name: "Mr.P. Suchiarun",
    gender: "Female",
    year: "II",
    game: "Volleyball",
  },
  {
    no: 3,
    name: "Mr.R.Geetha",
    gender: "Female",
    year: "II",
    game: "Athletics",
  },
];

const students_20 = [
  {
    no: 1,
    name: "Mr. N.R. Hariharan",
    gender: "Male",
    year: "IV",
    game: "4X100 M - Relay",
  },
  {
    no: 2,
    name: "Ms. R. Geetha",
    gender: "Female",
    year: "III",
    game: "4X100 M - Relay",
  },
];

const achievementImages = [
  { src: sports_19, alt: "19th All India Inter Agricultural Universities Sports and Games Meet 2018-2019" },
  { src: sports_20, alt: "20th All India Inter Agricultural Universities Sports and Games Meet 2019-2020" },
  // { src: sports_21, alt: "21st All India Inter Agricultural Universities Sports and Games Meet 2023" },
];

function SportsPage() {
  return (
    <PageShell
      eyebrow="Life @ IIAT"
      title="Sports Activities"
      subtitle="Promoting fitness, discipline, teamwork and excellence through active participation in sports and games."
      breadcrumbs={[{ label: "Life @ IIAT" }, { label: "Sports Activities" }]}
    >
      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed">
        <h2 className="font-display text-2xl font-bold text-foreground">Sports Activities at IIAT</h2>
        <p>
          Sports activities at <strong>Imayam Institute of Agriculture and Technology (IIAT)</strong>, provide students with opportunities to improve physical fitness, teamwork, discipline and leadership skills. Students are encouraged to participate in both <strong>outdoor and indoor sports</strong> as part of their overall development.
        </p>
      </div>

      <h3 className="font-display text-2xl font-bold text-primary mt-12">Major Sports Activities</h3>
      <div className="overflow-x-auto rounded-2xl border max-w-6xl mt-6">
        <table className="w-full text-sm">
          <thead className="bg-secondary">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">
                S.No.
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                Sports Activity
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                Benefits
              </th>
            </tr>
          </thead>

          <tbody>
            {sports.map((sport) => (
              <tr
                key={sport.no}
                className="border-t align-top"
              >
                <td className="px-4 py-3">
                  {sport.no}
                </td>

                <td className="px-4 py-3 font-semibold">
                  {sport.title}
                </td>

                <td className="px-4 py-3 text-muted-foreground">
                  {sport.text}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed mt-12">
        <h2 className="font-display text-2xl font-bold text-foreground">Yoga and Fitness Facilities</h2>
        <p>
          The institute also provides facilities for Yoga, which helps students, improve physical flexibility, concentration and mental well-being.
        </p>
        <p>
          A multi-gym hall equipped with modern exercise machines is available for students. The gym supports regular physical exercise, strength development and overall fitness.
        </p>
      </div>

      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed mt-12">
        <h2 className="font-display text-2xl font-bold text-foreground">Sports Events</h2>
        <p>
          Students participate in annual sports meets, inter-department competitions and other sports events conducted by the institution. These activities encourage healthy competition and provide students with opportunities to demonstrate their sporting abilities.
        </p>
      </div>

      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed mt-12">
        <h2 className="font-display text-2xl font-bold text-foreground">19TH ALL INDIA INTER AGRICULTURAL UNIVERSITY</h2>
        <p>
          Sports and Games Meet 2018 -2019 organzined at punjab Agricultural University, Ludhiana From (02.01.2019 to 05.01.2019), Three Imayam Institute of Agriculture and Technology student participated (Mr.N R. HARIHARAN, Mr.P. SUCHIARUN &Ms. R. GEETHA) in the athletics and games and won medals. They brought laurels to the Institute.
        </p>
      </div>
      <div className="overflow-x-auto rounded-2xl border">
        <table className="w-full text-sm">
          <thead className="bg-secondary">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">
                S:No
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                Name of the student
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                Gender
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                Year of study
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                Name of the Game
              </th>
            </tr>
          </thead>

          <tbody>
            {students_20.map((student) => (
              <tr
                key={student.no}
                className="border-t align-top"
              >
                <td className="px-4 py-3">
                  {student.no}
                </td>

                <td className="px-4 py-3 font-semibold">
                  {student.name}
                </td>

                <td className="px-4 py-3">
                  {student.gender}
                </td>

                <td className="px-4 py-3">
                  {student.year}
                </td>

                <td className="px-4 py-3">
                  {student.game}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed mt-12">
        <h2 className="font-display text-2xl font-bold text-foreground">
          20TH ALL INDIA INTER AGRICULTURAL UNIVERSITIES SPORTS AND GAMES MEET
        </h2>

        <p>
          Among the students, Mr. N.R. Hariharan and Ms. R. Geetha were selected
          for Tamil Nadu Agricultural University team. They attended the coaching
          camp at Tamil Nadu Agricultural University from 19.02.2020 to 29.02.2020
          and participated in the SVVU at Tirupati (Andhra).
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border">
        <table className="w-full text-sm">
          <thead className="bg-secondary">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">
                S:No
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Name of the student
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Gender
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Year of study
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Name of the Game
              </th>
            </tr>
          </thead>

          <tbody>
            {students_20.map((student) => (
              <tr
                key={student.no}
                className="border-t align-top"
              >
                <td className="px-4 py-3">
                  {student.no}
                </td>

                <td className="px-4 py-3 font-semibold">
                  {student.name}
                </td>

                <td className="px-4 py-3">
                  {student.gender}
                </td>

                <td className="px-4 py-3">
                  {student.year}
                </td>

                <td className="px-4 py-3">
                  {student.game}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="max-w-4xl space-y-4 text-foreground/80 leading-relaxed mt-12">
        <h2 className="font-display text-2xl font-bold text-foreground">
          21th ALL INDIA INTER AGRICULTURAL UNIVESITIES SPORTS AND GAMES MEET
        </h2>

        <p>
          Among the students, Mr.S.Logeshwaran, were seleted for Tamil Nadu Agricultural University team.
          They attended the coaching camp at Tamil Nadu Agriculture University, Comibatore From (20.02.201 – 24.02.2023) and participated in the All India Inter Agricultural Universities Sports Meets at CCS Haryana
          (Hisar) 
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border">
        <table className="w-full text-sm">
          <thead className="bg-secondary">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">
                S:No
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Name of the student
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Gender
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Year of study
              </th>

              <th className="px-4 py-3 text-left font-semibold">
                Name of the Game
              </th>
            </tr>
          </thead>

          <tbody>
            {students_20.map((student) => (
              <tr
                key={student.no}
                className="border-t align-top"
              >
                <td className="px-4 py-3">
                  {student.no}
                </td>

                <td className="px-4 py-3 font-semibold">
                  {student.name}
                </td>

                <td className="px-4 py-3">
                  {student.gender}
                </td>

                <td className="px-4 py-3">
                  {student.year}
                </td>

                <td className="px-4 py-3">
                  {student.game}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12">
        <h3 className="font-display text-2xl font-bold text-primary mb-6">Achievement Gallery</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {achievementImages.map((image) => (
            <div key={image.alt} className="overflow-hidden rounded-3xl border bg-card p-3 shadow-soft">
              <img
                src={image.src}
                alt={image.alt}
                className="h-72 w-full rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </PageShell>
  );
}
