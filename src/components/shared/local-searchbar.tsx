"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";

type Props = {
  route: string;
  iconPosition: "right" | "left";
  imgSrc: string;
  placeholder: string;
  containerClasses?: string;
};

export default function LocalSearchbar({
  containerClasses,
  imgSrc,
  iconPosition,
  placeholder,
  route,
}: Props) {
  const searchparams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [prevSearch, setPrevSearch] = useState("");
  const [search, setSearch] = useState(searchparams.get("ql") || "");

  console.log({
    search,
    prevSearch,
  });

  useEffect(() => {
    const debounce = setTimeout(() => {
      const query = queryString.parse(searchparams.toString());

      // always delete the pagination when writing new content in searchbox
      if (prevSearch !== search) {
        delete query["page"];
      }

      if (search) {
        query["ql"] = search;
      }

      if (search === "") {
        delete query["ql"];
      }

      const url = queryString.stringifyUrl(
        { url: pathname, query },
        { skipNull: true }
      );

      router.push(url, { scroll: false });
    }, 300);

    // update setPrevSearch before returning
    setPrevSearch(search);
    return () => clearTimeout(debounce);
  }, [pathname, router, search, searchparams, route]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${containerClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
}
