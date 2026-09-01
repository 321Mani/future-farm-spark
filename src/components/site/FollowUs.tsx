import { useRef } from "react";
import { Facebook, Instagram, Youtube, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import ev1 from "@/assets/events/1 (1).jpg";
import ev2 from "@/assets/events/1 (2).jpg";
import ev3 from "@/assets/events/1 (3).jpg";
import ev4 from "@/assets/events/1 (4).jpg";
import ev5 from "@/assets/events/1 (5).jpg";

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590780057309" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/imayam_official/" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@imayaminstituteofagricultu6556" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const posts = [
  { img: ev1, href: "https://www.instagram.com/imayam_official/" },
  { img: ev2, href: "https://www.instagram.com/imayam_official/" },
  { img: ev3, href: "https://www.instagram.com/imayam_official/" },
  { img: ev4, href: "https://www.instagram.com/imayam_official/" },
  { img: ev5, href: "https://www.instagram.com/imayam_official/" },
];

export function FollowUs() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:items-center">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Follow us</h2>
            <p className="mt-3 text-sm opacity-80 max-w-sm">
              Campus life, events and student stories — straight from our social feeds.
            </p>
            <div className="mt-7 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl bg-primary-foreground/10 transition-colors hover:bg-primary-foreground hover:text-primary"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="mb-4 flex justify-end gap-2">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Previous posts"
                className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/40 transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Next posts"
                className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/40 transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div
              ref={trackRef}
              className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {posts.map((p, i) => (
                <a
                  key={i}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-[240px] shrink-0 snap-start overflow-hidden rounded-2xl bg-primary-foreground/10"
                >
                  <img
                    src={p.img}
                    alt="IIAT social post"
                    loading="lazy"
                    className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <Instagram className="absolute right-3 top-3 h-5 w-5 drop-shadow" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
