"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  type: "question" | "answer";
  itemid: string;
};

export default function EditDeleteAction({ type, itemid }: Props) {
  //   const pathname = usePathname();
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/question/edit/${itemid}`);
  };

  const onClick = async () => {
    if (type === "question") {
      // TODO: Delete action for questions
      return;
    }

    // TODO: delete action for answer
    return;
  };

  return (
    <div className="flex items-center justify-end gap-3 max-sm:w-full">
      {type === "question" && (
        <Image
          src="/assets/icons/edit.svg"
          alt="Edit"
          width={14}
          height={14}
          className="cursor-pointer object-contain"
          onClick={handleEdit}
        />
      )}

      <Image
        src="/assets/icons/trash.svg"
        alt="Delete"
        width={14}
        height={14}
        className="cursor-pointer object-contain"
        onClick={() => onClick()}
      />
    </div>
  );
}
