"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Navbar } from "./Navbar";
import { MorphingText } from "./motion/MorphingText";
import { ArrowRightIcon, CheckCircleIcon, StarIcon } from "./Icons";

interface HeroSectionProps {
  onOpenBooking: (service?: string) => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax subtle layer translations
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  // Stagger container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="hero" ref={heroRef} className="w-full px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      {/* Oversized dental hero card with rounded corners */}
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] overflow-hidden min-h-[560px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-between bg-slate-900 shadow-2xl"
      >
        {/* Background Image: High-definition authentic dental treatment with Scroll Parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ y: shouldReduceMotion ? 0 : bgY }}
            className="absolute -inset-y-12 inset-x-0"
          >
            <Image
              src="/images/hero-patient.jpg"
              alt="Family-friendly gentle dental treatment at Jebastins Dental Clinic"
              fill
              priority
              className="object-cover object-[70%_center] sm:object-right"
              sizes="(max-width: 1280px) 100vw, 1440px"
            />
          </motion.div>

          {/* Precision Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/20 sm:w-[68%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-slate-950/25" />
        </div>

        {/* Floating Top Navigation */}
        <div className="relative z-20">
          <Navbar onOpenBooking={onOpenBooking} />
        </div>

        {/* Hero Middle Content Area: Left Headline & Right Information Card */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 py-10 sm:py-16 lg:py-20 flex-1 flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-12">
          {/* Left: Headline & Booking Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            {/* Headline with Morphing Typography & Masked Staggered Entrance */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[62px] font-normal tracking-[-0.03em] leading-[1.08] text-white"
            >
              <span className="block min-h-[1.15em]">
                <MorphingText
                  words={[
                    "Family-Friendly",
                    "Gentle & Caring",
                    "Precision Implant",
                    "Laser Endodontic",
                    "Confident Smile",
                  ]}
                  highlightClassName="text-white font-normal"
                />
              </span>
              <span className="font-medium text-white block mt-1">Dental Care</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal max-w-md"
            >
              Permanent natural-looking solutions to replace missing teeth and
              restore confident healthy smiles in Velachery, Chennai.
            </motion.p>

            {/* Primary CTA with Spring Physics & Touch Targets */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", bounce: 0.15, visualDuration: 0.3 }}
                onClick={() => onOpenBooking("General Consultation")}
                className="group pl-5 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 rounded-full bg-white hover:bg-slate-50 text-slate-900 text-xs sm:text-sm font-medium shadow-lg flex items-center gap-3 cursor-pointer touch-manipulation"
              >
                <span>Book an Appointment</span>
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-teal-600 text-white flex items-center justify-center group-hover:bg-teal-700 transition-colors">
                  <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </motion.button>

              <a
                href="tel:+919840012345"
                className="inline-flex items-center gap-2 text-xs text-white/90 py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 font-medium transition-colors touch-manipulation"
              >
                <span>Call Clinic</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Floating Clinical Details & Practice Highlights Card (Exact User-Circled Region) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -3 }}
            className="w-full max-w-md lg:max-w-[340px] xl:max-w-[370px] bg-slate-950/60 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-6 shadow-2xl text-white space-y-4 self-start lg:self-center"
          >
            {/* Live Availability Status */}
            <div className="flex items-center justify-between pb-3 border-b border-white/15">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-semibold text-emerald-300 tracking-wider uppercase">
                  Open Today • Velachery
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/80 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                Dr. Jebastin, BDS
              </span>
            </div>

            {/* Key Clinical Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-0.5">
              <div className="bg-white/10 rounded-2xl p-3 border border-white/10 backdrop-blur-xs">
                <span className="text-2xl font-bold tracking-tight text-white block">
                  26+ <span className="text-xs font-normal text-teal-300">Years</span>
                </span>
                <span className="text-[11px] text-slate-300 font-medium leading-tight block mt-0.5">
                  Dental Surgery Experience
                </span>
              </div>

              <div className="bg-white/10 rounded-2xl p-3 border border-white/10 backdrop-blur-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  <span className="text-2xl font-bold tracking-tight text-white">4.9</span>
                  <StarIcon className="w-3.5 h-3.5 fill-amber-400 inline" />
                </div>
                <span className="text-[11px] text-slate-300 font-medium leading-tight block mt-0.5">
                  120+ Verified Reviews
                </span>
              </div>
            </div>

            {/* Reassuring Clinical Standards */}
            <div className="space-y-2 pt-1 text-xs text-slate-200 font-normal">
              <div className="flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Single-Visit Rotary Root Canal Therapy</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Strict 6-Step Autoclave Sterilization</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircleIcon className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero Wait-Time with Prior Booking</span>
              </div>
            </div>

            {/* Instant Consultation Button */}
            <div className="pt-1.5">
              <button
                type="button"
                onClick={() => onOpenBooking("Consultation with Dr. Jebastin")}
                className="w-full py-2.5 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-semibold tracking-wide transition shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
