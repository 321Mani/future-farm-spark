import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Departments } from "@/components/site/Departments";
import { Facilities } from "@/components/site/Facilities";
import { Gallery } from "@/components/site/Gallery";
import { Placements } from "@/components/site/Placements";
import { Testimonials } from "@/components/site/Testimonials";
import { AdmissionCTA } from "@/components/site/AdmissionCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ApplyNowSticky } from "@/components/site/ApplyNowSticky";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imayam Institute of Agriculture & Technology · Admissions 2025" },
      {
        name: "description",
        content:
          "TNAU-affiliated agriculture institute in Thuraiyur, Tamil Nadu. B.Sc Agriculture, Horticulture, B.Tech Agri-Engineering on a 100-acre living campus.",
      },
      { property: "og:title", content: "Imayam Institute of Agriculture & Technology" },
      { property: "og:description", content: "Premium agriculture university in Tamil Nadu. Admissions 2025 open." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Departments />
      <Facilities />
      <Gallery />
      <Placements />
      <Testimonials />
      <AdmissionCTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
