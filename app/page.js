import { HomePage } from "../components/Shared";
import { PAGE_META } from "../lib/routes";

export const metadata = {
  title: PAGE_META.home.title,
  description: PAGE_META.home.description,
  openGraph: {
    title: PAGE_META.home.title,
    description: PAGE_META.home.description,
    url: "https://chysto.mk.ua/",
    siteName: "чисто.",
    locale: "uk_UA",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_META.home.title,
    description: PAGE_META.home.description,
    images: ["/og-image.jpg"],
  },
  alternates: { canonical: "https://chysto.mk.ua/" },
};

export default function Page() {
  return <HomePage />;
}
