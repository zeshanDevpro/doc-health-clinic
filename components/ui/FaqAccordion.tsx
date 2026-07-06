"use client";

import { type ReactNode, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import type { FaqItem } from "@/types";

type FaqAccordionProps = {
  items: FaqItem[];
  title?: ReactNode;
  subtitle?: string;
  className?: string;
  defaultOpenIndex?: number | null;
};

type FaqAccordionItemProps = {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
};

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
  isLast,
}: FaqAccordionItemProps) {
  return (
    <div className="py-1">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full cursor-pointer items-center justify-between gap-6 pb-4 text-left ${isOpen || isLast ? "" : ""
          }`}
      >
        <h3 className="text-sm font-semibold text-brand-navy md:text-lg">
          {item.question}
        </h3>
        <motion.span
          className="shrink-0 text-brand-green"
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <HiPlus size={22} aria-hidden />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className={`text-sm leading-relaxed text-brand-grey md:text-base ${isLast ? "pb-1" : "border-b border-gray-200 pb-4"
                }`}
            >
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqAccordion({
  items,
  title,
  subtitle,
  className = "",
  defaultOpenIndex = 0,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  if (items.length === 0) return null;

  return (
    <div className={className}>
      {(title || subtitle) && (
        <div className="mb-8 flex flex-col items-center justify-center gap-3 text-center">
          {title && (
            <h2 className="text-[28px] font-extralight leading-tight text-parkonic-primary md:text-[40px]">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="max-w-xl text-base text-brand-grey md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="rounded-[24px] px-2 py-3 shadow-[0_10px_40px_-20px_rgba(4,36,74,0.12)] md:px-8 md:py-10 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <FaqAccordionItem
            key={item.id}
            item={item}
            isOpen={openIndex === index}
            isLast={index === items.length - 1}
            onToggle={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
}
