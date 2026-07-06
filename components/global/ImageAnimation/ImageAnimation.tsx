"use client";

import { useRef } from "react";
import type { ImageAnimationItem } from "@/types";
import { useImageAnimation } from "./useImageAnimation";

type ImageAnimationProps = {
  items: ImageAnimationItem[];
  className?: string;
};

type DetailsPanelProps = {
  id: string;
  item: ImageAnimationItem;
};

function DetailsPanel({ id, item }: DetailsPanelProps) {
  return (
    <div className="image-animation__details" id={id}>
      <div className="image-animation__place-box">
        <div className="image-animation__details-text image-animation__place">
          {item.place}
        </div>
      </div>
      <div className="image-animation__title-box">
        <div className="image-animation__title-1">{item.title}</div>
      </div>
      <div className="image-animation__title-box">
        <div className="image-animation__title-2">{item.title2}</div>
      </div>
      <p className="image-animation__desc">{item.description}</p>
    </div>
  );
}

export function ImageAnimation({ items, className = "" }: ImageAnimationProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useImageAnimation(items, sectionRef, rootRef);

  return (
    <section
      ref={sectionRef}
      className={`image-animation relative h-[min(620px,72vh)] min-h-[500px] w-full min-w-0 overflow-hidden bg-brand-navy text-white sm:h-[min(660px,74vh)] sm:min-h-[540px] md:h-[min(700px,76vh)] lg:h-[90vh] lg:min-h-[90vh] ${className}`}
    >
      <div className="image-animation__indicator" aria-hidden />

      <div ref={rootRef} className="relative h-full w-full min-w-0">
        {items.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            id={`image-animation-card-${index}`}
            className="image-animation__card"
            style={{ backgroundImage: `url(${item.image})` }}
            role="img"
            aria-label={`${item.title} ${item.title2}`}
          />
        ))}

        <DetailsPanel
          id="image-animation-details-even"
          item={items[0]}
        />
        <DetailsPanel
          id="image-animation-details-odd"
          item={items[1] ?? items[0]}
        />

        <div className="image-animation__cover" aria-hidden />
      </div>
    </section>
  );
}

export default ImageAnimation;
