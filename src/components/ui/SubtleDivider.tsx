import React from "react";

interface SubtleDividerProps {
  className?: string;
}

export default function SubtleDivider({ className = "" }: SubtleDividerProps) {
  return <div className={`w-full h-px bg-charcoal/10 ${className}`} />;
}
