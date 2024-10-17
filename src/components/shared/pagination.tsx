"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { Button } from "../ui/button";

type Props = {
  page: number;
  isnext: boolean;
};

export default function Pagination({ page, isnext }: Props) {
  const searchparams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handlePrevNext = (direction: "prev" | "next") => {
    switch (direction) {
      case "prev":
        page = page - 1;
        break;
      default:
        page = page + 1;
        break;
    }

    const query = queryString.parse(searchparams.toString());
    query["page"] = `${page}`;
    const url = queryString.stringifyUrl(
      { url: pathname, query },
      { skipNull: true }
    );

    router.push(url, { scroll: false });
  };

  if (!isnext && page === 1) return null;

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <Button
        disabled={page === 1}
        onClick={() => handlePrevNext("prev")}
        className="light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border"
      >
        <p className="body-medium text-dark200_light800">Prev</p>
      </Button>
      <div className="flex items-center justify-center rounded-md bg-primary-500 px-3.5 py-2">
        <p className="body-semibold text-light-900">{page}</p>
      </div>
      <Button
        disabled={!isnext}
        onClick={() => handlePrevNext("next")}
        className="light-border-2 btn flex min-h-[36px] items-center justify-center gap-2 border"
      >
        <p className="body-medium text-dark200_light800">Next</p>
      </Button>
    </div>
  );
}
