import Link from "next/link";
import { type ReactNode } from "react";
import { brandButtonClassName } from "@/constants";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function Button({
  href,
  children,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`${brandButtonClassName} mt-2.5 mr-2.5 hover:cursor-pointer ${className}`}
    >
      {children}
    </Link>
  );
}
