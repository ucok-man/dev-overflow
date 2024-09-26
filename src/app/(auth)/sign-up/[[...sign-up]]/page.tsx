import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="flex-center mt-20">
      <SignUp
        appearance={{
          elements: {
            formFieldInput: "focus-visible:outline-none",
            formButtonPrimary: "primary-gradient border-none",
            footerActionLink: "primary-text-gradient hover:no-underline",
          },
        }}
      />
    </div>
  );
}
