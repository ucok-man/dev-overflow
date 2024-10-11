import prisma from "../database/prisma-client";

type PrismaClientType = typeof prisma;

type PrismaEntitiesUnion = Exclude<
  keyof typeof prisma,
  | "$on"
  | "$connect"
  | "$disconnect"
  | symbol
  | "$use"
  | "$transaction"
  | "$runCommandRaw"
  | "$extends"
>;

export type PrismaQueryFindMany<E extends PrismaEntitiesUnion> = Parameters<
  PrismaClientType[E]["findMany"]
>["0"];
