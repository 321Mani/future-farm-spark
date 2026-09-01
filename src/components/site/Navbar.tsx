import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import iiatLogo from "@/assets/iiat-logo.jpg";
import imayamLogo from "@/assets/images/logo.png";

type MenuItem = {
  label: string;
  href: string;
  groups?: { heading?: string; links: { label: string; href: string }[] }[];
};

const pdfLinks: { label: string; href: string }[] = [
  {
    label: "NIRF",
    href: new URL("../../assets/documents/NIRF_2025.pdf", import.meta.url).href,
  },
  {
    label: "Affiliation",
    href: new URL("../../assets/documents/Affilitation.pdf", import.meta.url).href,
  },
  {
    label: "MOU",
    href: new URL("../../assets/documents/MOU.pdf", import.meta.url).href,
  },
  {
    label: "GO",
    href: new URL("../../assets/documents/GO.pdf", import.meta.url).href,
  },
  {
    label: "ICAR-Accreditation",
    href: new URL("../../assets/documents/ICAR.pdf", import.meta.url).href,
  },
];

const menu: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "#",
    groups: [
      {
        heading: "The Institute",
        links: [
          { label: "About IIAT", href: "/about" },
          // { label: "Our Timeline", href: "/timeline" },
          { label: "Location", href: "/location" },
          { label: "Vision & Mission", href: "/about/vision-mission" },
          { label: "Chairman's Message", href: "/about/chairman" },
          { label: "MD's Message", href: "/about/mdirector" },
          { label: "Our Principal", href: "/about/principal" },
        ],
      },
      // {
      //   heading: "Approvals",
      //   links: [
      //     { label: "ICAR", href: "/about/icar" },
      //     { label: "Approval Letters", href: "/about/approvals" },
      //   ],
      // },
      {
        heading: "Governance",
        links: [
          { label: "Board Of Studies", href: "/about/board-of-studies" },
          { label: "Anti-Ragging", href: "/about/anti-ragging" },
          { label: "Students Grievance", href: "/about/student-grieviance" },
          { label: "Hostel Executive", href: "/about/hostel-executive" },
          { label: "Sexual Harassment", href: "/about/sexual-harassment" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    href: "#",
    groups: [
      {
        heading: "Programmes",
        links: [
          { label: "Course Offered", href: "/academics/courses" },
          { label: "Exam Pattern", href: "/academics/exam-pattern" },
          { label: "Academic Calendar", href: "/academics/academic-calendar" },
          { label: "Course & Syllabus", href: "/academics/course-syllabus" },
          { label: "Rules & Regulations", href: "/academics/rules-regulation" },
        ],
      },
      {
        heading: "Facilities",
        links: [
          { label: "Faculty", href: "/faculty" },
          // { label: "Library", href: "/academics/library" },
          { label: "Computer Center", href: "/academics/computer-center" },
          // { label: "Smart Class", href: "/academics/smart-class" },
        ],
      },
      {
        heading: "Student Life",
        links: [
          { label: "Physical Education", href: "/academics/physical-education" },
          { label: "Yoga", href: "/academics/yoga" },
        ],
      },
      {
        heading: "Divisions",
        links: [
          { label: "Crop Improvement", href: "/divisions/crop-improvement" },
          { label: "Crop Management", href: "/divisions/crop-management" },
          { label: "Crop Protection", href: "/divisions/plant-protection" },
          { label: "Horticulture", href: "/divisions/horticulture" },
          { label: "Social Science", href: "/divisions/social-science" },
        ],
      },
      // {
      //   heading: "Applied Sciences",
      //   links: [
      //     { label: "Agriculture Engineering", href: "/divisions/agriculture-engineering" },
      //   ],
      // },
    ],
  },
  {
    label: "Farms",
    href: "#",
    groups: [
      {
        heading: "Our Farms",
        links: [
          { label: "Horticulture Farm", href: "/farms/horticulture" },
          { label: "Agriculture Farm", href: "/farms/south" },
          { label: "Daily & Live Stock", href: "/farms/livestock" },
          { label: "Seed Production", href: "/farms/seed-production" },
          { label: "Weather Data", href: "/farms/weather" },
          { label: "Forest Crops", href: "/farms/forest-crops" },
        ],
      },

    ],
  },
  {
    label: "Life @ IIAT",
    href: "#",
    groups: [
      {
        heading: "Campus Life",
        links: [
          { label: "Newsletters", href: "/life/newsletter" },
          { label: "Library", href: "/academics/library" },
          { label: "Smart Classroom", href: "/academics/smart-class" },
          ],
      },
      {
        heading: "Student Services",
        links: [
          { label: "Hostel", href: "/life/hostel" },
          { label: "Sports", href: "/life/sports" },
          { label: "Events", href: "/life/events" },
          { label: "Events Photos & Videos", href: "/life/event-photos" },
          { label: "Culturals", href: "/life/culturals" },
          // { label: "Culturals", href: "/life/culturals" },
          // { label: "Placement", href: "/life/placement" },
          // { label: "Online Fee Payment", href: "/life/fee-payment" },
          { label: "NSS", href: "/academics/nss" },
          { label: "Laboratories", href: "/life/laboratories" },
        ],
      },
    ],
  },
  // {
  //   label: "Documents",
  //   href: "#",
  //   groups: [
  //     {
  //       heading: "",
  //       links: pdfLinks.map((p) => ({ label: p.label, href: p.href })),
  //     },
  //   ],
  // },
  // { label: "Faculty", href: "/faculty" },
  { label: "Our Gallery", href: "/gallery" },
  { label: "Our Timeline", href: "/timeline" },
  { label: "Blog", href: "/blog" },
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
      className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav
          className={`relative flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled || active || open ? "glass shadow-soft" : "bg-black/35 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-0"
          }`}
          onMouseLeave={scheduleClose}
        >
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="bg-white shadow-soft" style={{"padding": "5px 20px", "borderRadius": "40px"}}>
              <img src={imayamLogo} alt="Imayam logo" width={170} className="object-contain" />
            </div>
            {/* <div className="leading-tight">
              <div className={`font-display font-bold text-base ${scrolled || active ? "text-foreground" : "text-white"}`}>
                Imayam
              </div>
              <div className={`text-[10px] tracking-widest uppercase ${scrolled || active ? "text-muted-foreground" : "text-white/80"}`}>
                Agri & Tech
              </div>
            </div> */}
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
                        className="rounded-2xl border border-border/70 bg-card p-5 shadow-[0_24px_70px_-24px_rgba(0,0,0,0.45)]"
                        style={{ width: `${Math.min(item.groups.length) * 220}px` }}
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
                                      target={/\.pdf$/i.test(link.href) ? "_blank" : undefined}
                                      rel={/\.pdf$/i.test(link.href) ? "noopener noreferrer" : undefined}
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
              href="https://application.imayamagri.org/admission-form.html"
              className="hidden sm:inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft hover:scale-[1.03] transition-transform"
            >
              Apply Now
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden grid place-items-center h-10 w-10 rounded-xl ${
                scrolled || open ? "bg-secondary text-foreground" : "bg-white/20 text-white ring-1 ring-white/35"
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* PDF quick-links sub-bar */}
        {/* <div
          className={`mt-2 flex items-center gap-1 overflow-x-auto rounded-xl px-3 py-2 transition-all duration-500 lg:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            scrolled || active ? "glass shadow-soft" : "bg-black/35 backdrop-blur-md"
          }`}
        >
          {pdfLinks.map((p, i) => (
            <div key={p.label} className="flex items-center shrink-0">
              <a
                href={p.href}
                target="_blank"
                rel="noopener"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] sm:text-[13px] font-semibold whitespace-nowrap transition-colors ${
                  scrolled || active
                    ? "text-primary hover:bg-primary/10"
                    : "text-white hover:bg-white/15"
                }`}
              >
                <FileText className="h-3.5 w-3.5 opacity-80 shrink-0" />
                {p.label}
              </a>
              {i < pdfLinks.length - 1 && (
                <span className={`mx-1 h-4 w-px shrink-0 ${scrolled || active ? "bg-border" : "bg-white/30"}`} />
              )}
            </div>
          ))}
        </div> */}


        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative z-[90] lg:hidden mt-2 rounded-2xl border border-border/70 bg-card p-3 shadow-[0_24px_70px_-24px_rgba(0,0,0,0.45)] max-h-[62vh] overflow-y-auto"
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
                                      target={/\.pdf$/i.test(link.href) ? "_blank" : undefined}
                                      rel={/\.pdf$/i.test(link.href) ? "noopener noreferrer" : undefined}
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
                    href="https://application.imayamagri.org/admission-form.html"
                    onClick={() => setOpen(false)}
                    target="_blank"
                    rel="noopener noreferrer"
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
