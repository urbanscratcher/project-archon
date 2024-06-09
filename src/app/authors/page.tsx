import AuthorsSection from "@/app/authors/components/AuthorsSection";
import MainSideContainer from "@/components/atoms/MainSideContainer";
import PageContainer from "@/components/atoms/PageContainer";
import RightSideContainer from "@/components/atoms/RightSideContainer";
import InspirationAside from "@/components/organisms/InspirationAside";
import PageDivider from "@/components/organisms/PageDivider";
import WhatsTrendingAside from "@/components/organisms/WhatsTrendingAside";

function AuthorsPage() {
  return (
    <PageContainer>
      <MainSideContainer>
        <AuthorsSection />
      </MainSideContainer>
      <PageDivider />
      <RightSideContainer>
        <WhatsTrendingAside />
        <InspirationAside />
      </RightSideContainer>
    </PageContainer>
  );
}

export default AuthorsPage;
