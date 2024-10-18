"use server";

import to from "await-to-js";
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

// Downvoting question not change the author reputation, but upvoting do

export async function postToggleVoteQuestion(
  params: PostToggleVoteQuestionParams
) {
  // get the question
  const [err_questionfindunique, question] = await to(
    prisma.question.findUnique({
      where: {
        id: params.qid,
      },
    })
  );

  if (err_questionfindunique !== null) {
    throw new Error(
      `[postToggleVoteAnswer] [prisma.question.findunique]: ${err_questionfindunique.message}`
    );
  }

  if (!question) {
    throw new Error(
      `[postToggleVoteAnswer] [prisma.question.findunique]: record #${params.qid} not found`
    );
  }

  // Case action upvote
  if (params.action === "upvote") {
    // This branch for revoking upvote
    if (params.hasUpvoted) {
      // Create query builder for question
      question.upvotedByIds = question.upvotedByIds.filter(
        (uid) => uid !== params.cuid
      );

      // This should be decrement / taking back question author reputation
      const [err_userupdate] = await to(
        prisma.user.update({
          data: {
            reputation: {
              decrement: 5,
            },
          },
          where: {
            id: question.createdById,
          },
        })
      );

      if (err_userupdate !== null) {
        throw new Error(
          `[postToggleVoteAnswer] [prisma.question.update] created question: ${err_userupdate.message}`
        );
      }
    }

    // This branch for upvoting
    if (!params.hasUpvoted) {
      question.upvotedByIds.push(params.cuid);

      // This should be increment question author reputation
      const [err_userupdate] = await to(
        prisma.user.update({
          data: {
            reputation: {
              increment: 5,
            },
          },
          where: {
            id: question.createdById,
          },
        })
      );

      if (err_userupdate !== null) {
        throw new Error(
          `[postToggleVoteAnswer] [prisma.question.update] created question: ${err_userupdate.message}`
        );
      }
    }

    // This branch for if user already downvoting move to upvote
    if (params.hasDownvoted) {
      question.downvotedByIds = question.downvotedByIds.filter(
        (uid) => uid !== params.cuid
      );
    }
  }

  // Case action downvote
  if (params.action === "downvote") {
    // This branch for revoking downvote
    if (params.hasDownvoted) {
      question.downvotedByIds = question.downvotedByIds.filter(
        (uid) => uid !== params.cuid
      );
    }

    // This branch for downvoting
    if (!params.hasDownvoted) {
      question.downvotedByIds.push(params.cuid);
    }

    // This branch for user already upvote move to downvoting
    if (params.hasUpvoted) {
      question.upvotedByIds = question.upvotedByIds.filter(
        (uid) => uid !== params.cuid
      );

      // This should be decrement / taking back question author reputation
      const [err_userupdate] = await to(
        prisma.user.update({
          data: {
            reputation: {
              decrement: 5,
            },
          },
          where: {
            id: question.createdById,
          },
        })
      );

      if (err_userupdate !== null) {
        throw new Error(
          `[postToggleVoteAnswer] [prisma.question.update] created question: ${err_userupdate.message}`
        );
      }
    }
  }

  // update question
  const [err_questionupdate] = await to(
    prisma.question.update({
      data: {
        upvotedByIds: question.upvotedByIds,
        downvotedByIds: question.downvotedByIds,
      },
      where: {
        id: params.qid,
      },
    })
  );

  if (err_questionupdate !== null) {
    throw new Error(
      `[postToggleVoteAnswer] [prisma.question.update]: ${err_questionupdate.message}`
    );
  }

  if (params.revalidatePath) {
    revalidatePath(params.revalidatePath);
  }
}
