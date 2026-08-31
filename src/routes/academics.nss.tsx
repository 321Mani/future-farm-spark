import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Droplet, TreePine, Dumbbell, Leaf, CigaretteOff, Flag, Scale } from "lucide-react";
import { Gallery } from "@/components/site/Gallery_nss";

export const Route = createFileRoute("/academics/nss")({
  head: () => ({
    meta: [
      { title: "NSS — National Service Scheme — IIAT" },
      { name: "description", content: "NSS unit at IIAT organising community service, rural outreach and social awareness camps." },
      { property: "og:title", content: "NSS — IIAT" },
      { property: "og:description", content: "Not Me, But You — NSS at IIAT." },
    ],
  }),
  component: NSS,
});

const activities = [
  {
    icon: Droplet,
    title: "Blood Donor Day",
    text: "The NSS unit organized a highly successful Blood Donation Camp on campus to mark World Blood Donor Day. This vital community service initiative aimed to address critical shortages in local blood banks and instill a sense of social responsibility among young citizens. Working in close collaboration with certified medical professionals from the local government hospital, NSS volunteers managed the event's entire lifecycle, from donor registration to post-donation care.",
  },
  {
    icon: TreePine,
    title: "World Environment Day",
    text: "To celebrate World Environment Day on June 5, the NSS unit organized a large-scale Tree Plantation Drive across the campus and its surrounding community areas. The core objective of this eco-friendly initiative was to combat deforestation, enhance local biodiversity, and raise awareness about environmental sustainability. Guided by their motto of community service, NSS volunteers enthusiastically gathered to plant native tree saplings, demonstrating a collective commitment to creating a greener, healthier planet for future generations.",
  },
  {
    icon: Dumbbell,
    title: "International Day of Yoga",
    text: "The NSS unit organized a rejuvenating mass yoga session on June 21 to observe the International Day of Yoga. Held in the campus auditorium, the event aimed to promote physical wellness, mental clarity, and holistic health among students and faculty members. Guided by certified yoga instructors, NSS volunteers actively participated in the global movement, emphasizing how incorporating yoga into daily routines can mitigate stress, improve concentration, and foster an overall balanced lifestyle.",
  },
  {
    icon: Leaf,
    title: "World Biodiversity Day",
    text: "The NSS unit commemorated World Biodiversity Day on May 22 by organizing a comprehensive educational and conservation drive across the institution. This initiative aimed to sensitize students to the critical importance of preserving biological diversity and maintaining ecological balance. Volunteers actively led the event, highlighting the severe threats that climate change and habitat destruction pose to global ecosystems, while reinforcing the community's collective responsibility to protect native flora and fauna.",
  },
  {
    icon: CigaretteOff,
    title: "World No Tobacco Day",
    text: "The NSS unit observed World No Tobacco Day on May 31 by organizing a comprehensive public health campaign across the institution and nearby communities. This initiative aimed to highlight the severe health risks associated with tobacco consumption and second-hand smoke. Volunteers spearheaded the event, emphasizing the economic and environmental burden of the tobacco industry while reinforcing the role of youth in fostering a tobacco-free society.",
  },
  {
    icon: Flag,
    title: "National Unity Day",
    text: "NSS unit of IIAT conducted various events and activities to glorify the Nation’s Unity Celebration on October 31. Both the students and the NSS volunteers were actively involved and participated in the conduct of all the events.",
  },
  {
    icon: Scale,
    title: "National Constitution Day",
    text: "NSS unit of IIAT conducted various events and activities to glorify the Nation’s Constitution Day Celebration on November 26. The primary objective of the celebration was to promote constitutional values, raise awareness about the fundamental rights and duties of citizens, and honor the contributions of Dr. B.R. Ambedkar. Both the students and the NSS volunteers were actively involved and participated in the conduct of all the events.",
  },
];

const specialCampTable = [
  {
    sno: 1,
    detail: "Adopted Villages",
    value: "Kollapatti",
  },
  {
    sno: 2,
    detail: "Location of the Camp (Address)",
    value: "Kollapatti Village, Thuraiyur Taluk",
  },
  {
    sno: 3,
    detail: "Block",
    value: "Thuraiyur",
  },
  {
    sno: 4,
    detail: "District",
    value: "Tiruchirapalli",
  },
  {
    sno: 5,
    detail: "Year of adoption",
    value: "2025",
  },
  {
    sno: 6,
    detail: "Distance from Institution (Kms)",
    value: "3.5 kms",
  },
  {
    sno: 7,
    detail: "Duration and Date of the Special Camp",
    value: "01.09.2026 to 07.09.2026 (7 days)",
  },
  {
    sno: 8,
    detail: "Volunteer Participation (Male / Female)",
    value: "57 / 71 = 128",
  },
];

const nssActivities = [
  {
    sno: 1,
    event:
      "Sirmathanam activities done by the NSS volunteers at various places of Kollapatti village",
    volunteers: 94,
  },
  {
    sno: 2,
    event: "Programme on Vegetable Gardening and its benefits",
    volunteers: 94,
  },
  {
    sno: 3,
    event:
      "Demonstration programme on the cultivation practices and market importance of Oyster Mushroom",
    volunteers: 94,
  },
  {
    sno: 4,
    event:
      'Drawing competition conducted on the topic of "I AM 17 – READY TO REGISTER READY TO VOTE"',
    volunteers: 94,
  },
  {
    sno: 5,
    event: "Sweeping and collecting the litters in the lawns of hostel",
    volunteers: 94,
  },
  {
    sno: 6,
    event:
      "Uprooting the weeds nearby the volleyball court and Kabbadi playground by NSS volunteers",
    volunteers: 237,
  },
  {
    sno: 7,
    event: "Harvesting the sweet corn crop in the agricultural field of IIAT",
    volunteers: 237,
  },
  {
    sno: 8,
    event:
      "Earthing up and bund making done around the coconut trees",
    volunteers: 137,
  },
  {
    sno: 9,
    event:
      "National Unity Day, Essay writing, Speech competition, Unity pledge. National Constitution Day (November 26)",
    volunteers: 268,
  },
  {
    sno: 10,
    event:
      "Field preparation activities like land measurement for plot layout and bund making",
    volunteers: 137,
  },
  {
    sno: 11,
    event:
      "Bed cleaning and bed preparation of Vermicompost unit at IIAT farm",
    volunteers: 137,
  },
  {
    sno: 12,
    event:
      "Pledge taking ceremony and prize distribution for National Voters Day speech competition",
    volunteers: 267,
  },
  {
    sno: 13,
    event:
      "National Flag hoisting and solo drill performance for Republic Day 2026 celebration",
    volunteers: 276,
  },
  {
    sno: 14,
    event:
      "Field preparation activities like land measurement for plot layout and bund making by NSS volunteers",
    volunteers: 137,
  },
  {
    sno: 15,
    event: "Weeding of field bunds and nearby building areas",
    volunteers: 130,
  },
  {
    sno: 16,
    event: "Cleaning of hostel and campus premises",
    volunteers: 130,
  },
  {
    sno: 17,
    event: "Weeding and bund correction in Floriculture yard",
    volunteers: 130,
  },
  {
    sno: 18,
    event: "World Biodiversity Day (May 22)",
    volunteers: 268,
  },
  {
    sno: 19,
    event: "World No Tobacco Day – May 31",
    volunteers: 268,
  },
  {
    sno: 20,
    event: "Mass Tree planting – World Environment Day (June 5)",
    volunteers: 128,
  },
  {
    sno: 21,
    event: "Mass Yoga Event – International Day of Yoga (June 21)",
    volunteers: 268,
  },
  {
    sno: 22,
    event: "Blood Donation Camp – National Blood Donor Day",
    volunteers: 137,
  },
];
function NSS() {
  return (
    <PageShell
      eyebrow="Academics"
      title="National Service Scheme"
      subtitle='"Not Me, But You" — Developing student personality through community service.'
      breadcrumbs={[{ label: "Academics" }, { label: "NSS" }]}
    >
      <h2 className="text-2xl font-bold">NSS Activities at IIAT</h2>
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          The National Service Scheme (NSS) at IIAT provides students with opportunities to participate in community service, social awareness and rural development activities. NSS activities help students develop social responsibility, leadership, teamwork and a sense of service to society.
        </p>
      </div>

      <div className="mt-12 max-w-5xl">
        <h2 className="font-display text-2xl font-bold mb-4 text-primary">
          IIAT- NSS Special Camp details
        </h2>

        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">
                  S.No
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  Details
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  Information
                </th>
              </tr>
            </thead>

            <tbody>
              {specialCampTable.map((r) => (
                <tr key={r.sno} className="border-t">
                  <td className="px-4 py-3 font-semibold">
                    {r.sno}
                  </td>

                  <td className="px-4 py-3 font-semibold">
                    {r.detail}
                  </td>

                  <td className="px-4 py-3 text-muted-foreground">
                    {r.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 max-w-5xl">
        <h2 className="font-display text-2xl font-bold mb-4">
          NSS activities at IIAT campus
        </h2>

        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">
                  S. No
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  Name of Events
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  No. of Volunteers Involved
                </th>
              </tr>
            </thead>

            <tbody>
              {nssActivities.map((activity) => (
                <tr key={activity.sno} className="border-t">
                  <td className="px-4 py-3 font-semibold">
                    {activity.sno}
                  </td>

                  <td className="px-4 py-3 text-muted-foreground">
                    {activity.event}
                  </td>

                  <td className="px-4 py-3 text-muted-foreground">
                    {activity.volunteers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4">
        CLEANING THE AREA INFRONT OF THE CAMPUS PREMISES
      </h2>
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          The NSS unit of IIAT organized a comprehensive community work drive in the IV Quarter months of October – December 2025, aimed at enhancing the physical environment of the institution and promoting the dignity of labor among volunteers. The initiative began with an intensive cleaning of the academic and administrative premises. 
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4">
        WEEDING THE PLACES ADJACENT TO THE HOSTEL SURROUNDINGS
      </h2>
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Volunteers were divided into small teams to collect non-biodegradable waste, specifically targeting single-use plastics that had accumulated in corridors and open spaces. Volunteers collected over 20 kilograms of waste, including plastic materials, paper, and non-renewable debris. This phase focused not only on beautification but also on waste segregation, ensuring that recyclable materials were sent to appropriate processing units while institutionalizing a "Zero Waste" culture within the campus.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4">
        SWEEPING AND COLLECTING THE LITTERS IN THE LAWNS OF HOSTEL
      </h2>
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          The drive extended to the hostel premises, where sanitation was prioritized to ensure a healthy living environment for residential students. Volunteers worked systematically to clear the surrounding areas of stagnant water and debris, which are common breeding grounds for seasonal diseases. Beyond simple cleaning, the teams engaged in the deep-scrubbing of common areas and the organization of residential lawns. Intensive cleaning was performed in dining halls and recreational spots to reduce the spread of sickness. This activity served as a practical exercise in community hygiene, encouraging hostellers to take ownership of their living spaces and maintain high standards of cleanliness long after the drive concluded. 
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4">
        UPROOTING THE WEEDS NEARBY THE VOLLEYBALL COURT AND KABBADI PLAYGROUND BY NSS VOLUNTEERS
      </h2>
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Environmental conservation was further addressed through a rigorous weeding program across the campus gardens and playgrounds. Volunteers manually uprooted invasive weeds and thorny bushes that were choking native ornamental plants and depleting soil nutrients. This ecological restoration effort was coupled with the cleaning of drainage channels to prevent water logging. By removing wild overgrowth, the volunteers restored the aesthetic value of the campus green zones and ensured that the primary flora could thrive without competition from aggressive, non-native species.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4">
        HARVESTING THE SWEET CORN CROP IN THE AGRICULTURAL FIELD OF IIAT
      </h2>
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Another phase of the program focused on the agricultural and open fields, where volunteers performed specialized tasks of bund making and crop harvesting. During these activities, volunteers typically participate in the "milk stage" harvest, identifying mature ears by their dark brown or black silks and creamy kernel liquid. Working under the guidance of program officers, students engage in manual harvesting, which involves carefully twisting the cobs. The strenuous process of moving earth and clearing large stones from the fields not only prepared the land for future cultivation but also fostered a deep sense of camaraderie and physical resilience among the NSS volunteers. This holistic approach to community work successfully transformed the campus landscape while instilling vital civic values in the student participants.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4">
        WEEDING THE COCONUT GROVE MAINLY IN THE BUNDS OF THE TREES
      </h2>
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Volunteers conducted a specialized field development program focused on weeding and bunding in local coconut plantations. The primary objective of this activity was to implement sustainable water management and soil conservation practices to enhance crop productivity. Volunteers worked systematically to construct earthen embankments, known as bunds, around the perimeter and between rows of coconut trees. These structures are vital for intercepting surface runoff and preventing the loss of fertile topsoil due to erosion. By slowing down water flow, the bunds allow for better percolation into the soil, significantly improving groundwater recharge and ensuring that the palms have access to adequate moisture even during dry periods. 
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4">
        CLEANING THE SURROUNDINGS OF IIAT CAMPUS
      </h2>
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Demonstrating a strong commitment to environmental civic duty, the NSS unit organized a comprehensive cleanup of the main campus surroundings. Spreading out across major pathways, academic blocks, and open student lounges, the volunteers collected scattered paper cups, plastic wrappers, and dry leaves. The collected waste was properly sorted into biodegradable and non-biodegradable categories to promote sustainable disposal practices on campus. They also cleaned institutional notice boards and peripheral walls to remove old posters and clutter. This large-scale initiative significantly elevated the aesthetic appeal of the institution while instilling a collective sense of cleanliness among the student body.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4">
        WEEDING AND BUND CORRECTION IN FLORICULTURE YARD
      </h2>
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
          The volunteers dedicated their efforts to the intensive maintenance and weeding of the institutional floriculture yard. Invasive weeds and wild grass had begun to choke the ornamental plants, aggressively competing with them for vital soil nutrients, water, and sunlight. Working with precision, the volunteers carefully uprooted these unwanted plants from the root level to prevent rapid regrowth, ensuring the root systems of the delicate flowers remained undamaged. They also loosened the topsoil around the flower beds to improve aeration and water absorption. This focused agricultural care restored the health of the garden, allowing the campus flora to thrive and bloom beautifully.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4">
        CAMPUS CLEANING – HOSTEL AREA
      </h2>
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
	        NSS volunteers launched a thorough sanitation drive in the hostel backyard to eliminate health hazards. The area had accumulated a significant amount of kitchen waste, discarded plastics, and dry organic matter over time. Volunteers systematically segregated the waste, clearing out clogged drains and removing containers holding stagnant water to eliminate mosquito breeding grounds. After clearing the heavy debris, they swept the entire area and applied disinfectants like bleaching powder along the borders. This collective effort transformed a neglected, unhygienic space into a clean, safe, and pleasant backyard for the hostel residents.
        </p>
      </div>

      <h2 className="font-display text-2xl font-bold mb-4">
        CAMPUS CLEANING – PLAYGROUND AREA
      </h2>
      <div className="max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed">
	        The volunteer team undertook the vital task of restoring the campus playground to ensure student safety during sports activities. They conducted a meticulous sweep of the entire field, collecting hazardous items such as broken glass, sharp stones, and rusted metallic waste. In addition to litter removal, the volunteers worked on leveling uneven patches of ground and filling small potholes that posed tripping risks to athletes. By clearing the overgrown wild patches near the boundary lines, they maximized the usable playing area. This rigorous effort successfully revived the sports ground, making it a safe, inviting environment that encourages physical fitness and teamwork.
        </p>
      </div>

      {/* Activity Cards */}
      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-6xl">
        {activities.map((a) => (
          <div key={a.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <a.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-lg font-bold">{a.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{a.text}</p>
          </div>
        ))}
      </div>

      <Gallery />
    </PageShell>
  );
}
