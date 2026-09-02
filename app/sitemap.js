import { ROUTE_PATH } from "../lib/routes";

const BASE = "https://chysto.mk.ua";

export default function sitemap() {
  const now = new Date();

  return Object.entries(ROUTE_PATH).map(([key, path]) => {
    const isHome = path === "/";
    const isService = path.startsWith("/posluhy/");

    return {
      url: isHome ? `${BASE}/` : `${BASE}${path}`,
      lastModified: now,
      changeFrequency: isHome || isService ? "weekly" : "monthly",
      priority: isHome ? 1 : isService ? 0.8 : 0.6,
    };
  });
}
