"use client";

export function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden select-none" aria-hidden="true">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex w-max animate-marquee">
        <div className="flex shrink-0 items-center gap-14 px-7">{children}</div>
        <div className="flex shrink-0 items-center gap-14 px-7">{children}</div>
        <div className="flex shrink-0 items-center gap-14 px-7">{children}</div>
      </div>
    </div>
  );
}
