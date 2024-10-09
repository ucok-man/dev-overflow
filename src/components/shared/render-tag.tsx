import Link from "next/link";
import { Badge } from "../ui/badge";

type Props = {
  tid: string;
  tagname: string;
  totalQuestions: number;
  showCount: boolean;
};

export default function RenderTag({
  tid,
  tagname,
  totalQuestions,
  showCount,
}: Props) {
  return (
    <Link href={`/tags/${tid}`} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {tagname}
      </Badge>

      {showCount && (
        <p className="small-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
}
