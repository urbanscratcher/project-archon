import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
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
