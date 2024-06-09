import Toaster, { type ToasterType } from "../Toaster";
import Portal from "../atoms/Portal";

function BookmarkToaster({
  show,
  onClose,
  messageType,
  mainMessage,
}: {
  show: boolean;
  onClose: () => void;
  messageType: ToasterType;
  mainMessage: string;
}) {
  return (
    <Portal>
      <Toaster
        show={show}
        messageType={messageType}
        mainMessage={mainMessage}
        onClose={onClose}
      />
    </Portal>
  );
}

export default BookmarkToaster;
