// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { PageShell } from "@/components/site/PageShell";
// import { Calendar, User } from "lucide-react";
// import b1 from "@/assets/gal_aerial_1.jpg";
// import b2 from "@/assets/images/campus/1 (1).jpg";
// import b3 from "@/assets/images/campus/1 (2).jpg";
// import b4 from "@/assets/images/Farms/Seed Production/314A1961.jpg";
// import b5 from "@/assets/images/Farms/Horticulture Farm/314A1293.jpg";
// import b6 from "@/assets/images/Laboratories/Computer Lab/cc 2.jpg";

// export const Route = createFileRoute("/blog")({
//   head: () => ({
//     meta: [
//       { title: "Blog — IIAT Agriculture Insights" },
//       {
//         name: "description",
//         content:
//           "Articles from Imayam Institute of Agriculture & Technology on precision farming, horticulture, seed technology, campus life and student careers.",
//       },
//       { property: "og:title", content: "Blog — IIAT Agriculture Insights" },
//       { property: "og:description", content: "Agriculture insights, campus stories and career guidance from IIAT, Thuraiyur." },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
//   component: BlogPage,
// });

// const posts = [
//   {
//     image: b1,
//     category: "Precision Farming",
//     title: "How drone mapping is changing crop scouting in Tamil Nadu",
//     excerpt:
//       "Aerial imagery lets our students detect nutrient stress days before it shows up in the field. Here is how the technique is taught at IIAT.",
//     author: "Dept. of Crop Management",
//     date: "12 Aug 2026",
//   },
//   {
//     image: b4,
//     category: "Seed Technology",
//     title: "Inside the ELP: producing certified black gram and green gram seed",
//     excerpt:
//       "From roguing to grading, our Experiential Learning Programme puts final-year students in charge of a full seed production cycle.",
//     author: "Dept. of Crop Improvement",
//     date: "28 Jul 2026",
//   },
//   {
//     image: b5,
//     category: "Horticulture",
//     title: "Building a herbal garden that doubles as a living classroom",
//     excerpt:
//       "Forty-six medicinal species now grow on campus, supporting practicals in medicinal and aromatic crops throughout the year.",
//     author: "Dept. of Horticulture",
//     date: "10 Jul 2026",
//   },
//   {
//     image: b6,
//     category: "Careers",
//     title: "Career paths after B.Sc. (Hons.) Agriculture",
//     excerpt:
//       "Agri-input companies, banking, government services and agri-startups — a practical guide to planning your career from the second year onward.",
//     author: "Placement Cell",
//     date: "22 Jun 2026",
//   },
//   {
//     image: b2,
//     category: "Campus Life",
//     title: "A week in the life of a first-year agriculture student",
//     excerpt:
//       "Early morning field visits, laboratory practicals, club activities and hostel evenings — what a typical week really looks like.",
//     author: "Students' Council",
//     date: "05 Jun 2026",
//   },
//   {
//     image: b3,
//     category: "Sustainability",
//     title: "Composting farm waste: a low-cost route to healthier soils",
//     excerpt:
//       "Our livestock and crop residues are recycled on campus. The result is a steady supply of farmyard manure and measurably better soil carbon.",
//     author: "Dept. of Social Science",
//     date: "18 May 2026",
//   },
// ];

// function BlogPage() {
//   return (
//     <PageShell
//       eyebrow="Blog"
//       title="IIAT Blog"
//       subtitle="Agriculture insights, research notes and campus stories from our faculty and students."
//       breadcrumbs={[{ label: "Blog" }]}
//     >
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {posts.map((p, i) => (
//           <motion.article
//             key={p.title}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.07, duration: 0.5 }}
//             className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
//           >
//             <div className="overflow-hidden bg-muted">
//               <img
//                 src={p.image}
//                 alt={p.title}
//                 loading="lazy"
//                 className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-105"
//               />
//             </div>
//             <div className="flex flex-1 flex-col p-6">
//               <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">{p.category}</div>
//               <h2 className="mt-2 font-display text-lg font-bold leading-snug text-foreground">{p.title}</h2>
//               <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
//               <div className="mt-5 flex flex-wrap items-center gap-4 border-t pt-4 text-xs text-muted-foreground">
//                 <span className="inline-flex items-center gap-1.5">
//                   <User className="h-3.5 w-3.5 text-primary" /> {p.author}
//                 </span>
//                 <span className="inline-flex items-center gap-1.5">
//                   <Calendar className="h-3.5 w-3.5 text-primary" /> {p.date}
//                 </span>
//               </div>
//             </div>
//           </motion.article>
//         ))}
//       </div>
//     </PageShell>
//   );
// }


import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Calendar, User } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — IIAT Agriculture Insights" },
      {
        name: "description",
        content:
          "Articles from Imayam Institute of Agriculture & Technology on precision farming, horticulture, seed technology, campus life and student careers.",
      },
      { property: "og:title", content: "Blog — IIAT Agriculture Insights" },
      { property: "og:description", content: "Agriculture insights, campus stories and career guidance from IIAT, Thuraiyur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

// Point this at wherever blog_api.php is hosted.
const BLOG_API_URL = "https://application.imayamagri.org/blog_api.php"; // <-- change this

type BlogPost = {
  id: string;
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
};

function SkeletonCard() {
  return <div className="rounded-3xl border bg-card shadow-soft aspect-[4/5] animate-pulse" />;
}

function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(BLOG_API_URL)
      .then((res) => res.json())
      .then((result) => {
        if (cancelled) return;
        if (result.success) setPosts(result.posts);
        else setError(true);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <PageShell
      eyebrow="Blog"
      title="IIAT Blog"
      subtitle="Agriculture insights, research notes and campus stories from our faculty and students."
      breadcrumbs={[{ label: "Blog" }]}
    >
      {error && (
        <p className="mb-6 text-sm text-destructive">Couldn't load posts right now. Please try again shortly.</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {loading &&
          [0, 1, 2, 3, 4, 5].map((i) => <SkeletonCard key={i} />)}

        {!loading && posts.length === 0 && !error && (
          <p className="text-sm text-muted-foreground col-span-full">No blog posts yet — check back soon.</p>
        )}

        {!loading &&
          posts.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="group flex flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <Link to="/blog-details/$slug" params={{ slug: p.slug }} className="contents">
                <div className="overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  {p.category && (
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">{p.category}</div>
                  )}
                  <h2 className="mt-2 font-display text-lg font-bold leading-snug text-foreground">{p.title}</h2>
                  {p.excerpt && (
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  )}
                  <div className="mt-5 flex flex-wrap items-center gap-4 border-t pt-4 text-xs text-muted-foreground">
                    {p.author && (
                      <span className="inline-flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-primary" /> {p.author}
                      </span>
                    )}
                    {p.date && (
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary" /> {p.date}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
      </div>
    </PageShell>
  );
}
