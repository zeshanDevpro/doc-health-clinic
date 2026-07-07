"use client";

import Image from "next/image";
import { type ReactNode, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa6";
import type { Testimonial } from "@/types";

import "swiper/css";

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
  title?: ReactNode;
  subtitle?: string;
  className?: string;
};

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="mb-4 flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-gray-200"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-[12px] border border-gray-100 bg-white p-2 shadow-[0_10px_40px_-20px_rgba(15,118,110,0.12)] md:rounded-[24px] md:p-8">
      <StarRating rating={testimonial.rating} />
      <p className="mb-6 flex-1 break-words text-base leading-relaxed text-brand-grey md:text-lg">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex min-w-0 items-center gap-4 border-t border-gray-100 pt-5">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-navy text-lg font-semibold text-white">
            {testimonial.name.charAt(0)}
          </div>
        )}

        <div className="min-w-0">
          <p className="font-semibold text-brand-navy">{testimonial.name}</p>
          <p className="break-words text-sm text-brand-grey">
            {testimonial.role}
            {testimonial.company ? ` · ${testimonial.company}` : ""}
          </p>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsCarousel({
  testimonials,
  title,
  subtitle,
  className = "",
}: TestimonialsCarouselProps) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (testimonials.length === 0) return null;

  const syncNavState = (instance: SwiperType) => {
    setIsBeginning(instance.isBeginning);
    setIsEnd(instance.isEnd);
  };

  const navButtonClassName =
    "relative z-20 inline-flex h-11 w-11 touch-manipulation hover:cursor-pointer items-center justify-center rounded-full border-2 border-brand-green bg-brand-navy text-white transition hover:border-brand-green-light hover:bg-brand-navy-dark disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div className={`min-w-0 overflow-x-hidden ${className}`}>
      {(title || subtitle) && (
        <div className="relative z-20 mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            {title && (
              <h2 className="text-[28px] font-extralight leading-tight text-parkonic-primary md:text-[40px]">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-base leading-relaxed text-brand-grey md:text-lg">
                {subtitle}
              </p>
            )}
          </div>

          <div className="relative z-20 flex shrink-0 items-center justify-end gap-2 sm:justify-start">
            <button
              type="button"
              aria-label="Previous testimonial"
              disabled={isBeginning}
              onClick={() => swiper?.slidePrev()}
              className={navButtonClassName}
            >
              <FaChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              disabled={isEnd}
              onClick={() => swiper?.slideNext()}
              className={navButtonClassName}
            >
              <FaChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <div className="overflow-hidden">
        <Swiper
          onSwiper={(instance) => {
            setSwiper(instance);
            syncNavState(instance);
          }}
          onSlideChange={syncNavState}
          onBreakpoint={syncNavState}
          onResize={syncNavState}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="!overflow-hidden"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="!h-auto !min-w-0">
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
