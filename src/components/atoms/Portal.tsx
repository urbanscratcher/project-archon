import { type PropsWithChildren } from "react";
import { createPortal } from "react-dom";

function Portal({ children }: PropsWithChildren) {
  return createPortal(children, document.body);
}

export default Portal;
