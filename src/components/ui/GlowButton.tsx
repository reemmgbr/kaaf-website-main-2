import Link from "next/link";
import React from "react";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
}

export function GlowButton({
  children,
  href,
  target,
  rel,
  id,
  onClick,
  className = "",
  ariaLabel,
  type = "button",
}: GlowButtonProps) {
  const baseClasses = `
    group relative inline-flex items-center justify-center rounded-full
    border border-[#D2BB79] px-6 sm:px-10 py-3.5 font-forma text-base sm:text-lg font-bold text-[#FFF7E6]
    glow-button-gradient
    shadow-[0_0_15px_rgba(210,187,121,0.2)]
    whitespace-nowrap
    hover:border-[#FFF7E6] hover:text-[#FFF7E6]
    hover:shadow-[0_0_35px_rgba(210,187,121,0.55)]
    focus-visible:outline-2 focus-visible:outline-[#D2BB79] focus-visible:outline-offset-2
  `.replace(/\s+/g, " ").trim();

  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        id={id}
        onClick={onClick}
        aria-label={ariaLabel}
        className={combinedClasses}
      >
        <span className="relative z-10 whitespace-nowrap">
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      aria-label={ariaLabel}
      className={combinedClasses}
    >
      <span className="relative z-10 whitespace-nowrap">
        {children}
      </span>
    </button>
  );
}
