import to from "await-to-js";
import prisma from "../database/prisma-client";
import { calculateBadge } from "../utils";

type FetchUserByIdParams = {
  clerkid: string;
};

export async function fetchUserInfo(props: FetchUserByIdParams) {
  const [err_userfindunique, user] = await to(
    prisma.user.findUnique({
      where: {
        clerkId: props.clerkid,
      },
      include: {
        createdQuestion: {
          select: {
            views: true,
          },
        },
        _count: {
          select: {
            createdQuestion: true,
            createdAnswer: true,
            upvotedAnswers: true,
            upvotedQuestions: true,
          },
        },
      },
    })
  );
  if (err_userfindunique !== null) {
    throw new Error(
      `[fetchUserInfo] [prisma.user.findUnique] : ${err_userfindunique}`
    );
  }

  if (!user) {
    throw new Error(
      `[fetchUserInfo] [prisma.user.findUnique] : record with clerkid #${props.clerkid} not found`
    );
  }

  const badgecounts = calculateBadge({
    criteriaInputs: [
      {
        type: "QUESTION_COUNT",
        count: user?._count.createdQuestion || 0,
      },
      {
        type: "ANSWER_COUNT",
        count: user?._count.createdAnswer || 0,
      },
      {
        type: "QUESTION_UPVOTES",
        count: user?._count.upvotedAnswers || 0,
      },
      {
        type: "ANSWER_UPVOTES",
        count: user?._count.upvotedAnswers || 0,
      },
      {
        type: "TOTAL_VIEWS",
        count:
          user?.createdQuestion.reduce((totview, question) => {
            return (totview += question.views);
          }, 0) || 0,
      },
    ],
  });

  return { user, badgecounts };
}
