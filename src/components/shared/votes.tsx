"use client";

import { useToast } from "@/hooks/use-toast";
import {
  postToggleSaveQuestion,
  postToggleVoteAnswer,
  postToggleVoteQeustion,
} from "@/lib/actions";
import { formatNumber } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";

type Props =
  | {
      type: "question";
      cuid: string;
      itemId: string;
      upvotes: number;
      hasupVoted: boolean;
      downvotes: number;
      hasdownVoted: boolean;
      hasSaved: boolean;
    }
  | {
      type: "answer";
      cuid: string;
      itemId: string;
      upvotes: number;
      hasupVoted: boolean;
      downvotes: number;
      hasdownVoted: boolean;
    };

export default function Votes(props: Props) {
  const pathname = usePathname();
  const { toast } = useToast();

  const handlevote = async (action: "upvote" | "downvote") => {
    if (!props.cuid) {
      return toast({
        title: "Please log in",
        description: "You must be logged in to perform this action",
      });
    }

    if (props.type === "question") {
      await postToggleVoteQeustion({
        qid: props.itemId,
        action: action,
        cuid: props.cuid,
        hasUpvoted: props.hasupVoted,
        hasDownvoted: props.hasdownVoted,
        revalidatePath: pathname,
      });
    }

    if (props.type === "answer") {
      await postToggleVoteAnswer({
        qid: props.itemId,
        action: action,
        cuid: props.cuid,
        hasUpvoted: props.hasupVoted,
        hasDownvoted: props.hasdownVoted,
        revalidatePath: pathname,
      });
    }

    return toast({
      title: `${action} ${
        !props.hasupVoted && !props.hasdownVoted ? "Successful" : "Removed"
      }`,
      variant:
        !props.hasupVoted && !props.hasdownVoted ? "default" : "destructive",
    });
  };

  const handlesave = async () => {
    if (props.type === "question") {
      await postToggleSaveQuestion({
        qid: props.itemId,
        cuid: props.cuid,
        hasSaved: props.hasSaved,
        revalidatePath: pathname,
      });

      return toast({
        title: `Question ${
          !props.hasSaved ? "Saved in" : "Removed from"
        } your collection`,
        variant: !props.hasSaved ? "default" : "destructive",
      });
    }
  };

  return (
    <div className="flex gap-5">
      <div className="flex-center gap-2.5">
        {/* Upvotes icons */}
        <div className="flex-center gap-1.5">
          <Image
            src={
              props.hasupVoted
                ? "/assets/icons/upvoted.svg"
                : "/assets/icons/upvote.svg"
            }
            width={18}
            height={18}
            alt="upvote"
            className="cursor-pointer"
            onClick={() => handlevote("upvote")}
          />

          <div className="flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1">
            <p className="subtle-medium text-dark400_light900">
              {formatNumber(props.upvotes)}
            </p>
          </div>
        </div>

        {/* Downvotes icons */}
        <div className="flex-center gap-1.5">
          <Image
            src={
              props.hasdownVoted
                ? "/assets/icons/downvoted.svg"
                : "/assets/icons/downvote.svg"
            }
            width={18}
            height={18}
            alt="downvote"
            className="cursor-pointer"
            onClick={() => handlevote("downvote")}
          />

          <div className="flex-center background-light700_dark400 min-w-[18px] rounded-sm p-1">
            <p className="subtle-medium text-dark400_light900">
              {formatNumber(props.downvotes)}
            </p>
          </div>
        </div>
      </div>

      {/* Save question icons */}
      {props.type === "question" && (
        <Image
          src={
            props.hasSaved
              ? "/assets/icons/star-filled.svg"
              : "/assets/icons/star-red.svg"
          }
          width={18}
          height={18}
          alt="star"
          className="cursor-pointer"
          onClick={handlesave}
        />
      )}
    </div>
  );
}
