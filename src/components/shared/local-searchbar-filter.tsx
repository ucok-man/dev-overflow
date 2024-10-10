"use client";

import { Filter } from "@/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useState } from "react";
import { Button } from "../ui/button";

type Props<T extends readonly Filter[]> = {
  filters: T;
  defaultVal: T[number]["value"];
};

export default function LocalSearchbarFilter<T extends readonly Filter[]>({
  filters,
  defaultVal,
}: Props<T>) {
  const [active, setActive] = useState(defaultVal);
  const searchparams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onClick = (value: string) => {
    const query = queryString.parse(searchparams.toString());

    query["fl"] = value;
    setActive(value);

    const url = queryString.stringifyUrl(
      { url: pathname, query },
      { skipNull: true }
    );

    router.push(url, { scroll: false });
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {filters.map((item) => (
        <Button
          key={item.value}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === item.value
              ? "bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          }`}
          onClickCapture={() => onClick(item.value)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}
