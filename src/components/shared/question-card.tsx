import { formatNumber, formatTimestamp } from "@/lib/utils";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import EditDeleteAction from "./edit-delelete-action";
import Metric from "./metric";
import RenderTag from "./render-tag";

type Props = {
  question: {
    id: string;
    title: string;
    tags: {
      id: string;
      name: string;
    }[];
    createdBy: {
      id: string;
      name: string;
      picture: string;
      clerkId: string;
    };
    answers: {
      id: string;
    }[];
    upvotedBy: {
      id: string;
    }[];
    views: number;
    createdAt: Date;
  };
  uid?: string | null;
};

export default function QuestionCard({ question, uid }: Props) {
  const showActionButtons = uid && uid === question.createdBy.id;

  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {formatTimestamp(question.createdAt)}
          </span>
          <Link href={`/question/${question.id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {question.title}
            </h3>
          </Link>
        </div>

        <SignedIn>
          {showActionButtons && (
            <EditDeleteAction type="question" itemid={question.id} />
          )}
        </SignedIn>
      </div>

      <div className="mt-3.5 flex flex-wrap gap-2">
        {question.tags.map((tag) => (
          <RenderTag
            key={tag.id}
            tid={tag.id}
            tagname={tag.name}
            showCount={false}
          />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={question.createdBy.picture}
          alt="user"
          value={question.createdBy.name}
          title={` - asked ${formatTimestamp(question.createdAt)}`}
          href={`/profile/${question.createdBy.clerkId}`}
          isAuthor
          textStyles="body-medium text-dark400_light700"
        />
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="Upvotes"
            value={formatNumber(question.upvotedBy.length)}
            title=" Votes"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/message.svg"
            alt="message"
            value={formatNumber(question.answers.length)}
            title="Answers"
            textStyles="small-medium text-dark400_light800"
          />
          <Metric
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={formatNumber(question.views)}
            title=" Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
}
