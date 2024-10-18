"use server";

import to from "await-to-js";
import prisma from "../database/prisma-client";
import { QuestionQueryFilterValue } from "../enums";
import { PrismaQueryFindMany } from "../types";

export type FetchAllQuestionParam = {
  searchquery?: string;
  filter?: QuestionQueryFilterValue;
  page?: number;
  pageSize?: number;
  cuid?: string;
};

export async function fetchAllQuestion(params: FetchAllQuestionParam) {
  // fill the default value
  if (params.filter === undefined)
    params.filter = QuestionQueryFilterValue.recommended;
  if (params.page === undefined) params.page = 1;
  if (params.pageSize === undefined) params.pageSize = 10;

  // check for filter
  const safefilter = Object.values(QuestionQueryFilterValue);
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
  if (params.filter !== QuestionQueryFilterValue.recommended) {
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

    if (params.filter === QuestionQueryFilterValue.unanswered) {
      query.where.AND = { answers: { none: {} } };
    }

    if (params.filter === QuestionQueryFilterValue.frequent) {
      query.orderBy.views = "desc";
    }

    if (params.filter === QuestionQueryFilterValue.newest) {
      query.orderBy.createdAt = "desc";
    }
  }

  if (params.filter === QuestionQueryFilterValue.recommended) {
    // TODO: Do real implementation for recommended fetching
    return null;
  }

  // pagination
  query.take = params.pageSize;
  query.skip = (params.page - 1) * params.pageSize;

  // execute and include tag and createdBy record
  const [err_qeustionfindmany, questions] = await to(
    prisma.question.findMany({
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
    })
  );
  if (err_qeustionfindmany !== null) {
    throw new Error(
      `[fetchAllQuestion] [prisma.question.findMany]: ${err_qeustionfindmany.message}`
    );
  }

  // get total record
  const [err_questioncount, totalrecord] = await to(
    prisma.question.count({
      where: query.where,
      orderBy: query.orderBy,
    })
  );
  if (err_questioncount !== null) {
    throw new Error(
      `[fetchAllQuestion] [prisma.question.count]: ${err_questioncount.message}`
    );
  }

  const isNext = totalrecord > query.skip + questions.length;

  return { questions, isNext };
}
