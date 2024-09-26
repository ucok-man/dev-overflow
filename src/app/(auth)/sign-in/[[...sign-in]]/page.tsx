import { SignIn } from "@clerk/nextjs";

export default function SigninPage() {
  return (
    <div className="flex-center mt-20">
      <SignIn
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
