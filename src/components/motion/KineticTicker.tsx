"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useReducedMotion,
} from "motion/react";

interface KineticTickerProps {
  items: string[];
  baseVelocity?: number;
  className?: string;
  itemClassName?: string;
  separator?: string;
}

export function KineticTicker({
  items,
  baseVelocity = -1.2,
  className = "",
  itemClassName = "",
  separator = "✦",
}: KineticTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Calculate subtle horizontal displacement reacting to scroll velocity
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const repeatedItems = [...items, ...items, ...items, ...items];

  if (shouldReduceMotion) {
    return (
      <div className={`overflow-x-auto py-3 text-xs text-slate-500 flex gap-6 ${className}`}>
        {items.map((item, idx) => (
          <span key={idx} className="whitespace-nowrap">
            {item} {separator}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none py-3.5 border-y border-slate-100/90 ${className}`}
    >
      <motion.div
        className="flex whitespace-nowrap gap-8 items-center"
        animate={{
          x: baseVelocity < 0 ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 28,
        }}
        style={{
          skewX: useTransform(velocityFactor, [-5, 5], [-2, 2]),
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 shrink-0">
            <span
              className={`text-xs sm:text-sm font-medium tracking-wider uppercase text-slate-500 hover:text-teal-700 transition-colors ${itemClassName}`}
            >
              {item}
            </span>
            <span className="text-teal-500/70 text-[10px]">{separator}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
