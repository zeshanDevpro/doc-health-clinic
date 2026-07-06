"use client";

import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

type AnimatedCounterProps = {
  target: number;
  suffix?: string;
  className?: string;
};

export function AnimatedCounter({
  target,
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>();
  const value = useCountUp(target, isInView);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
