import to from "await-to-js";
import prisma from "../database/prisma-client";

type FetchUserCreatedAnswerParams = {
  uid: string;
  page: number;
  pageSize: number;
};

export async function fetchUserCreatedAnswer({
  uid,
  page,
  pageSize,
}: FetchUserCreatedAnswerParams) {
  const skip = (page - 1) * pageSize;

  const [err_answerfindmany, useranswers] = await to(
    prisma.answer.findMany({
      where: {
        createdById: uid,
      },
      include: {
        createdBy: true,
        upvotedBy: true,
        question: true,
      },
      skip: skip,
      take: pageSize,
    })
  );
  if (err_answerfindmany !== null) {
    throw new Error(
      `[fetchUserCreatedAnswer] [prisma.answer.findMany]: ${err_answerfindmany.message}`
    );
  }

  const [err_answercount, totalrecord] = await to(
    prisma.answer.count({
      where: {
        createdById: uid,
      },
    })
  );

  if (err_answercount !== null) {
    throw new Error(
      `[fetchUserCreatedAnswer] [prisma.answer.count]: ${err_answercount.message}`
    );
  }

  const isnext = totalrecord > skip + useranswers.length;

  return { useranswers, isnext };
}
