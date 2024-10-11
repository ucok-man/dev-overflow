import { HomepageFilterValue } from "../enums";

export const homepageFilters = [
  { name: "Newest", value: HomepageFilterValue.newest },
  { name: "Recommended", value: HomepageFilterValue.recommended },
  { name: "Frequent", value: HomepageFilterValue.frequent },
  { name: "Unanswered", value: HomepageFilterValue.unanswered },
] as const;
