import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Calendar, User, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog-details/")({
  head: () => ({
    meta: [
      { title: "Blog — IIAT Agriculture Insights" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: BlogPostPage,
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
  content: string;
  author: string;
  date: string;
};

function BlogPostPage() {
  const { slug } = useParams({ from: "/blog-details/$slug" });
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setNotFound(false);

    fetch(`${BLOG_API_URL}?slug=${encodeURIComponent(slug)}`)
      .then((res) => res.json())
      .then((result) => {
        if (cancelled) return;
        if (result.success) {
          setPost(result.post);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => {
        if (!cancelled) setNotFound(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <PageShell eyebrow="Blog" title="Loading…" subtitle="" breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: "…" }]}>
        <div className="aspect-[16/9] w-full rounded-3xl bg-card border animate-pulse" />
        <div className="mt-6 h-8 w-2/3 rounded bg-card border animate-pulse" />
        <div className="mt-4 h-4 w-full rounded bg-card border animate-pulse" />
      </PageShell>
    );
  }

  if (notFound || !post) {
    return (
      <PageShell eyebrow="Blog" title="Post not found" subtitle="" breadcrumbs={[{ label: "Blog", href: "/blog" }]}>
        <p className="text-muted-foreground">
          We couldn't find that post — it may have been removed or the link is incorrect.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all posts
        </Link>
      </PageShell>
    );
  }

  // Split content into paragraphs on blank lines.
  const paragraphs = (post.content || "").split(/\n\s*\n/).filter((p) => p.trim());

  return (
    <PageShell
      eyebrow="Blog"
      title={post.title}
      subtitle={post.excerpt}
      breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
    >
      <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        {post.image && (
          <div className="overflow-hidden rounded-3xl border bg-muted mb-8">
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
          {post.category && (
            <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
              {post.category}
            </span>
          )}
          {post.author && (
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-primary" /> {post.author}
            </span>
          )}
          {post.date && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-primary" /> {post.date}
            </span>
          )}
        </div>

        <div className="prose prose-neutral max-w-none text-foreground/90 leading-relaxed space-y-4">
          {paragraphs.length > 0 ? (
            paragraphs.map((para, i) => <p key={i}>{para}</p>)
          ) : (
            <p className="text-muted-foreground">This post doesn't have any content yet.</p>
          )}
        </div>

        <Link
          to="/blog"
          className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all posts
        </Link>
      </motion.article>
    </PageShell>
  );
}
