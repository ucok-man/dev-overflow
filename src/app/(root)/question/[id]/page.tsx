import {
  AllAnswer,
  CreateAnswerBox,
  Metric,
  RenderTag,
  Votes,
} from "@/components";
import ParseHTML from "@/components/shared/parse-html";
import { fetchUserByClerkId } from "@/lib/actions";
import { fetchQuestionById } from "@/lib/actions/fetch-qeustion-by-id.action";
import { AnswerQueryFilterValue } from "@/lib/enums";
import { formatNumber, formatTimestamp } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { Tag } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { id: string };
  searchParams: {
    fl?: string;
    page?: string;
  };
};

export default async function QuestionDetailPage({
  params,
  searchParams,
}: Props) {
  const clerkId = auth().userId as string;
  const user = await fetchUserByClerkId({ clerkid: clerkId });
  const qeustion = await fetchQuestionById({ qid: params.id });

  return (
    <div>
      <div className="flex-start w-full flex-col">
        {/* Profile and Votes */}
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          {/* Profiles Who created*/}
          <Link
            href={`/profile/${qeustion.createdBy.clerkId}`}
            className="flex items-center justify-start gap-1"
          >
            <Image
              src={qeustion.createdBy.picture}
              className="rounded-full"
              width={22}
              height={22}
              alt="profile"
            />
            <p className="paragraph-semibold text-dark300_light700">
              {qeustion.createdBy.name}
            </p>
          </Link>

          {/* Votes and save functionality */}
          <div className="flex justify-end">
            <Votes
              cuid={user.id}
              type="question"
              itemId={qeustion.id}
              upvotes={qeustion.upvotedByIds.length}
              hasupVoted={qeustion.upvotedByIds.includes(user.id)}
              downvotes={qeustion.downvotedByIds.length}
              hasdownVoted={qeustion.downvotedByIds.includes(user.id)}
              hasSaved={qeustion.savedByIds.includes(user.id)}
            />
          </div>
        </div>

        {/* Question Title */}
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
          {qeustion.title}
        </h2>
      </div>

      {/* Metrics icons */}
      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        <Metric
          imgUrl="/assets/icons/clock.svg"
          alt="clock icon"
          value={` asked ${formatTimestamp(qeustion.createdAt)}`}
          title=" Asked"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatNumber(qeustion.answers.length)}
          title=" Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatNumber(qeustion.views)}
          title=" Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>

      {/* Question Content */}
      <ParseHTML data={qeustion.content} />

      {/* Tags */}
      <div className="mt-8 flex flex-wrap gap-2">
        {qeustion.tags.map((tag: Tag) => (
          <RenderTag
            key={tag.id}
            tid={tag.id}
            tagname={tag.name}
            showCount={false}
          />
        ))}
      </div>

      {/* All Answer */}
      <AllAnswer
        qid={qeustion.id}
        cuid={user.id}
        totalAnswer={qeustion.answers.length}
        filter={searchParams?.fl || AnswerQueryFilterValue.HighestUpvotes}
        page={Number(searchParams?.page) || 1}
      />

      {/* Creating answer box */}
      <CreateAnswerBox
        qid={qeustion.id}
        createdById={user.id}
        questionForAi={{
          title: qeustion.title,
          content: qeustion.content,
        }}
      />
    </div>
  );
}
