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
    <Link href="/" className={`${className || ""}`}>
      <Image
        src={logoImg}
        className={`${isWhite && "whiten"}`}
        width={180}
        height={37}
        alt="ArchOn logo"
      />
    </Link>
  );
}

export default Logo;
