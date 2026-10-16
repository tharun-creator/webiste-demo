"use client";

import React from "react";
import { motion } from "motion/react";
import { CheckCircleIcon, SparklesIcon, CalendarIcon, ShieldCheckIcon } from "./Icons";
import { SplitText } from "./motion/SplitText";

export function PatientJourney() {
  const steps = [
    {
      num: "01",
      title: "Friendly Welcome & Assessment",
      description:
        "We discuss your concerns and dental history over a relaxed consultation without judgment or pressure.",
      icon: CalendarIcon,
    },
    {
      num: "02",
      title: "Digital Imaging & Diagnosis",
      description:
        "High-definition digital X-rays and intraoral cameras give you a clear, magnified look at your teeth on screen.",
      icon: SparklesIcon,
    },
    {
      num: "03",
      title: "Clear, Customized Care Plan",
      description:
        "Every treatment option, timeline, and exact cost is explained beforehand so you stay in total control.",
      icon: ShieldCheckIcon,
    },
    {
      num: "04",
      title: "Gentle Treatment & Ongoing Care",
      description:
        "Pain-managed treatment using gentle anesthesia and ultrasonic instruments, followed by dedicated recovery check-ins.",
      icon: CheckCircleIcon,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-14 shadow-sm"
      >
        <div className="max-w-2xl mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide text-slate-700 bg-slate-50 border border-slate-200/80 shadow-2xs">
            Patient Experience
          </span>
          <div className="mt-4">
            <SplitText
              as="h2"
              text="A Thoughtful, Calm Experience from the Moment You Step In"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-900 leading-tight"
              wordClassName="text-slate-900"
            />
          </div>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed font-normal">
            We understand dental anxiety. Our clinical workflow is intentionally paced
            to keep you informed, relaxed, and fully comfortable at every visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ y: -4 }}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between hover:bg-slate-50 hover:shadow-xs transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                      Step {step.num}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="w-8 h-8 rounded-full bg-white text-teal-600 flex items-center justify-center shadow-2xs border border-slate-100"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                  </div>

                  <h3 className="font-medium text-slate-900 text-base mb-2 group-hover:text-teal-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between text-xs text-slate-400">
                  <span>Velachery Clinic</span>
                  <span className="text-teal-600 font-medium">Verified Care</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
