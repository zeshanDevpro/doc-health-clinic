"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { healthTips } from "@/constants";
import type { HealthTip } from "@/types";

function HealthTipModal({
  tip,
  onClose,
}: {
  tip: HealthTip;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close article"
      />
      <motion.div
        className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-48 md:h-56">
          <Image src={tip.image} alt={tip.title} fill className="object-cover" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-md transition hover:bg-white"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-brand-navy">{tip.title}</h3>
          <p className="mt-4 leading-relaxed text-brand-grey">{tip.content}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

type HealthTipsSectionProps = {
  limit?: number;
  showHeading?: boolean;
  showViewAll?: boolean;
};

export function HealthTipsSection({
  limit,
  showHeading = true,
  showViewAll = false,
}: HealthTipsSectionProps) {
  const [activeTip, setActiveTip] = useState<HealthTip | null>(null);
  const items = limit ? healthTips.slice(0, limit) : healthTips;

  return (
    <section className="w-full px-2 py-10 md:px-6 md:py-16 lg:px-10">
      <Container>
        {showHeading && (
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionHeading>
              Health <span>Tips</span>
            </SectionHeading>
            <p className="mt-4 text-brand-grey">
              Short guides from our G-8 team on blood pressure, diabetes, child
              vaccines, smog season, and everyday care  written for life in
              Islamabad, not generic wellness blogs.
            </p>
          </Reveal>
        )}

        <div className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ${showHeading ? "mt-14" : ""}`}>
          {items.map((tip, index) => (
            <Reveal key={tip.id} delay={index * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    width={400}
                    height={240}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-brand-navy">{tip.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-grey">
                    {tip.excerpt}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveTip(tip)}
                    className="mt-4 text-left text-sm font-semibold text-brand-green transition hover:text-brand-navy"
                  >
                    Read More →
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {showViewAll && (
          <Reveal className="mt-10 text-center">
            <Link
              href="/health-tips"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-green"
            >
              View All Health Tips →
            </Link>
          </Reveal>
        )}
      </Container>

      <AnimatePresence>
        {activeTip && (
          <HealthTipModal tip={activeTip} onClose={() => setActiveTip(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
