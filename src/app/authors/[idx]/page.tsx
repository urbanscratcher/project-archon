import FeaturedAuthorSection from "@/components/organisms/FeaturedAuthorSection";
import PageDivider from "@/components/organisms/PageDivider";
import AuthorDetail from "@/components/templates/AuthorDetail";
import MainSideContainer from "@/components/templates/MainSideContainer";
import PageContainer from "@/components/templates/PageContainer";
import RightSideContainer from "@/components/templates/RightSideContainer";
import InsightsByAuthor from "../../../components/templates/InsightsByAuthor";

function AuthorPage({ params }: { params: { idx: number } }) {
  const { idx } = params;

  return (
    <PageContainer>
      <MainSideContainer>
        <AuthorDetail idx={idx} />
        <InsightsByAuthor idx={idx} />
      </MainSideContainer>
      <PageDivider />
      <RightSideContainer>
        <FeaturedAuthorSection />
      </RightSideContainer>
    </PageContainer>
  );
}
export default AuthorPage;
