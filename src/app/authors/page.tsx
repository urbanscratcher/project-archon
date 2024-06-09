import AuthorsSection from "@/app/authors/components/AuthorsSection";
import InspirationSection from "@/components/organisms/InspirationSection";
import PageDivider from "@/components/organisms/PageDivider";
import WhatsTrendingAsideSection from "@/components/organisms/WhatsTrendingAsideSection";
import MainSideContainer from "@/components/organisms/MainSideContainer";
import PageContainer from "@/components/organisms/PageContainer";
import RightSideContainer from "@/components/organisms/RightSideContainer";

function AuthorsPage() {
  return (
    <PageContainer>
      <MainSideContainer>
        <AuthorsSection />
      </MainSideContainer>
      <PageDivider />
      <RightSideContainer>
        <WhatsTrendingAsideSection />
        <InspirationSection />
      </RightSideContainer>
    </PageContainer>
  );
}

export default AuthorsPage;
