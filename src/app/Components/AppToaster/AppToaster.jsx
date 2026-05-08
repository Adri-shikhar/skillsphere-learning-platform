"use client";

import { Toaster } from "sonner";

/** Sonner must live in a client component (root layout stays a server component). */
export default function AppToaster() {
  return (
    <Toaster
      position="top-center"
      richColors
      closeButton
      duration={4000}
      toastOptions={{
        classNames: {
          toast: "font-sans",
        },
      }}
    />
  );
}
