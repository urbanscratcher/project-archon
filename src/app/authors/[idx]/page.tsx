import AuthorDetailSection from "@/app/authors/[idx]/components/AuthorDetailSection";
import FeaturedAuthorSection from "@/components/organisms/FeaturedAuthorSection";
import MainSideContainer from "@/components/organisms/MainSideContainer";
import PageContainer from "@/components/organisms/PageContainer";
import PageDivider from "@/components/organisms/PageDivider";
import RightSideContainer from "@/components/organisms/RightSideContainer";
import InsightsByAuthorSection from "./components/InsightsByAuthorSection";

function AuthorPage({ params }: { params: { idx: number } }) {
  const { idx } = params;

  return (
    <PageContainer>
      <MainSideContainer>
        <AuthorDetailSection idx={idx} />
        <InsightsByAuthorSection idx={idx} />
      </MainSideContainer>
      <PageDivider />
      <RightSideContainer>
        <FeaturedAuthorSection />
      </RightSideContainer>
    </PageContainer>
  );
}
export default AuthorPage;
