import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Gallery as GalleryAgricultureEngineering } from "@/components/site/Gallery_ae";
import { Gallery as GalleryAgricultureFarm } from "@/components/site/Gallery_agri";
import { Gallery as GalleryComputerCenter } from "@/components/site/Gallery_cc";
import { Gallery as GalleryCropImprovement } from "@/components/site/Gallery_div_improve";
import { Gallery as GalleryCropManagement } from "@/components/site/Gallery_div_manage";
import { Gallery as GalleryHorticultureDivision } from "@/components/site/Gallery_div_horti";
import { Gallery as GalleryPlantProtection } from "@/components/site/Gallery_div_plant";
import { Gallery as GallerySocialScience } from "@/components/site/Gallery_div_soc";
import { Gallery as GalleryHorticultureFarm } from "@/components/site/Gallery_horti";
import { Gallery as GalleryHostel } from "@/components/site/Gallery_hostel";
import { Gallery as GalleryLaboratory } from "@/components/site/Gallery_labro";
import { Gallery as GalleryLibrary } from "@/components/site/Gallery_liby";
import { Gallery as GalleryLiveStock } from "@/components/site/Gallery_live";
import { Gallery as GallerySeedProduction } from "@/components/site/Gallery_seed";
import { Gallery as GallerySports } from "@/components/site/Gallery_Sports";
import { Gallery as GalleryWeather } from "@/components/site/Gallery_wether";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — IIAT" },
      { name: "description", content: "Glimpses of campus life, aerial views, labs, farms, sports and placements at IIAT." },
      { property: "og:title", content: "Gallery — IIAT" },
      { property: "og:description", content: "Aerial, campus, laboratory, farms, sports and placement photographs." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <PageShell
      eyebrow="Gallery"
      title="Glimpses of IIAT"
      subtitle="Aerial, campus, laboratory, farms, sports and placement moments."
      breadcrumbs={[{ label: "Gallery" }]}
    >
      <div className="space-y-0">
        <GalleryAgricultureEngineering />
        <GalleryAgricultureFarm />
        <GalleryHorticultureFarm />
        <GalleryHostel />
        <GalleryLiveStock />
        <GallerySeedProduction />
        <GalleryWeather />
        <GallerySports />
        <GalleryLibrary />
        <GalleryLaboratory />
        <GalleryComputerCenter />
        <GalleryCropImprovement />
        <GalleryCropManagement />
        <GalleryHorticultureDivision />
        <GalleryPlantProtection />
        <GallerySocialScience />
      </div>
    </PageShell>
  );
}
