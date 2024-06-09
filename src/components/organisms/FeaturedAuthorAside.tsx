import Box from "../atoms/Box";
import List from "../atoms/List";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAllButton from "../atoms/ViewAllButton";
import FeaturedAuthorsLoader from "../molecules/FeaturedAuthorsLoader";

function FeaturedAuthorAside({ border = false }: { border?: boolean }) {
  return (
    <SectionContainer border={border} whitespace="sub">
      <SectionHead>Featured Authors</SectionHead>
      <Box vertical className="gap-2">
        <List className="pb-1">
          <FeaturedAuthorsLoader />
        </List>
        <ViewAllButton to="/authors" />
      </Box>
    </SectionContainer>
  );
}

export default FeaturedAuthorAside;
