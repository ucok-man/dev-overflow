import { fetchTopQeustion } from "@/lib/actions/fetch-top-question.action";
import TopQuestionItem from "./top-question-item";

export default async function TopQuestion() {
  const topQuestions = await fetchTopQeustion();

  return (
    <div>
      <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {topQuestions.map((question) => (
          <TopQuestionItem key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}
