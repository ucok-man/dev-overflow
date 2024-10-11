import Image from "next/image";
import Link from "next/link";

type Props = {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
};

export default function Metric(props: Props) {
  return (
    <Link
      href={{
        href: props.href,
      }}
      className={`${
        props.href ? "flex-center  gap-1" : "flex-center flex-wrap gap-1"
      }`}
    >
      <Image
        src={props.imgUrl}
        width={16}
        height={16}
        alt={props.alt}
        className={`object-contain ${props.href ? "rounded-full" : ""}`}
      />

      <p className={`${props.textStyles} flex items-center gap-1`}>
        {props.value}

        <span
          className={`small-regular line-clamp-1 ${
            props.isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {props.title}
        </span>
      </p>
    </Link>
  );
}
