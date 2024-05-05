import { WrapperProps } from "@/types/CommonTypes";

function HeadlineSectionContainer({ children }: WrapperProps) {
  return (
    <section
      className={`
      3xl:max-h-[1440px]
      relative
      h-screen
      max-h-[700px]
      min-h-[496px]
      sm:max-h-[682px]
      lg:min-h-[1080px]
    `}
    >
      {children}
    </section>
  );
}

export default HeadlineSectionContainer;
