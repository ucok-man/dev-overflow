import {
  Filter,
  MobileFilter,
  NoResult,
  Pagination,
  QuestionCard,
  SearchBox,
} from "@/components/shared";
import { Button } from "@/components/ui/button";
import { fetchAllQuestion, fetchUserByClerkId } from "@/lib/actions";
import { QUESTION_QUERY_FILTER } from "@/lib/constants";
import { QuestionQueryFilterValue } from "@/lib/enums";
import { currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import to from "await-to-js";
import { Metadata } from "next";
import Link from "next/link";

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
  const clerkuser = await currentUser();

  let user: User | undefined;
  let err: Error | null;
  let data: Awaited<ReturnType<typeof fetchAllQuestion>> | undefined;

  if (clerkuser !== null) {
    [err, user] = await to(fetchUserByClerkId({ clerkid: clerkuser.id }));
    if (err !== null) {
      throw new Error(`[HomePage]: ${err.message}`);
    }
  }

  // eslint-disable-next-line prefer-const
  [err, data] = await to(
    fetchAllQuestion({
      filter:
        QuestionQueryFilterValue[searchParams.fl as QuestionQueryFilterValue],
      searchquery: searchParams.ql,
      page: Number(searchParams.page) || 1,
      cuid: user?.id || undefined,
    })
  );
  if (err !== null) {
    throw new Error(`[HomePage] : ${err.message}`);
  }

  return (
    <div>
      {/* HEADER  */}
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      {/* SEARCH BAR */}
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <SearchBox
          iconposition="left"
          containerStyle="h-[56px] flex-1 w-full"
          placeholder="Search for questions"
          clearPageWhenTyping
          search={{
            clearWhenOffFocus: false,
            querykey: "ql",
          }}
          withresult={{ value: false }}
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
                uid={user?.id}
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
