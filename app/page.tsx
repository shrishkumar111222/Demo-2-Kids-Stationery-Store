import { CartProvider } from "@/components/CartProvider";
import { Preloader } from "@/components/Preloader";
import { FloatingCTAs, ScrollProgress } from "@/components/Floating";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Categories } from "@/components/sections/Categories";
import { SchoolEssentials } from "@/components/sections/SchoolEssentials";
import { ArtCraft } from "@/components/sections/ArtCraft";
import { Backpacks, LunchBoxes, PencilBoxes } from "@/components/sections/Collections";
import { Offers } from "@/components/sections/Offers";
import { BestSellers } from "@/components/sections/BestSellers";
import { WhyParents } from "@/components/sections/WhyParents";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { LeadGen } from "@/components/sections/LeadGen";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { faqs } from "@/lib/data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <CartProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Preloader />
      <ScrollProgress />
      <Header />

      <main className="relative z-[1]">
        <Hero />
        <Features />
        <Categories />
        <SchoolEssentials />
        <ArtCraft />
        <Backpacks />
        <LunchBoxes />
        <PencilBoxes />
        <Offers />
        <BestSellers />
        <WhyParents />
        <Testimonials />
        <Gallery />
        <FAQ />
        <LeadGen />
        <Contact />
      </main>

      <Footer />
      <FloatingCTAs />
    </CartProvider>
  );
}
