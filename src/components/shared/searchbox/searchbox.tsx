"use client";

import { Input } from "@/components/ui/input";
import { RenderIf } from "@/components/utility";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useEffect, useRef, useState } from "react";
import { SearchResult } from "./result/search-result";

type Props = {
  iconposition: "left" | "right";
  placeholder: string;
  containerStyle?: string;
  clearPageWhenTyping: boolean; // this assume that query current page with key 'page'
  search: {
    querykey: string;
    clearWhenOffFocus: boolean;
  };
  withresult:
    | { value: false }
    | {
        value: true;
        filter: {
          values: {
            name: string;
            value: string;
          }[];
          querykey: string;
          clearWhenSearchEmpty: boolean;
        };
      };
};

export default function SearchBox(props: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchparams = useSearchParams();
  const containerref = useRef<HTMLDivElement>(null);

  const [search, setSearch] = useState(
    searchparams.get(props.search.querykey) || ""
  );
  const [prevSearch, setPrevSearch] = useState("");

  useEffect(() => {
    const clearfns: (() => void)[] = [];

    if (props.search.clearWhenOffFocus) {
      const clearfn = shouldClearWhenOffFocus(containerref.current, () => {
        setSearch("");
      });
      clearfns.push(clearfn);
    }

    const debounce = setTimeout(() => {
      const query = queryString.parse(searchparams.toString());

      if (props.clearPageWhenTyping && prevSearch !== search) {
        delete query["page"];
      }

      if (search !== "") {
        query[props.search.querykey] = search;
      } else {
        delete query[props.search.querykey];

        if (
          props.withresult.value == true &&
          props.withresult.filter.clearWhenSearchEmpty
        ) {
          delete query[props.withresult.filter.querykey];
        }
      }

      const url = queryString.stringifyUrl(
        { url: pathname, query },
        { skipNull: true }
      );

      router.push(url, { scroll: false });
    }, 300);
    clearfns.push(() => clearTimeout(debounce));

    return function () {
      clearfns.forEach((fn) => fn());
    };
  }, [search, searchparams]);

  return (
    <div ref={containerref} className={`${props.containerStyle}`}>
      <div
        className={`background-light800_darkgradient flex h-full grow items-center gap-1 rounded-xl px-4`}
      >
        <RenderIf condition={props.iconposition === "left"}>
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </RenderIf>

        <Input
          type="text"
          placeholder={props.placeholder}
          value={search}
          onChange={(e) => {
            setSearch((prev) => {
              setPrevSearch(prev);
              return e.target.value;
            });
          }}
          className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
        />

        <RenderIf condition={props.iconposition === "right"}>
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </RenderIf>
      </div>

      <RenderIf condition={props.withresult.value && search !== ""}>
        <SearchResult
          filterQueryKey={
            (props.withresult.value && props.withresult.filter.querykey) || ""
          }
          searchQueryKey={props.search.querykey}
          filterValues={
            (props.withresult.value && props.withresult.filter.values) || []
          }
        />
      </RenderIf>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*                         utiltity function                        */
/* ---------------------------------------------------------------- */

function shouldClearWhenOffFocus(elmRef: Node | null, callback: () => void) {
  function handleOutsideClick(event: MouseEvent) {
    if (elmRef !== null && !elmRef.contains(event.target as Node | null)) {
      callback();
    }
  }
  document.addEventListener("click", handleOutsideClick);

  return function clearfn() {
    document.removeEventListener("click", handleOutsideClick);
  };
}
