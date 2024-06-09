"use client";
import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

function Portal({ children }: PropsWithChildren) {
  const portalRoot = document.getElementById("portal-root");
  return portalRoot ? createPortal(children, portalRoot) : null;
}

export default Portal;
