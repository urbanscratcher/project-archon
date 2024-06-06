"use client";

import { useState } from "react";
import { IoPlay } from "react-icons/io5";
import Modal from "./Modal";

function PlayButton({ src, className }: { src?: string; className?: string }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className={`flex aspect-square w-[48px] items-center justify-center rounded-full bg-white text-sky-700 opacity-50 transition-all hover:bg-sky-700 hover:text-white hover:opacity-100 lg:w-[56px] ${className || ""}`}
        onClick={() => setShowModal(true)}
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
            className="w-full rounded-xl px-2 sm:w-5/6 lg:w-3/4"
            controls
            autoPlay
            src={src}
            onClick={(e) => e.stopPropagation()}
          />
        </Modal>
      )}
    </>
  );
}

export default PlayButton;
