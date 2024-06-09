"use client";

import useToastersStore from "@/stores/useToastStore";
import { useEffect } from "react";
import Toaster from "../molecules/Toaster";

function Toasters() {
  const toasters = useToastersStore((state) => state.toasters);
  const remove = useToastersStore((state) => state.removeToaster);

  useEffect(() => {}, [toasters]);

  if (toasters.length <= 0) {
    return <></>;
  }

  const closeHandler = () => {
    remove(toasters[toasters.length - 1].id);
  };

  return (
    <Toaster
      messageType={toasters[toasters.length - 1].toasterType}
      mainMessage={toasters[toasters.length - 1].mainMessage}
      subMessage={toasters[toasters.length - 1]?.subMessage}
      onClose={closeHandler}
    />
  );
}

export default Toasters;
