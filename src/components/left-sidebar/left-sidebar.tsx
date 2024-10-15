"use client";

import { SIDEBAR_LINKS } from "@/lib/constants";
import { matchroute } from "@/lib/utils";
import { usePathname } from "next/navigation";
import LeftSidebarAuthButton from "./left-sidebar-auth-button";
import LeftSidebarLink from "./left-sidebar-link";

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        {SIDEBAR_LINKS.map((item) => (
          <LeftSidebarLink
            key={item.route}
            isActive={matchroute(pathname, item.route)}
            item={item}
          />
        ))}
      </div>
      <LeftSidebarAuthButton />
    </section>
  );
}
