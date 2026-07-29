export const site = {
  name: "Doodle & Dot",
  tagline: "Kids Stationery, School Supplies & Gifts",
  phoneDisplay: "+91 99054 29650",
  phone: "+919905429650",
  whatsapp: "919905429650",
  email: "hello@doodleanddot.in",
  addressLine: "Shop 12, Sunshine Plaza, Boring Road",
  city: "Patna",
  state: "Bihar",
  postal: "800001",
  hours: "Mon – Sat · 9:00 AM – 8:00 PM  ·  Sun · 11:00 AM – 6:00 PM",
  mapQuery: "Boring+Road+Patna+Bihar",
  demoPrice: "₹4,999",
  url: "https://doodleanddot.example.com",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waGeneral = waLink(
  `Hi ${site.name}! 👋 I'd like to know more about your stationery and gift collection.`,
);

export const waDemo = waLink(
  "Hi! I own a stationery store and I'd like a FREE website demo like this one. Please share the details.",
);

export function waProduct(name: string, price: number) {
  return waLink(
    `Hi ${site.name}! 👋 I'd like to order:\n\n• ${name} — ₹${price}\n\nIs it available?`,
  );
}

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "School Essentials", href: "#school" },
  { label: "Art & Craft", href: "#art" },
  { label: "Offers", href: "#offers" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
