"use client";
import { Modal, ModalProvider } from "./Modal";

export function Providers({ children }) {
  return (
    <ModalProvider>
      {children}
      <Modal />
    </ModalProvider>
  );
}
