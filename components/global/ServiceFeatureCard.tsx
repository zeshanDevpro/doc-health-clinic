import Image from "next/image";

type ServiceFeatureCardProps = {
  image: string;
  title: string;
  description: string;
  index: number;
};

export function ServiceFeatureCard({
  image,
  title,
  description,
  index,
}: ServiceFeatureCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[30px] bg-white shadow-[0_10px_40px_rgba(4,36,74,0.08)] ring-1 ring-brand-navy/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(4,36,74,0.14)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-brand-navy/5">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/15 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-brand-green px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white shadow-md">
          {number}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <div className="mb-4 h-1 w-14 rounded-full bg-brand-green" />
        <h4 className="text-2xl font-semibold text-parkonic-secondary md:text-[28px] md:leading-tight">
          {title}
        </h4>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-parkonic-primary md:text-[15px] md:leading-7">
          {description}
        </p>
      </div>
    </div>
  );
}
