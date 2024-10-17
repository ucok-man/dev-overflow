import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <ShouldLinkOrNot href={props.href}>
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
    </ShouldLinkOrNot>
  );
}

function ShouldLinkOrNot(props: {
  children: React.ReactNode;
  href: string | undefined;
}) {
  if (props.href !== undefined) {
    return (
      <Link href={props.href} className="flex-center gap-1">
        {props.children}
      </Link>
    );
  }

  return <div className="flex-center flex-wrap gap-1">{props.children}</div>;
}
