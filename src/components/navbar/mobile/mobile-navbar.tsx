"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Logo from "../logo";
import AuthButton from "./auth-button";
import ContentItem from "./content-item";

export default function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative size-[36px]">
          <Image
            src="/assets/icons/hamburger.svg"
            width={36}
            height={36}
            alt="Menu"
            className="invert-colors sm:hidden"
          />
        </div>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 no-scrollbar overflow-y-auto border-none"
      >
        <Logo isSmHidden={false} />
        <ContentItem />
        <AuthButton />
      </SheetContent>
    </Sheet>
  );
}
