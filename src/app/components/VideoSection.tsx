import Box from "../../components/atoms/Box";
import ImageWrap from "../../components/atoms/ImageWrap";
import List from "../../components/atoms/List";
import ListItem from "../../components/atoms/ListItem";
import PlayButton from "../../components/atoms/PlayButton";
import SectionContainer from "../../components/atoms/SectionContainer";
import SectionHead from "../../components/atoms/SectionHead";
import VideoHeadTag from "../../components/atoms/VideoHeadTag";

const coverVideo = {
  idx: 14,
  tag: {
    idx: 11,
    name: "NARRATIVE",
  },
  title: "Frank Gehry Teaches Design And Architecture",
  summary:
    "Frank Gehry, one of the most expressive and creative architects in the world, teaches his unconventional philosophy on architecture, design, and art.",
  video:
    "https://res.cloudinary.com/dmc03nbvx/video/upload/v1709306262/videos/pbsu50h1z3gq9hr5ryxc.webm",
  thumbnail:
    "https://res.cloudinary.com/dmc03nbvx/image/upload/v1709307608/videos/thumbnails/ilpefycybdt7drteoaa7.webp",
};

const videos = [
  {
    idx: 1,
    tag: {
      idx: 2,
      name: "RESIDENTIAL",
    },
    title: "In Loco With Atelier Peclat&Chow: Interview With Architects",
    video:
      "https://res.cloudinary.com/dmc03nbvx/video/upload/v1709306260/videos/dmskufwliq6w4z1tgiw5.webm",
    thumbnail:
      "https://res.cloudinary.com/dmc03nbvx/image/upload/v1709307608/videos/thumbnails/qvg3shnxvzkyfnlqjq11.webp",
  },

  {
    idx: 2,
    tag: {
      idx: 11,
      name: "NARRATIVE",
    },
    title: "History Of Prehistoric Architecture",
    video:
      "https://res.cloudinary.com/dmc03nbvx/video/upload/v1709306258/videos/srrknrkx8svi7irqs2jo.webm",
    thumbnail:
      "https://res.cloudinary.com/dmc03nbvx/image/upload/v1709307609/videos/thumbnails/qlwexy2zdmtwozfbppjy.webp",
  },
  {
    idx: 3,
    tag: {
      idx: 3,
      name: "cultural",
    },
    title:
      "The Nature And Concrete Ambiance In Rio De Janeiro: Architectural Tour",
    video:
      "https://res.cloudinary.com/dmc03nbvx/video/upload/v1709306259/videos/ixzckle0kwqfvs55xwiv.webm",
    thumbnail:
      "https://res.cloudinary.com/dmc03nbvx/image/upload/v1709307609/videos/thumbnails/cajdp8sxfxrzvzkvfsbz.webp",
  },
  {
    idx: 4,
    tag: {
      idx: 4,
      name: "cultural",
    },
    title: "Lyndon Neri On The Design Of The Tsingpu Yangzhou Retreat",
    video:
      "https://res.cloudinary.com/dmc03nbvx/video/upload/v1709306259/videos/kjmpg6qd95j7c0ylo9zo",
    thumbnail:
      "https://res.cloudinary.com/dmc03nbvx/image/upload/v1709307609/videos/thumbnails/rehjeyr6zbdjxdrb0xlg.webp",
  },
];

function VideoSection() {
  return (
    <SectionContainer>
      <SectionHead>video</SectionHead>
      <Box vertical className="gap-10">
        <Box className="relative flex aspect-video min-h-[340px] w-full items-center justify-center overflow-hidden rounded-2xl px-10 py-16">
          <Box vertical className="max-w-[750px] items-center gap-4 text-white">
            <VideoHeadTag tagName={coverVideo.tag.name} />
            <h2 className="font-serif capitalize">{coverVideo.title}</h2>
            <p>{coverVideo.summary}</p>
            <PlayButton src={coverVideo.video} />
          </Box>
          <Box className="bg-gradient absolute inset-0 -z-10"></Box>
          <ImageWrap
            src={coverVideo.thumbnail}
            alt={"main video thumbnail"}
            fill
            className="inset-0 -z-20"
          />
        </Box>
        <List className={`grid gap-4 sm:grid-cols-2 xl:grid-cols-4`}>
          {videos.map((video, idx) => (
            <ListItem
              horizontal
              key={`${video.title}_${idx}`}
              className={`w-full gap-2 xl:border-r xl:border-r-g-300 xl:pr-4 xl:last:border-r-0 xl:last:pr-0`}
            >
              <Box className={`w-3/5`}>
                <p className="text-tag font-semibold uppercase text-g-700">
                  {video.tag.name}
                </p>
                <h5 className="capitalize text-sky-700">{video.title}</h5>
              </Box>
              <Box
                horizontal
                className={`relative min-h-[100px] w-2/5 items-center justify-center overflow-hidden rounded-xl`}
              >
                <Box className="bg-gradient absolute inset-0 -z-10"></Box>
                <ImageWrap
                  fill
                  src={video.thumbnail}
                  className={`absolute inset-0 -z-20 object-cover`}
                  alt={video.title}
                />
                <PlayButton src={video.video} />
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </SectionContainer>
  );
}

export default VideoSection;
