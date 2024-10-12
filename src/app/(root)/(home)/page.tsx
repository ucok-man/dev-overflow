import {
  HomePageHeader,
  LocalSearchbar,
  LocalSearchbarFilter,
  MobileLocalSearchbarFilter,
  NoResult,
  Pagination,
  QuestionCard,
} from "@/components";
import { fetchHomePageQuestion } from "@/lib/actions";
import { homepageFilters } from "@/lib/constants";
import { HomepageFilterValue } from "@/lib/enums";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Dev Overflow",
};

type Props = {
  searchParams: {
    ql?: string;
    fl?: string;
    page?: string;
  };
};

export default async function HomePage({ searchParams }: Props) {
  const { userId } = auth();

  const data = await fetchHomePageQuestion({
    filter: HomepageFilterValue[searchParams.fl as HomepageFilterValue],
    searchquery: searchParams.ql,
    page: Number(searchParams.page) || 1,
    userId: userId,
  });

  return (
    <div>
      {/* HEADER  */}
      <HomePageHeader />
      {/* SEARCH BAR */}
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          containerClasses="flex-1"
        />

        <MobileLocalSearchbarFilter
          filters={homepageFilters}
          defaultVal={HomepageFilterValue.recommended}
          trigerClasess="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <LocalSearchbarFilter
        filters={homepageFilters}
        defaultVal={HomepageFilterValue.recommended}
      />
      {/* CONTENT */}
      <div className="mt-10 flex w-full flex-col gap-6">
        {(!data || data?.questions.length <= 0) && (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
        {data && data.questions.length > 0 && (
          <div>
            {data.questions.map((question) => (
              <QuestionCard key={question.id} question={question} />
            ))}
          </div>
        )}
      </div>
      {/* PAGINATION */}
      <div className="mt-10">
        <Pagination
          page={Number(searchParams.page) || 1}
          isnext={data?.isNext || false}
        />
      </div>
    </div>
  );
}
