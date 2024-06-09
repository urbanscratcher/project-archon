import SectionContainer from "../../components/atoms/SectionContainer";
import SectionHead from "../../components/atoms/SectionHead";
import NewsletterForm from "../../components/molecules/NewsletterForm";

function NewsletterSection({ className }: { className?: string }) {
  return (
    <SectionContainer border whitespace="sub" className={`${className || ""}`}>
      <SectionHead>Newsletter</SectionHead>
      <NewsletterForm />
    </SectionContainer>
  );
}

export default NewsletterSection;
