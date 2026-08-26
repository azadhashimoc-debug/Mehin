import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "link";
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  target,
  rel,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center text-xs tracking-widest uppercase transition-all duration-300 font-medium";

  const variants = {
    primary:
      "bg-charcoal text-ivory px-7 py-3.5 rounded-sm hover:bg-charcoal-light hover:text-champagne-light border border-charcoal hover:border-champagne/40",
    secondary:
      "bg-ivory-secondary text-charcoal px-7 py-3.5 rounded-sm hover:bg-ivory-subtle border border-black/10 hover:border-champagne/40",
    outline:
      "bg-transparent text-charcoal px-7 py-3.5 rounded-sm border border-charcoal/30 hover:border-champagne hover:text-champagne-dark",
    link:
      "bg-transparent text-charcoal hover:text-champagne-dark p-0 border-b border-charcoal/40 hover:border-champagne pb-1 group",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
