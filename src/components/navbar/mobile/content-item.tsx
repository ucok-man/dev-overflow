"use client";

import { SheetClose } from "@/components/ui/sheet";
import { mobileLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ContentItem() {
  const pathname = usePathname();

  return (
    <div className="no-scrollbar flex grow flex-col justify-between overflow-y-auto">
      <SheetClose asChild>
        <section className="flex h-full flex-col gap-6 pt-16">
          {mobileLinks.map((item) => {
            const active =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;

            return (
              <SheetClose asChild key={item.route}>
                <Link
                  href={item.route}
                  className={`${
                    active
                      ? "primary-gradient rounded-lg text-light-900"
                      : "text-dark300_light900"
                  } flex items-center justify-start gap-4 bg-transparent p-4`}
                >
                  <Image
                    src={item.imgURL}
                    alt={item.label}
                    width={20}
                    height={20}
                    className={`${active ? "" : "invert-colors"}`}
                  />
                  <p className={`${active ? "base-bold" : "base-medium"}`}>
                    {item.label}
                  </p>
                </Link>
              </SheetClose>
            );
          })}
        </section>
      </SheetClose>
    </div>
  );
}
