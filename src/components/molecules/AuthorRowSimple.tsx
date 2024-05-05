import Link from "next/link";

type AuthorRowSimpleProps = {
  href: string;
  fullName: string;
};

function AuthorRowSimple({ href, fullName }: AuthorRowSimpleProps) {
  return (
    <p className="capitalize text-g-700">
      By{" "}
      <Link href={href} className="hover-darker capitalize">
        {fullName}
      </Link>
    </p>
  );
}

export default AuthorRowSimple;
