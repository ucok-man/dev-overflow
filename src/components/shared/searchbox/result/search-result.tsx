import { fetchGlobalSearch } from "@/lib/actions";
import { GlobalSearchResultType } from "@/lib/types";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Sparator from "../../sparator";
import { ResultItems } from "./result-item";
import { SearchFilter } from "./search-filter";

type Props = {
  filterQueryKey: string;
  filterValues: {
    name: string;
    value: string;
  }[];
  searchQueryKey: string;
};

export function SearchResult({
  filterQueryKey,
  filterValues,
  searchQueryKey,
}: Props) {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GlobalSearchResultType[]>([]);

  useEffect(() => {
    const fetchResult = async () => {
      setResult([]);
      setIsLoading(true);

      try {
        const res = await fetchGlobalSearch(
          searchParams.get(searchQueryKey),
          searchParams.get(filterQueryKey)
        );
        setResult(res);
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    if (searchParams.get(searchQueryKey) !== "") {
      fetchResult();
    }
  }, [searchParams]);

  return (
    <div className="absolute top-full z-10 mt-3 w-full rounded-xl bg-light-800 py-5 shadow-sm dark:bg-dark-400">
      <SearchFilter qkeys={filterQueryKey} values={filterValues} />
      <Sparator />
      <div className="space-y-5">
        <p className="text-dark400_light900 paragraph-semibold px-5">
          Top Match
        </p>

        {isLoading ? <SearchLoading /> : <ResultItems data={result} />}
      </div>
    </div>
  );
}

function SearchLoading() {
  return (
    <div className="flex-center flex-col px-5">
      <ReloadIcon className="my-2 size-10 animate-spin text-primary-500" />
      <p className="text-dark200_light800 body-regular">
        Browsing the entire database
      </p>
    </div>
  );
}
