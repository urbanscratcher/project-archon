"use client";

import { useState } from "react";
import ToastMessage from "./ToastMessage";

function Toaster() {
  const [visible, setVisible] = useState(false);

  const showToast = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000); // 3초 후에 숨김
  };

  return (
    <ToastMessage
      visible
      messageType="warn"
      mainMessage="This is a test message"
      subMessage="submessa"
    />
  );
}

export default Toaster;
