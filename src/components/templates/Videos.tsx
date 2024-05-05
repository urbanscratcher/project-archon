import ImageWrap from "../atoms/ImageWrap";
import PlayBtn from "../atoms/PlayBtn";
import SectionContainer from "../atoms/SectionContainer";
import SectionHead from "../atoms/SectionHead";

function Videos() {
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

  return (
    <SectionContainer>
      <SectionHead>video</SectionHead>
      <div className="flex flex-col gap-10">
        <div className="relative flex aspect-video w-full items-center justify-center">
          <ImageWrap
            src={coverVideo.thumbnail}
            alt={"main video thumbnail"}
            fill
            className="inset-0 -z-10 rounded-2xl object-cover"
          />
          <div className="flex w-[750px] flex-col items-center gap-2 text-white">
            <p className="w-fit border-y-[2.5px] border-y-white px-[18px] py-[3px] text-[15px] font-semibold uppercase tracking-[1.25px]">
              {coverVideo.tag.name}
            </p>
            <h2 className="font-serif capitalize">{coverVideo.title}</h2>
            <p className="letter-[0.5px] text-[15px] leading-[1.263]">
              {coverVideo.summary}
            </p>
            <PlayBtn src={coverVideo.video} />
          </div>
        </div>
        <ul className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
          {videos.map((video, idx) => (
            <li
              key={`${video.title}_${idx}`}
              className={`flex w-full gap-2 lg:border-r lg:border-r-g-300 lg:pr-4 lg:last:border-r-0 lg:last:pr-0`}
            >
              <div className={`w-3/5`}>
                <p className="text-[15px] font-semibold uppercase tracking-[1.25px] text-g-700">
                  {video.tag.name}
                </p>
                <h4 className="text-[26px] capitalize leading-[1.27] text-sky-700">
                  {video.title}
                </h4>
              </div>
              <div
                className={`relative flex w-2/5 items-center justify-center overflow-hidden sm:aspect-square`}
              >
                <ImageWrap
                  fill
                  src={video.thumbnail}
                  className={`absolute inset-0 -z-10 rounded-xl object-cover`}
                  alt={video.title}
                />
                <PlayBtn src={video.video} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}

export default Videos;
