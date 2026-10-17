"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Navbar } from "./Navbar";
import { ArrowRightIcon, CheckCircleIcon, StarIcon, PhoneIcon } from "./Icons";

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
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ y: shouldReduceMotion ? 0 : bgY }}
            className="absolute -inset-y-12 inset-x-0"
          >
            <Image
              src="/images/hero-patient.jpg"
              alt="Family-friendly gentle dental treatment at Jebastins Dental Clinic, Velachery"
              fill
              priority
              className="object-cover object-[78%_center] sm:object-[75%_center] lg:object-[80%_center]"
              sizes="(max-width: 1280px) 100vw, 1440px"
            />
          </motion.div>

          {/* Precision Vignette & Gradient Overlays: Deep navy on left, calm and softer toward dentist on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/25 sm:w-[72%] lg:w-[65%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" />
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
            {/* Headline with Professional Editorial Hierarchy */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] font-medium tracking-tight leading-[1.12] text-white"
            >
              <span className="block">Restore Your Smile</span>
              <span className="font-semibold text-teal-300 block mt-1">with Confidence</span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="mt-5 text-sm sm:text-base text-slate-200/90 leading-relaxed font-normal max-w-lg"
            >
              Personalised dental care focused on comfortable treatment and confident
              smiles in Velachery, Chennai. Led by Dr. Jebastin (BDS, 26 Years Experience Overall).
            </motion.p>

            {/* Primary & Secondary CTA Hierarchy */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", bounce: 0.15, visualDuration: 0.3 }}
                onClick={() => onOpenBooking("General Consultation")}
                className="px-6 py-3.5 rounded-full bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-950 text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-teal-500/20 flex items-center gap-2.5 cursor-pointer touch-manipulation transition-all"
              >
                <span>Book an Appointment</span>
                <ArrowRightIcon className="w-4 h-4" />
              </motion.button>

              <a
                href="tel:+919840012345"
                title="Call Jebastins Dental Clinic: +91 98400 12345"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/90 hover:text-white py-3.5 px-5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 font-medium transition-colors touch-manipulation"
              >
                <PhoneIcon className="w-4 h-4 text-teal-300" />
                <span>Call Clinic</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Floating Clinical Trust & Highlights Card (Refined Supporting Element) */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -3 }}
            className="w-full max-w-sm lg:max-w-[310px] xl:max-w-[330px] bg-slate-950/70 backdrop-blur-xl border border-white/15 rounded-2xl p-4.5 sm:p-5 shadow-2xl text-white space-y-3.5 self-start lg:self-center transform-gpu"
          >
            {/* Live Availability Status */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-semibold text-emerald-300 tracking-wider uppercase">
                  Open Today • Velachery
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/90 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                Dr. Jebastin, BDS
              </span>
            </div>

            {/* Key Clinical Metrics */}
            <div className="grid grid-cols-2 gap-2.5 pt-0.5">
              <div className="bg-white/[0.06] rounded-xl p-2.5 border border-white/10">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white block">
                  26+ <span className="text-xs font-normal text-teal-300">Years</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium leading-tight block mt-0.5">
                  Dental Experience
                </span>
              </div>

              <div className="bg-white/[0.06] rounded-xl p-2.5 border border-white/10">
                <div className="flex items-center gap-1 text-amber-300">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">4.9</span>
                  <StarIcon className="w-3.5 h-3.5 fill-amber-300 inline drop-shadow-[0_1px_4px_rgba(252,211,77,0.4)]" />
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium leading-tight block mt-0.5">
                  120+ Verified Reviews
                </span>
              </div>
            </div>

            {/* Reassuring Clinical Standards */}
            <div className="space-y-2 pt-0.5 text-xs text-white/90 font-normal">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-teal-300 shrink-0" />
                <span>Single-Visit Rotary Root Canal Therapy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-teal-300 shrink-0" />
                <span>Strict 6-Step Autoclave Sterilization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-teal-300 shrink-0" />
                <span>Zero Wait-Time with Prior Booking</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
