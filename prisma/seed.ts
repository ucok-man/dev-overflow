import { PrismaClient } from "@prisma/client";
import { answersData, questionData, tagData, userData } from "./initial-data";

const prisma = new PrismaClient();

function transform<T extends object>(obj: T) {
  const ud: T[keyof T][] = [];
  for (const key in obj) {
    ud.push(obj[key]);
  }
  return ud;
}

async function main() {
  /* ---------------------------------------------------------------- */
  /*                           create users                           */
  /* ---------------------------------------------------------------- */
  await prisma.user.createMany({
    data: transform(userData),
  });

  /* ---------------------------------------------------------------- */
  /*                            create tags                           */
  /* ---------------------------------------------------------------- */
  await prisma.tag.createMany({
    data: transform(tagData),
  });

  /* ---------------------------------------------------------------- */
  /*                         create questions                         */
  /* ---------------------------------------------------------------- */
  await prisma.question.createMany({
    data: transform(questionData),
  });

  /* ---------------------------------------------------------------- */
  /*                           create answer                          */
  /* ---------------------------------------------------------------- */
  await prisma.answer.createMany({
    data: transform(answersData),
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
