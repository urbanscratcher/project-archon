"use client";

import { useState } from "react";
import { IoPlay } from "react-icons/io5";
import Modal from "./Modal";

function PlayBtn({ src, className }: { src?: string; className?: string }) {
  const [showModal, setShowModal] = useState(false);
  // set show modal true
  // render modal background (all are same)
  //   render video
  //   auto play
  // if mouse is clicked outside,
  //   pause video
  //   close video
  //   set show modal false
  return (
    <>
      <button
        className={`flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white text-sky-700 opacity-50 transition-all hover:bg-sky-700 hover:text-white hover:opacity-100 ${className || ""}`}
        onClick={(e) => {
          setShowModal(true);
        }}
      >
        <IoPlay className="text-3xl" />
      </button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <video
            className="w-3/4 rounded-xl"
            controls
            autoPlay
            src={src}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </Modal>
      )}
    </>
  );
}

export default PlayBtn;
