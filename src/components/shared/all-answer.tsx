import { fetchAllAnswer } from "@/lib/actions";
import { ANSWER_QUERY_FILTER } from "@/lib/constants";
import { AnswerQueryFilterValue } from "@/lib/enums";
import { formatTimestamp } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Filter from "./filter";
import MobileFilter from "./mobile-filter";
import Pagination from "./pagination";
import ParseHTML from "./parse-html";
import Votes from "./votes";

type Props = {
  qid: string;
  cuid: string;
  totalAnswer: number;
  page: number;
  filter: string;
};

export default async function AllAnswer(props: Props) {
  const data = await fetchAllAnswer({
    qid: props.qid,
    withoption: true,
    options: {
      filter: props.filter as AnswerQueryFilterValue,
      page: props.page,
      pageSize: 10,
    },
  });

  return (
    <div className="mt-11 ">
      {/* Header */}
      <div className="flex items-center justify-between gap-5">
        <h3 className="primary-text-gradient">{props.totalAnswer} Answers</h3>

        <MobileFilter
          filters={ANSWER_QUERY_FILTER}
          defaultVal={AnswerQueryFilterValue.HighestUpvotes}
          trigerClasess="min-h-[56px] sm:min-w-[170px]"
          showWhen="max-md:flex"
          flexgrow={false}
        />
      </div>

      <Filter
        filters={ANSWER_QUERY_FILTER}
        defaultVal={AnswerQueryFilterValue.HighestUpvotes}
        showWhen="md:flex"
      />

      {/* Answer Cards */}
      <div>
        {data?.answers.map((answer) => (
          <article key={answer.id} className="light-border border-b py-10">
            <div className="mb-8 flex flex-col-reverse justify-between sm:flex-row sm:items-center">
              <Link
                href={`/profile/${answer.createdBy.clerkId}`}
                className="flex items-start sm:items-center"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                  <div className="flex gap-3">
                    <Image
                      src={answer.createdBy.picture}
                      width={18}
                      height={18}
                      alt="profile"
                      className="rounded-full object-cover max-sm:mt-0.5"
                    />
                    <p className="body-semibold text-dark300_light700">
                      {answer.createdBy.name}
                    </p>
                  </div>

                  <p className="small-regular text-light400_light500 ml-0.5 mt-0.5 line-clamp-1">
                    answered {formatTimestamp(answer.createdAt)}
                  </p>
                </div>
              </Link>
              <div className="flex justify-end">
                <Votes
                  type="answer"
                  cuid={props.cuid}
                  itemId={answer.id}
                  upvotes={answer.upvotedByIds.length}
                  hasupVoted={answer.upvotedByIds.includes(props.cuid)}
                  downvotes={answer.downvotedByIds.length}
                  hasdownVoted={answer.downvotedByIds.includes(props.cuid)}
                />
              </div>
            </div>
            <ParseHTML data={answer.content} />
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 w-full">
        <Pagination
          page={Number(props.page) || 1}
          isnext={data?.isnext || false}
        />
      </div>
    </div>
  );
}
