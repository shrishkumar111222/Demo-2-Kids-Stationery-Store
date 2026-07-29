"use client";

import { schoolEssentials } from "@/lib/data";
import { ProductCard } from "@/components/ui/ProductCard";
import { Rail } from "@/components/ui/Rail";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { waLink } from "@/lib/site";

const listWa = waLink(
  "Hi! 👋 Here's my child's school list — please tell me the total and deliver it. (You can send a photo of the list too!)",
);

export function SchoolEssentials() {
  return (
    <section id="school" className="relative scroll-mt-24 overflow-hidden py-14 sm:py-20" aria-labelledby="school-title">
      {/* ruled-paper backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
        aria-hidden
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0 43px, rgba(91,192,255,0.22) 43px 45px)",
          maskImage: "linear-gradient(to bottom, transparent, #000 18%, #000 82%, transparent)",
        }}
      />
      <div className="pointer-events-none absolute inset-y-0 left-10 -z-10 w-[3px] bg-bubble/30 sm:left-24" aria-hidden />

      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="School Essentials"
              accent="#8B5CF6"
              title="The whole school list, sorted in one trip"
              sub="Send us a photo of the list your school handed out. We'll price it, pack it and drop it home — nothing missing, nothing extra."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <a
              href={listWa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid bg-grape text-white"
              style={{ ["--btn-shade" as string]: "#5B29C9" }}
            >
              📋 Send my school list
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-10">
          <Rail label="School essentials products">
            {schoolEssentials.map((p) => (
              <ProductCard key={p.id} product={p} className="w-[16.5rem] sm:w-[18rem]" />
            ))}
          </Rail>
        </Reveal>
      </div>
    </section>
  );
}
