"use server";

import delay from "delay";

// TODO: Do real implementation
export async function fetchGlobalSearch(
  qsearch: string | null,
  qtype: string | null
): Promise<{ type: string; id: number; title: string }[]> {
  await delay(500);
  return [
    { type: "question", id: 0, title: `Next.js question` },
    { type: "tag", id: 1, title: `Next JS` },
    { type: "user", id: 2, title: `Ucok` },
  ];
}
