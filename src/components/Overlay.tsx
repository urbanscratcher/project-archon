import { ReactNode } from "react";

function Overlay({ children, onClose }: { children: ReactNode; onClose: any }) {
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
