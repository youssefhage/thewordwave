"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import LottieIcon from "./LottieIcon";

import processRequest from "../../public/lottie/process-request.json";
import processMatch from "../../public/lottie/process-match.json";
import processReceive from "../../public/lottie/process-receive.json";
import processBenefit from "../../public/lottie/process-benefit.json";

const lottieData = [processRequest, processMatch, processReceive, processBenefit];

interface ProcessDict {
  label: string;
  heading: string;
  subheading: string;
  steps: { title: string; description: string }[];
}

export default function Process({ dict }: { dict: ProcessDict }) {
  return (
    <section id="process" className="py-[60px] md:py-[100px] px-[20px] md:px-[30px] bg-white">
      <div className="max-w-[1200px] mx-auto">
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

        <div className="flex flex-col sm:flex-row justify-center gap-[20px] sm:gap-[25px]">
          {dict.steps.map((step, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="card-hover bg-white rounded-[25px] shadow-purple p-[40px_20px] text-center w-full sm:w-[260px] mx-auto flex flex-col items-center justify-center gap-[16px]">
                <div className="icon-container w-[90px] h-[90px] rounded-full bg-purple-light flex items-center justify-center overflow-hidden">
                  <LottieIcon animationData={lottieData[i]} />
                </div>
                <h3 className="font-[family-name:var(--font-poppins)] text-[22px] md:text-[24px] font-semibold text-dark">
                  {step.title}
                </h3>
                <p className="font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-normal text-gray leading-[25px] md:leading-[27px]">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
