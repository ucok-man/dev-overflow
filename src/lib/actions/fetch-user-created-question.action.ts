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
  try {
    const skip = (page - 1) * pageSize;

    const userqestions = await prisma.question.findMany({
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
    });

    const totalquestion = await prisma.question.count({
      where: {
        createdById: uid,
      },
    });
    const isnext = totalquestion > skip + userqestions.length;
    return { userqestions, isnext };
  } catch (error) {
    console.log(`error fetch user created question: ${error}`);
    throw error;
  }
}
