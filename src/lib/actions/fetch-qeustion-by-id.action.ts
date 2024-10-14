"use server";

import prisma from "../database/prisma-client";

export async function fetchQuestionById({ qid }: { qid: string }) {
  try {
    const question = await prisma.question.findUnique({
      where: {
        id: qid,
      },
      include: {
        createdBy: true,
        answers: true,
        tags: true,
      },
    });

    if (!question) {
      throw new Error(`error fetch question by id: record #${qid} not found`);
    }

    return question;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
