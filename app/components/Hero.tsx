import Image from "next/image";

interface HeroDict {
  badge: string;
  headline: string;
  subheading: string;
  cta: string;
}

function parseHeadline(text: string) {
  // Split on <purple>...</purple> tags
  const parts = text.split(/(<purple>.*?<\/purple>)/g);
  return parts.map((part, i) => {
    const match = part.match(/<purple>(.*?)<\/purple>/);
    if (match) return <span key={i} className="text-purple">{match[1]}</span>;
    // Split lines on periods followed by space for the headline structure
    return <span key={i}>{part}</span>;
  });
}

function parseSubheading(text: string) {
  const parts = text.split(/(<link>.*?<\/link>)/g);
  return parts.map((part, i) => {
    const match = part.match(/<link>(.*?)<\/link>/);
    if (match) return <span key={i} className="text-purple font-medium">{match[1]}</span>;
    return <span key={i}>{part}</span>;
  });
}

export default function Hero({ dict, locale }: { dict: HeroDict; locale: string }) {
  const isAr = locale === "ar";
  const fontFamily = isAr ? "var(--font-cairo)" : "var(--font-poppins)";

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-[120px] md:pt-[160px] pb-[60px] overflow-hidden bg-white px-[20px] md:px-[30px]">
      {/* Purple 3D spheres */}
      <div className="absolute top-[100px] left-[-30px] z-0 hidden md:block">
        <Image src="/images/sphere.png" alt="" width={211} height={211} priority />
      </div>
      <div className="absolute top-[60px] left-[-15px] z-0 md:hidden">
        <Image src="/images/sphere.png" alt="" width={80} height={80} priority />
      </div>
      <div className="absolute top-[400px] right-[100px] z-0 hidden md:block">
        <Image src="/images/sphere.png" alt="" width={81} height={81} />
      </div>
      <div className="absolute top-[300px] right-[10px] z-0 md:hidden">
        <Image src="/images/sphere.png" alt="" width={40} height={40} />
      </div>

      {/* Badge pill */}
      <div className="relative z-10 flex items-center gap-[10px] px-[20px] py-[10px] rounded-[25px] bg-white shadow-purple mb-[24px]">
        <Image src="/images/logo.png" alt="" width={32} height={29} className="animate-logo-spin" />
        <span className="text-[10px] font-normal text-dark tracking-[0.5px]" style={{ fontFamily }}>
          {dict.badge}
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="relative z-10 text-center text-[32px] md:text-[60px] font-semibold leading-[40px] md:leading-[72px] text-dark max-w-[1084px]" style={{ fontFamily }}>
        {parseHeadline(dict.headline)}
      </h1>

      {/* Subheading */}
      <p className="relative z-10 text-center text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[27px] text-gray max-w-[643px] mt-[24px]" style={{ fontFamily }}>
        {parseSubheading(dict.subheading)}
      </p>

      {/* CTA Button */}
      <a
        href="https://calendly.com/lamamassoude/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 mt-[32px] flex items-center gap-[10px] bg-purple text-white pl-[24px] pr-[5px] py-[5px] rounded-[50px] text-[16px] font-normal hover:opacity-90"
        style={{ fontFamily }}
      >
        {dict.cta}
        <span className="w-[35px] h-[35px] bg-white/20 rounded-full flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={isAr ? "-scale-x-100" : ""}>
            <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </section>
  );
}
