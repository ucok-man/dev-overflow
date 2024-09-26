import { SignIn } from "@clerk/nextjs";

export default function SigninPage() {
  return (
    <div className="flex-center mt-20">
      <SignIn appearance={{}} />
    </div>
  );
}
