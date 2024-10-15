"use client";

import { GLOBAL_SEARCH_FILTER } from "@/lib/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

export default function GlobalSearchFilter() {
  const router = useRouter();
  const searchparams = useSearchParams();
  const pathname = usePathname();

  const handleclick = (filter: string) => {
    const query = queryString.parse(searchparams.toString());
    query["fg"] = filter;

    const url = queryString.stringifyUrl(
      { url: pathname, query },
      { skipNull: true }
    );
    router.push(url, { scroll: false });
  };

  return (
    <div className="flex items-center gap-5 px-5">
      <p className="text-dark400_light900 body-medium">Type: </p>
      <div className="flex gap-3">
        {GLOBAL_SEARCH_FILTER.map((item) => (
          <button
            key={item.value}
            className={` light-border-2 small-medium rounded-2xl px-5 py-2 capitalize
            ${
              searchparams.get("fg") === item.value
                ? "bg-primary-500 text-light-900"
                : "bg-light-700 text-dark-400 hover:text-primary-500 dark:bg-dark-500 dark:text-light-800 dark:hover:text-primary-500"
            }`}
            onClick={() => handleclick(item.value)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
