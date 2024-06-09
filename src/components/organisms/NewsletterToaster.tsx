import Toaster from "../Toaster";
import Portal from "../atoms/Portal";

function NewsletterToaster({
  show,
  onClose,
  mainMessage,
}: {
  show: boolean;
  onClose: () => void;
  mainMessage: string;
}) {

  
  return (
    <Portal>
      <Toaster
        show={show}
        onClose={onClose}
        messageType={"confirm"}
        mainMessage={mainMessage}
      />
    </Portal>
  );
}

export default NewsletterToaster;
