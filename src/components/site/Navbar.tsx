import { useEffect, useRef, useState } from "react";
import { Menu, X, Sprout, ChevronDown, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type MenuItem = {
  label: string;
  href: string;
  groups?: { heading?: string; links: { label: string; href: string }[] }[];
};

const pdfLinks: { label: string; href: string }[] = [
  { label: "NIRF", href: "/pdfs/nirf.pdf" },
  { label: "Affiliation", href: "/pdfs/affiliation.pdf" },
  { label: "MOU", href: "/pdfs/mou.pdf" },
  { label: "GO", href: "/pdfs/go.pdf" },
  { label: "ICAR-Accreditation", href: "/pdfs/icar-accreditation.pdf" },
  { label: "Governing Council", href: "/pdfs/governing-council.pdf" },
];

const menu: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    groups: [
      {
        heading: "The Institute",
        links: [
          { label: "About IIAT", href: "/about" },
          { label: "Vision & Mission", href: "/about/vision-mission" },
          { label: "Chairman's Message", href: "/about/chairman" },
          { label: "Our Principal", href: "/about/principal" },
        ],
      },
      {
        heading: "Approvals",
        links: [
          { label: "ICAR", href: "/about/icar" },
          { label: "Approval Letters", href: "/about/approvals" },
        ],
      },
      {
        heading: "Governance",
        links: [
          { label: "Board Of Studies", href: "/about/board-of-studies" },
          { label: "Anti-Ragging", href: "/about/anti-ragging" },
          { label: "Sexual Harassment", href: "/about/sexual-harassment" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    href: "/academics/courses",
    groups: [
      {
        heading: "Programmes",
        links: [
          { label: "Course Offered", href: "/academics/courses" },
          { label: "Exam Pattern", href: "/academics/exam-pattern" },
        ],
      },
      {
        heading: "Facilities",
        links: [
          { label: "Library", href: "/academics/library" },
          { label: "Computer Center", href: "/academics/computer-center" },
          { label: "Smart Class", href: "/academics/smart-class" },
        ],
      },
      {
        heading: "Student Life",
        links: [
          { label: "NSS", href: "/academics/nss" },
          { label: "Physical Education", href: "/academics/physical-education" },
          { label: "Yoga", href: "/academics/yoga" },
        ],
      },
    ],
  },
  {
    label: "Divisions",
    href: "/divisions/crop-improvement",
    groups: [
      {
        heading: "Crop Sciences",
        links: [
          { label: "Crop Improvement", href: "/divisions/crop-improvement" },
          { label: "Crop Management", href: "/divisions/crop-management" },
          { label: "Plant Protection", href: "/divisions/plant-protection" },
        ],
      },
      {
        heading: "Applied Sciences",
        links: [
          { label: "Horticulture", href: "/divisions/horticulture" },
          { label: "Agriculture Engineering", href: "/divisions/agriculture-engineering" },
          { label: "Social Science", href: "/divisions/social-science" },
        ],
      },
    ],
  },
  {
    label: "Farms",
    href: "/farms/south",
    groups: [
      {
        heading: "Our Farms",
        links: [
          { label: "South Farm", href: "/farms/south" },
          { label: "North Farm", href: "/farms/north" },
          { label: "Weather Data", href: "/farms/weather" },
        ],
      },
    ],
  },
  {
    label: "Life @ IIAT",
    href: "/life/culturals",
    groups: [
      {
        heading: "Campus Life",
        links: [
          { label: "Culturals", href: "/life/culturals" },
          { label: "Events", href: "/life/events" },
          { label: "Hostel", href: "/life/hostel" },
        ],
      },
      {
        heading: "Student Services",
        links: [
          { label: "Placement", href: "/life/placement" },
          { label: "Newsletters", href: "/life/newsletter" },
          { label: "Online Fee Payment", href: "/life/fee-payment" },
        ],
      },
    ],
  },
  { label: "Faculty", href: "/faculty" },
  { label: "Our Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActive(null), 150);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`relative flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled || active ? "glass shadow-soft" : "bg-transparent"
          }`}
          onMouseLeave={scheduleClose}
        >
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Sprout className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className={`font-display font-bold text-base ${scrolled || active ? "text-foreground" : "text-white"}`}>
                Imayam
              </div>
              <div className={`text-[10px] tracking-widest uppercase ${scrolled || active ? "text-muted-foreground" : "text-white/80"}`}>
                Agri & Tech
              </div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-0.5">
            {menu.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => (item.groups ? openMenu(item.label) : setActive(null))}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    scrolled || active
                      ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  } ${active === item.label ? "text-primary" : ""}`}
                >
                  {item.label}
                  {item.groups && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${active === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </a>

                <AnimatePresence>
                  {item.groups && active === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      onMouseEnter={() => openMenu(item.label)}
                      onMouseLeave={scheduleClose}
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                    >
                      <div
                        className="glass rounded-2xl p-5 shadow-soft border border-border/50"
                        style={{ width: `${Math.min(item.groups.length, 3) * 220}px` }}
                      >
                        <div
                          className="grid gap-5"
                          style={{ gridTemplateColumns: `repeat(${item.groups.length}, minmax(0, 1fr))` }}
                        >
                          {item.groups.map((group) => (
                            <div key={group.heading}>
                              {group.heading && (
                                <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-primary">
                                  {group.heading}
                                </div>
                              )}
                              <ul className="space-y-0.5">
                                {group.links.map((link) => (
                                  <li key={link.label}>
                                    <a
                                      href={link.href}
                                      onClick={() => setActive(null)}
                                      className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                                    >
                                      {link.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#admission"
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft hover:scale-[1.03] transition-transform"
            >
              Apply Now
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden grid place-items-center h-10 w-10 rounded-xl ${
                scrolled ? "bg-secondary text-foreground" : "bg-white/15 text-white"
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* PDF quick-links sub-bar */}
        <div
          className={`mt-2 hidden lg:flex items-center justify-center gap-1 rounded-xl px-4 py-2 transition-all duration-500 ${
            scrolled || active ? "glass shadow-soft" : "bg-black/25 backdrop-blur-md"
          }`}
        >
          {pdfLinks.map((p, i) => (
            <div key={p.label} className="flex items-center">
              <a
                href={p.href}
                target="_blank"
                rel="noopener"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-colors ${
                  scrolled || active
                    ? "text-primary hover:bg-primary/10"
                    : "text-white hover:bg-white/15"
                }`}
              >
                <FileText className="h-3.5 w-3.5 opacity-80" />
                {p.label}
              </a>
              {i < pdfLinks.length - 1 && (
                <span className={`mx-1 h-4 w-px ${scrolled || active ? "bg-border" : "bg-white/30"}`} />
              )}
            </div>
          ))}
        </div>


        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass rounded-2xl p-3 shadow-soft max-h-[70vh] overflow-y-auto"
            >
              <ul className="grid gap-1">
                {menu.map((item) => (
                  <li key={item.label}>
                    {item.groups ? (
                      <>
                        <button
                          onClick={() => setMobileSub((v) => (v === item.label ? null : item.label))}
                          className="flex w-full items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-primary/10"
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${mobileSub === item.label ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileSub === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-3"
                            >
                              {item.groups.map((group) => (
                                <div key={group.heading} className="py-1">
                                  {group.heading && (
                                    <div className="px-4 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                                      {group.heading}
                                    </div>
                                  )}
                                  {group.links.map((link) => (
                                    <a
                                      key={link.label}
                                      href={link.href}
                                      onClick={() => setOpen(false)}
                                      className="block px-4 py-2 rounded-lg text-sm text-foreground/80 hover:bg-primary/10"
                                    >
                                      {link.label}
                                    </a>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        onClick={() => setOpen(false)}
                        href={item.href}
                        className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-primary/10"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
                <li>
                  <a
                    href="#admission"
                    onClick={() => setOpen(false)}
                    className="block text-center mt-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
                  >
                    Apply Now
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
