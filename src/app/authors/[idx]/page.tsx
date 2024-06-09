import AuthorDetailSection from "@/app/authors/[idx]/components/AuthorDetailSection";
import MainSideContainer from "@/components/atoms/MainSideContainer";
import PageContainer from "@/components/atoms/PageContainer";
import RightSideContainer from "@/components/atoms/RightSideContainer";
import FeaturedAuthorAside from "@/components/organisms/FeaturedAuthorAside";
import PageDivider from "@/components/organisms/PageDivider";
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
        <FeaturedAuthorAside />
      </RightSideContainer>
    </PageContainer>
  );
}
export default AuthorPage;
