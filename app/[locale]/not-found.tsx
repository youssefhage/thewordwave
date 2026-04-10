import Link from "next/link";
import Logo from "@/app/components/Logo";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <header className="w-full flex justify-center pt-[20px] px-[20px] md:px-[30px]">
        <div className="w-full max-w-[1100px] flex items-center justify-between py-[10px]">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-[20px] text-center">
        <h1 className="font-[family-name:var(--font-poppins)] text-[80px] md:text-[120px] font-semibold text-purple leading-none">
          404
        </h1>
        <h2 className="font-[family-name:var(--font-poppins)] text-[24px] md:text-[36px] font-semibold text-dark mt-[16px]">
          Page Not Found
        </h2>
        <p className="font-[family-name:var(--font-poppins)] text-[16px] md:text-[18px] font-normal text-gray mt-[12px] max-w-[500px]">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-[32px] inline-flex items-center gap-[10px] bg-purple text-white pl-[20px] pr-[5px] py-[5px] rounded-[50px] text-[16px] font-[family-name:var(--font-poppins)] font-normal hover:opacity-90 transition-opacity"
        >
          Back to Home
          <span className="w-[35px] h-[35px] bg-white/20 rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M13 7H1M1 7L7 1M1 7L7 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>
    </main>
  );
}
