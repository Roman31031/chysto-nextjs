import { NavBar, Footer, FloatingContactWidget, OrderModal } from "../components/Shared";
import { PAGE_META } from "../lib/routes";

export const metadata = {
  metadataBase: new URL("https://chysto.mk.ua"),
  title: PAGE_META.home.title,
  description: PAGE_META.home.description,
};

const SCHEMA_JSON = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "чисто. — клінінгова служба",
  alternateName: "клининг Николаев, заказать клининг, убрать квартиру Николаев, уборка квартир",
  areaServed: ["Миколаїв", "Баштанка", "Нова Одеса", "Снігурівка"],
  telephone: "+380731164239",
  email: "chysto.mk@gmail.com",
  sameAs: [
    "https://t.me/chystomk",
    "https://instagram.com/kliningovakompani",
    "https://facebook.com/kliningovakompani",
  ],
  priceRange: "від 2400 ₴",
  foundingDate: "2024",
  openingHours: "Mo-Su 08:00-21:00",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_JSON) }}
        />
      </head>
      <body>
        <NavBar />
        {children}
        <FloatingContactWidget />
        <Footer />
      </body>
    </html>
  );
}
