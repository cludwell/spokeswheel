"use client";
import ZustandProvider from "@/store/ZustandProvider";
import { SessionProvider } from "next-auth/react";
export function Providers({ children }) {
  return (
    <ZustandProvider>
      <SessionProvider>{children}</SessionProvider>
    </ZustandProvider>
  );
}
