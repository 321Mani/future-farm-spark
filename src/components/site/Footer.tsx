import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import iiatLogo from "@/assets/iiat-logo.png";
import imayamLogo from "@/assets/images/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              {/* <div className="grid h-11 w-11 place-items-center rounded-xl bg-white ring-1 ring-white/10 overflow-hidden">
                <img src={iiatLogo} alt="IIAT logo" loading="lazy" width={44} height={44} className="h-9 w-9 object-contain" />
              </div> */}
              <div className="bg-white shadow-soft" style={{"padding": "5px 20px", "borderRadius": "40px"}}>
                <img src={imayamLogo} alt="Imayam logo" width={170} className="object-contain" />
              </div>
  
              {/* <div className="leading-tight">
                <div className="font-display font-bold">Imayam</div>
                <div className="text-[10px] tracking-widest uppercase opacity-70">Agri & Tech</div>
              </div> */}
            </div>
            <p className="mt-5 text-sm opacity-70 leading-relaxed">
              A TNAU-affiliated institute training the next generation of agriculture
              professionals on a 100-acre living campus.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-background/10 hover:bg-primary transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" links={["Home", "About", "Departments", "Facilities", "Gallery", "Contact"]} />
          <FooterCol title="Courses" links={["Crop Improvement", "Crop Management", "Crop Protection", "Horticulture", "Agricultural"]} />

          <div>
            <div className="font-display font-bold mb-5">Newsletter</div>
            <p className="text-sm opacity-70">Get admissions news and campus updates in your inbox.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 rounded-xl bg-background/10 border border-background/20 px-4 py-3 text-sm outline-none focus:border-primary-light"
              />
              <button className="rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between gap-3 text-xs opacity-60">
          <div>© 2025 Imayam Institute of Agriculture and Technology. All rights reserved.</div>
          <div>Affiliated to Tamil Nadu Agricultural University (TNAU)</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="font-display font-bold mb-5">{title}</div>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-primary-light transition-colors">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
