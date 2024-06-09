import SectionContainer from "@/components/atoms/SectionContainer";
import Box from "../../../../components/atoms/Box";
import AuthorDetailLoader from "./AuthorDetailLoader";

function AuthorDetailSection({ idx }: { idx: number }) {
  return (
    <>
      <SectionContainer>
        <Box vertical className={`gap-10 py-10 sm:py-0`}>
          <AuthorDetailLoader idx={idx} />
        </Box>
      </SectionContainer>
    </>
  );
}

export default AuthorDetailSection;
