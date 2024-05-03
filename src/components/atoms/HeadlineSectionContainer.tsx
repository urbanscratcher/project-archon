import { WrapperProps } from "@/types/CommonTypes";

function HeadlineSectionContainer({ children, className }: WrapperProps) {
  return (
    <section
      className={`relative h-screen max-h-[700px] min-h-[300px] sm:max-h-none lg:min-h-[860px] 2xl:h-[1033px]`}
    >
      {children}
    </section>
  );
}

export default HeadlineSectionContainer;
