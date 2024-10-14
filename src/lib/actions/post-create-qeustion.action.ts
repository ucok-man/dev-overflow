"use server";

import { Tag } from "@prisma/client";
import { revalidatePath } from "next/cache";
import prisma from "../database/prisma-client";

export type PostCreateQuestionParams = {
  title: string;
  content: string;
  tags: string[];
  createdById: string;
  revalidatedPath: string;
};

export async function postCreateQuestion(params: PostCreateQuestionParams) {
  try {
    const question = await prisma.question.create({
      data: {
        title: params.title,
        content: params.content,
        views: 0,
        createdById: params.createdById,
      },
    });

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
        id: question.id,
      },
      data: {
        tagIds: tags.map((t) => t.id),
      },
    });

    // increment author reputaion by +5 for creating question
    await prisma.user.update({
      where: {
        id: params.createdById,
      },
      data: {
        reputation: {
          increment: 5,
        },
      },
    });

    if (revalidatePath) {
      revalidatePath(params.revalidatedPath);
    }
  } catch (error) {
    console.log(`error creating question ${error}`);
    throw error;
  }
}
