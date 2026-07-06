"use client";

import Link from "next/link";
import { brandButtonClassName } from "@/constants";
import type { SolutionCta } from "@/types";
import { FaCircleArrowRight } from "react-icons/fa6";

const buttonClassName = `${brandButtonClassName} mt-2.5 mr-2.5`;
type HeroButtonProps = {
  cta: SolutionCta;
  onProposal?: () => void;
  onConsultation?: () => void;
};

export function HeroButton({
  cta,
  onProposal,
  onConsultation,
}: HeroButtonProps) {
  if (cta.action === "proposal") {
    return (
      <button type="button" onClick={onProposal} className={buttonClassName}>
        {cta.label}
        <FaCircleArrowRight />

      </button>
    );
  }

  if (cta.action === "consultation") {
    return (
      <button
        type="button"
        onClick={onConsultation}
        className={buttonClassName}
      >
        {cta.label}
        <FaCircleArrowRight />
      </button>
    );
  }

  return (
    <Link href={cta.href ?? "/contact"} className={buttonClassName}>
      {cta.label}
      <FaCircleArrowRight />
    </Link>
  );
}
