import { type ReactNode } from "react";
import { HERO_TEXT_GRADIENT, HERO_TEXT_GRADIENT_ON_DARK } from "@/constants";

type SectionHeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function SectionHeading({
  children,
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <Tag
      className={`text-[28px] md:text-[40px] font-extralight leading-tight text-brand-navy [&_span]:font-semibold [&_span]:text-parkonic-secondary ${className}`}
    >
      {children}
    </Tag>
  );
}

export function HeroHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`text-[28px] md:text-[45px] lg:text-[50px] font-semibold leading-tight text-parkonic-primary ${className}`}
    >
      {children}
    </h1>
  );
}

export function GradientText({
  children,
  className = "",
  variant = "light",
}: {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark";
}) {
  const gradient =
    variant === "dark" ? HERO_TEXT_GRADIENT_ON_DARK : HERO_TEXT_GRADIENT;

  return (
    <span
      className={`bg-clip-text text-transparent ${className}`}
      style={{ backgroundImage: gradient }}
    >
      {children}
    </span>
  );
}
