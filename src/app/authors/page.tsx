import AuthorsSection from "@/app/authors/components/AuthorsSection";
import InspirationSection from "@/components/organisms/InspirationSection";
import MainSideContainer from "@/components/organisms/MainSideContainer";
import PageContainer from "@/components/organisms/PageContainer";
import PageDivider from "@/components/organisms/PageDivider";
import RightSideContainer from "@/components/organisms/RightSideContainer";
import WhatsTrendingAsideSection from "@/components/organisms/WhatsTrendingAsideSection";

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
