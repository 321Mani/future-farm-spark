import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ApplyNowSticky } from "@/components/site/ApplyNowSticky";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import slide_1 from "@/assets/images/slide_1.webp";
import slide_2 from "@/assets/gal_aerial_1.webp";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  children: ReactNode;
}

export function PageShell({ eyebrow = "About Us", title, subtitle, breadcrumbs = [], children }: PageShellProps) {
  const heroImg = eyebrow === "About Us" ? slide_1 : slide_2;
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 z-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <nav className="flex items-center gap-1.5 text-xs text-white/80 mb-4">
              <Link to="/" className="inline-flex items-center gap-1 hover:text-white">
                <Home className="h-3.5 w-3.5" /> Home
              </Link>
              {breadcrumbs.map((b) => (
                <span key={b.label} className="inline-flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                  {b.href ? (
                    <a href={b.href} className="hover:text-white">{b.label}</a>
                  ) : (
                    <span className="text-white">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">
              {eyebrow}
            </div>
            <h1
              className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ textShadow: "0 4px 24px rgba(0,0,0,0.6)" }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className="mt-5 text-lg text-white/90 max-w-2xl leading-relaxed"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
              >
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">{children}</div>
      </section>

      <Footer />
      {/* <WhatsAppButton /> */}
      <ApplyNowSticky />
    </main>
  );
}
