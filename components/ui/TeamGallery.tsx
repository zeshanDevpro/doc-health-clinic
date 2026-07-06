import Image from "next/image";
import { type ReactNode } from "react";
import type { TeamGroupPhoto } from "@/types";

type TeamGalleryProps = {
  photos: TeamGroupPhoto[];
  title?: ReactNode;
  subtitle?: string;
  className?: string;
};

function TeamGroupCard({ photo }: { photo: TeamGroupPhoto }) {
  return (
    <figure className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-[0_12px_48px_-24px_rgba(4,36,74,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-green/25 hover:shadow-[0_20px_50px_-20px_rgba(4,36,74,0.22)]">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-off-white">
        <Image
          src={photo.image}
          alt={photo.alt}
          fill
          className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <figcaption className="flex flex-1 flex-col px-5 py-5 md:px-6 md:py-6">
        {photo.caption && (
          <h3 className="text-lg font-semibold text-brand-navy md:text-xl">
            {photo.caption}
          </h3>
        )}
        {photo.description && (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-grey md:text-base">
            {photo.description}
          </p>
        )}
      </figcaption>
    </figure>
  );
}

export function TeamGallery({
  photos,
  title,
  subtitle,
  className = "",
}: TeamGalleryProps) {
  if (photos.length === 0) return null;

  return (
    <div className={className}>
      {(title || subtitle) && (
        <div className="mb-12 flex flex-col items-center justify-center gap-3 text-center">
          {title && (
            <h2 className="text-[28px] font-extralight leading-tight text-parkonic-primary md:text-[40px]">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="max-w-2xl text-base text-brand-grey md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {photos.map((photo) => (
          <TeamGroupCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}
