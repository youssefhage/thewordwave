"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import LottieIcon from "./LottieIcon";

import benefitScalable from "../../public/lottie/benefit-scalable.json";
import benefitTurnaround from "../../public/lottie/benefit-turnaround.json";
import benefitCustomized from "../../public/lottie/benefit-customized.json";
import benefitRevisions from "../../public/lottie/benefit-revisions.json";
import benefitLanguages from "../../public/lottie/benefit-languages.json";
import benefitSupport from "../../public/lottie/benefit-support.json";

const lottieData = [benefitScalable, benefitTurnaround, benefitCustomized, benefitRevisions, benefitLanguages, benefitSupport];

interface BenefitsDict {
  label: string;
  heading: string;
  subheading: string;
  items: { title: string; subtitle: string }[];
}

export default function Benefits({ dict }: { dict: BenefitsDict }) {
  return (
    <section id="benefits" className="py-[60px] md:py-[100px] px-[20px] md:px-[30px] bg-white">
      <div className="max-w-[1000px] mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-[40px] md:mb-[50px]">
            <span className="inline-block px-[16px] py-[8px] rounded-[25px] bg-purple-light font-[family-name:var(--font-poppins)] text-[16px] font-normal text-purple">
              {dict.label}
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] text-[28px] md:text-[45px] font-semibold text-dark mt-[8px] leading-tight">
              {dict.heading}
            </h2>
            <p className="font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-normal text-dark mt-[8px]">
              {dict.subheading}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] justify-center max-w-[1000px] mx-auto">
          {dict.items.map((benefit, i) => (
            <AnimateOnScroll key={i} delay={i * 0.08}>
              <div className="card-hover bg-white rounded-[25px] shadow-purple p-[40px_20px] h-full flex flex-col items-center gap-[16px]">
                <div className="icon-container w-[90px] h-[90px] rounded-full bg-transparent flex items-center justify-center overflow-hidden">
                  <LottieIcon animationData={lottieData[i]} />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] text-[22px] md:text-[24px] font-semibold text-dark text-center">
                  {benefit.title}
                </h3>
                <p className="font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-normal text-gray leading-[25px] md:leading-[27px] text-center">
                  {benefit.subtitle}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
