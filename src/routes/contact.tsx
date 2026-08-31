// import { createFileRoute } from "@tanstack/react-router";
// import { MapPin, Phone, Mail, Send, Image as ImageIcon, LifeBuoy } from "lucide-react";
// import { PageShell } from "@/components/site/PageShell";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact Us — IIAT" },
//       { name: "description", content: "Get in touch with Imayam Institute of Agriculture and Technology, Kannanur, Thuraiyur, Trichy." },
//       { property: "og:title", content: "Contact Us — IIAT" },
//       { property: "og:description", content: "Phone, email, address and online enquiry form for IIAT." },
//     ],
//   }),
//   component: ContactPage,
// });

// function ContactPage() {
//   return (
//     <PageShell
//       eyebrow="Contact"
//       title="Contact Us"
//       subtitle="Our team is happy to answer your questions. Fill out the form and we’ll be in touch as soon as possible."
//       breadcrumbs={[{ label: "Contact Us" }]}
//     >
//       <div className="grid lg:grid-cols-3 gap-6 mb-12">
//         {[
//           { icon: Phone, label: "Phone", value: "+91 96552 39054" },
//           { icon: Mail, label: "Email Us", value: "deaniiat@tnau.ac.in" },
//           { icon: MapPin, label: "Address", value: "IIAT, Kannanur, Thuraiyur, Trichy – 621206" },
//         ].map((c) => (
//           <div key={c.label} className="rounded-2xl bg-card border shadow-soft p-6">
//             <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
//               <c.icon className="h-5 w-5" />
//             </div>
//             <div className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{c.label}</div>
//             <div className="mt-1 text-foreground font-medium">{c.value}</div>
//           </div>
//         ))}
//       </div>

//       <div className="grid lg:grid-cols-2 gap-8">
//         <div className="space-y-6">
//           <div className="rounded-2xl bg-card border shadow-soft p-6">
//             <div className="flex items-center gap-3 mb-3">
//               <ImageIcon className="h-5 w-5 text-primary" />
//               <h3 className="font-display text-xl font-bold">Know more about us</h3>
//             </div>
//             <p className="text-muted-foreground text-sm">View our gallery to know more about IIAT.</p>
//             <a
//               href="/gallery"
//               className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
//             >
//               Learn More →
//             </a>
//           </div>

//           <div className="rounded-2xl bg-card border shadow-soft p-6">
//             <div className="flex items-center gap-3 mb-3">
//               <LifeBuoy className="h-5 w-5 text-primary" />
//               <h3 className="font-display text-xl font-bold">Technical and Account Support</h3>
//             </div>
//             <p className="text-muted-foreground text-sm">
//               We are here to help! If you have technical issues, contact us. We will serve you the best support.
//             </p>
//           </div>

//           <div className="rounded-2xl overflow-hidden border shadow-soft h-64">
//             <iframe
//               title="Campus map"
//               src="https://www.openstreetmap.org/export/embed.html?bbox=78.55%2C11.10%2C78.65%2C11.20&amp;layer=mapnik"
//               className="h-full w-full"
//               loading="lazy"
//             />
//           </div>
//         </div>

//         <form
//           onSubmit={(e) => e.preventDefault()}
//           className="rounded-3xl bg-card border shadow-glow p-8 h-fit"
//         >
//           <h3 className="font-display text-2xl font-bold">Online Enquiry</h3>
//           <p className="mt-1 text-sm text-muted-foreground">We’ll respond within 24 hours.</p>

//           <div className="mt-6 grid sm:grid-cols-2 gap-4">
//             <Field label="Full name" placeholder="Your name" />
//             <Field label="Phone" placeholder="+91" />
//             <div className="sm:col-span-2">
//               <Field label="Email" placeholder="you@email.com" type="email" />
//             </div>
//             <div className="sm:col-span-2">
//               <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
//                 Type of query
//               </label>
//               <select className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 outline-none">
//                 <option>Admission</option>
//                 <option>General</option>
//                 <option>Report issue</option>
//               </select>
//             </div>
//             <div className="sm:col-span-2">
//               <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Message</label>
//               <textarea
//                 rows={4}
//                 placeholder="Tell us how we can help..."
//                 className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 outline-none resize-none"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition-transform"
//           >
//             <Send className="h-4 w-4" /> Submit Enquiry
//           </button>
//         </form>
//       </div>
//     </PageShell>
//   );
// }

// function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
//   return (
//     <label className="block">
//       <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">{label}</span>
//       <input
//         {...props}
//         className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 outline-none"
//       />
//     </label>
//   );
// }
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Image as ImageIcon, LifeBuoy, Loader2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — IIAT" },
      { name: "description", content: "Get in touch with Imayam Institute of Agriculture and Technology, Kannanur, Thuraiyur, Trichy." },
      { property: "og:title", content: "Contact Us — IIAT" },
      { property: "og:description", content: "Phone, email, address and online enquiry form for IIAT." },
    ],
  }),
  component: ContactPage,
});

// Point this at wherever contact_submit.php is hosted.
const API_URL = "https://application.imayamagri.org/contact_submit.php"; // <-- change this

type FormState = {
  name: string;
  phone: string;
  email: string;
  queryType: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  queryType: "Admission",
  message: "",
};

function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (form.phone.trim() && !/^[0-9+\-\s()]{7,15}$/.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!form.message.trim()) next.message = "Please tell us how we can help.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setServerMessage("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
        setServerMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Could not reach the server. Please try again.");
    }
  }

  return (
    <PageShell
      eyebrow="Contact"
      title="Contact Us"
      subtitle="Our team is happy to answer your questions. Fill out the form and we’ll be in touch as soon as possible."
      breadcrumbs={[{ label: "Contact Us" }]}
    >
      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        {[
          { icon: Phone, label: "Phone", value: "+91 96552 39054" },
          { icon: Mail, label: "Email Us", value: "deaniiat@tnau.ac.in" },
          { icon: MapPin, label: "Address", value: "IIAT, Kannanur, Thuraiyur, Trichy – 621206" },
        ].map((c) => (
          <div key={c.label} className="rounded-2xl bg-card border shadow-soft p-6">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary mb-4">
              <c.icon className="h-5 w-5" />
            </div>
            <div className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">{c.label}</div>
            <div className="mt-1 text-foreground font-medium">{c.value}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="rounded-2xl bg-card border shadow-soft p-6">
            <div className="flex items-center gap-3 mb-3">
              <ImageIcon className="h-5 w-5 text-primary" />
              <h3 className="font-display text-xl font-bold">Know more about us</h3>
            </div>
            <p className="text-muted-foreground text-sm">View our gallery to know more about IIAT.</p>
            <a
              href="/gallery"
              className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
            >
              Learn More →
            </a>
          </div>

          <div className="rounded-2xl bg-card border shadow-soft p-6">
            <div className="flex items-center gap-3 mb-3">
              <LifeBuoy className="h-5 w-5 text-primary" />
              <h3 className="font-display text-xl font-bold">Technical and Account Support</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              We are here to help! If you have technical issues, contact us. We will serve you the best support.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border shadow-soft h-64">
            <iframe
              title="Campus map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=78.55%2C11.10%2C78.65%2C11.20&amp;layer=mapnik"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-card border shadow-glow p-8 h-fit">
          <h3 className="font-display text-2xl font-bold">Online Enquiry</h3>
          <p className="mt-1 text-sm text-muted-foreground">We’ll respond within 24 hours.</p>

          {status === "success" ? (
            <div className="mt-6 rounded-xl bg-primary/10 text-primary text-sm p-4">
              Thanks — your enquiry has been sent. We'll be in touch within 24 hours.
            </div>
          ) : (
            <>
              {status === "error" && (
                <div className="mt-6 rounded-xl bg-destructive/10 text-destructive text-sm p-4">
                  {serverMessage}
                </div>
              )}

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field
                  label="Full name"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Field
                  label="Phone"
                  name="phone"
                  placeholder="+91"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
                <div className="sm:col-span-2">
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                    Type of query
                  </label>
                  <select
                    name="queryType"
                    value={form.queryType}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 outline-none"
                  >
                    <option>Admission</option>
                    <option>General</option>
                    <option>Report issue</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 outline-none resize-none"
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition-transform disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Submit Enquiry
                  </>
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </PageShell>
  );
}

function Field({
  label,
  error,
  ...props
}: { label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">{label}</span>
      <input
        {...props}
        className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 outline-none"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </label>
  );
}