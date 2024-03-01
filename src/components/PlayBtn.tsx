import { IoPlay } from "react-icons/io5";

function PlayBtn({ className }: { className?: string }) {
  return (
    <button
      className={`flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white text-sky-700 opacity-50 transition-all hover:bg-sky-700 hover:text-white hover:opacity-100 ${className || ""}`}
    >
      <IoPlay className="text-3xl" />
    </button>
  );
}

export default PlayBtn;
