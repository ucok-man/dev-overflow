import { AnswerQueryFilterValue } from "../enums";

export const ANSWER_QUERY_FILTER = [
  { name: "Highest Upvotes", value: AnswerQueryFilterValue.HighestUpvotes },
  { name: "Lowest Upvotes", value: AnswerQueryFilterValue.LowestUpvotes },
  { name: "Most Recent", value: AnswerQueryFilterValue.Recent },
  { name: "Oldest", value: AnswerQueryFilterValue.Oldest },
];
