"use client";

import Image from "next/image";

export default function Trigger({ theme }: { theme: string | undefined }) {
  if (theme === undefined) return;
  if (theme === "light")
    return (
      <div className="relative size-[20px]">
        <Image
          src="/assets/icons/sun.svg"
          alt="sun"
          width={20}
          height={20}
          className="active-theme"
        />
      </div>
    );

  if (theme === "dark")
    return (
      <div className="relative size-[20px]">
        <Image
          src="/assets/icons/moon.svg"
          alt="moon"
          width={20}
          height={20}
          className="active-theme"
        />
      </div>
    );

  throw new Error(`ThemeSwitcher:Trigger: unexpected theme value ${theme}`);
}
