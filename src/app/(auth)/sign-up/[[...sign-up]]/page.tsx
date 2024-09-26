import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="flex-center mt-20">
      <SignUp />
    </div>
  );
}
