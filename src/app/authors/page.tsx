import InspirationSection from "@/components/organisms/InspirationSection";
import PageDivider from "@/components/organisms/PageDivider";
import WhatsTrendingAsideSection from "@/components/organisms/WhatsTrendingAsideSection";
import AuthorsSection from "@/components/templates/AuthorsSection";
import MainSideContainer from "@/components/templates/MainSideContainer";
import PageContainer from "@/components/templates/PageContainer";
import RightSideContainer from "@/components/templates/RightSideContainer";

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
