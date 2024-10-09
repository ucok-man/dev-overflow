import { Question } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  question: Question;
};

export default function TopQuestionItem({ question }: Props) {
  return (
    <Link
      href={`/question/${question.id}`}
      key={question.id}
      className="flex cursor-pointer items-center justify-between gap-7"
    >
      <p className="body-medium text-dark500_light700">{question.title}</p>
      <Image
        src="/assets/icons/chevron-right.svg"
        alt="chevron right"
        width={20}
        height={20}
        className="invert-colors"
      />
    </Link>
  );
}
