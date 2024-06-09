import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

function Logo({
  className,
  isWhite,
}: {
  className?: string;
  isWhite?: boolean;
}) {
  return (
    <Link
      href="/"
      className={`${className || ""} translate-y-[1px] py-1 sm:translate-y-[2px]`}
    >
      <Image
        src={logoImg}
        className={`${isWhite && "whiten"} h-full`}
        width={180}
        height={37}
        alt="ArchOn logo"
      />
    </Link>
  );
}

export default Logo;
