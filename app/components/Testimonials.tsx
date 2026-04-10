"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    name: "Marna Bejjany",
    image: "/images/marna.png",
    stars: 5,
    text: "With over 5 years of experience in the Arabic Writing field, I have gained an ability to",
    highlight: "creatively translate complex concepts",
    textEnd: ", into easy-to-understand yet high-quality content.",
  },
  {
    name: "Joud Charafeddine",
    image: "/images/joud.jpg",
    stars: 5,
    text: "A proven leader in the copywriting industry, I bring more than",
    highlight: "10 years of experience in Business Development",
    textEnd: ", Community Engagement, and Advocacy.",
  },
];

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#A841D8" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="py-[60px] px-[30px] bg-white">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-[30px]">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.15}>
              <div className="bg-white rounded-[25px] shadow-purple p-[30px] max-w-[480px]">
                <div className="flex items-center gap-[12px] mb-[12px]">
                  <div className="w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="font-[family-name:var(--font-poppins)] text-[14px] font-semibold text-dark">
                    {t.name}
                  </span>
                </div>
                <div className="flex gap-[2px] mb-[12px]">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>
                <p className="font-[family-name:var(--font-poppins)] text-[16px] font-normal text-gray leading-[1.5em]">
                  {t.text}{" "}
                  <span className="text-purple">{t.highlight}</span>
                  {t.textEnd}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
