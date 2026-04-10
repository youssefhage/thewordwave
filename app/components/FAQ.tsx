"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-[16px] shadow-purple overflow-hidden bg-white">
      <button onClick={onToggle} className="w-full flex items-center justify-between p-[24px] text-start hover:bg-gray-50/30 transition-colors">
        <span className="font-[family-name:var(--font-poppins)] text-[18px] font-medium text-[#333333] pe-[16px]">
          {question}
        </span>
        <svg
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          className={`shrink-0 text-gray-light transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-[24px] pb-[24px] font-[family-name:var(--font-poppins)] text-[16px] font-normal text-gray-light leading-[22.4px]">
          {answer}
        </p>
      </div>
    </div>
  );
}

interface FAQDict {
  label: string;
  heading: string;
  items: { question: string; answer: string }[];
}

export default function FAQ({ dict }: { dict: FAQDict }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[60px] md:py-[100px] px-[20px] md:px-[30px] bg-white">
      <div className="max-w-[800px] mx-auto">
        <AnimateOnScroll>
          <div className="text-center mb-[50px]">
            <span className="inline-block px-[16px] py-[8px] rounded-[25px] bg-purple-light font-[family-name:var(--font-poppins)] text-[16px] font-normal text-purple">
              {dict.label}
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] text-[28px] md:text-[45px] font-semibold text-dark mt-[8px] leading-tight">
              {dict.heading}
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-[12px]">
          {dict.items.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 0.04}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
