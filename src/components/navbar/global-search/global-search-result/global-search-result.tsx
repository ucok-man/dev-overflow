import { fetchGlobalSearch } from "@/lib/actions/fetch-global-search.action";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { GlobalSearchResultType } from "../../../../lib/types/global-search-result.type";
import GlobalSearchFilter from "../global-search-filter";
import SearchLoading from "./search-loading";
import SearchResult from "./search-result";
import Sparator from "./sparator";

export default function GlobalSearchResult() {
  const searchparams = useSearchParams();
  const { data, isRefetching } = useQuery<GlobalSearchResultType[]>({
    queryKey: ["global-search"],
    queryFn: () =>
      fetchGlobalSearch(searchparams.get("global"), searchparams.get("type")),
    staleTime: 0,
    throwOnError: true,
  });

  return (
    <div className="absolute top-full z-10 mt-3 w-full rounded-xl bg-light-800 py-5 shadow-sm dark:bg-dark-400">
      <GlobalSearchFilter />
      <Sparator />
      <div className="space-y-5">
        <p className="text-dark400_light900 paragraph-semibold px-5">
          Top Match
        </p>

        {isRefetching ? <SearchLoading /> : <SearchResult datas={data} />}
      </div>
    </div>
  );
}
