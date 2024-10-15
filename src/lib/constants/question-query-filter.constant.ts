import { QuestionQueryFilterValue } from "../enums";

export const QUESTION_QUERY_FILTER = [
  { name: "Newest", value: QuestionQueryFilterValue.newest },
  { name: "Recommended", value: QuestionQueryFilterValue.recommended },
  { name: "Frequent", value: QuestionQueryFilterValue.frequent },
  { name: "Unanswered", value: QuestionQueryFilterValue.unanswered },
] as const;
