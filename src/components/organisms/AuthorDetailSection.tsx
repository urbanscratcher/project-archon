import Box from "../atoms/Box";
import SectionContainer from "../atoms/SectionContainer";
import AuthorDetail from "../molecules/AuthorDetail";

function AuthorDetailSection({ idx }: { idx: number }) {
  return (
    <SectionContainer>
      <Box vertical className={`gap-8`}>
        <AuthorDetail idx={idx} />
      </Box>
    </SectionContainer>
  );
}

export default AuthorDetailSection;
