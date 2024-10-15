"use server";

import { Tag } from "@prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "../database/prisma-client";

type PostEditQuestionParam = {
  qid: string;
  title: string;
  content: string;
  tags: string[];
  revalidatePath?: string;
};

export async function postEditQuestion(params: PostEditQuestionParam) {
  try {
    const tags: Tag[] = [];
    for (const tagname of params.tags) {
      // make sure all tage are lowercase
      const sanitizedtag = tagname.toLowerCase();

      const tag = await prisma.tag.upsert({
        create: {
          name: sanitizedtag,
          description: "",
        },
        update: {
          name: sanitizedtag,
        },
        where: {
          name: sanitizedtag,
        },
      });
      tags.push(tag);
    }

    await prisma.question.update({
      where: {
        id: params.qid,
      },
      data: {
        content: params.content,
        title: params.title,
        tagIds: tags.map((t) => t.id),
      },
    });

    if (params.revalidatePath) {
      revalidatePath(params.revalidatePath);
    }
  } catch (error) {
    console.log(`error post edit question: ${error}`);
    throw error;
  }
}
