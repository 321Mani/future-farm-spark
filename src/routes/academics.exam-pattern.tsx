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

const examTable = [
  { exam: "Mid Semester", a: "10 (20 marks converted to 10) (1 hour)", b: "40 (1\u00BD hours)", c: "40 (1\u00BD hours)" },
  { exam: "Practical", a: "40 (2\u00BD hours)", b: "\u2013", c: "60 (2\u00BD hours)" },
  { exam: "Final Theory", a: "50 (2\u00BD hours)", b: "60", c: "\u2013" },
  { exam: "Total", a: "100", b: "100", c: "100" },

];
const reappearTable = [
  { course: "Courses with Theory and Practical", pattern: "Multiple Choice Questions (MCQ) (60 \u00D7 1 = 60 marks)", mode: "OMR", dur: "75 minutes" },
  { course: "Courses with Theory alone", pattern: "Multiple Choice Questions (MCQ) (100 \u00D7 1 = 100 marks)", mode: "OMR", dur: "120 minutes" },
];

function ExamPattern() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Exam Pattern"
      subtitle="The Examination pattern for the B.Sc (Hons) Agriculture programme at IIAT."
      breadcrumbs={[{ label: "Academics" }, { label: "Exam Pattern" }]}
    >
      <div className="max-w-4xl space-y-6">
        {sections.map((s) => (
          <div key={s.title} className="rounded-2xl border bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg font-bold text-primary">{s.title}</h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-5xl">
        <h2 className="font-display text-2xl font-bold mb-2">Exam Pattern &amp; Duration</h2>
        <p className="text-sm text-muted-foreground mb-4">
          <strong>Regular:</strong> Mid Semester examination — Paper. Final Theory Examination — Paper.
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          <strong>Question pattern:</strong> The mid-semester and final theory consist of objective and descriptive type questions; reappearance consists of multiple choice questions. Comprehension-type questions, problem-based questions, practical theory portions, procedures, short notes and case studies are included in disciplines wherever possible in the final examinations.
        </p>
        <div className="overflow-x-auto rounded-2xl border">
          <table className="w-full text-sm">
            <thead className="bg-secondary">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Exam</th>
                <th className="px-4 py-3 text-left font-semibold">1+1 / 2+1 courses</th>
                <th className="px-4 py-3 text-left font-semibold">1+0 / 2+0 courses</th>
                <th className="px-4 py-3 text-left font-semibold">0+1 / 0+2 courses</th>
              </tr>
            </thead>
            <tbody>
              {examTable.map((r) => (
                <tr key={r.exam} className="border-t">
                  <td className="px-4 py-3 font-semibold">{r.exam}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.a}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.b}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

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
