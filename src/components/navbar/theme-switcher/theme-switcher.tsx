"use client";

import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ContentItem from "./content-item";
import Trigger from "./trigger";

export default function ThemeSwithcer() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          <Trigger theme={resolvedTheme} />
        </MenubarTrigger>
        <MenubarContent className="absolute right-0 mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
          <ContentItem setTheme={setTheme} theme={theme} />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
