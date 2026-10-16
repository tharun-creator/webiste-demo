"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

interface MorphingTextProps {
  words: string[];
  intervalMs?: number;
  className?: string;
  highlightClassName?: string;
}

export function MorphingText({
  words,
  intervalMs = 3200,
  className = "",
  highlightClassName = "text-white font-normal",
}: MorphingTextProps) {
  const [index, setIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setHasMounted(true);
    if (shouldReduceMotion || words.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [words.length, intervalMs, shouldReduceMotion]);

  if (shouldReduceMotion || !hasMounted) {
    return (
      <span className={`inline-block ${className} ${highlightClassName}`}>
        {words[0]}
      </span>
    );
  }

  return (
    <span className={`inline-block relative overflow-hidden align-top ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className={`block ${highlightClassName}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
