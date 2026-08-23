import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowRight } from "lucide-react";
import exam_pattern_pdf from "@/assets/documents/Exam-Rules-and-Pattern.pdf";

export const Route = createFileRoute("/academics/exam-pattern")({
  head: () => ({
    meta: [
      { title: "Exam Pattern — IIAT" },
      { name: "description", content: "Examination pattern, duration, question pattern and reappearance / improvement rules for the B.Sc (Hons) Agriculture programme at IIAT." },
      { property: "og:title", content: "Exam Pattern — IIAT" },
      { property: "og:description", content: "TNAU-prescribed examination and evaluation system at IIAT." },
    ],
  }),
  component: ExamPattern,
});

const sections: { title: string; body: string }[] = [
  {
    title: "Mid Semester Examination",
    body: "The mid-semester examinations are conducted in the regular classes. The mid-semester mark list shall reach the office of the Controller of Examinations within fifteen days from the date of conduct of the mid-semester examination.",
  },
  {
    title: "Missing Examination",
    body: "There will be no missing tests for mid-semester examinations from the ensuing semester onwards. If absent for the mid-semester examination, the student will be awarded \u201C0\u201D marks for mid-semester. However, the student is permitted to continue attending the classes and write the final practical and final theory examinations.",
  },
  {
    title: "Theory Examination",
    body: "The final theory examinations are conducted outside the working days of the semester. An examination schedule approved by the Dean and the Controller of Examinations for the mid-semester and final examinations, respectively, shall be final. Mess dues should be cleared before final theory exams and a clearance certificate must be produced for receiving hall tickets.",
  },
  {
    title: "Practical Examination",
    body: "The practical examination is conducted on the last practical class. The Dean of Colleges announces the schedule of final practical examinations. The Controller of Examinations, based on the proposal sent by the Deans concerned, will nominate and approve the external examiner and the course teacher shall be the internal examiner. For affiliated colleges, external examiners are nominated by the Controller of Examinations. Submission of bona fide practical records certified by the Course Teacher is a pre-requisite for appearing in the practical examination, failing which an \u2018F\u2019 grade will be awarded. The duration of the practical examination shall be two and a half hours and marks must be communicated to the Controller of Examinations within 10 days of the last working day of the semester.",
  },
  {
    title: "Guidelines",
    body: "Wherever experiments, identification or case studies are not possible as per course curricula, the question pattern may be modified by the Course Teacher (Internal examiner) and the pattern shall be well informed to students in advance before the exam. The same will be informed to the External Examiner before the start of the practical examination. If a student fails to write the Practical Examination, an \u2018F\u2019 grade is awarded and the student has to appear for the reappearance practical examination.",
  },
  {
    title: "Postponement of Final Examination",
    body: "Whenever the Government declares holidays on the dates of final examinations or under exigencies, the examination that falls on the particular date will be postponed to the date after the last examination of the original schedule. Changes, if any, will be notified by the Controller of Examinations, TNAU.",
  },
  {
    title: "Re-Appearance and Improvement",
    body: "Students are permitted to write the re-appearance examination as and when conducted with the permission of the Deans of Colleges. A re-appearance fee of Rs. 500/- per exam is to be paid online on or before the prescribed date.",
  },
  {
    title: "Reappearance Exam",
    body: "A student may write either theory or practical examination alone or both in the reappearance examination for failed subjects. Reappearance may be attempted any number of times within n+4 years duration excluding the regular final examination. Registration is done on the date specified by the Controller of Examinations and each registration is considered an attempt even if the student is absent. Marks obtained in the latest theory / practical examination will be retained for processing of results. Re-appearance exams are conducted only with Multiple Choice Questions (MCQ) in OMR mode. Reappearance is applicable to industry and institutional educational tours, RAWE, agro-industrial tie-up programmes, crop production and non-gradial compulsory courses if the student has hundred percent attendance.",
  },
  {
    title: "Improvement Exam",
    body: "A student with an OGPA of less than 6.50 is eligible to write the improvement examination. It is permitted for both final theory and practical and the student must write both. The original marks secured in the mid-term exam are retained. The Improvement Examination is taken along with the final semester exams of junior batches. If a student fails to secure a higher grade point, the higher grade point secured in the regular examination is taken for grading. Improvement examination is not applicable to industry and institutional educational tours, RAWE, agro-industrial tie-up programmes and crop production. Students opting for improvement must also take up the concerned reappearance examination by registering and paying the applicable fee.",
  },
  {
    title: "Skipping of Course(s) and Semester",
    body: "Skipping of course(s) and semester is not permitted in any case. If the student fails to accomplish the residential requirement of course(s) in a semester, he/she is not permitted to continue the subsequent semester(s). However, if a student is awarded \u201CE\u201D grade only in one course (1+1/2+1/1+0/2+0/1+2) in the preceding semester, he/she may be permitted to register the course in the next/subsequent semester when offered for the juniors, along with other courses, provided the maximum permissible credit load of 27 is not exceeded. This pattern is permitted till the end of fourth semester, after which all pending courses must be completed before proceeding. Students with pending courses of fifth and sixth semester may be permitted to continue seventh semester (subject to no change in RAWE, tour, and project work) and register pending courses in the VIII semester not exceeding 27 credits, following the 105 working days pattern.",
  },
  {
    title: "Pass Requirements & Revaluation",
    body: "The minimum Grade Point to be secured for a pass in a course is 6.00 out of 10.00, a total of 60 marks out of 100. Students who fail and want to apply for revaluation are permitted only if the required mark falls within 10% of the final theory mark (4 marks for 2+1/1+1 courses and 6 marks for 2+0/1+0 courses); if more than 10%, they may apply only for retotalling with the same fee. Only failed students are eligible for revaluation of the final theory answer script. A maximum grace mark of 1.0, applicable to both theory and practical, is awarded if required to pass an examination, provided the student secured 50% in both theory and practical separately. A student must maintain a minimum OGPA of 6.50 out of 10.00 and pass all courses and complete credit requirements as per the applicable syllabus at the end of the final year (8th semester) to become eligible for the award of degree.",
  },
];

const withPractical = [
  {
    mid: "20 Marks (Objectives) (OMR/MCQ)\n40 × 0.5 = 20 Marks",
    theory: "40 Marks (Descriptive)\nPART A: 1 Mark (10/12 Questions)\nPART B: 2 Marks (5/6 Questions)\nPART C: 5 Marks (4/5 Questions)",
    split: "10 × 1 = 10\n5 × 2 = 10\n4 × 5 = 20",
    prac: "40",
    total: "100",
  },
];
const withoutPractical = [
  {
    mid: "20 Marks (Objectives) (45 minutes) (OMR/MCQ)\n40 × 0.5 = 20 Marks",
    theory: "80 Marks (Descriptive) (3 hours)\nPART A: 2 Marks (11/13 Questions)\nPART B: 4 Marks (7/9 Questions)\nPART C: 6 Marks (5/6 Questions)",
    split: "11 × 2 = 22\n7 × 4 = 28\n5 × 6 = 30",
    prac: "\u2013",
    total: "100",
  },
];

const cropMidTerm = [
  { p: "Crop stand and population", m: "5" },
  { p: "Field / Observation note book", m: "5" },
  { p: "Assignment (1 No.)", m: "5" },
  { p: "Viva-voce", m: "5" },
  { p: "Total", m: "20" },
];

const cropFinal = [
  { no: "1.", p: "Attendance", r: "Minimum of 80%", m: "Pre-requisite for writing the final practical examination" },
  { no: "2.", p: "Record (Evaluated by course teacher)", r: "Continuous evaluation", m: "5 marks" },
  { no: "3.", p: "Field Evaluation \u2013 45 marks (Evaluated by Course Teacher)", r: "If crop NOT harvested: Cropping Area (min. 5 cents) \u2013 5; Population \u2013 10; Insect, Disease and Weed control \u2013 10; Crop stand at harvest stage \u2013 20. (or) If crop harvested: Cropping Area (min. 5 cents) \u2013 5; Population maintenance \u2013 15; Yield \u2013 25", m: "45 marks" },
  { no: "4.", p: "Written test (Evaluated by external examiner)", r: "i. Short notes \u2013 10 marks; ii. Calculation \u2013 10 marks", m: "20 marks" },
  { no: "5.", p: "Viva-voce (Evaluated by external examiner)", r: "Minimum of 10 questions", m: "10 marks" },
  { no: "", p: "Total", r: "", m: "80 marks" },
];

const fieldMidTerm = [
  { p: "Field Evaluation (Identification, specimen collection etc.)", m: "10 (internal examiner)" },
  { p: "Assignment (1 No.)", m: "5 (internal examiner)" },
  { p: "Viva-voce", m: "5" },
  { p: "Total", m: "20" },
];

const fieldFinal = [
  { no: "1.", p: "Attendance", r: "Minimum of 80% separately in theory and practical", m: "Pre-requisite for the final practical examination (internal examiner)" },
  { no: "2.", p: "Record", r: "Continuous evaluation", m: "5 marks (internal examiner)" },
  { no: "3.", p: "Assignment (2 Nos.)", r: "A. Presentation / comprehension; B. Written part (no web page copying, hand written, min. two book references); C. Answering the questions", m: "5 + 10 marks (internal) and 5 marks (external)" },
  { no: "4.", p: "Written Part / Field Evaluation", r: "i. Identification / spotter \u2013 5 (external); ii. Specimen collection \u2013 5 (external); iii. Experiments / field / lab work / calculation \u2013 10 (external); iv. Short notes / critical analysis \u2013 5 (external); v. Case study \u2013 10 (internal); vi. Questions from CD show / guest lecture / short tour \u2013 10 (internal)", m: "45 marks" },
  { no: "5.", p: "Viva-voce", r: "Minimum of 10 questions", m: "10 marks (external examiner)" },
  { no: "", p: "Total", r: "", m: "80 marks" },
];

const classFinal = [
  { no: "1.", p: "Attendance", r: "Minimum of 80% in practical class", m: "Pre-requisite for the final practical examination (internal examiner)" },
  { no: "2.", p: "Record", r: "Continuous evaluation", m: "10 marks (internal examiner)" },
  { no: "3.", p: "Assignment (2 Nos.)", r: "A. Presentation / comprehension \u2013 10 (internal); B. Written part (no web page copying, hand written, min. two book references) \u2013 5 (internal); C. Answering the questions \u2013 5 (external)", m: "20 marks" },
  { no: "4.", p: "Written test", r: "i. Data interpretation / group discussion / brain storming \u2013 5 (external); ii. Short notes \u2013 5 (external); iii. Critical analysis / case study \u2013 10 (internal); iv. Objective type questions \u2013 5 (external); v. Essay type questions \u2013 5 (external); vi. Questions from CD show / guest lecture / short tour \u2013 10 (internal)", m: "40 marks" },
  { no: "5.", p: "Viva-voce", r: "Minimum of 10 questions", m: "10 marks (external examiner)" },
  { no: "", p: "Total", r: "", m: "80 marks" },
];

const labMidTerm = [
  { p: "Field evaluation (Identification, specimen collection etc.)", m: "10" },
  { p: "Assignment (1 No.)", m: "5" },
  { p: "Viva-voce", m: "5" },
  { p: "Total", m: "20" },
];

const classMidTerm = [
  { p: "Written test", m: "10" },
  { p: "Assignment (1 No.)", m: "5" },
  { p: "Viva-voce", m: "5" },
  { p: "Total", m: "20" },
];


      <div className="mt-12 max-w-5xl">
        <h2 className="font-display text-2xl font-bold mb-4">Reappearance Exam</h2>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Course details</th>
                <th className="px-4 py-3 text-left font-semibold">Question pattern &amp; marks</th>
                <th className="px-4 py-3 text-left font-semibold">Mode of exam</th>
                <th className="px-4 py-3 text-left font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody>
              {reappearTable.map((r) => (
                <tr key={r.course} className="border-t">
                  <td className="px-4 py-3 font-semibold">{r.course}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.pattern}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.mode}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.dur}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="font-display text-2xl font-bold mt-8">Examination Pattern of CoE</h2>
        <a
          href={exam_pattern_pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm mt-8 font-semibold text-primary-foreground shadow-soft hover:shadow-glow transition-shadow self-start lg:self-auto"
        >
          Examination Pattern - 2023 <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </PageShell>
  );
}
