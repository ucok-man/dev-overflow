import prisma from "../database/prisma-client";

type PostUpdateQuestionViewParams = {
  qid: string;
};

export async function postUpdateQuestionView({
  qid,
}: PostUpdateQuestionViewParams) {
  try {
    await prisma.question.update({
      where: { id: qid },
      data: {
        views: {
          increment: 1,
        },
      },
    });
  } catch (error) {
    console.log(`error post update question view: ${error}`);
    throw error;
  }
}
