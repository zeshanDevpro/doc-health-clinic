"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "@/lib/gsap";
import {
  applyImageAnimationLayout,
  getHiddenThumbnailX,
  getImageAnimationLayout,
  getThumbnailX,
  isThumbnailVisible,
} from "@/lib/image-animation-layout";
import type { ImageAnimationItem } from "@/types";

const EASE = "sine.inOut";
const STEP_DURATION = 0.85;
const INDICATOR_HOLD = 2;
const INDICATOR_SWEEP = 0.8;
const RESIZE_DEBOUNCE_MS = 250;
const WIDTH_CHANGE_THRESHOLD = 8;

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function animateTo(
  target: gsap.TweenTarget,
  properties: gsap.TweenVars,
  duration = STEP_DURATION,
) {
  return new Promise<void>((resolve) => {
    gsap.to(target, {
      ...properties,
      duration,
      ease: EASE,
      overwrite: "auto",
      onComplete: resolve,
    });
  });
}

export function useImageAnimation(
  items: ImageAnimationItem[],
  sectionRef: RefObject<HTMLElement | null>,
  rootRef: RefObject<HTMLDivElement | null>,
) {
  useEffect(() => {
    const section = sectionRef.current;
    const root = rootRef.current;
    if (!section || !root || items.length === 0) return;

    let destroyed = false;
    let loopGeneration = 0;
    let resizeTimeout: number | undefined;
    let lastWidth = 0;
    let introPlayed = false;
    let introComplete = false;

    let order = items.map((_, index) => index);
    let detailsEven = true;
    let metrics = getImageAnimationLayout(section);

    const get = (selector: string) =>
      root.querySelector<HTMLElement>(selector);
    const getCard = (index: number) => get(`#image-animation-card-${index}`);

    const hideCover = () => {
      const cover = get(".image-animation__cover");
      if (!cover) return;

      metrics = getImageAnimationLayout(section);
      gsap.set(cover, { x: metrics.width + 400 });
    };

    const detailsSelectors = () => ({
      active: detailsEven
        ? "#image-animation-details-even"
        : "#image-animation-details-odd",
      inactive: detailsEven
        ? "#image-animation-details-odd"
        : "#image-animation-details-even",
    });

    const setDetailsContent = (itemIndex: number, panelSelector: string) => {
      const panel = get(panelSelector);
      const item = items[itemIndex];
      if (!panel || !item) return;

      panel.querySelector(".image-animation__place")!.textContent = item.place;
      panel.querySelector(".image-animation__title-1")!.textContent =
        item.title;
      panel.querySelector(".image-animation__title-2")!.textContent =
        item.title2;
      panel.querySelector(".image-animation__desc")!.textContent =
        item.description;
    };

    const heroCardProps = () => ({
      x: 0,
      y: 0,
      width: metrics.width,
      height: metrics.height,
      borderRadius: 0,
      scale: 1,
      opacity: 1,
      zIndex: 20,
    });

    const thumbnailCardProps = (thumbIndex: number) => {
      const visible = isThumbnailVisible(thumbIndex);

      return {
        x: visible
          ? getThumbnailX(metrics, thumbIndex)
          : getHiddenThumbnailX(metrics),
        y: metrics.offsetTop,
        width: metrics.cardWidth,
        height: metrics.cardHeight,
        borderRadius: 10,
        scale: 1,
        opacity: visible ? 1 : 0,
        zIndex: 30,
      };
    };

    const applyOrderLayout = (immediate = true) => {
      metrics = getImageAnimationLayout(section);
      applyImageAnimationLayout(section, metrics);

      const [active, ...rest] = order;
      const { active: activeDetails, inactive: inactiveDetails } =
        detailsSelectors();

      const apply = (target: gsap.TweenTarget, vars: gsap.TweenVars) => {
        if (immediate) {
          gsap.set(target, vars);
        }
      };

      apply(getCard(active), heroCardProps());
      rest.forEach((cardIndex, thumbIndex) => {
        apply(getCard(cardIndex), thumbnailCardProps(thumbIndex));
      });

      apply(get(activeDetails), { opacity: 1, zIndex: 22, x: 0 });
      apply(get(inactiveDetails), { opacity: 0, zIndex: 12, x: 0 });
      apply(`${inactiveDetails} .image-animation__details-text`, { y: 100 });
      apply(`${inactiveDetails} .image-animation__title-1`, { y: 100 });
      apply(`${inactiveDetails} .image-animation__title-2`, { y: 100 });
      apply(`${inactiveDetails} .image-animation__desc`, { y: 50 });

      setDetailsContent(active, activeDetails);

      if (introComplete) {
        hideCover();
      }
    };

    const playIntro = async (generation: number) => {
      const indicator = get(".image-animation__indicator");
      const cover = get(".image-animation__cover");
      if (!indicator || !cover) {
        introComplete = true;
        hideCover();
        return;
      }

      try {
        gsap.set(indicator, { x: -metrics.width });
        gsap.set(cover, { x: 0 });

        await animateTo(cover, { x: metrics.width + 400 }, 1.1);
        if (destroyed || generation !== loopGeneration) return;

        gsap.set(cover, { x: metrics.width + 400 });

        const [active, ...rest] = order;
        const { active: activeDetails } = detailsSelectors();

        setDetailsContent(active, activeDetails);

        gsap.set(`${activeDetails} .image-animation__details-text`, { y: 100 });
        gsap.set(`${activeDetails} .image-animation__title-1`, { y: 100 });
        gsap.set(`${activeDetails} .image-animation__title-2`, { y: 100 });
        gsap.set(`${activeDetails} .image-animation__desc`, { y: 50 });

        await Promise.all([
          animateTo(activeDetails, { opacity: 1, x: 0 }, 0.7),
          animateTo(`${activeDetails} .image-animation__details-text`, { y: 0 }, 0.7),
          animateTo(`${activeDetails} .image-animation__title-1`, { y: 0 }, 0.7),
          animateTo(`${activeDetails} .image-animation__title-2`, { y: 0 }, 0.7),
          animateTo(`${activeDetails} .image-animation__desc`, { y: 0 }, 0.65),
          ...rest.map((cardIndex, thumbIndex) =>
            animateTo(
              getCard(cardIndex),
              thumbnailCardProps(thumbIndex),
              0.7,
            ),
          ),
        ]);
      } finally {
        if (!destroyed && generation === loopGeneration) {
          introComplete = true;
          hideCover();
        }
      }
    };

    const runIndicator = async () => {
      const indicator = get(".image-animation__indicator");
      if (!indicator) return;

      gsap.set(indicator, { x: -metrics.width });
      await animateTo(indicator, { x: 0 }, INDICATOR_HOLD);
      if (destroyed) return;
      await animateTo(indicator, { x: metrics.width }, INDICATOR_SWEEP);
      if (destroyed) return;
      gsap.set(indicator, { x: -metrics.width });
    };

    const step = async () => {
      metrics = getImageAnimationLayout(section);
      applyImageAnimationLayout(section, metrics);

      order.push(order.shift()!);
      detailsEven = !detailsEven;

      const active = order[0];
      const previous = order[order.length - 1];
      const { active: activeDetails, inactive: inactiveDetails } =
        detailsSelectors();

      setDetailsContent(active, activeDetails);

      gsap.set(`${activeDetails} .image-animation__details-text`, { y: 100 });
      gsap.set(`${activeDetails} .image-animation__title-1`, { y: 100 });
      gsap.set(`${activeDetails} .image-animation__title-2`, { y: 100 });
      gsap.set(`${activeDetails} .image-animation__desc`, { y: 50 });

      gsap.set(get(activeDetails), { zIndex: 22, x: 0 });
      gsap.set(get(inactiveDetails), { zIndex: 12 });
      gsap.set(getCard(previous), { zIndex: 10 });
      gsap.set(getCard(active), { zIndex: 20 });

      const detailDuration = 0.55;
      const detailTimeline = gsap.timeline();
      detailTimeline.to(
        get(activeDetails),
        { opacity: 1, ease: EASE, duration: detailDuration },
        0.35,
      );
      detailTimeline.to(
        `${activeDetails} .image-animation__details-text`,
        { y: 0, ease: EASE, duration: detailDuration },
        0.4,
      );
      detailTimeline.to(
        `${activeDetails} .image-animation__title-1`,
        { y: 0, ease: EASE, duration: detailDuration },
        0.45,
      );
      detailTimeline.to(
        `${activeDetails} .image-animation__title-2`,
        { y: 0, ease: EASE, duration: detailDuration },
        0.45,
      );
      detailTimeline.to(
        `${activeDetails} .image-animation__desc`,
        { y: 0, ease: EASE, duration: detailDuration },
        0.55,
      );

      await Promise.all([
        animateTo(getCard(previous), { scale: 1.5 }, STEP_DURATION),
        animateTo(getCard(active), heroCardProps(), STEP_DURATION),
        new Promise<void>((resolve) => {
          detailTimeline.eventCallback("onComplete", resolve);
        }),
      ]);

      if (destroyed) return;

      const previousThumbIndex = order.length - 2;
      gsap.set(getCard(previous), {
        ...thumbnailCardProps(previousThumbIndex),
        scale: 1,
      });

      gsap.set(get(inactiveDetails), { opacity: 0 });
      gsap.set(`${inactiveDetails} .image-animation__details-text`, { y: 100 });
      gsap.set(`${inactiveDetails} .image-animation__title-1`, { y: 100 });
      gsap.set(`${inactiveDetails} .image-animation__title-2`, { y: 100 });
      gsap.set(`${inactiveDetails} .image-animation__desc`, { y: 50 });

      await Promise.all(
        order.slice(1).map((cardIndex, thumbIndex) => {
          if (cardIndex === previous) return Promise.resolve();

          gsap.set(getCard(cardIndex), { zIndex: 30 });
          return animateTo(
            getCard(cardIndex),
            thumbnailCardProps(thumbIndex),
            0.55,
          );
        }),
      );
    };

    const runLoop = async (generation: number) => {
      while (!destroyed && generation === loopGeneration) {
        await runIndicator();
        if (destroyed || generation !== loopGeneration) return;

        await step();
        if (destroyed || generation !== loopGeneration) return;

        await wait(350);
      }
    };

    const start = async () => {
      loopGeneration += 1;
      const generation = loopGeneration;

      gsap.killTweensOf(root.querySelectorAll("*"));
      applyOrderLayout(true);

      if (!introPlayed) {
        introPlayed = true;
        await playIntro(generation);
      } else {
        introComplete = true;
        hideCover();
      }

      if (destroyed || generation !== loopGeneration) return;
      await runLoop(generation);
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        if (destroyed || !introComplete) return;

        const nextMetrics = getImageAnimationLayout(section);
        const widthDelta = Math.abs(nextMetrics.width - lastWidth);

        if (widthDelta < WIDTH_CHANGE_THRESHOLD && lastWidth > 0) {
          return;
        }

        lastWidth = nextMetrics.width;
        loopGeneration += 1;
        const generation = loopGeneration;
        gsap.killTweensOf(root.querySelectorAll("*"));
        applyOrderLayout(true);
        hideCover();
        void runLoop(generation);
      }, RESIZE_DEBOUNCE_MS);
    };

    const waitForLayout = () =>
      new Promise<void>((resolve) => {
        const check = () => {
          const layout = getImageAnimationLayout(section);
          if (layout.width > 1 && layout.height > 1) {
            lastWidth = layout.width;
            resolve();
            return;
          }
          requestAnimationFrame(check);
        };
        check();
      });

    let resizeObserver: ResizeObserver | undefined;

    void (async () => {
      await waitForLayout();
      if (destroyed) return;
      await start();
    })();

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(section);
    } else {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      destroyed = true;
      loopGeneration += 1;
      window.clearTimeout(resizeTimeout);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", handleResize);
      gsap.killTweensOf(root.querySelectorAll("*"));
      hideCover();
    };
  }, [items, rootRef, sectionRef]);
}
