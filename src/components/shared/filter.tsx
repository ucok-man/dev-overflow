"use client";

import { FilterType } from "@/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useState } from "react";
import { Button } from "../ui/button";

type Props<T extends readonly FilterType[]> = {
  filters: T;
  defaultVal: T[number]["value"];
  showWhen: "sm:flex" | "md:flex" | "lg:flex" | "xl:flex" | "2xl:flex";
};

export default function Filter<T extends readonly FilterType[]>({
  filters,
  defaultVal,
  showWhen,
}: Props<T>) {
  const searchparams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [active, setActive] = useState(searchparams.get("fl") || defaultVal);

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
    <div className={`mt-10 hidden flex-wrap gap-3 ${showWhen}`}>
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
