"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const serviceIcons = [
  <svg key="0" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
  <svg key="1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  <svg key="2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
  <svg key="3" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="10" x2="3" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line x1="21" y1="14" x2="3" y2="14" /><line x1="17" y1="18" x2="3" y2="18" /></svg>,
  <svg key="4" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  <svg key="5" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
];

interface ServicesDict {
  label: string;
  heading: string;
  subheading: string;
  cta: string;
  items: { title: string; description: string }[];
}

export default function Services({ dict, locale }: { dict: ServicesDict; locale: string }) {
  const isAr = locale === "ar";

  return (
    <section id="services" className="py-[60px] md:py-[100px] px-[20px] md:px-[30px] bg-white">
      <div className="max-w-[1125px] mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[25px] max-w-[1125px] mx-auto">
          {dict.items.map((service, i) => (
            <AnimateOnScroll key={i} delay={i * 0.08}>
              <div className="card-hover bg-white rounded-[25px] shadow-purple p-[25px_20px] md:p-[25px_30px] h-full flex flex-col md:flex-row items-center gap-[16px] md:gap-[24px]">
                <div className="icon-container icon-animated w-[90px] h-[90px] rounded-full bg-[rgba(183,0,255,0.2)] flex items-center justify-center text-purple flex-shrink-0">
                  {serviceIcons[i]}
                </div>
                <div className={`flex flex-col gap-[10px] text-center ${isAr ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="font-[family-name:var(--font-poppins)] text-[22px] md:text-[24px] font-semibold text-dark">
                    {service.title}
                  </h3>
                  <p className="font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-normal text-gray leading-[25px] md:leading-[27px]">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="flex justify-center mt-[40px]">
            <a
              href="https://calendly.com/lamamassoude/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[10px] bg-purple text-white pl-[24px] pr-[5px] py-[5px] rounded-[50px] font-[family-name:var(--font-poppins)] text-[16px] font-normal hover:opacity-90 transition-opacity"
            >
              {dict.cta}
              <span className="w-[35px] h-[35px] bg-white/20 rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={isAr ? "-scale-x-100" : ""}>
                  <path d="M1 13L13 1M13 1H1M13 1V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
