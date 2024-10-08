import Image from "next/image";
import Link from "next/link";

type Props = {
  isSmHidden: boolean;
};

export default function Logo({ isSmHidden }: Props) {
  return (
    <Link href="/" className="flex items-center gap-1">
      <div className="relative size-[23px]">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="Dev Overflow Logo"
        />
      </div>
      <p
        className={`h2-bold text-dark100_light900 text-nowrap font-spaceGrotesk ${
          isSmHidden ? "max-sm:hidden" : ""
        }`}
      >
        Dev <span className="text-primary-500">Overflow</span>
      </p>
    </Link>
  );
}
