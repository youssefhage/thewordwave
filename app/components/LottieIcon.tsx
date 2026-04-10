"use client";

import Lottie from "lottie-react";

interface LottieIconProps {
  animationData: object;
  className?: string;
}

export default function LottieIcon({ animationData, className }: LottieIconProps) {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
