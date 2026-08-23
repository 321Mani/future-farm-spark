import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowRight } from "lucide-react";
import pdf_1 from "@/assets/documents/2017 Syllabus - pdf.pdf";
import pdf_2 from "@/assets/documents/B.Sc (Hons) Agri - English   II Semester 2025 Syllabus.pdf";
import pdf_3 from "@/assets/documents/B.Sc Hons Agri III Sem Syllabus (1).pdf";
import pdf_4 from "@/assets/documents/I semester B.Sc(Hons)Agri 2025 syllabus (4).pdf";
import pdf_5 from "@/assets/documents/Skill Enhancement Course Syllabus (1).pdf";

export const Route = createFileRoute("/academics/course-syllabus")({
  head: () => ({
    meta: [
      { title: "Course & Syllabus — IIAT" },
      { name: "description", content: "Course & Syllabus for the B.Sc (Hons) Agriculture programme at IIAT." },
      { property: "og:title", content: "Course & Syllabus — IIAT" },
      { property: "og:description", content: "TNAU-prescribed examination and evaluation system at IIAT." },
    ],
  }),
  component: ExamPattern,
});

const semester1Courses = [
  {
    sno: 1,
    code: "AGR 101",
    title: "Fundamentals of Agronomy and Agricultural Heritage",
    creditLoad: "1+1",
  },
  {
    sno: 2,
    code: "BIC 101",
    title: "Fundamental of Plant Biochemistry",
    creditLoad: "2+1",
  },
  {
    sno: 3,
    code: "SAC 101",
    title: "Fundamentals of Soil Science",
    creditLoad: "2+1",
  },
  {
    sno: 4,
    code: "FOR 111",
    title: "Introduction to Forestry",
    creditLoad: "1+1",
  },
  {
    sno: 5,
    code: "ENG 101",
    title: "Comprehension & Communication Skills in English",
    creditLoad: "1+1",
  },
  {
    sno: 6,
    code: "HOR 111",
    title: "Fundamentals of Horticulture",
    creditLoad: "1+1",
  },
  {
    sno: 7,
    code: "MAT 111",
    title: "Elementary Mathematics",
    creditLoad: "1+1",
  },
  {
    sno: 8,
    code: "PBG 101",
    title: "Introduction to Agricultural Botany",
    creditLoad: "1+1",
  },
  {
    sno: 9,
    code: "AEX101",
    title: "Rural Sociology & Educational Psychology",
    creditLoad: "2+0",
  },
  {
    sno: 10,
    code: "TAM101/ENG103",
    title: "Development Education",
    creditLoad: "0+1",
  },
  {
    sno: 11,
    code: "NSS/NCC 101",
    title: "NSS/NCC",
    creditLoad: "0+1*",
  },
  {
    sno: 12,
    code: "PED 101",
    title: "Physical Education",
    creditLoad: "0+1*",
  },
  {
    sno: 13,
    code: "PED102",
    title: "Yoga for human excellence",
    creditLoad: "0+1*",
  },
  {
    sno: "",
    code: "",
    title: "*Non-gradial courses compulsory courses",
    creditLoad: "12+9=21",
  },
];

const semester2Courses = [
  {
    sno: 1,
    code: "SWE 112",
    title: "Soil and Water Conservation Engineering",
    creditLoad: "1+1",
  },
  {
    sno: 2,
    code: "CRP 101",
    title: "Fundamentals of crop Physiology",
    creditLoad: "2+1",
  },
  {
    sno: 3,
    code: "AEC 102",
    title: "Fundamentals of Agricultural Economics",
    creditLoad: "1+1",
  },
  {
    sno: 4,
    code: "AGM 101",
    title: "Fundamentals of Microbiology",
    creditLoad: "2+1",
  },
  {
    sno: 5,
    code: "AEX 102",
    title: "Fundamentals of Agricultural Extension Education",
    creditLoad: "2+1",
  },
  {
    sno: 6,
    code: "FSN 111",
    title: "Principles of Food Science and Nutrition",
    creditLoad: "1+1",
  },
  {
    sno: 7,
    code: "AGR 102",
    title: "Introductory Agro-meteorology & Climate Change",
    creditLoad: "1+1",
  },
  {
    sno: 8,
    code: "HOR 112",
    title: "Production Technology for Fruit and Plantation Crops",
    creditLoad: "1+1",
  },
  {
    sno: 9,
    code: "RSG 101",
    title: "Geo-informatics for Precision Farming",
    creditLoad: "1+0",
  },
  {
    sno: 10,
    code: "NSS/NCC 101",
    title: "NSS/NCC",
    creditLoad: "0+1*",
  },
  {
    sno: 11,
    code: "PED 101",
    title: "Physical Education",
    creditLoad: "0+1*",
  },
  {
    sno: "",
    code: "",
    title: "Total",
    creditLoad: "12+8=20",
  },
  {
    sno: "",
    code: "",
    title: "*Non-gradial courses compulsory courses",
    creditLoad: "",
  },
];

const semester3Courses = [
  {
    sno: 1,
    code: "PAT 201",
    title: "Fundamentals of Plant Pathology",
    creditLoad: "2+1",
  },
  {
    sno: 2,
    code: "AEN 201",
    title: "Fundamentals of Entomology",
    creditLoad: "2+1",
  },
  {
    sno: 3,
    code: "SST 201",
    title: "Principles of Seed Technology",
    creditLoad: "2+1",
  },
  {
    sno: 4,
    code: "AGR 201",
    title: "Crop Production Technology – I (Kharif crops)",
    creditLoad: "1+1",
  },
  {
    sno: 5,
    code: "HOR 211",
    title: "Production Technology for Vegetables and Spices",
    creditLoad: "1+1",
  },
  {
    sno: 6,
    code: "ENS 201",
    title: "Environmental Studies & Disaster Management",
    creditLoad: "2+1",
  },
  {
    sno: 7,
    code: "AMP 201",
    title: "Livestock and Poultry Management",
    creditLoad: "2+1",
  },
  {
    sno: 8,
    code: "AEC 201",
    title: "Farm Management, Production & Resource Economics",
    creditLoad: "1+1",
  },
  {
    sno: 9,
    code: "SAC 201",
    title: "Soil Resource Inventory",
    creditLoad: "1+1",
  },
  {
    sno: 10,
    code: "FMP 211",
    title: "Farm Machinery and Power",
    creditLoad: "1+1",
  },
  {
    sno: 11,
    code: "AGR 202",
    title: "Study tour",
    creditLoad: "0+1*",
  },
  {
    sno: 12,
    code: "NSS/NCC 101",
    title: "NSS/NCC",
    creditLoad: "0+1*",
  },
  {
    sno: 13,
    code: "PED 101",
    title: "Physical Education",
    creditLoad: "0+1*",
  },
  {
    sno: "",
    code: "",
    title: "Total",
    creditLoad: "15+10=25",
  },
  {
    sno: "",
    code: "",
    title: "*Non-gradial courses compulsory courses",
    creditLoad: "",
  },
];

const semester4Courses = [
  {
    sno: 1,
    code: "PBG 201",
    title: "Fundamentals of Genetics",
    creditLoad: "2+1",
  },
  {
    sno: 2,
    code: "AEX 201",
    title: "Communication Skills and Personality Development",
    creditLoad: "1+1",
  },
  {
    sno: 3,
    code: "STA 211",
    title: "Statistical Methods",
    creditLoad: "1+1",
  },
  {
    sno: 4,
    code: "PAT 202",
    title: "Principles of integrated plant disease management",
    creditLoad: "1+1",
  },
  {
    sno: 5,
    code: "AEN 202",
    title: "Management of beneficial and harmful insects",
    creditLoad: "2+1",
  },
  {
    sno: 6,
    code: "AGR 203",
    title: "Crop Production Technology – II (Rabi crops)",
    creditLoad: "1+1",
  },
  {
    sno: 7,
    code: "AGR 204",
    title: "Farming System & Sustainable Agriculture",
    creditLoad: "1+1",
  },
  {
    sno: 8,
    code: "SAC 202",
    title: "Problematic soils and their management",
    creditLoad: "2+0",
  },
  {
    sno: 9,
    code: "HOR 212",
    title: "Production Technology for Ornamental Crops, MAP and Landscaping",
    creditLoad: "1+1",
  },
  {
    sno: 10,
    code: "ANM 201",
    title: "Introductory Nematology",
    creditLoad: "0+1",
  },
  {
    sno: 11,
    code: "NST 201",
    title: "Fundamentals and Applications of nanotechnology",
    creditLoad: "1+0",
  },
  {
    sno: 12,
    code: "ERG 211",
    title: "Renewable Energy and green technology",
    creditLoad: "1+1",
  },
  {
    sno: 12,
    code: "NSS/NCC 101",
    title: "NSS/NCC",
    creditLoad: "0+1*",
  },
  {
    sno: 13,
    code: "PED 101",
    title: "Physical Education",
    creditLoad: "0+1*",
  },
  {
    sno: "",
    code: "",
    title: "Total",
    creditLoad: "14+10=24",
  },
  {
    sno: "",
    code: "",
    title: "*Non-gradial courses compulsory courses",
    creditLoad: "",
  },
];

const semester5Courses = [
  {
    sno: 1,
    code: "PBG 301",
    title: "Fundamentals of Plant Breeding",
    creditLoad: "2+1",
  },
  {
    sno: 2,
    code: "AEC 301",
    title: "Agricultural Marketing Trade & Prices",
    creditLoad: "2+1",
  },
  {
    sno: 3,
    code: "AGM 301",
    title: "Agricultural Microbiology",
    creditLoad: "1+1",
  },
  {
    sno: 4,
    code: "PAT 301",
    title: "Diseases of Field and Horticultural crops and their management - I",
    creditLoad: "1+1",
  },
  {
    sno: 5,
    code: "ARM 301",
    title: "Entrepreneurship Development and Business Communication Management",
    creditLoad: "1+1",
  },
  {
    sno: 6,
    code: "AGR 301",
    title: "Practical Crop Production - I (Kharif crops)",
    creditLoad: "0+2",
  },
  {
    sno: 7,
    code: "HOR 311",
    title: "Post harvest management and value addition of fruits and vegetable crops",
    creditLoad: "1+1",
  },
  {
    sno: 8,
    code: "SAC 301",
    title: "Manures, Fertilizers and Soil Fertility Management",
    creditLoad: "2+1",
  },
  {
    sno: 9,
    code: "APE 311",
    title: "Protected Cultivation and Secondary Agriculture",
    creditLoad: "1+1",
  },
  {
    sno: 10,
    code: "AGR 302",
    title: "Rainfed Agriculture & Watershed Management",
    creditLoad: "1+1",
  },
  {
    sno: 11,
    code: "AEN 301",
    title: "Pests of Field crops and stored produces and their management",
    creditLoad: "1+1",
  },
  {
    sno: 11,
    code: "NCC 101",
    title: "NCC*",
    creditLoad: "",
  },
  {
    sno: "",
    code: "",
    title: "Total",
    creditLoad: "13+12=25",
  },
  {
    sno: "",
    code: "",
    title: "*Non-gradial courses compulsory courses",
    creditLoad: "",
  },
];

const semester6Courses = [
  {
    sno: 1,
    code: "AEC 302",
    title: "Agricultural Finance and Co-Operation",
    creditLoad: "2+1",
  },
  {
    sno: 2,
    code: "PAT 302",
    title: "Diseases of Field and Horticultural crops and their management -II",
    creditLoad: "2+1",
  },
  {
    sno: 3,
    code: "COM 311",
    title: "Agro Informatics",
    creditLoad: "1+1",
  },
  {
    sno: 4,
    code: "ENS 301",
    title: "Environmental Pollution and Management",
    creditLoad: "1+1",
  },
  {
    sno: 5,
    code: "AEN 301",
    title: "Pests of Crops and Stored grain and their Management",
    creditLoad: "2+1",
  },
  {
    sno: 6,
    code: "AGR 303",
    title: "Practical Crop Production - II (Rabi crops)",
    creditLoad: "0+2",
  },
  {
    sno: 7,
    code: "AGR 304",
    title: "Principles of organic Farming",
    creditLoad: "1+1",
  },
  {
    sno: 8,
    code: "ABT 301",
    title: "Plant Bio technology",
    creditLoad: "2+1",
  },
  {
    sno: 9,
    code: "PBG 302",
    title: "Crop Improvement",
    creditLoad: "2+1",
  },
  {
    sno: 10,
    code: "OPT 301",
    title: "Optional course",
    creditLoad: "1+1",
  },
  {
    sno: 11,
    code: "NCC 101",
    title: "NCC*",
    creditLoad: "",
  },
  {
    sno: "",
    code: "",
    title: "Total",
    creditLoad: "13+11=24",
  },
  {
    sno: "",
    code: "",
    title: "*Non-gradial courses compulsory courses",
    creditLoad: "",
  },
];

const semester7Courses = [
  {
    sno: 1,
    code: "AEX 401",
    title: "Student READY programme (Rural Agricultural Work Experience and Agro-industrial Attachment)",
    creditLoad: "0+20",
  },
  {
    sno: 2,
    code: "AGR 401",
    title: "Project Report Preparation, presentation and Evaluation",
    creditLoad: "0+1",
  },
  {
    sno: 3,
    code: "AEX 402",
    title: "All India Study Tour*",
    creditLoad: "0+1",
  },
  {
    sno: "",
    code: "",
    title: "Non gradial compulsory",
    creditLoad: "",
  },
];

const experientialLearningModules = [
  {
    sno: 1,
    code: "AGM 451",
    title: "Bio-inoculant production technology",
    credits: "0+10",
  },
  {
    sno: 2,
    code: "HOR 451",
    title: "Hybrid Seed Production in Vegetable Crops",
    credits: "0+10",
  },
  {
    sno: 3,
    code: "SAC 451",
    title: "On Farm Advisory for Soil Health, Water Quality & Plant Nutrition",
    credits: "0+10",
  },
  {
    sno: 4,
    code: "AEN 451",
    title: "Commercial Beekeeping",
    credits: "0+10",
  },
  {
    sno: 5,
    code: "SER 451",
    title: "Commercial Cocoon Production",
    credits: "0+10",
  },
  {
    sno: 6,
    code: "ABT 451",
    title: "Commercial Plant Tissue Culture",
    credits: "0+10",
  },
  {
    sno: 7,
    code: "HOR 452",
    title: "Commercial Nursery Technology of Horticultural Crops",
    credits: "0+10",
  },
  {
    sno: 8,
    code: "HOR 453",
    title: "Commercial Landscape Gardening",
    credits: "0+10",
  },
  {
    sno: 9,
    code: "PAT 451",
    title: "Commercial production of Bio-control agents",
    credits: "0+10",
  },
  {
    sno: 10,
    code: "PAT 452",
    title: "Commercial mushroom production",
    credits: "0+10",
  },
  {
    sno: 11,
    code: "AMP 451",
    title: "Commercial broiler and layer production",
    credits: "0+10",
  },
  {
    sno: 12,
    code: "SST 451",
    title: "Commercial seed production",
    credits: "0+10",
  },
  {
    sno: 13,
    code: "PBG 451",
    title: "Hybrid pearl millet seed production",
    credits: "0+10",
  },
  {
    sno: 14,
    code: "PBG 452",
    title: "Hybrid rice parental line seed production",
    credits: "0+10",
  },
  {
    sno: 15,
    code: "ARM 451",
    title: "Managerial skills for Agribusiness",
    credits: "0+10",
  },
  {
    sno: 16,
    code: "AGR 451",
    title: "Development of Integrated Farming system Model",
    credits: "0+10",
  },
  {
    sno: 17,
    code: "HOR 454",
    title: "Protected cultivation of Vegetable crops",
    credits: "0+10",
  },
  {
    sno: 18,
    code: "ENS 451",
    title: "Composting technology",
    credits: "0+10",
  },
  {
    sno: 19,
    code: "AGR 452",
    title: "Organic Agriculture",
    credits: "0+10",
  },
];

const experientialLearningSummary = [
  {
    sno: "1",
    module: "Module-I",
    creditHours: "0+10",
  },
  {
    sno: "2",
    module: "Module-II",
    creditHours: "0+10",
  },
  {
    sno: "3",
    module: "Total",
    creditHours: "0+20",
  },
];

function Cell({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <span key={i} className="block">{line}</span>
      ))}
    </>
  );
}

function ExamPattern() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Course & Syllabus"
      subtitle="The Examination pattern for the B.Sc (Hons) Agriculture programme at IIAT."
      breadcrumbs={[{ label: "Academics" }, { label: "Course & Syllabus" }]}
    >

      <div className="mt-12 max-w-5xl">
        <h2 className="font-display text-2xl text-primary font-bold mb-4">B.Sc (Hons.) Agriculture  - 2017 SYLLABUS</h2>
        <h3 className="font-display text-lg font-bold mt-4 text-foreground mb-3">I SEMESTER</h3>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Mid Semester</th>
                <th className="px-4 py-3 text-left font-semibold" colSpan={2}>Final Theory</th>
                <th className="px-4 py-3 text-left font-semibold">Practical</th>
                <th className="px-4 py-3 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {semester1Courses.map((r) => (
                <tr key={r.sno} className="border-t align-top">
                  <td className="px-4 py-3 text-muted-foreground">{r.sno}</td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.code} /></td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.title} /></td>
                  <td className="px-4 py-3 font-semibold">{r.creditLoad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-display text-lg font-bold mt-4 text-foreground mb-3">II SEMESTER</h3>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Mid Semester</th>
                <th className="px-4 py-3 text-left font-semibold" colSpan={2}>Final Theory</th>
                <th className="px-4 py-3 text-left font-semibold">Practical</th>
                <th className="px-4 py-3 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {semester2Courses.map((r) => (
                <tr key={r.sno} className="border-t align-top">
                  <td className="px-4 py-3 text-muted-foreground">{r.sno}</td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.code} /></td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.title} /></td>
                  <td className="px-4 py-3 font-semibold">{r.creditLoad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-display text-lg font-bold mt-4 text-foreground mb-3">III SEMESTER</h3>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Mid Semester</th>
                <th className="px-4 py-3 text-left font-semibold" colSpan={2}>Final Theory</th>
                <th className="px-4 py-3 text-left font-semibold">Practical</th>
                <th className="px-4 py-3 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {semester3Courses.map((r) => (
                <tr key={r.sno} className="border-t align-top">
                  <td className="px-4 py-3 text-muted-foreground">{r.sno}</td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.code} /></td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.title} /></td>
                  <td className="px-4 py-3 font-semibold">{r.creditLoad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-display text-lg font-bold mt-4 text-foreground mb-3">IV SEMESTER</h3>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Mid Semester</th>
                <th className="px-4 py-3 text-left font-semibold" colSpan={2}>Final Theory</th>
                <th className="px-4 py-3 text-left font-semibold">Practical</th>
                <th className="px-4 py-3 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {semester4Courses.map((r) => (
                <tr key={r.sno} className="border-t align-top">
                  <td className="px-4 py-3 text-muted-foreground">{r.sno}</td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.code} /></td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.title} /></td>
                  <td className="px-4 py-3 font-semibold">{r.creditLoad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-display text-lg font-bold mt-4 text-foreground mb-3">V SEMESTER</h3>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Mid Semester</th>
                <th className="px-4 py-3 text-left font-semibold" colSpan={2}>Final Theory</th>
                <th className="px-4 py-3 text-left font-semibold">Practical</th>
                <th className="px-4 py-3 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {semester5Courses.map((r) => (
                <tr key={r.sno} className="border-t align-top">
                  <td className="px-4 py-3 text-muted-foreground">{r.sno}</td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.code} /></td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.title} /></td>
                  <td className="px-4 py-3 font-semibold">{r.creditLoad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-display text-lg font-bold mt-4 text-foreground mb-3">VI SEMESTER</h3>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Mid Semester</th>
                <th className="px-4 py-3 text-left font-semibold" colSpan={2}>Final Theory</th>
                <th className="px-4 py-3 text-left font-semibold">Practical</th>
                <th className="px-4 py-3 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {semester6Courses.map((r) => (
                <tr key={r.sno} className="border-t align-top">
                  <td className="px-4 py-3 text-muted-foreground">{r.sno}</td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.code} /></td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.title} /></td>
                  <td className="px-4 py-3 font-semibold">{r.creditLoad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-display text-lg font-bold mt-4 text-foreground mb-3">VI SEMESTER</h3>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Mid Semester</th>
                <th className="px-4 py-3 text-left font-semibold" colSpan={2}>Final Theory</th>
                <th className="px-4 py-3 text-left font-semibold">Practical</th>
                <th className="px-4 py-3 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {semester6Courses.map((r) => (
                <tr key={r.sno} className="border-t align-top">
                  <td className="px-4 py-3 text-muted-foreground">{r.sno}</td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.code} /></td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.title} /></td>
                  <td className="px-4 py-3 font-semibold">{r.creditLoad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-display text-lg font-bold mt-4 text-foreground mb-3">VII SEMESTER</h3>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Mid Semester</th>
                <th className="px-4 py-3 text-left font-semibold" colSpan={2}>Final Theory</th>
                <th className="px-4 py-3 text-left font-semibold">Practical</th>
                <th className="px-4 py-3 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {semester7Courses.map((r) => (
                <tr key={r.sno} className="border-t align-top">
                  <td className="px-4 py-3 text-muted-foreground">{r.sno}</td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.code} /></td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.title} /></td>
                  <td className="px-4 py-3 font-semibold">{r.creditLoad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-display text-lg font-bold mt-4 text-foreground mb-3">Experiential Learning Programme/ HOT</h3>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Sno</th>
                <th className="px-4 py-3 text-left font-semibold">Module</th>
                <th className="px-4 py-3 text-left font-semibold">Credit Hrs.</th>
              </tr>
            </thead>
            <tbody>
              {experientialLearningSummary.map((r) => (
                <tr key={r.sno} className="border-t align-top">
                  <td className="px-4 py-3 text-muted-foreground">{r.sno}</td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.module} /></td>
                  <td className="px-4 py-3 font-semibold">{r.creditHours}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="w-full text-sm mt-6">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Mid Semester</th>
                <th className="px-4 py-3 text-left font-semibold" colSpan={2}>Final Theory</th>
                <th className="px-4 py-3 text-left font-semibold">Practical</th>
                <th className="px-4 py-3 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {experientialLearningModules.map((r) => (
                <tr key={r.sno} className="border-t align-top">
                  <td className="px-4 py-3 text-muted-foreground">{r.sno}</td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.code} /></td>
                  <td className="px-4 py-3 text-muted-foreground"><Cell text={r.title} /></td>
                  <td className="px-4 py-3 font-semibold">{r.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      
      <h2 className="font-display text-2xl font-bold mt-8">Course & Syllabus Documents</h2>
      <a
        href={pdf_1}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm mt-8 font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow self-start lg:self-auto"
      >
        2017 Syllabus - pdf <ArrowRight className="h-4 w-4" />
      </a>
      <a
        href={pdf_2}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm mt-8 font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow self-start lg:self-auto"
      >
        B.Sc (Hons) Agri - English   II Semester 2025 Syllabus <ArrowRight className="h-4 w-4" />
      </a>
      <a
        href={pdf_3}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm mt-8 font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow self-start lg:self-auto"
      >
        B.Sc Hons Agri III Sem Syllabus (1) <ArrowRight className="h-4 w-4" />
      </a>
      <a
        href={pdf_4}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm mt-8 font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow self-start lg:self-auto"
      >
        I semester B.Sc(Hons)Agri 2025 syllabus (4) <ArrowRight className="h-4 w-4" />
      </a>
      <a
        href={pdf_5}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm mt-8 font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow self-start lg:self-auto"
      >
        Skill Enhancement Course Syllabus (1) <ArrowRight className="h-4 w-4" />
      </a>
    </PageShell>
  );
}
