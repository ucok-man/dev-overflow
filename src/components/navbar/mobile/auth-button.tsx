import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function AuthButton() {
  return (
    <div>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <SheetClose asChild>
            <Link href="/sign-in">
              <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <span className="primary-text-gradient">Log In</span>
              </Button>
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link href="/sign-up">
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                Sign Up
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SignedOut>
    </div>
  );
}
