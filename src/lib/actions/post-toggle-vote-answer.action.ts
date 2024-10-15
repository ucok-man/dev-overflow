"use server";

import { revalidatePath } from "next/cache";
import prisma from "../database/prisma-client";

type PostToggleVoteAnswerParams = {
  cuid: string;
  qid: string;
  action: "upvote" | "downvote";
  revalidatePath?: string;
  hasUpvoted: boolean;
  hasDownvoted: boolean;
};

export async function postToggleVoteAnswer(params: PostToggleVoteAnswerParams) {
  try {
    //   get the answer
    const answer = await prisma.answer.findUnique({
      where: {
        id: params.qid,
      },
    });

    if (!answer) {
      throw new Error(`record #${params.qid} not found`);
    }

    // Case action upvote
    if (params.action === "upvote") {
      if (params.hasUpvoted) {
        answer.upvotedByIds = answer.upvotedByIds.filter(
          (uid) => uid !== params.cuid
        );
      }

      if (!params.hasUpvoted) {
        if (params.action === "upvote") {
          answer.upvotedByIds.push(params.cuid);
        }
      }
      answer.downvotedByIds = answer.downvotedByIds.filter(
        (uid) => uid !== params.cuid
      );
    }

    // Case action downvote
    if (params.action === "downvote") {
      if (params.hasDownvoted) {
        answer.downvotedByIds = answer.downvotedByIds.filter(
          (uid) => uid !== params.cuid
        );
      }

      if (!params.hasDownvoted) {
        if (params.action === "downvote") {
          answer.downvotedByIds.push(params.cuid);
        }
      }
      answer.upvotedByIds = answer.upvotedByIds.filter(
        (uid) => uid !== params.cuid
      );
    }

    //   update answer
    await prisma.answer.update({
      data: {
        upvotedByIds: answer.upvotedByIds,
        downvotedByIds: answer.downvotedByIds,
      },
      where: {
        id: params.qid,
      },
    });

    // Increment author's reputation by +1/-1 for upvoting/revoking an upvote to the answer
    await prisma.user.update({
      data: {
        reputation: {
          increment: 1,
        },
      },
      where: {
        id: params.cuid,
      },
    });

    // Increment author's reputation by +10/-10 for recieving an upvote/downvote to the answer
    await prisma.user.update({
      data: {
        reputation: {
          increment: 5,
        },
      },
      where: {
        id: answer.createdById,
      },
    });

    if (params.revalidatePath) {
      revalidatePath(params.revalidatePath);
    }
  } catch (error) {
    console.log(`error post vote answer: ${error}`);
    throw error;
  }
}
