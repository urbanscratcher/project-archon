import type { PropsWithChildren } from "react";

function PageContainer({ children }: PropsWithChildren) {
  return (
    <main className="mx-auto flex flex-col py-[28px] sm:py-[32px] lg:flex-row xl:max-w-[1440px]">
      {children}
    </main>
  );
}

export default PageContainer;
