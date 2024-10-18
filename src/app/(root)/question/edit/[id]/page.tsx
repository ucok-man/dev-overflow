import { QuestionForm } from "@/components/shared";
import { fetchQuestionById } from "@/lib/actions/fetch-qeustion-by-id.action";

type Props = {
  params: { id: string };
};

export default async function QuestionEditPage({ params }: Props) {
  const question = await fetchQuestionById({ qid: params.id });

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Edit Question</h1>

      <div className="mt-9">
        <QuestionForm
          type="edit"
          qid={question.id}
          schema={{
            title: question.title,
            explanation: question.content,
            tags: question.tags.map((t) => t.name),
          }}
        />
      </div>
    </div>
  );
}
