import Box from "../atoms/Box";
import List from "../atoms/List";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAllButton from "../atoms/ViewAllButton";
import FeaturedAuthors from "./FeaturedAuthors";

function FeaturedAuthorSection({ border = false }: { border?: boolean }) {
  return (
    <SectionContainer border={border} whitespace="sub">
      <SectionHead>Featured Authors</SectionHead>
      <Box vertical className="gap-2">
        <List className="pb-1">
          <FeaturedAuthors />
        </List>
        <ViewAllButton to="/authors" />
      </Box>
    </SectionContainer>
  );
}

export default FeaturedAuthorSection;
