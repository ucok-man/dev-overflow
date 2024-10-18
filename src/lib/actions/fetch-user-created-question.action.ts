import to from "await-to-js";
import prisma from "../database/prisma-client";

type FetchUserCreatedQuestionParams = {
  uid: string;
  page: number;
  pageSize: number;
};

export async function fetchUserCreatedQuestion({
  uid,
  page,
  pageSize,
}: FetchUserCreatedQuestionParams) {
  const skip = (page - 1) * pageSize;

  const [err_questionfindmany, userquestions] = await to(
    prisma.question.findMany({
      where: {
        createdById: uid,
      },
      include: {
        answers: true,
        createdBy: true,
        tags: true,
        upvotedBy: true,
      },
      skip: skip,
      take: pageSize,
    })
  );
  if (err_questionfindmany !== null) {
    throw new Error(
      `[fetchUserCreatedQuestion] [prisma.question.findMany]: ${err_questionfindmany.message}`
    );
  }

  const [err_questioncount, totalrecord] = await to(
    prisma.question.count({
      where: {
        createdById: uid,
      },
    })
  );

  if (err_questioncount !== null) {
    throw new Error(
      `[fetchUserCreatedQuestion] [prisma.question.count]: ${err_questioncount.message}`
    );
  }

  const isnext = totalrecord > skip + userquestions.length;

  return { userquestions, isnext };
}
