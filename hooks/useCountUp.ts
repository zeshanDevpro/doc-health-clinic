"use client";

import { useEffect, useState } from "react";

function formatNumber(value: number) {
  return value.toLocaleString("en-US");
}

export function useCountUp(
  target: number,
  isActive: boolean,
  duration = 2000,
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let startTime: number | null = null;
    let frameId = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(target * progress));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [target, isActive, duration]);

  return formatNumber(value);
}
