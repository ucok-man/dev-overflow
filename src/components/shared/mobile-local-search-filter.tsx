"use client";

import { Filter } from "@/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props<T extends readonly Filter[]> = {
  filters: T;
  defaultVal: T[number]["value"];
  trigerClasess?: string;
  containerClasses?: string;
};

export default function MobileLocalSearchFilter<T extends readonly Filter[]>({
  filters,
  defaultVal,
  trigerClasess,
  containerClasses,
}: Props<T>) {
  const searchparams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onChange = (value: string) => {
    const query = queryString.parse(searchparams.toString());
    query["fl"] = value;

    const url = queryString.stringifyUrl(
      { url: pathname, query },
      { skipNull: true }
    );

    router.push(url, { scroll: false });
  };

  return (
    <div className={`relative ${containerClasses}`}>
      <Select
        onValueChange={onChange}
        defaultValue={searchparams.get("fl") || defaultVal}
      >
        <SelectTrigger
          className={`${trigerClasess} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select a Filter" />
          </div>
        </SelectTrigger>

        <SelectContent className="text-dark500_light700 small-regular border-none bg-light-900 dark:bg-dark-300">
          <SelectGroup>
            {filters.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                className="cursor-pointer focus:bg-light-800 dark:focus:bg-dark-400"
              >
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
