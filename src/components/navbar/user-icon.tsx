import { SignedIn, UserButton } from "@clerk/nextjs";

export default function UserIcon() {
  return (
    <SignedIn>
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox: "h-10 w-10",
          },
          variables: {
            colorPrimary: "#ff7000",
          },
        }}
      />
    </SignedIn>
  );
}
