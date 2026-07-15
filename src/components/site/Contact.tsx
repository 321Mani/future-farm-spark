import { MapPin, Phone, Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="text-sm font-semibold text-primary tracking-widest uppercase">Contact</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold">
              Visit us in <span className="text-gradient">Thuraiyur.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Reach out for admissions, campus tours, or research collaborations.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: MapPin, label: "Kannanur, Thuraiyur (Tk), Tiruchirappalli District, Tamil Nadu — 621 206" },
                { icon: Phone, label: "+91 4327 256 256" },
                { icon: Mail, label: "admissions@imayamagri.org" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 rounded-2xl bg-card border p-4 shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary shrink-0">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm text-foreground pt-2.5">{c.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden border shadow-soft h-64">
              <iframe
                title="Campus map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.5656546261635!2d78.56513220782891!3d11.103590198025008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa54a040473625%3A0x90afcb83f7fd8d73!2sIIAT%20-%20Imayam%20Institute%20of%20Agriculture%20%26%20Technology!5e0!3m2!1sen!2sin!4v1573523956216!5m2!1sen!2sin"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl bg-card border shadow-glow p-8 lg:p-10 h-fit"
          >
            <h3 className="font-display text-2xl font-bold">Online enquiry</h3>
            <p className="mt-1 text-sm text-muted-foreground">We'll respond within 24 hours.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full name" placeholder="Your name" />
              <Field label="Phone" placeholder="+91" />
              <div className="sm:col-span-2">
                <Field label="Email" placeholder="you@email.com" type="email" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
                  Programme of interest
                </label>
                <select className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 outline-none">
                  <option>B.Sc Agriculture</option>
                  <option>B.Sc Horticulture</option>
                  <option>B.Tech Agricultural Engineering</option>
                  <option>M.Sc Programmes</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals..."
                  className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 outline-none resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition-transform"
            >
              <Send className="h-4 w-4" /> Send enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">{label}</span>
      <input
        {...props}
        className="mt-1.5 w-full rounded-xl border bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-primary/40 outline-none"
      />
    </label>
  );
}
