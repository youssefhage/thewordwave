"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const clientLogos = [
  { src: "/images/client1.png", w: 120, h: 86 },
  { src: "/images/client2.png", w: 80, h: 55 },
  { src: "/images/client3.png", w: 90, h: 58 },
  { src: "/images/client4.png", w: 80, h: 60 },
  { src: "/images/client5.png", w: 65, h: 64 },
  { src: "/images/client6.png", w: 120, h: 97 },
  { src: "/images/client7.png", w: 140, h: 140 },
  { src: "/images/client8.png", w: 130, h: 130 },
];

interface StatsDict {
  trustedBy: string;
  items: { value: string; label: string }[];
}

export default function Stats({ dict }: { dict: StatsDict }) {
  return (
    <section className="py-[40px] px-[20px] md:px-[30px] bg-white">
      <div className="max-w-[1359px] mx-auto">
        <AnimateOnScroll>
          <h2 className="text-center font-[family-name:var(--font-poppins)] text-[22px] font-medium text-dark mb-[16px]">
            {dict.trustedBy}
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="relative overflow-hidden h-[80px] mb-[40px]">
            <div className="flex items-center gap-[40px] animate-ticker whitespace-nowrap">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center h-[80px]">
                  <Image src={logo.src} alt="Client logo" width={logo.w} height={logo.h} className="object-contain transition-all" />
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col md:flex-row items-center justify-center gap-[40px] md:gap-[80px]">
          {dict.items.map((stat, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="font-[family-name:var(--font-poppins)] text-[36px] md:text-[45px] font-semibold text-dark">
                  {stat.value}
                </div>
                <div className="font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-normal text-gray mt-[4px]">
                  {stat.label}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
