"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { LinkedInIcon, InstagramIcon, FacebookIcon } from "./Icons";

interface FooterProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const handleGetInTouch = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    } else {
      onOpenBooking?.("General Consultation");
    }
  };

  return (
    <footer className="w-full bg-white relative overflow-hidden flex flex-col">
      {/* 1. TOP EDITORIAL BANNER (Reference-Matched — Clean Luxury Neutral, No Yellow) */}
      <div className="w-full bg-[#EEF2F0] border-y border-slate-200/70 py-14 sm:py-20 lg:py-24 px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12">
          {/* Headline: "Let's smile together" (Light + Bold Contrast) */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] text-slate-950 font-normal leading-tight">
            Let&apos;s smile <span className="font-bold text-slate-950">together</span>
          </h2>

          {/* Right Action Links */}
          <div className="flex items-center gap-8 sm:gap-12 text-sm sm:text-base md:text-lg font-medium text-slate-900 shrink-0">
            <a
              href="#contact"
              onClick={handleGetInTouch}
              className="group relative inline-block underline underline-offset-[8px] decoration-1 hover:text-teal-700 transition-colors cursor-pointer"
            >
              Get in Touch
            </a>
            <button
              type="button"
              onClick={() => onOpenBooking?.("General Consultation")}
              className="group relative inline-block underline underline-offset-[8px] decoration-1 hover:text-teal-700 transition-colors cursor-pointer bg-transparent border-0 p-0 text-inherit font-inherit"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE METADATA & CLINIC DETAILS (Reference Layout) */}
      <div className="w-full pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 px-6 sm:px-12 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
          {/* Left Column: Authentic Brand Identity + Social Icons & Copyright/Legal */}
          <div className="flex flex-col justify-between h-full space-y-8 sm:space-y-10">
            {/* Authentic Clinic Logo Badge */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full overflow-hidden p-0.5 bg-blue-50/70 border border-blue-100/90 shadow-2xs flex items-center justify-center">
                <Image
                  src="/images/clinic-emblem-clean.png"
                  alt="Jebastins Dental Clinic Emblem"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-950 text-base tracking-tight leading-tight">
                  Jebastins Dental Clinic
                </span>
                <span className="text-[11px] text-teal-700 font-semibold tracking-wider uppercase mt-0.5">
                  Velachery, Chennai • 26 Years Experience Overall
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-slate-950">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:text-teal-600 hover:scale-110 transition-all duration-200"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:text-teal-600 hover:scale-110 transition-all duration-200"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:text-teal-600 hover:scale-110 transition-all duration-200"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright & Legal Links */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 text-xs sm:text-sm text-slate-500 font-normal">
              <span>©{new Date().getFullYear()} Jebastins Dental Clinic</span>
              <button
                type="button"
                onClick={() => setLegalModal("Terms of Use")}
                className="hover:text-slate-900 transition-colors cursor-pointer text-left"
              >
                Terms of Use
              </button>
              <button
                type="button"
                onClick={() => setLegalModal("Privacy Policy")}
                className="hover:text-slate-900 transition-colors cursor-pointer text-left"
              >
                Privacy Policy
              </button>
            </div>
          </div>

          {/* Right Columns: Clinic Addresses & Visiting Hours */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 text-xs sm:text-sm text-slate-600 font-normal">
            {/* Location 1: Velachery */}
            <div className="space-y-1.5">
              <p className="font-semibold text-slate-950 text-sm sm:text-base">Velachery</p>
              <p className="text-slate-500">No. 14, 100 Feet Bypass Road</p>
              <p className="text-slate-500">Velachery, Chennai 600042</p>
              <a
                href="tel:+919840012345"
                className="inline-block text-slate-900 hover:text-teal-600 font-medium transition-colors pt-1"
              >
                +91 98400 12345
              </a>
            </div>

            {/* Location 2 / Clinical Hours */}
            <div className="space-y-1.5">
              <p className="font-semibold text-slate-950 text-sm sm:text-base">Clinical Hours</p>
              <p className="text-slate-500">Mon – Sat: 9:30 AM – 8:30 PM</p>
              <p className="text-slate-500">Sunday: 10:00 AM – 1:30 PM</p>
              <a
                href="mailto:contact@jebastinsdental.com"
                className="inline-block text-slate-900 hover:text-teal-600 font-medium transition-colors pt-1"
              >
                contact@jebastinsdental.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FULLY VISIBLE LOWERCASE BRAND TYPOGRAPHY ("jebastins") */}
      {/* Engineered with UI/UX Pro Max precision: 100% fully visible, zero clipping, complete ascenders/descenders, kinetic scroll entrance */}
      <div className="w-full border-t border-slate-100 py-6 sm:py-10 lg:py-12 select-none bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 flex justify-center items-center">
          <motion.span
            initial={{ opacity: 0.9, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-[7.2vw] sm:text-[8.8vw] lg:text-[9.6vw] font-bold tracking-[-0.03em] text-slate-950 leading-tight text-center block w-full hover:tracking-normal transition-all duration-700"
          >
            jebastins
          </motion.span>
        </div>
      </div>

      {/* Lightweight Modal for Terms / Privacy */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-3">{legalModal}</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Jebastins Dental Clinic is committed to transparent patient communication, patient data privacy, and ethical clinical standards under the Dental Council of India regulations. All personal health records and appointments are handled with strict clinical confidentiality.
            </p>
            <button
              onClick={() => setLegalModal(null)}
              className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
