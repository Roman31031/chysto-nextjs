import "./globals.css";
import { NavBar, Footer, FloatingContactWidget, OrderModalProvider } from "../components/Shared";
import { PAGE_META } from "../lib/routes";

export const metadata = {
  metadataBase: new URL("https://chysto.mk.ua"),
  title: PAGE_META.home.title,
  description: PAGE_META.home.description,
};

const SITE = "https://chysto.mk.ua";

const SCHEMA_JSON = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE}/#business`,
  name: "чисто. — клінінгова служба",
  alternateName: "Клінінгова компанія «чисто.»",
  description:
    "Клінінгова компанія «чисто.» у Миколаєві: генеральне прибирання квартир і будинків, миття вікон, прибирання після ремонту, прибирання офісів, хімчистка м'яких меблів.",
  url: SITE,
  image: `${SITE}/og-image.jpg`,
  logo: `${SITE}/logo.png`,
  telephone: "+380731164239",
  email: "chysto.mk@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Миколаїв",
    addressRegion: "Миколаївська область",
    addressCountry: "UA",
  },
  areaServed: ["Миколаїв", "Баштанка", "Нова Одеса", "Снігурівка"].map((n) => ({
    "@type": "City",
    name: n,
  })),
  sameAs: [
    "https://t.me/chystomk",
    "https://instagram.com/kliningovakompani",
    "https://facebook.com/kliningovakompani",
  ],
  priceRange: "від 2400 ₴",
  currenciesAccepted: "UAH",
  foundingDate: "2024",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Послуги клінінгу",
    itemListElement: [
      ["Генеральне прибирання", "/posluhy/generalne-prybyrannya"],
      ["Миття вікон", "/posluhy/myttya-vikon"],
      ["Прибирання після ремонту", "/posluhy/prybyrannya-pislya-remontu"],
      ["Експрес прибирання", "/posluhy/ekspres-prybyrannya"],
      ["Прибирання офісів", "/posluhy/prybyrannya-ofisiv"],
      ["Хімчистка меблів", "/posluhy/himchystka-mebliv"],
    ].map(([name, path]) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
        url: `${SITE}${path}`,
        areaServed: { "@type": "City", name: "Миколаїв" },
      },
    })),
  },
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
        <OrderModalProvider>
          <NavBar />
          {children}
          <FloatingContactWidget />
          <Footer />
        </OrderModalProvider>
      </body>
    </html>
  );
}
