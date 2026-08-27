import { notFound } from "next/navigation";
import { ServicePage } from "../../../components/Shared";
import { SERVICES } from "../../../lib/data";
import { ROUTE_PATH, PATH_ROUTE, PAGE_META } from "../../../lib/routes";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: ROUTE_PATH[s.id].split("/").pop() }));
}

function routeIdFromSlug(slug) {
  const path = `/posluhy/${slug}`;
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
      type: "website",
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
  if (!routeId) return notFound();
  return <ServicePage serviceId={routeId} />;
}
