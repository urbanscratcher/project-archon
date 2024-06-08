import Box from "../atoms/Box";
import ImageWrap from "../atoms/ImageWrap";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";

function AdSection() {
  return (
    <SectionContainer border whitespace="sub" className={`h-fit`}>
      <SectionHead>ad</SectionHead>
      <Box className="relative aspect-[3/2] overflow-hidden rounded-xl hover:cursor-pointer">
        <ImageWrap
          src={"/fallback.webp"}
          alt="ad"
          className={`absolute object-cover`}
          fill
        />
      </Box>
    </SectionContainer>
  );
}

export default AdSection;
