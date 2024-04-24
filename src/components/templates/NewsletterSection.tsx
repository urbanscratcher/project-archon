import SectionContainer from "../SectionContainer";
import SectionHead from "../SectionHead";
import NewsletterForm from "../organisms/NewsletterForm";

function NewsletterSection({ className }: { className?: string }) {
  return (
    <SectionContainer border whitespace="sub" className={`${className || ""}`}>
      <SectionHead>Newsletter</SectionHead>
      <NewsletterForm />
    </SectionContainer>
  );
}

export default NewsletterSection;
