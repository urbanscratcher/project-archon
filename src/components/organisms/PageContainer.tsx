import type { PropsWithChildren } from "react";

function PageContainer({ children }: PropsWithChildren) {
  return (
    <main className="mx-auto flex max-w-[1440px] flex-col py-[24px] sm:py-[32px] lg:flex-row">
      {children}
    </main>
  );
}

export default PageContainer;
