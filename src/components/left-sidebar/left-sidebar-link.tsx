"use client";

import { sidebarLinks } from "@/lib/constants";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

type Props = {
  isActive: boolean;
  item: (typeof sidebarLinks)[number];
};

export default function LeftSidebarLink({ isActive, item }: Props) {
  const { userId } = useAuth();

  if (item.requireAuth && !userId) return null;
  if (item.route === "/profile") item.route = `${item.route}/${userId}`;

  return (
    <Link
      href={item.route}
      key={item.label}
      className={`flex items-center justify-start gap-4 bg-transparent p-4 ${
        isActive
          ? "primary-gradient rounded-lg text-light-900"
          : "text-dark300_light900"
      }`}
    >
      <Image
        src={item.imgURL}
        alt={item.label}
        width={20}
        height={20}
        className={`${!isActive && "invert-colors"}`}
      />
      <p className={`max-lg:hidden ${isActive ? "base-bold" : "base-medium"}`}>
        {item.label}
      </p>
    </Link>
  );
}
