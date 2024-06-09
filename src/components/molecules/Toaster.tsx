"use client";

import { useEffect, useState } from "react";
import {
  IoCheckmarkCircle,
  IoClose,
  IoInformationCircle,
  IoWarning,
} from "react-icons/io5";
import Box from "../atoms/Box";

function getIcon(messageType: ToasterType) {
  switch (messageType) {
    case "warn":
      return { style: "border-red-700 text-red-700", icon: <IoWarning /> };
    case "info":
      return {
        style: "border-mint-600 text-mint-600",
        icon: <IoInformationCircle />,
      };
    default:
      return {
        style: "border-sky-700 text-sky-700",
        icon: <IoCheckmarkCircle />,
      };
  }
}

export type ToasterType = "warn" | "info" | "confirm";

export type ToasterProps = {
  onClose?: () => void;
  messageType: ToasterType;
  mainMessage: string;
  subMessage?: string;
};

function Toaster({
  onClose,
  messageType,
  mainMessage,
  subMessage,
}: ToasterProps) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  // caller controls visibility
  useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setTimeout(() => {
      setVisible(true);
      setClosing(false);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (visible) {
      timer = setTimeout(() => {
        setClosing(true);
        onClose && onClose();
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [visible, onClose]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (visible && closing) {
      timer = setTimeout(() => {
        onClose && onClose();
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [visible, closing, onClose]);

  const icon = getIcon(messageType);

  const closeHandler = () => {
    setClosing(true);
    setVisible(false);
    onClose && onClose();
  };

  return (
    <Box
      className={`fixed z-[90] flex w-full items-center justify-center transition-all duration-300
    ${visible && !closing ? "translate-y-8 opacity-100" : "-translate-y-full opacity-0"}
    `}
    >
      <Box
        horizontal
        className={`relative mx-10 h-fit w-full max-w-[1440px] content-center items-center justify-between rounded-lg border bg-white p-3 ${icon.style}`}
      >
        <Box horizontal className="items-center gap-4">
          {/* Icon */}
          <Box className="h4">{icon.icon}</Box>
          <Box vertical className="">
            {/* Main Message */}
            <p className={`p-lg font-sans font-medium capitalize `}>
              {mainMessage}
            </p>
            {/* Sub Message */}
            {subMessage && <p className={`p-sm text-g-700`}>{subMessage}</p>}
          </Box>
        </Box>
        <button className="p-lg" onClick={closeHandler}>
          <IoClose />
        </button>
      </Box>
    </Box>
  );
}

export default Toaster;
