"use client";

import React from "react";
import { motion } from "motion/react";

export function TrustStats() {
  const stats = [
    {
      value: "26+",
      label: "Years Experience",
      description: "Led by Dr. Jebastin (BDS, Dentist & Dental Surgeon)",
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      description: "Post-treatment patient comfort & clinical outcomes",
    },
    {
      value: "4.9★",
      label: "Customer Rating",
      description: "Over 120+ verified Google & local patient reviews",
    },
  ];

  const diagnosticBars = [
    { month: "Jan", height: "45%" },
    { month: "Feb", height: "65%" },
    { month: "Mar", height: "55%" },
    { month: "Apr", height: "90%" },
    { month: "May", height: "75%" },
    { month: "Jun", height: "100%" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm"
      >
        {/* Subhead / Trust Label */}
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-8">
          Thousands Trust Us For Smiles!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main 3 Metrics */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                className="space-y-1 sm:border-r border-slate-100 last:border-none pr-4"
              >
                <div className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-900">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-800 pt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-snug">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Reference Diagnostic Graphic Card (Right Edge in Screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-4 bg-slate-50/80 rounded-2xl p-5 border border-slate-100"
          >
            <div className="flex items-center justify-between text-xs mb-3">
              <span className="font-medium text-slate-700">Patient Oral Health Index</span>
              <span className="font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
                98% Optimum
              </span>
            </div>

            {/* Mini Cyan/Teal Chart Bars with Staggered Upward Reveal */}
            <div className="h-20 flex items-end justify-between gap-2 pt-2 px-1">
              {diagnosticBars.map((bar, i) => (
                <div key={bar.month} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: bar.height }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      delay: 0.3 + i * 0.08,
                      type: "spring",
                      bounce: 0.15,
                      visualDuration: 0.6,
                    }}
                    whileHover={{ scale: 1.08 }}
                    className="w-full bg-cyan-400 hover:bg-cyan-500 rounded-full transition-colors cursor-pointer"
                  />
                  <span className="text-[10px] text-slate-400 font-mono">
                    {bar.month}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
