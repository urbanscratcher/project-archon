import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";

function GNB() {
  return (
    <nav
      className={`fixed z-20 grid h-[96px] w-full grid-cols-[auto_1fr_10fr] items-center gap-1 px-10 py-4`}
    >
      <Link href="/" className={`mb-3`}>
        <Image
          src={logoImg}
          className={`whiten`}
          width={180}
          height={37}
          alt="ArchOn logo"
        />
      </Link>
      <div className="mx-10 text-white">
        <Link
          className={`text-md mx-5 font-medium uppercase tracking-wide`}
          href="/insights"
        >
          Insights
        </Link>
        <Link
          className={`text-md mx-5 font-medium uppercase tracking-wide`}
          href="/authors"
        >
          Authors
        </Link>
      </div>
      <div className="justify-self-end text-sky-700">
        <Link
          className={`text-md mx-5 font-semibold uppercase tracking-wide`}
          href="/bookmark"
        >
          Bookmark
        </Link>
        <Link
          className={`text-md mx-5 font-semibold uppercase tracking-wide`}
          href="/setting"
        >
          Setting
        </Link>
      </div>
    </nav>
  );
}

export default GNB;
