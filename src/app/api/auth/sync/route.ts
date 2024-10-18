import { fetchUserByClerkId } from "@/lib/actions";
import { auth } from "@clerk/nextjs/server";
import to from "await-to-js";
import { NextResponse } from "next/server";

export async function GET() {
  const clerkid = auth().userId;
  if (!clerkid) {
    return NextResponse.json({ isSyncing: false });
  }

  const [err_fetchuser] = await to(fetchUserByClerkId({ clerkid: clerkid }));

  if (err_fetchuser !== null) {
    if (err_fetchuser.message.includes("not found")) {
      return NextResponse.json({ isSyncing: false });
    } else {
      console.log(new Error(`[api/auth/sync]: ${err_fetchuser.message}`));
      return NextResponse.json({ isSyncing: false });
    }
  }

  return NextResponse.json({ isSyncing: true });
}
