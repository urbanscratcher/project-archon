import LinkTextWrapper from "../atoms/LinkTextWrapper";

type LinedTextProps = {
  href: string;
  text: string;
  level: 1 | 2 | 3 | 4;
  lineClamp: 3 | 4;
};

function LinkText({ href, text, level = 1, lineClamp = 4 }: LinedTextProps) {
  const lineClampStyle = `line-clamp-${lineClamp}`;

  return (
    <LinkTextWrapper href={href}>
      {level === 1 && <h1 className={`${lineClampStyle}`}>{text}</h1>}
      {level === 2 && <h2 className={`${lineClampStyle}`}>{text}</h2>}
      {level === 3 && <h3 className={`${lineClampStyle}`}>{text}</h3>}
      {level === 4 && <h4 className={`${lineClampStyle}`}>{text}</h4>}
    </LinkTextWrapper>
  );
}

export default LinkText;
