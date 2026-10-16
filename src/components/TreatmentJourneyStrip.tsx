"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

interface TreatmentJourneyStripProps {
  onSelectStage?: (stageName: string) => void;
}

export function TreatmentJourneyStrip({ onSelectStage }: TreatmentJourneyStripProps) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      title: "Smile Assessment",
      detail: "Digital 3D oral scan, intraoral photography, and gentle comprehensive bite analysis.",
    },
    {
      title: "Care Planning",
      detail: "Transparent treatment roadmap, clear cost breakdown, and tailored timeline.",
    },
    {
      title: "Treatment Process",
      detail: "Pain-managed precision clinical care using modern sterilized instrumentation.",
    },
    {
      title: "Dental Maintenance",
      detail: "Periodic preventive hygiene, enamel protection, and long-term smile wellness.",
    },
  ];

  return (
    <section id="journey" className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-sm"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <motion.div
                key={stage.title}
                onClick={() => {
                  setActiveStage(idx);
                  if (onSelectStage) onSelectStage(stage.title);
                }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", bounce: 0.15, visualDuration: 0.3 }}
                className="group p-4 rounded-xl cursor-pointer relative z-10 transition-colors"
              >
                {/* Smooth Animated Background Pill using Motion's layoutId */}
                {isActive && (
                  <motion.div
                    layoutId="active-journey-indicator"
                    className="absolute inset-0 bg-slate-50/95 rounded-xl border border-teal-600/30 shadow-2xs -z-10"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}

                <div className="flex items-center gap-2 mb-2">
                  {/* Subtle active state indicator */}
                  <div
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? "bg-teal-600 ring-4 ring-teal-50" : "bg-slate-300 group-hover:bg-slate-400"
                    }`}
                  />
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Stage 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-medium text-slate-900 group-hover:text-teal-700 transition-colors">
                  {stage.title}
                </h3>

                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {stage.detail}
                </p>

                {/* Dashed connector line between items on desktop */}
                {idx < stages.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 border-t-2 border-dashed border-slate-200 z-0 pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
