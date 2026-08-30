import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Apple, Tent, Droplets, Flower2, Salad, Trees, Leaf } from "lucide-react";
import { Gallery } from "@/components/site/Gallery_horti";

export const Route = createFileRoute("/farms/horticulture")({
  head: () => ({
    meta: [
      { title: "Horticulture Farm — Orchard & Herbal Garden | IIAT" },
      {
        name: "description",
        content:
          "IIAT Horticulture Farm — tropical, subtropical, temperate, arid and semi-arid orchard crops plus a 2.5-acre herbal garden with around 55 medicinal and aromatic plants.",
      },
      { property: "og:title", content: "Horticulture Farm — IIAT" },
      {
        property: "og:description",
        content: "Orchard crop resources and a 2.5-acre herbal garden for hands-on horticulture learning at IIAT.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HorticultureFarmPage,
});

const orchardGroups = [
  {
    title: "1. Tropical fruit crops",
    crops: ["Mango", "Banana", "Papaya", "Guava", "Sapota (Chikoo)", "Jackfruit", "Coconut", "Cashew", "Jamun"],
  },
  {
    title: "2. Subtropical fruit crops",
    crops: ["Sweet orange", "Mandarin", "Acid lime", "Litchi", "Loquat", "Mango", "Low-chilling peach"],
  },
  { title: "3. Temperate fruit crops", crops: ["Apple", "Pear", "Peach", "Plum"] },
  { title: "4. Arid fruit crops", crops: ["Ber", "Date palm", "Aonla", "Bael", "Fig", "Karonda"] },
  { title: "5. Semi-arid fruit crops", crops: ["Pomegranate", "Ber", "Aonla", "Wood apple", "Tamarind"] },
];

const herbs: [string, string, string][] = [
  ["ALOE VERA", "சோற்றுக்கற்றாழை", "Aloe barbadensis"],
  ["MEDICINAL COLEUS", "மருந்து கூர்க்கன்", "Coleus forskholii Briq"],
  ["HOLY BASIL", "துளசி", "Ocimum sanctum L."],
  ["NONI", "வெண் நுணா", "Morinda citrifolia"],
  ["KARUNOTCHI", "கருநொச்சி", "Vitex negundo"],
  ["SIRIYANANKAI", "சிறியாநங்கை", "Andrographis paniculata"],
  ["ADHATODA", "ஆடாதோடை", "Adhatoda vasica"],
  ["PERIWINKLE", "நித்தியகல்யாணி", "Catharanthus roseus"],
  ["ASHWAGANDHA", "அமுக்கரா கிழங்கு", "Withania somnifera"],
  ["PIRANDAI", "பிரண்டை", "Cissus quadrangularis"],
  ["GYMNEMA", "சிறுகுறிஞ்சான்", "Gymnema sylvestre"],
  ["NIR NOCHI", "நீர் நொச்சி", "Vitex trifolia"],
  ["PODUTHALAI", "பொடுதலை", "Phyla nodiflora L."],
  ["INSULIN PLANT", "நீரிழிவு இலை", "Costus igneus"],
  ["THUTHUVALAI", "தூதுவளை", "Solanum trilobatum"],
  ["LEMON GRASS", "எலுமிச்சை புல்", "Cymbopogon flexuosus"],
  ["VETIVER", "வெட்டிவேர்", "Vetiveria zizaniodies"],
  ["BHUMYAMALAKI", "கீழாநெல்லி", "Phyllanthus amarus"],
  ["BRAHMI", "நீர்ப்பிரமி", "Bacopa monnieri"],
  ["BRINGARAJ", "கரிசலாங்கண்ணி", "Eclipta alba"],
  ["DATURA", "ஊமத்தை செடி", "Datura spp."],
  ["INDIAN PENNYWORT", "வல்லாரை", "Centella asiatica"],
  ["LONG PEPPER", "திப்பிலி", "Piper longum Lin."],
  ["SENNA", "அவுரி", "Cassia angustifolia Vahl."],
  ["STEVIA", "சீனித்துளசி", "Stevia rebaudiana"],
  ["SWEET FLAG", "வசம்பு", "Acorus calamus"],
  ["DAVANA", "தவணம்", "Artemisia pallens"],
  ["MINT", "புதினா", "Mentha arvensis"],
  ["LIFE PLANT", "ரணகள்ளி", "Kalanchoe pinnata"],
  ["BRACTEATED BARTHWORT", "ஆடுதீண்டாப்பாளை", "Aristolochia bracteolate"],
  ["LARK DAISY", "கேசவர்த்தினி", "Centratherum punctatum"],
  ["INDIAN SARSAPARILLA", "நன்னாரி", "Hemidesmus indicus"],
  ["GUDUCHI", "சீந்தில் கொடி", "Tinospora cordifolia"],
  ["SWEET BROOM", "சர்க்கரை வேம்பு", "Scoparia dulcis"],
  ["MULTI VITAMIN PLANT", "தவசி கீரை", "Sauropus androgynus"],
  ["DAYAK ONION", "—", "Eleutherine bulbosa"],
  ["RED STEMMED BETELWINE", "வெற்றிலைக் கொடி", "Piper betle L."],
  ["TURKS TURBAN", "தழுதழை", "Clerodendrum indicum"],
  ["WILD SNAKE ROOT", "பாம்பு காலா", "Rauvolfia tetraphylla"],
  ["SCOPARIA WEED", "சர்க்கரை வேம்பு", "Scoparia dulcis"],
  ["CROWN FLOWER PLANT", "வெள்ளெருக்கு", "Calotropis gigantean"],
  ["LESSER GALANGAL", "சித்தரத்தை", "Alpinia officinarum"],
  ["MIRACLE SANGEEVI", "சஞ்சீவி மூலிகை", "Selaginella bryopteris"],
  ["HENNA", "மருதாணி", "Lawsonia inermis"],
  ["THREE LEAVED CHASTE TREE", "மூவிலை நொச்சி", "Vitex trifolia"],
  ["DATURA", "ஊமத்தை", "Datura stramonium"],
];

const units = [
  
  { icon: Tent, title: "Shade Net House", text: "The shade net facility provides hands-on training for B.Sc. (Hons.) Agriculture and Horticulture students in protected cultivation. Students gain practical knowledge of nursery management, seed sowing, seedling production, irrigation, fertigation, temperature and humidity management, pest and disease control, plant growth monitoring, hardening of seedlings, and transplanting techniques." },
  
  { icon: Droplets, title: "Mist Chamber", text: "The mist chamber is used in horticulture for the rapid propagation and production of healthy plants through cuttings, grafting, budding, and tissue-culture hardening. It maintains suitable humidity and temperature, reduces moisture loss, and promotes faster root and shoot development. It provides valuable hands-on training for B.Sc. (Hons.) Agriculture and Horticulture students in plant propagation and nursery management." },
    
  { icon: Flower2, title: "Vegetable Unit", text: "Vegetable crop resources provide practical knowledge in identifying and cultivating solanaceous vegetables, cucurbits, peas and beans, cole crops, bulb crops, root crops, tuber crops, pot herbs and greens, salad crops, and perennial vegetables, supporting B.Sc. (Hons.) Agriculture and Horticulture students, farmers, and researchers in learning crop identification, propagation, planting, irrigation, nutrient management, pest and disease management, harvesting, and post-harvest practices.." },

  { icon: Flower2, title: "Florticulture Garden", text: "The garden can serve as a practical learning facility where students gain hands-on experience in the identification, cultivation, propagation, management, and landscaping of important ornamental and flowering plants. It can also provide exposure to nursery techniques, planting designs, seasonal flower production, and sustainable garden management." },
  
  { icon: Salad, title: "Kitchen Garden", text: "Tomato, brinjal, chillies, bhendi, cluster bean and green leafy vegetables are raised year-round to teach vegetable production techniques and support family-level nutritional security." },
  
  { icon: Trees, title: "Botanical Garden", text: "Collection and maintenance of various ornamental plants and tree species for educational and recreational purposes." },
  
];

function HorticultureFarmPage() {
  return (
    <PageShell
      eyebrow="Farms"
      title="Horticulture Farm"
      subtitle="Orchard crop resources and a 2.5-acre herbal garden for hands-on horticultural learning."
      breadcrumbs={[{ label: "Farms" }, { label: "Horticulture Farm" }]}
    >
      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
            <Apple className="h-6 w-6" />
          </div>
          <h2 className="font-display text-2xl font-bold">Orchard</h2>
        </div>
        <p className="max-w-4xl text-foreground/80 leading-relaxed">
          IIAT's orchard crop resources provide practical knowledge on identifying and cultivating
          tropical, subtropical, temperate, arid, and semi-arid fruit crops, helping B.Sc. (Hons.)
          Agriculture and Horticulture students, farmers, and researchers learn crop identification,
          propagation, planting, irrigation, nutrient management, pruning, pest and disease control,
          harvesting, and post-harvest practices.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {orchardGroups.map((g) => (
            <div key={g.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
              <h3 className="font-display text-lg font-bold">{g.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.crops.map((c) => (
                  <li
                    key={c}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
            <Leaf className="h-6 w-6" />
          </div>
          <h2 className="font-display text-2xl font-bold">Herbal Garden</h2>
        </div>
        <p className="max-w-4xl text-foreground/80 leading-relaxed">
          The IIAT Herbal Garden, extending over an area of 2.5 acres, is a treasure trove of
          medicinal and aromatic plants with valuable healing properties. Around 55 medicinal and
          aromatic crops are grown in the garden. The herbal garden contains descriptive labels
          displaying the botanical names, vernacular names, and medicinal uses of the plants in human
          beings. The garden serves as a rich source of knowledge for students, providing them with
          practical exposure to a wide variety of medicinal plants. The list of medicinal plants is
          given below.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border bg-card shadow-soft">
          <table className="w-full text-sm">
            <thead className="bg-primary/10 text-foreground">
              <tr>
                <th className="text-left p-4 font-semibold">S. No.</th>
                <th className="text-left p-4 font-semibold">Common / English Name</th>
                <th className="text-left p-4 font-semibold">Tamil Name</th>
                <th className="text-left p-4 font-semibold">Scientific Name</th>
              </tr>
            </thead>
            <tbody>
              {herbs.map(([en, ta, sci], i) => (
                <tr key={`${en}-${i}`} className="border-t">
                  <td className="p-4">{i + 1}</td>
                  <td className="p-4 font-medium">{en}</td>
                  <td className="p-4">{ta}</td>
                  <td className="p-4 italic text-muted-foreground">{sci}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {units.map((u) => (
            <div key={u.title} className="rounded-2xl border bg-card p-6 shadow-soft hover:shadow-glow transition-all">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
                <u.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Gallery />
    </PageShell>
  );
}
