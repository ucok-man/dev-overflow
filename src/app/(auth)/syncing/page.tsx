"use client";

import to from "await-to-js";
import delay from "delay";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SyncPage() {
  const [sync, setSync] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    async function checkfn() {
      while (!sync) {
        const [err_fetch, result] = await to(
          fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/sync`)
        );
        if (err_fetch !== null) {
          throw new Error(`[SyncPage]: ${err_fetch.message}`);
        }

        const data: { isSyncing: boolean } = await result.json();
        if (data.isSyncing) {
          setSync(true);
        }

        await delay(1000);
      }
    }

    checkfn();
  }, [sync]);

  if (!sync) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="size-16 animate-spin rounded-full border-4 border-solid border-orange-500 border-t-transparent"></div>
      </div>
    );
  }

  if (sync) {
    router.push(`${process.env.NEXT_PUBLIC_SERVER_URL}`, { scroll: false });
  }
}
