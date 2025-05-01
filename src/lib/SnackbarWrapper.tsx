'use client'
import { SnackbarProvider } from "notistack";

export default function SnackbarWrapper({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <SnackbarProvider>
        {children}
      </SnackbarProvider>
    )
}