"use client";

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  className = "",
}: Props) {
  return <div className={className}>{children}</div>;
}
