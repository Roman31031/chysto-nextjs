import { notFound } from "next/navigation";
import { ArticlePage } from "../../../components/Shared";
import { ARTICLES_CONTENT } from "../../../lib/data";
import { ROUTE_PATH, PATH_ROUTE, PAGE_META } from "../../../lib/routes";

export async function generateStaticParams() {
  return Object.keys(ARTICLES_CONTENT).map((routeId) => ({
    slug: ROUTE_PATH[routeId].split("/").pop(),
  }));
}

function routeIdFromSlug(slug) {
  const path = `/blog/${slug}`;
  return PATH_ROUTE[path];
}

export async function generateMetadata({ params }) {
  const routeId = routeIdFromSlug(params.slug);
  const meta = PAGE_META[routeId] || PAGE_META.home;
  const url = `https://chysto.mk.ua${ROUTE_PATH[routeId] || "/"}`;
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: "чисто.",
      locale: "uk_UA",
      type: "article",
      images: ["/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og-image.jpg"],
    },
    alternates: { canonical: url },
  };
}

export default function Page({ params }) {
  const routeId = routeIdFromSlug(params.slug);
  if (!routeId || !ARTICLES_CONTENT[routeId]) return notFound();
  return <ArticlePage articleRoute={routeId} />;
}
