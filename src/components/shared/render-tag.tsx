import Link from "next/link";
import { Badge } from "../ui/badge";

type Props =
  | {
      tid: string;
      tagname: string;
      showCount: true;
      totalQuestions: number;
    }
  | {
      tid: string;
      tagname: string;
      showCount: false;
    };

export default function RenderTag(props: Props) {
  return (
    <Link href={`/tags/${props.tid}`} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {props.tagname}
      </Badge>

      {props.showCount && (
        <p className="small-medium text-dark500_light700">
          {props.totalQuestions}
        </p>
      )}
    </Link>
  );
}
