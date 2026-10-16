"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  StarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "./Icons";
import { SplitText } from "./motion/SplitText";

interface FeaturedTreatmentsProps {
  onOpenBooking: (service?: string) => void;
}

export function FeaturedTreatments({ onOpenBooking }: FeaturedTreatmentsProps) {
  const services = [
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      subtitle: "Single-Sitting & Rotary Endodontics",
      description:
        "Painless tooth-saving therapy with modern rotary instruments and digital apex locators. Relieves acute ache while conserving your natural tooth.",
      image: "/images/hero-clinical-care.jpg",
      category: "restorative",
      duration: "45 Mins",
      recovery: "Instant relief",
    },
    {
      id: "implants",
      title: "Dental Implants & Crowns",
      subtitle: "Permanent Tooth Replacement",
      description:
        "Titanium precision fixtures capped with lifelike zirconia or ceramic crowns that replicate natural teeth in chewing strength and appearance.",
      image: "/images/hero-patient.jpg",
      category: "restorative",
      duration: "60 Mins",
      recovery: "Long-term durable",
    },
    {
      id: "aligners",
      title: "Invisalign & Clear Aligners",
      subtitle: "Discreet Smile Straightening",
      description:
        "Custom computer-designed transparent trays to correct crowded, misaligned, or spaced teeth without bulky metal wires or brackets.",
      image: "/images/patient-smile-1.jpg",
      category: "cosmetic",
      duration: "Periodic checkups",
      recovery: "Virtually invisible",
    },
    {
      id: "cleaning",
      title: "Teeth Cleaning & Whitening",
      subtitle: "Ultrasonic Scaling & Stain Polish",
      description:
        "Deep ultrasonic tartar removal paired with gentle enamel-safe laser whitening to restore a radiant, hygienic, and confident smile.",
      image: "/images/patient-smile-2.jpg",
      category: "preventive",
      duration: "30 Mins",
      recovery: "Zero downtime",
    },
  ];

  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      {/* Header Section Tag & Title */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="max-w-2xl mb-12"
      >
        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide text-slate-700 bg-white border border-slate-200/80 shadow-2xs">
          Feature Treatment
        </span>
        <div className="mt-4">
          <SplitText
            as="h2"
            text="Advanced Dental Care for a Healthier Smile"
            className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-slate-900 leading-[1.15]"
            wordClassName="text-slate-900"
          />
        </div>
        <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
          Join hundreds of patients achieving healthier, brighter smiles through
          expert dental care and personalized treatments in Velachery, Chennai.
        </p>
      </motion.div>

      {/* Asymmetric Core Cards (Doctor Profile on Left, Operatory on Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
        {/* Left: Doctor Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          whileHover={{ y: -4 }}
          className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
        >
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shadow border border-slate-100 flex-shrink-0 bg-slate-100">
                <Image
                  src="/images/doctor-portrait.png"
                  alt="Dr. Jebastin - Lead Dental Specialist"
                  fill
                  sizes="120px"
                  className="object-cover object-[center_15%] scale-115"
                />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-medium text-slate-900">
                  Dr. Jebastin
                </h3>
                <p className="text-xs font-semibold text-teal-700 tracking-wide">
                  BDS • Dentist, Dental Surgeon
                </p>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200/80 text-[11px] font-semibold text-teal-800">
                  <span>26 Years Experience Overall</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-amber-500 pt-0.5">
                  <StarIcon className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="font-semibold text-slate-800">4.9</span>
                  <span className="text-slate-400">[120+ verified reviews]</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              With 26 years of clinical excellence in general dentistry, dental surgery,
              and comprehensive oral care, Dr. Jebastin provides gentle, evidence-based treatments
              tailored to each patient&apos;s comfort and clinical requirements.
            </p>

            <div className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-teal-600" />
                <span>26 Years of Dedicated Dental Surgery in Velachery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-teal-600" />
                <span>Specialist in Single-Visit Rotary Endodontics</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-teal-600" />
                <span>Strict 6-Step Autoclave & Sterilization Protocols</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", bounce: 0.15, visualDuration: 0.3 }}
              onClick={() => onOpenBooking("Consultation with Dr. Jebastin")}
              className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition shadow cursor-pointer"
            >
              Book Doctor Consultation
            </motion.button>
            <span className="text-xs font-medium text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
              Available Today
            </span>
          </div>
        </motion.div>

        {/* Right: State-of-the-Art Dental Operatory Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          whileHover={{ y: -4 }}
          className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
        >
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <Image
              src="/images/operatory-chair.jpg"
              alt="High-tech modern dental operatory at Jebastins Dental Clinic"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 text-white">
              <span className="text-xs uppercase tracking-wider font-semibold text-teal-300">
                Clinic Infrastructure
              </span>
              <h4 className="text-lg font-medium text-white">
                Ultra-Modern Digital Operatory Bay
              </h4>
            </div>
          </div>

          {/* Overlaid Bottom Metrics (Exact Reference Match) */}
          <div className="p-6 sm:p-8 bg-white space-y-6">
            <div className="grid grid-cols-2 gap-6 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs text-slate-400 block mb-1">
                  Recommended Checkups per Year
                </span>
                <span className="text-3xl font-medium text-slate-900">
                  2 <span className="text-sm font-normal text-slate-500">Visits</span>
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 block mb-1">
                  Average Treatment Time
                </span>
                <span className="text-3xl font-medium text-slate-900">
                  40 <span className="text-sm font-normal text-slate-500">Mins</span>
                </span>
              </div>
            </div>

            {/* Today's Appointment Progress Bar */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-600 mb-2 font-medium">
                <span>Today&apos;s Patient Flow & Punctuality</span>
                <span className="text-teal-700 font-semibold font-mono">98% On-Time</span>
              </div>
              {/* Segmented bar visual matching the screenshot with staggered glow */}
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex gap-1 p-0.5">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.04 }}
                    className={`h-full flex-1 rounded-sm transition-colors ${
                      i < 13 ? "bg-teal-500" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Structured Treatment Catalog Grid */}
      <div className="mt-8">
        <h3 className="text-xl font-medium text-slate-900 mb-6">
          Comprehensive Specialized Treatments
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-800 shadow-2xs">
                  {item.duration}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                    {item.subtitle}
                  </span>
                  <h4 className="mt-2 text-base font-medium text-slate-900 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-400">
                    {item.recovery}
                  </span>
                  <button
                    onClick={() => onOpenBooking(item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-teal-700 transition-colors cursor-pointer"
                  >
                    <span>Book Slot</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
