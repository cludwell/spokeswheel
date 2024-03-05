"use client";
// import { Modal, ModalProvider } from "./Modal";
import { SessionProvider } from "next-auth/react";
export function Providers({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
