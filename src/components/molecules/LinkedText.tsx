import TextLinkWrapper from "../atoms/TextLinkWrapper";

type LinedTextProps = {
  href: string;
  title: string;
  level: 1 | 2 | 3 | 4;
  lineClamp: 3 | 4;
};

function LinkedText({ href, title, level = 1, lineClamp = 4 }: LinedTextProps) {
  const lineClampStyle = `line-clamp-${lineClamp}`;

  return (
    <TextLinkWrapper href={href}>
      {level === 1 && <h1 className={`${lineClampStyle}`}>{title}</h1>}
      {level === 2 && <h2 className={`${lineClampStyle}`}>{title}</h2>}
      {level === 3 && <h3 className={`${lineClampStyle}`}>{title}</h3>}
      {level === 4 && <h4 className={`${lineClampStyle}`}>{title}</h4>}
    </TextLinkWrapper>
  );
}

export default LinkedText;
