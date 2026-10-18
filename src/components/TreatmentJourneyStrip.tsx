"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheckIcon,
  SparklesIcon,
  CheckCircleIcon,
  ClockIcon,
  ArrowRightIcon,
} from "./Icons";

interface TreatmentJourneyStripProps {
  onSelectStage?: (stageName: string) => void;
}

export function TreatmentJourneyStrip({ onSelectStage }: TreatmentJourneyStripProps) {
  const pillars = [
    {
      icon: ShieldCheckIcon,
      tag: "Endodontics",
      title: "Single-Sitting Root Canal",
      description:
        "Pain-managed rotary endodontics preserving your natural tooth with comfort and minimal visits.",
      badge: "Gentle Care",
    },
    {
      icon: SparklesIcon,
      tag: "Diagnostics",
      title: "Digital 3D & Intraoral Scans",
      description:
        "Low-radiation precision digital imaging that lets you see exactly what the doctor sees on-screen.",
      badge: "HD Imaging",
    },
    {
      icon: CheckCircleIcon,
      tag: "Safety Standard",
      title: "Strict 6-Step Sterilization",
      description:
        "Class-B autoclave sterilization, vacuum decontamination, and 100% sealed single-use pouches.",
      badge: "Hospital Grade",
    },
    {
      icon: ClockIcon,
      tag: "Patient Comfort",
      title: "Zero-Wait Dedicated Slots",
      description:
        "Individual prior booking ensuring focused one-on-one doctor time with no waiting-room rush.",
      badge: "On-Time Visits",
    },
  ];

  return (
    <section id="standards" className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)]"
      >
        {/* Subtle Editorial Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100/80">
              Clinical Excellence & Care Standards
            </span>
            <h2 className="text-lg sm:text-xl font-medium text-slate-900 tracking-tight mt-1.5">
              Why Patients in Velachery Trust Dr. Jebastin
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200/60 self-start sm:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium text-slate-700">Open Today</span>
            <span className="text-slate-300">•</span>
            <span>26+ Years Experience</span>
          </div>
        </div>

        {/* 4 Clinical Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", bounce: 0.15, visualDuration: 0.3 }}
                onClick={() => {
                  if (onSelectStage) onSelectStage(pillar.title);
                }}
                className="group p-5 rounded-2xl bg-slate-50/60 hover:bg-white border border-slate-200/70 hover:border-teal-500/30 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors flex items-center justify-center border border-teal-100/60">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider bg-white px-2 py-0.5 rounded-full border border-slate-200/70">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <span className="text-[11px] font-medium text-teal-700 block mb-0.5">
                    {pillar.tag}
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Subtle Interactive Trigger */}
                <div className="pt-4 mt-4 border-t border-slate-200/50 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                  <span>Learn more</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
