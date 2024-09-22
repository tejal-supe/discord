"use client";
import { useState, useEffect } from "react";
import CreateServerModal from "../modals/create-server-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateServerModal />
    </>
  );
};

export default ModalProvider;
