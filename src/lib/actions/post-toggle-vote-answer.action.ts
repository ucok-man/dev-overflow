"use server";

import to from "await-to-js";
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
  // get the answer
  const [err_answerfindunique, answer] = await to(
    prisma.answer.findUnique({
      where: {
        id: params.qid,
      },
    })
  );

  if (err_answerfindunique !== null) {
    throw new Error(
      `[postToggleVoteAnswer] [prisma.answer.findunique]: ${err_answerfindunique.message}`
    );
  }

  if (!answer) {
    throw new Error(
      `[postToggleVoteAnswer] [prisma.answer.findunique]: record #${params.qid} not found`
    );
  }

  // Case action upvote
  if (params.action === "upvote") {
    // This branch for revoking upvote
    if (params.hasUpvoted) {
      // Create query builder for answer
      answer.upvotedByIds = answer.upvotedByIds.filter(
        (uid) => uid !== params.cuid
      );

      // This should be decrement / taking back answer author reputation
      const [err_userupdate] = await to(
        prisma.user.update({
          data: {
            reputation: {
              decrement: 10,
            },
          },
          where: {
            id: answer.createdById,
          },
        })
      );

      if (err_userupdate !== null) {
        throw new Error(
          `[postToggleVoteAnswer] [prisma.answer.update] created answer: ${err_userupdate.message}`
        );
      }
    }

    // This branch for upvoting
    if (!params.hasUpvoted) {
      answer.upvotedByIds.push(params.cuid);

      // This should be increment answer author reputation
      const [err_userupdate] = await to(
        prisma.user.update({
          data: {
            reputation: {
              increment: 10,
            },
          },
          where: {
            id: answer.createdById,
          },
        })
      );

      if (err_userupdate !== null) {
        throw new Error(
          `[postToggleVoteAnswer] [prisma.answer.update] created answer: ${err_userupdate.message}`
        );
      }
    }

    // This branch for if user already downvoting move to upvote
    if (params.hasDownvoted) {
      answer.downvotedByIds = answer.downvotedByIds.filter(
        (uid) => uid !== params.cuid
      );

      // This should be increment answer author reputation
      const [err_userupdate] = await to(
        prisma.user.update({
          data: {
            reputation: {
              increment: 10,
            },
          },
          where: {
            id: answer.createdById,
          },
        })
      );

      if (err_userupdate !== null) {
        throw new Error(
          `[postToggleVoteAnswer] [prisma.answer.update] created answer: ${err_userupdate.message}`
        );
      }
    }
  }

  // Case action downvote
  if (params.action === "downvote") {
    // This branch for revoking downvote
    if (params.hasDownvoted) {
      answer.downvotedByIds = answer.downvotedByIds.filter(
        (uid) => uid !== params.cuid
      );

      // This should be increment / taking back answer author reputation
      const [err_userupdate] = await to(
        prisma.user.update({
          data: {
            reputation: {
              increment: 10,
            },
          },
          where: {
            id: answer.createdById,
          },
        })
      );

      if (err_userupdate !== null) {
        throw new Error(
          `[postToggleVoteAnswer] [prisma.answer.update] created answer: ${err_userupdate.message}`
        );
      }
    }

    // This branch for downvoting
    if (!params.hasDownvoted) {
      answer.downvotedByIds.push(params.cuid);

      // This should be decrement answer author reputation
      const [err_userupdate] = await to(
        prisma.user.update({
          data: {
            reputation: {
              decrement: 10,
            },
          },
          where: {
            id: answer.createdById,
          },
        })
      );

      if (err_userupdate !== null) {
        throw new Error(
          `[postToggleVoteAnswer] [prisma.answer.update] created answer: ${err_userupdate.message}`
        );
      }
    }

    // This branch for user already upvote move to downvoting
    if (params.hasUpvoted) {
      answer.upvotedByIds = answer.upvotedByIds.filter(
        (uid) => uid !== params.cuid
      );

      // This should be decrement answer author reputation
      const [err_userupdate] = await to(
        prisma.user.update({
          data: {
            reputation: {
              decrement: 10,
            },
          },
          where: {
            id: answer.createdById,
          },
        })
      );

      if (err_userupdate !== null) {
        throw new Error(
          `[postToggleVoteAnswer] [prisma.answer.update] created answer: ${err_userupdate.message}`
        );
      }
    }
  }

  // update answer
  const [err_answerupdate] = await to(
    prisma.answer.update({
      data: {
        upvotedByIds: answer.upvotedByIds,
        downvotedByIds: answer.downvotedByIds,
      },
      where: {
        id: params.qid,
      },
    })
  );

  if (err_answerupdate !== null) {
    throw new Error(
      `[postToggleVoteAnswer] [prisma.answer.update]: ${err_answerupdate.message}`
    );
  }

  if (params.revalidatePath) {
    revalidatePath(params.revalidatePath);
  }
}
