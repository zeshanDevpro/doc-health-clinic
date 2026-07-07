import type { ImageAnimationLayoutMetrics } from "@/types";

export const VISIBLE_THUMBNAIL_COUNT = 2;

function thumbnailStripLeft(
  width: number,
  cardWidth: number,
  gap: number,
  padding = 32,
) {
  const stripWidth =
    VISIBLE_THUMBNAIL_COUNT * cardWidth +
    (VISIBLE_THUMBNAIL_COUNT - 1) * gap;

  return Math.max(24, width - stripWidth - padding);
}

export function getThumbnailX(
  metrics: ImageAnimationLayoutMetrics,
  index: number,
) {
  return metrics.offsetLeft + index * (metrics.cardWidth + metrics.gap);
}

export function isThumbnailVisible(index: number) {
  return index >= 0 && index < VISIBLE_THUMBNAIL_COUNT;
}

export function getHiddenThumbnailX(metrics: ImageAnimationLayoutMetrics) {
  return metrics.width + metrics.cardWidth;
}

export function getImageAnimationLayout(
  section: HTMLElement,
): ImageAnimationLayoutMetrics {
  const rect = section.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));
  const isLarge = width >= 1024;
  const isMedium = width >= 768;

  if (isLarge) {
    const cardWidth = 210;
    const cardHeight = 310;
    const gap = 28;
    const offsetTop = Math.round((height - cardHeight) / 2);
    const offsetLeft = thumbnailStripLeft(width, cardWidth, gap, 56);

    return {
      width,
      height,
      cardWidth,
      cardHeight,
      gap,
      offsetTop,
      offsetLeft,
      thumbnailOffset: 0,
      detailsTop: Math.round(height * 0.28),
      detailsLeft: 56,
      detailsWidth: Math.min(500, width - offsetLeft - 100),
    };
  }

  if (isMedium) {
    const cardWidth = 148;
    const cardHeight = 220;
    const gap = 20;
    const offsetTop = Math.max(240, height - cardHeight - 64);
    const offsetLeft = thumbnailStripLeft(width, cardWidth, gap, 32);

    return {
      width,
      height,
      cardWidth,
      cardHeight,
      gap,
      offsetTop,
      offsetLeft,
      thumbnailOffset: 0,
      detailsTop: 88,
      detailsLeft: 32,
      detailsWidth: Math.min(400, width - 64),
    };
  }

  const cardWidth = 108;
  const cardHeight = 162;
  const gap = 14;
  const offsetTop = Math.max(220, height - cardHeight - 28);
  const offsetLeft = thumbnailStripLeft(width, cardWidth, gap, 16);

  return {
    width,
    height,
    cardWidth,
    cardHeight,
    gap,
    offsetTop,
    offsetLeft,
    thumbnailOffset: 0,
    detailsTop: 48,
    detailsLeft: 16,
    detailsWidth: width - 32,
  };
}

export function applyImageAnimationLayout(
  section: HTMLElement,
  metrics: ImageAnimationLayoutMetrics,
) {
  section.style.setProperty(
    "--image-animation-details-top",
    `${metrics.detailsTop}px`,
  );
  section.style.setProperty(
    "--image-animation-details-left",
    `${metrics.detailsLeft}px`,
  );
  section.style.setProperty(
    "--image-animation-details-width",
    `${metrics.detailsWidth}px`,
  );
}
