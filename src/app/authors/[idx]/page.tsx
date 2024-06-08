import AuthorDetailSection from "@/components/organisms/AuthorDetailSection";
import FeaturedAuthorSection from "@/components/organisms/FeaturedAuthorSection";
import PageDivider from "@/components/organisms/PageDivider";
import MainSideContainer from "@/components/templates/MainSideContainer";
import PageContainer from "@/components/templates/PageContainer";
import RightSideContainer from "@/components/templates/RightSideContainer";
import InsightsByAuthorSection from "../../../components/organisms/InsightsByAuthorSection";

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
