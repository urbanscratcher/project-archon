import {
  IoCheckmarkCircle,
  IoClose,
  IoInformationCircle,
  IoWarning,
} from "react-icons/io5";
import Box from "./atoms/Box";

type ToastMessageType = "warn" | "info" | "confirm";
type ToastMessageProps = {
  visible: boolean;
  messageType: ToastMessageType;
  mainMessage: string;
  subMessage?: string;
};

function getIcon(messageType: ToastMessageType) {
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

function ToastMessage({
  visible,
  messageType,
  mainMessage,
  subMessage,
}: ToastMessageProps) {
  const icon = getIcon(messageType);

  return (
    <Box
      className={`absolute top-8 z-[60] flex w-full  items-center justify-center transition-all ${visible ? "translate-y-0" : "-translate-y-full"}`}
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
            <p className={`p-lg font-sans font-semibold capitalize `}>
              {mainMessage}
            </p>
            {/* Sub Message */}
            {subMessage && <p className={`p-sm text-g-700`}>{subMessage}</p>}
          </Box>
        </Box>
        <button className="p-lg">
          <IoClose />
        </button>
      </Box>
    </Box>
  );
}

export default ToastMessage;
