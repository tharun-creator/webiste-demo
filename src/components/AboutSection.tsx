"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRightIcon } from "./Icons";
import { SplitText } from "./motion/SplitText";

interface AboutSectionProps {
  onOpenBooking: (service?: string) => void;
}

export function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      {/* Small Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide text-slate-700 bg-white border border-slate-200/80 shadow-2xs">
          About Us
        </span>
      </motion.div>

      {/* Asymmetric About Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Side: Prominent Single Portrait of Dr. Jebastin */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-4 flex flex-col gap-3.5"
        >
          <motion.div
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", bounce: 0.15, visualDuration: 0.4 }}
            className="relative w-full max-w-[340px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group cursor-pointer bg-slate-100"
          >
            <Image
              src="/images/doctor-portrait.png"
              alt="Dr. Jebastin - Lead Dental Specialist, Velachery, Chennai"
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              priority
              className="object-cover object-[center_15%] scale-115 group-hover:scale-120 transition-transform duration-700"
            />
            {/* Subtle Gradient & Badge Overlay at Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-teal-500/90 text-white backdrop-blur-md mb-1.5 shadow-xs">
                Dentist & Dental Surgeon
              </span>
              <h3 className="text-xl font-medium text-white tracking-tight">
                Dr. Jebastin
              </h3>
              <p className="text-xs text-slate-200 font-normal">
                BDS • 26 Years Experience Overall
              </p>
            </div>
          </motion.div>

          <div className="flex items-center gap-3 max-w-[340px] p-3 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
            <div className="w-10 h-10 rounded-full flex-shrink-0 bg-blue-50/70 p-0.5 border border-blue-100 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/clinic-emblem-clean.png"
                alt="Jebastins Dental Clinic Logo"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-xs text-slate-600 leading-tight">
              <p className="font-semibold text-slate-900">Jebastins Dental Clinic</p>
              <p className="text-[11px] text-teal-700 font-medium mt-0.5">26 Years Experience Overall • Velachery</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Editorial Statement and Operatory Visual */}
        <div className="lg:col-span-8 space-y-10">
          {/* Large Editorial Headline with Word-by-Word Split Text Reveal */}
          <div className="max-w-3xl">
            <SplitText
              as="h2"
              text="We deliver personalized dental treatments with modern technology and gentle care ensuring healthy confident smiles for every patient."
              className="text-2xl sm:text-3xl lg:text-[40px] font-normal leading-[1.25] tracking-tight text-slate-900"
              wordClassName="text-slate-900 font-normal"
            />
          </div>

          {/* Supporting Text and Primary Image Block */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center pt-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="sm:col-span-6 space-y-4 text-sm text-slate-600 leading-relaxed font-normal"
            >
              <p>
                At Jebastins Dental Clinic, we believe dentistry should be compassionate,
                transparent, and pain-managed. Whether you are visiting for a routine
                checkup or restorative implant procedure, our focus is your long-term oral health and peace of mind.
              </p>

              <div className="pt-2 flex items-center gap-6">
                <motion.button
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOpenBooking("General Consultation")}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-teal-700 transition-colors group cursor-pointer"
                >
                  <span>Meet the Clinic & Team</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Supporting Clinical Photograph */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="sm:col-span-6"
            >
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", bounce: 0.12, visualDuration: 0.4 }}
                className="relative h-56 sm:h-64 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-100 group"
              >
                <Image
                  src="/images/patient-chair.jpg"
                  alt="Patient comfortable during dental assessment at Jebastins Dental Clinic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-full font-medium">
                    Gentle Care & Modern Sterilization
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
