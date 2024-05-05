import LinkTextWrapper from "../atoms/LinkTextWrapper";

type LinedTextProps = {
  href: string;
  text: string;
  lineClamp?: 3 | 4;
  level?: 1 | 2 | 3 | 4;
  className?: string;
};

function LinkText({
  href,
  text,
  level = 1,
  lineClamp = 4,
  className,
}: LinedTextProps) {
  const lineClampStyle = lineClamp ? `line-clamp-${lineClamp}` : "";

  return (
    <LinkTextWrapper href={href} className={`${className || ""}`}>
      {level === 1 && <h1 className={`${lineClampStyle}`}>{text}</h1>}
      {level === 2 && <h2 className={`${lineClampStyle} `}>{text}</h2>}
      {level === 3 && <h3 className={`${lineClampStyle} `}>{text}</h3>}
      {level === 4 && <h4 className={`${lineClampStyle} `}>{text}</h4>}
      {!level && <p className={`${lineClampStyle} `}>{text}</p>}
    </LinkTextWrapper>
  );
}

export default LinkText;
