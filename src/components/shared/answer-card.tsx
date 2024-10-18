import { formatNumber, formatTimestamp } from "@/lib/utils";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import EditDeleteAction from "./edit-delelete-action";
import Metric from "./metric";

interface Props {
  uid?: string | null;
  answer: {
    id: string;
    question: {
      id: string;
      title: string;
    };
    createdBy: {
      id: string;
      clerkId: string;
      name: string;
      picture: string;
    };
    upvotedBy: {
      id: string;
    }[];
    createdAt: Date;
  };
}

export default function AnswerCard({ uid, answer }: Props) {
  const showActionButtons = uid && uid === answer.createdBy.id;

  return (
    <div className="card-wrapper rounded-[10px] px-11 py-9">
      <Link href={`/question/${answer.question.id}/#${answer.id}`}>
        <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
          <div>
            <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
              {formatTimestamp(answer.createdAt)}
            </span>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {answer.question.title}
            </h3>
          </div>

          <SignedIn>
            {showActionButtons && (
              <EditDeleteAction type="answer" itemid={answer.id} />
            )}
          </SignedIn>
        </div>
      </Link>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={answer.createdBy.picture}
          alt="user avatar"
          value={answer.createdBy.name}
          title={` • asked ${formatTimestamp(answer.createdAt)}`}
          href={`/profile/${answer.createdBy.clerkId}`}
          textStyles="body-medium text-dark400_light700"
          isAuthor
        />

        <div className="flex-center gap-3">
          <Metric
            imgUrl="/assets/icons/like.svg"
            alt="like icon"
            value={formatNumber(answer.upvotedBy.length)}
            title=" Votes"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
}
