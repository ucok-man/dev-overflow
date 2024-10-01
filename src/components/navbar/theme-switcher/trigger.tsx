"use client";

import Image from "next/image";

export default function Trigger({ theme }: { theme: string | undefined }) {
  if (theme === undefined) return;
  if (theme === "light")
    return (
      <Image
        src="/assets/icons/sun.svg"
        alt="sun"
        width={20}
        height={20}
        className="active-theme"
      />
    );

  if (theme === "dark")
    return (
      <Image
        src="/assets/icons/moon.svg"
        alt="moon"
        width={20}
        height={20}
        className="active-theme"
      />
    );

  throw new Error(`ThemeSwitcher:Trigger: unexpected theme value ${theme}`);
}
