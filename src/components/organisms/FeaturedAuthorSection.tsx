import Box from "../atoms/Box";
import List from "../atoms/List";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";
import ViewAll from "../atoms/ViewAll";
import FeaturedAuthorsItems from "../templates/FeaturedAuthorsItems";

function FeaturedAuthorSection() {
  return (
    <SectionContainer border whitespace="sub">
      <SectionHead>Featured Authors</SectionHead>
      <Box vertical className="gap-2">
        <List className="pb-1">
          <FeaturedAuthorsItems />
        </List>
        <ViewAll to="/authors" />
      </Box>
    </SectionContainer>
  );
}

export default FeaturedAuthorSection;
