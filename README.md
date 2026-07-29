# Doodle & Dot — Kids Stationery & Gift Store (Demo)

A playful, premium demo storefront for a kids stationery / school supply / gift shop, built to show
local shop owners what a modern website can do for their business.

**Stack:** Next.js 15 (App Router) · Tailwind CSS · Framer Motion · TypeScript

---

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Design direction

A **"sticker book"** aesthetic — cream paper background (`#FFFDF8`) with a faint dot grid, chunky
rounded cards that sit on the page like stickers, offset colour plates behind key cards (a
risograph-print nod), and thick-outlined flat illustrations.

- **Fonts** — Baloo 2 (chunky rounded display) + Nunito (friendly, highly readable body)
- **Palette** — Yellow `#FFD93D`, Sky `#5BC0FF`, Purple `#8B5CF6`, Pink `#FF80BF`, Mint `#6EE7B7`,
  ink `#2A2145` on cream. No dark backgrounds except the footer and two contrast bands.
- **Buttons** — solid fills with a hard bottom shadow that compresses on press, so every tap feels
  physical.

### Illustrations are code, not stock photos

Every product visual, the hero scene and all decorative art are **hand-written inline SVG**
(`components/art/`). Nothing is fetched from an image CDN. That keeps the page fast, infinitely
recolourable, crisp at any size, and free of licensing questions. When this is adapted for a real
shop, drop real product photography into `ProductCard` in place of `<ProductArt />`.

## What's in the page

| Section | File |
| --- | --- |
| Sticky header, search overlay, mobile drawer | `components/sections/Header.tsx` |
| Hero — parallax, drifting clouds, bubbles, floating stationery, animated counters | `components/sections/Hero.tsx` |
| Ticker + feature highlights | `components/sections/Features.tsx` |
| Shop by category (13 aisles) | `components/sections/Categories.tsx` |
| School essentials slider | `components/sections/SchoolEssentials.tsx` |
| Art & craft (animated paint splashes) | `components/sections/ArtCraft.tsx` |
| Backpacks · lunch boxes · pencil boxes | `components/sections/Collections.tsx` |
| Back-to-school sale banner (confetti, balloons, countdown) | `components/sections/Offers.tsx` |
| 12 best sellers with live filters | `components/sections/BestSellers.tsx` |
| Why parents love us + stat band | `components/sections/WhyParents.tsx` |
| Testimonial carousel | `components/sections/Testimonials.tsx` |
| Instagram-style gallery | `components/sections/Gallery.tsx` |
| FAQ accordion | `components/sections/FAQ.tsx` |
| Lead-gen: before/after, pricing, final CTA | `components/sections/LeadGen.tsx` |
| Contact form, map, hours | `components/sections/Contact.tsx` |
| Footer + newsletter | `components/sections/Footer.tsx` |

Shared pieces: cart drawer + toast (`components/CartProvider.tsx`), product card & quick-view modal
(`components/ui/ProductCard.tsx`), scroll reveals (`components/ui/Reveal.tsx`), sliders
(`components/ui/Rail.tsx`), floating WhatsApp + sticky mobile bar (`components/Floating.tsx`).

## Commerce behaviour (demo)

There is no backend. The cart is client-side state; **checkout, every product's "WhatsApp Order"
button and the contact form all open a pre-filled `wa.me` message** to the number in
`lib/site.ts`. That is deliberate — it's how these shops actually take orders.

## Lead generation

Built in for the sales pitch: floating WhatsApp button (+91 99054 29650), "Request Your FREE Website
Demo" pill, sticky 4-action mobile bar, "Website starting from ₹4,999", "Trusted by local
businesses", a Without-a-website vs With-a-website comparison, and the closing
*"Ready to Make Your Store Every Parent's First Choice?"* CTA.

## Accessibility & SEO

- Semantic landmarks, labelled regions, skip link, visible focus rings, `aria-expanded` on the
  accordion, `aria-modal` dialogs with Escape-to-close and body scroll lock.
- Every animation respects `prefers-reduced-motion`.
- `Store`, `WebSite` and `FAQPage` JSON-LD, full Open Graph / Twitter metadata, `robots.ts`,
  `sitemap.ts`, self-hosted fonts via `next/font`, zero raster images.

## Customising for a real shop

1. `lib/site.ts` — name, phone/WhatsApp number, address, hours, pricing.
2. `lib/data.ts` — products, categories, testimonials, FAQs.
3. `tailwind.config.ts` — palette.
4. Swap `<ProductArt />` for real photography in `components/ui/ProductCard.tsx`.
