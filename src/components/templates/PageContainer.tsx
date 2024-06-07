import type { PropsWithChildren } from "react";

function PageContainer({ children }: PropsWithChildren) {
  return (
    <main className="mx-auto my-0 flex max-w-[1440px] flex-col py-[24px] sm:py-[24px] lg:flex-row">
      {children}
    </main>
  );
}

export default PageContainer;
