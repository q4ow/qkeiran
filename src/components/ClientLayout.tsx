"use client";

import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "~/components/ThemeProvider";
import { Navbar } from "~/components/Navbar";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </ThemeProvider>
  );
}