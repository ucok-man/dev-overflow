"use client";

import { MenubarItem } from "@/components/ui/menubar";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { themes } from "../../../lib/constants/theme.constant";

type Props = {
  setTheme: Dispatch<SetStateAction<string>>;
  theme: string | undefined;
};

export default function ContentItem({ setTheme, theme }: Props) {
  return themes.map((item) => (
    <MenubarItem
      key={item.value}
      className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
      onClick={() => setTheme(item.value)}
    >
      <Image
        src={item.icon}
        alt={item.value}
        width={16}
        height={16}
        className={`${theme === item.value && "active-theme"}`}
      />
      <p
        className={`body-semibold text-light-500 ${
          theme === item.value ? "text-primary-500" : "text-dark100_light900"
        }`}
      >
        {item.label}
      </p>
    </MenubarItem>
  ));
}
