"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Navbar } from "./Navbar";
import { ArrowRightIcon, StarIcon, PhoneIcon } from "./Icons";

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

          {/* Seamless Full-Width Vignette: Soft gradient from left to transparent right with ZERO harsh cutoff */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/45 to-transparent w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/30 w-full" />
        </div>

        {/* Floating Top Navigation */}
        <div className="relative z-20">
          <Navbar onOpenBooking={onOpenBooking} />
        </div>

        {/* Hero Middle Content Area: Clean Editorial Layout with Left Focus & Open Right Photography */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 py-12 sm:py-16 lg:py-24 flex-1 flex flex-col justify-center">
          {/* Left: Headline, Supporting Copy, Actions & Micro-Trust Strip */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
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

            {/* Clean, Subtle Micro-Trust Strip (Small Info) */}
            <motion.div
              variants={itemVariants}
              className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-white/90"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  Open Today • Velachery
                </span>
              </div>

              <span className="text-white/25 hidden sm:inline">•</span>

              <div className="flex items-center gap-1.5 text-xs text-slate-200">
                <span className="font-semibold text-white">4.9</span>
                <StarIcon className="w-3.5 h-3.5 fill-amber-300 text-amber-300 inline drop-shadow-[0_1px_3px_rgba(252,211,77,0.4)]" />
                <span>(120+ Verified Reviews)</span>
              </div>

              <span className="text-white/25 hidden sm:inline">•</span>

              <div className="text-xs text-slate-200">
                <strong className="text-white font-medium">26+ Years</strong> Experience Overall
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
