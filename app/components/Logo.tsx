import Image from "next/image";

export default function Logo({ small = false }: { small?: boolean }) {
  if (small) {
    return (
      <Image src="/images/logo.png" alt="The Word Wave" width={36} height={33} className="object-contain animate-logo-spin" />
    );
  }

  return (
    <div className="flex flex-col items-center">
      <Image src="/images/logo.png" alt="The Word Wave" width={73} height={67} className="object-contain animate-logo-spin" />
      <span className="text-[10px] font-semibold tracking-[1.5px] text-dark uppercase mt-[-2px]">
        THE WORD WAVE
      </span>
    </div>
  );
}
