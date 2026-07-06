"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type LogoMarqueeProps = {
  items: { src: string; alt: string }[];
  imageClassName?: string;
  variant?: "logo" | "photo";
};

const logoTileClassName =
  "flex h-[88px] w-[200px] shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-4 shadow-sm";

export function LogoMarquee({
  items,
  imageClassName = "h-[120px] w-auto max-w-[516px] object-contain",
  variant = "photo",
}: LogoMarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="animate-marquee flex w-max items-center gap-10 md:gap-14">
        {doubled.map((item, index) => (
          <div
            key={`${item.src}-${index}`}
            className={variant === "logo" ? logoTileClassName : "shrink-0"}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={variant === "logo" ? 180 : 516}
              height={variant === "logo" ? 72 : 120}
              className={
                variant === "logo"
                  ? "h-[56px] w-full max-w-[168px] object-contain"
                  : imageClassName
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarqueeCarousel({
  items,
  title,
  variant = "photo",
}: {
  items: { src: string; alt: string }[];
  title: string;
  variant?: "logo" | "photo";
}) {
  return (
    <div className="mt-5 overflow-hidden">
      <h4 className="mb-4 text-2xl font-medium text-parkonic-secondary">
        {title}
      </h4>
      <LogoMarquee items={items} variant={variant} />
    </div>
  );
}

export function FadeCarousel({
  items,
}: {
  items: { src: string; alt: string }[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className="relative overflow-hidden rounded-[30px]">
      {items.map((item, index) => (
        <div
          key={item.src}
          className={`transition-opacity duration-700 ${index === activeIndex
            ? "relative opacity-100"
            : "absolute inset-0 opacity-0"
            }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={516}
            height={400}
            className="h-auto w-full rounded-[30px] object-cover"
          />
        </div>
      ))}
    </div>
  );
}
