import { type ReactNode } from "react";
import { createPortal } from "react-dom";
import Overlay from "./Overlay";

type ModalType = {
  children: ReactNode;
  onClose: () => void;
};

function Modal({ children, onClose }: ModalType) {
  return createPortal(
    <Overlay onClose={onClose}>{children}</Overlay>,
    document.body,
  );
}

export default Modal;
