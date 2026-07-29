import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const display = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Kids Stationery, School Supplies & Gifts in ${site.city}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Colourful kids stationery, school supplies, backpacks, lunch boxes, art & craft kits and gifts — with same-day delivery and easy WhatsApp ordering.",
  keywords: [
    "kids stationery store",
    "school supply store",
    "back to school",
    "school bags",
    "lunch boxes",
    "art and craft supplies",
    "gift shop for kids",
    `stationery shop ${site.city}`,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Everything Kids Need for School & Creativity`,
    description:
      "Stationery, school supplies, backpacks, lunch boxes and gifts — all in one happy place. Order on WhatsApp, delivered the same day.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Kids Stationery & Gift Store`,
    description: "Colourful school supplies, art & craft kits, bags and gifts. Same-day delivery, WhatsApp ordering.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#FFFDF8",
  width: "device-width",
  initialScale: 1,
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      "@id": `${site.url}#store`,
      name: site.name,
      description:
        "Kids stationery, school supplies, art & craft materials, backpacks, lunch boxes and gift items.",
      url: site.url,
      telephone: site.phone,
      email: site.email,
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: site.addressLine,
        addressLocality: site.city,
        addressRegion: site.state,
        postalCode: site.postal,
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "11:00",
          closes: "18:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1247",
      },
      makesOffer: [
        "School Essentials",
        "Art & Craft Supplies",
        "School Bags",
        "Lunch Boxes & Bottles",
        "Pencil Boxes",
        "Gift Items",
      ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Product", name: n } })),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}#store` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
