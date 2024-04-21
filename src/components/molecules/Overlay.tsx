import { type ReactNode } from "react";

type OverlayType = {
  children: ReactNode;
  onClose: () => void;
};

function Overlay({ children, onClose }: OverlayType) {
  return (
    <div
      className="fixed inset-0 z-[99] flex items-center justify-center bg-black/70 transition-all"
      onClick={() => {
        onClose();
      }}
    >
      {children}
    </div>
  );
}

export default Overlay;
