"use client";

import { IoPlay } from "react-icons/io5";

function PlayBtn({ src, className }: { src?: string; className?: string }) {
  return (
    <button
      className={`flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white text-sky-700 opacity-50 transition-all hover:bg-sky-700 hover:text-white hover:opacity-100 ${className || ""}`}
      onClick={(e) => {
        // set show modal true
        // render modal background (all are same)
        //   render video
        //   auto play
        // if mouse is clicked outside,
        //   pause video
        //   close video
        //   set show modal false
      }}
    >
      <IoPlay className="text-3xl" />
    </button>
  );
}

export default PlayBtn;
