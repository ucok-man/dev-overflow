"use server";

import to from "await-to-js";
import prisma from "../database/prisma-client";

export async function fetchQuestionById({ qid }: { qid: string }) {
  const [err_qeustionfindunique, question] = await to(
    prisma.question.findUnique({
      where: {
        id: qid,
      },
      include: {
        createdBy: true,
        answers: true,
        tags: true,
      },
    })
  );
  if (err_qeustionfindunique !== null) {
    throw new Error(
      `[fetchQuestionById] [prisma.question.findUnique]: ${err_qeustionfindunique.message}`
    );
  }

  if (!question) {
    throw new Error(
      `[fetchQuestionById] [prisma.question.findUnique]: record #${qid} not found`
    );
  }

  return question;
}
