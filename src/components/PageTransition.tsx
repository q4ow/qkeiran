"use client";

import { motion } from "framer-motion";
import { pageVariant } from "~/lib/animations";

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTransition = ({
  children,
  className,
}: PageTransitionProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageVariant}
      className={className}
    >
      {children}
    </motion.div>
  );
};
