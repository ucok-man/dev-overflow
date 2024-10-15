import {
  Filter,
  HomePageHeader,
  LocalSearchbar,
  MobileFilter,
  NoResult,
  Pagination,
  QuestionCard,
} from "@/components";
import { fetchHomePageQuestion, fetchUserByClerkId } from "@/lib/actions";
import { QUESTION_QUERY_FILTER } from "@/lib/constants";
import { QuestionQueryFilterValue } from "@/lib/enums";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
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
  const clerkid = auth().userId;

  let loginuser: User | undefined = undefined;
  if (clerkid) {
    loginuser = await fetchUserByClerkId({ clerkid });
  }

  const data = await fetchHomePageQuestion({
    filter:
      QuestionQueryFilterValue[searchParams.fl as QuestionQueryFilterValue],
    searchquery: searchParams.ql,
    page: Number(searchParams.page) || 1,
    cuid: loginuser ? loginuser.id : undefined,
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

        <MobileFilter
          filters={QUESTION_QUERY_FILTER}
          defaultVal={QuestionQueryFilterValue.recommended}
          trigerClasess="min-h-[56px] sm:min-w-[170px]"
          showWhen="max-md:flex"
          flexgrow={false}
        />
      </div>
      <Filter
        filters={QUESTION_QUERY_FILTER}
        defaultVal={QuestionQueryFilterValue.recommended}
        showWhen="md:flex"
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
              <QuestionCard
                key={question.id}
                question={question}
                cuid={loginuser?.id}
              />
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
