function VideoHeadTag({ tagName }: { tagName: string }) {
  return (
    <p className="text-tag w-fit border-y-[2.5px] border-y-white px-[18px] py-[3px] font-semibold uppercase">
      {tagName}
    </p>
  );
}

export default VideoHeadTag;
