import Box from "../../../../components/atoms/Box";
import SectionContainer from "../../../../components/atoms/SectionContainer";
import AuthorDetailContent from "./AuthorDetailContent";

function AuthorDetailSection({ idx }: { idx: number }) {
  return (
    <SectionContainer>
      <Box vertical className={`gap-10`}>
        <AuthorDetailContent idx={idx} />
      </Box>
    </SectionContainer>
  );
}

export default AuthorDetailSection;
