"use client";

import useToasterStore from "@/stores/useToastStore";
import { IoLink } from "react-icons/io5";

function ShareButton({ link }: { link: string }) {
  const addToaster = useToasterStore((state) => state.addToaster);

  const clickHandler = async () => {
    try {
      await navigator.clipboard.writeText(link);
      addToaster({
        mainMessage: "The address is copied to your clipboard!",
        subMessage: "Now paste and share the link with your friends!",
        toasterType: "info",
      });
    } catch (err) {
      console.error("Failed to copy: ", err);
      addToaster({
        mainMessage: "Failed to copy the address.",
        subMessage: "Please try again.",
        toasterType: "warn",
      });
    }
  };

  return (
    <>
      <button className="my-12 w-fit self-center rounded-full border border-g-700 p-2">
        <IoLink className="text-lg text-g-700" onClick={clickHandler} />
      </button>
    </>
  );
}

export default ShareButton;
