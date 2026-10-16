"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { maskRevealContainer, maskRevealWord } from "@/lib/motionTokens";

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function SplitText({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  as: Tag = "h2",
}: SplitTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.065,
        delayChildren: delay,
      },
    },
  };

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
        className="inline-block"
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-top mr-[0.24em] last:mr-0 py-0.5"
          >
            <motion.span
              variants={maskRevealWord}
              className={`inline-block ${wordClassName}`}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
