"use server";

import prisma from "../database/prisma-client";
import { HomepageFilterValue } from "../enums";
import { PrismaQueryFindMany } from "../types";

export type FetchHomePageQuestionParam = {
  searchquery?: string;
  filter?: HomepageFilterValue;
  page?: number;
  pageSize?: number;
  userId: string | null;
};

export async function fetchHomePageQuestion(
  params: FetchHomePageQuestionParam
) {
  // fill the default value
  if (params.filter === undefined)
    params.filter = HomepageFilterValue.recommended;
  if (params.page === undefined) params.page = 1;
  if (params.pageSize === undefined) params.pageSize = 10;

  // check for filter
  const safefilter = Object.values(HomepageFilterValue);
  let isSafe = false;
  for (const key in safefilter) {
    if (params.filter == safefilter[key]) {
      isSafe = true;
    }
  }
  if (!isSafe) return null;

  // create query builder
  const query: PrismaQueryFindMany<"question"> = {};
  query.where = {}; // initialize 'where' object, so it must be defined
  query.orderBy = {}; // initialize 'orderBy' object, so it must be defined

  // make branch for 'filter' recommended and other.
  // it will treat differently
  if (params.filter !== HomepageFilterValue.recommended) {
    // if search query is defined then search based on that
    if (params.searchquery) {
      query.where.OR = [
        {
          title: {
            contains: params.searchquery,
          },
        },
        {
          content: {
            contains: params.searchquery,
          },
        },
      ];
    }

    if (params.filter === HomepageFilterValue.unanswered) {
      query.where.AND = { answers: { none: {} } };
    }

    if (params.filter === HomepageFilterValue.frequent) {
      query.orderBy.views = "desc";
    }

    if (params.filter === HomepageFilterValue.newest) {
      query.orderBy.createdAt = "desc";
    }
  }

  if (params.filter === HomepageFilterValue.recommended) {
    // TODO: Do real implementation for recommended fetching
    return null;
  }

  try {
    // pagination
    query.take = params.pageSize;
    query.skip = (params.page - 1) * params.pageSize;

    // execute and include tag and createdBy record
    const questions = await prisma.question.findMany({
      ...query,
      ...{
        include: {
          tags: true,
          createdBy: true,
          answers: true,
          upvotedBy: true,
          downvotedBy: true,
          savedBy: true,
        },
      },
    });

    // get total record
    const totalrecord = await prisma.question.count({
      where: query.where,
      orderBy: query.orderBy,
    });
    const isNext = totalrecord > query.skip + questions.length;

    return { questions, isNext };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
