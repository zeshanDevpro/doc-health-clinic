import Link from "next/link";

export function PrimaryAnchor({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group mt-4 inline-flex items-center text-lg font-semibold text-parkonic-primary no-underline transition-colors hover:text-parkonic-secondary"
    >
      {children}
      <span
        className="ml-2 inline-block h-5 w-11 bg-[url('/images/svg/button-arrow-icon.svg')] bg-contain bg-right bg-no-repeat transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}

export function CircleButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="group absolute right-1.5 bottom-2.5 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-parkonic-accent transition-all duration-400 hover:rotate-45"
      title="news-link"
      aria-label="View news"
    >
      <span
        className="inline-block h-5 w-5 -rotate-45 bg-[url('/images/svg/button-arrow-icon.svg')] bg-contain bg-center bg-no-repeat transition-transform duration-300 group-hover:rotate-0"
        aria-hidden
      />
    </Link>
  );
}
