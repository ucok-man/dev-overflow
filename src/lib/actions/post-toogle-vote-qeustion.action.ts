"use server";

import { revalidatePath } from "next/cache";
import prisma from "../database/prisma-client";

type PostToggleVoteQuestionParams = {
  cuid: string;
  qid: string;
  action: "upvote" | "downvote";
  revalidatePath?: string;
  hasUpvoted: boolean;
  hasDownvoted: boolean;
};

export async function postToggleVoteQeustion(
  params: PostToggleVoteQuestionParams
) {
  try {
    //   get the qeustion
    const question = await prisma.question.findUnique({
      where: {
        id: params.qid,
      },
    });

    if (!question) {
      throw new Error(`record #${params.qid} not found`);
    }

    // Case action upvote
    if (params.action === "upvote") {
      if (params.hasUpvoted) {
        question.upvotedByIds = question.upvotedByIds.filter(
          (uid) => uid !== params.cuid
        );
      }

      if (!params.hasUpvoted) {
        if (params.action === "upvote") {
          question.upvotedByIds.push(params.cuid);
        }
      }
      question.downvotedByIds = question.downvotedByIds.filter(
        (uid) => uid !== params.cuid
      );
    }

    // Case action downvote
    if (params.action === "downvote") {
      if (params.hasDownvoted) {
        question.downvotedByIds = question.downvotedByIds.filter(
          (uid) => uid !== params.cuid
        );
      }

      if (!params.hasDownvoted) {
        if (params.action === "downvote") {
          question.downvotedByIds.push(params.cuid);
        }
      }
      question.upvotedByIds = question.upvotedByIds.filter(
        (uid) => uid !== params.cuid
      );
    }

    //   update qeustion
    await prisma.question.update({
      data: {
        upvotedByIds: question.upvotedByIds,
        downvotedByIds: question.downvotedByIds,
      },
      where: {
        id: params.qid,
      },
    });

    // Increment author's reputation by +1/-1 for upvoting/revoking an upvote to the question
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

    // Increment author's reputation by +10/-10 for recieving an upvote/downvote to the question
    await prisma.user.update({
      data: {
        reputation: {
          increment: 5,
        },
      },
      where: {
        id: question.createdById,
      },
    });

    if (params.revalidatePath) {
      revalidatePath(params.revalidatePath);
    }
  } catch (error) {
    console.log(`error post vote question: ${error}`);
    throw error;
  }
}
