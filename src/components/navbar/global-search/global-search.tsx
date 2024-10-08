"use client";

import { Input } from "@/components/ui/input";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useEffect, useRef, useState } from "react";
import GlobalSearchResult from "./global-search-result/global-search-result";

export default function GlobalSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchparams = useSearchParams();
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const client = useQueryClient();

  // const query = searchparams.get("q");

  const [search, setSearch] = useState(/*query ||*/ "");

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node | null)
      ) {
        setSearch("");
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [pathname]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const query = queryString.parse(searchparams.toString());
      if (search) {
        query["global"] = search;
      } else {
        delete query["global"];
        delete query["type"];
      }

      const url = queryString.stringifyUrl(
        { url: pathname, query },
        { skipNull: true }
      );

      client.invalidateQueries({ queryKey: ["global-search"] });
      router.push(url, { scroll: false });
    }, 300);

    return () => clearTimeout(debounce);
  }, [search, searchparams, router, pathname, client /*query*/]);

  return (
    <div
      className="relative w-full max-w-[600px] max-lg:hidden"
      ref={searchContainerRef}
    >
      <div className="background-light800_darkgradient relative flex min-h-full grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />

        <Input
          type="text"
          placeholder="Search globally"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
        />
      </div>
      {search !== "" && <GlobalSearchResult />}
    </div>
  );
}
