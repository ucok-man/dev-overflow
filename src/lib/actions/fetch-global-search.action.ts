import { GlobalSearchResultType } from "@/components/navbar/global-search/global-search-result/types/global-search-result.type";
import delay from "delay";

export async function fetchGlobalSearch(
  qsearch: string | null,
  qtype: string | null
): Promise<GlobalSearchResultType[]> {
  await delay(1000);
  return [
    { type: "question", id: 0, title: `Next.js question` },
    { type: "tag", id: 1, title: `Next JS` },
    { type: "user", id: 2, title: `Ucok` },
  ];
}
