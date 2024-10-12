import { QuestionForm } from "@/components";
// import { fetchUserByClerkId } from "@/lib/actions";
// import { auth } from "@clerk/nextjs/server";

export default async function AskQuestionPage() {
  // const clerkid = auth().userId as string;
  // const user = await fetchUserByClerkId({ clerkid });

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <QuestionForm uid={"example_uuid"} type="create" />
      </div>
    </div>
  );
}
