"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

interface CTADict {
  heading: string;
  button: string;
}

export default function CTA({ dict }: { dict: CTADict }) {
  return (
    <section id="pricing" className="py-[60px] px-[20px] md:px-[30px] bg-white">
      <div className="max-w-[840px] mx-auto">
        <AnimateOnScroll>
          <div className="rounded-[25px] shadow-purple p-[50px_20px_40px] md:p-[70px_40px_50px] text-center relative">
            <div className="absolute top-[-30px] left-1/2 -translate-x-1/2">
              <div className="w-[90px] h-[90px] rounded-full bg-white shadow-purple flex items-center justify-center">
                <Image src="/images/sphere.png" alt="" width={60} height={60} className="object-contain" />
              </div>
            </div>

            <h2 className="font-[family-name:var(--font-poppins)] text-[24px] md:text-[45px] font-semibold text-dark leading-[110%]">
              {dict.heading}
            </h2>
            <div className="mt-[30px]">
              <a
                href="https://calendly.com/lamamassoude/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-[10px] bg-purple text-white pl-[24px] pr-[5px] py-[5px] rounded-[50px] font-[family-name:var(--font-poppins)] text-[16px] font-normal hover:opacity-90 transition-opacity"
              >
                {dict.button}
                <span className="w-[35px] h-[35px] bg-white/20 rounded-full flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 13L13 1M13 1H1M13 1V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
