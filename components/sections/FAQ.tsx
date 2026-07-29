"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { waGeneral } from "@/lib/site";

const COLORS = ["#FFD93D", "#5BC0FF", "#FF80BF", "#6EE7B7", "#8B5CF6"];

export function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section className="py-14 sm:py-20" aria-labelledby="faq-title">
      <div className="mx-auto max-w-[80rem] px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr,1.15fr] lg:gap-16">
          <Reveal from="left">
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              accent="#5BC0FF"
              title="Questions parents actually ask us"
              sub="And if yours isn't here, one message gets a real answer in minutes."
            />
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid mt-7 bg-sunny"
              style={{ ["--btn-shade" as string]: "#DDA800" }}
            >
              💬 Ask us anything
            </a>
          </Reveal>

          <Reveal from="right" className="space-y-3.5">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className="sticker overflow-hidden"
                  style={{ boxShadow: isOpen ? `0 0 0 3px ${COLORS[i]}` : undefined }}
                >
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-btn-${i}`}
                      className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                    >
                      <span
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl font-display text-base font-extrabold"
                        style={{ background: `${COLORS[i]}45` }}
                        aria-hidden
                      >
                        {i + 1}
                      </span>
                      <span className="flex-1 font-display text-lg font-extrabold leading-snug">{f.q}</span>
                      <span
                        className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-xl font-extrabold transition-transform duration-300"
                        style={{
                          background: COLORS[i],
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-btn-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-6 pl-[4.75rem] pr-6 leading-relaxed text-ink-soft sm:px-6 sm:pl-[5.25rem]">
                          {f.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
