"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ToothIcon,
  MenuIcon,
  CloseIcon,
  PhoneIcon,
  SparklesIcon,
  ShieldCheckIcon,
  UserIcon,
  StarIcon,
  MapPinIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  ClockIcon,
  CalendarIcon,
  WhatsAppIcon,
} from "./Icons";

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: "Home",
      href: "#hero",
      id: "home",
      subtitle: "Welcome & practice overview",
      badge: "Clinic",
      icon: SparklesIcon,
    },
    {
      label: "Services",
      href: "#services",
      id: "services",
      subtitle: "Rotary RCT, Implants & Laser",
      badge: "5+ Specialties",
      icon: ShieldCheckIcon,
    },
    {
      label: "About Us",
      href: "#about",
      id: "about",
      subtitle: "Meet Dr. Jebastin (BDS)",
      badge: "26 Yrs Exp",
      icon: UserIcon,
    },
    {
      label: "Testimonials",
      href: "#reviews",
      id: "reviews",
      subtitle: "120+ Verified Patient Stories",
      badge: "4.9 ★ Rating",
      icon: StarIcon,
    },
    {
      label: "Contact",
      href: "#contact",
      id: "contact",
      subtitle: "100 Ft Bypass Rd, Velachery",
      badge: "Open Today",
      icon: MapPinIcon,
    },
  ];

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Primary integrated navigation inside hero */}
      <nav
        className={`w-full transition-all duration-300 z-40 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5 px-4 sm:px-8 text-slate-900"
            : "relative py-6 px-6 sm:px-10 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero", "home");
            }}
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 overflow-hidden p-0.5 ${
                isScrolled
                  ? "bg-white shadow-sm ring-1 ring-slate-200"
                  : "bg-white/95 backdrop-blur-md shadow-md ring-1 ring-white/30"
              }`}
            >
              <Image
                src="/images/clinic-emblem-clean.png"
                alt="Jebastins Dental Clinic Emblem"
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-semibold tracking-tight text-lg leading-tight ${
                  isScrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Jebastins
              </span>
              <span
                className={`text-[10px] tracking-widest uppercase font-medium ${
                  isScrolled ? "text-slate-500" : "text-white/80"
                }`}
              >
                Dental Clinic • Velachery
              </span>
            </div>
          </a>

          {/* Center Pill Navbar (Reference-Matched) */}
          <div
            className={`hidden md:flex items-center gap-1 p-1 rounded-full text-xs font-medium transition-all ${
              isScrolled
                ? "bg-slate-100 border border-slate-200/80 text-slate-600"
                : "bg-white/10 backdrop-blur-md border border-white/15 text-white/90 shadow-sm"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href, link.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? isScrolled
                        ? "bg-white text-slate-900 shadow-sm font-semibold"
                        : "bg-white text-slate-900 shadow font-semibold"
                      : isScrolled
                      ? "hover:text-slate-900 hover:bg-slate-200/60"
                      : "hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919840012345"
              className={`p-2.5 rounded-full transition ${
                isScrolled
                  ? "text-slate-600 hover:text-teal-600 hover:bg-slate-100"
                  : "text-white/80 hover:text-white hover:bg-white/15"
              }`}
              title="Call Clinic: +91 98400 12345"
            >
              <PhoneIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenBooking()}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all transform hover:scale-[1.02] shadow-sm ${
                isScrolled
                  ? "bg-slate-900 hover:bg-slate-800 text-white"
                  : "bg-white hover:bg-slate-50 text-slate-900"
              }`}
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl md:hidden transition ${
              isScrolled
                ? "text-slate-900 hover:bg-slate-100"
                : "text-white hover:bg-white/15"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu with UI/UX Pro Max Apple Frosted Glass Experience */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-slate-950/96 backdrop-blur-3xl p-5 sm:p-6 md:hidden flex flex-col justify-between overflow-y-auto text-white"
          >
            {/* Top Bar: Brand, Doctor Tag & Apple Glass Close Pill */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white/10 p-1 border border-white/20 flex items-center justify-center overflow-hidden shadow-inner">
                  <Image
                    src="/images/clinic-emblem-clean.png"
                    alt="Jebastins Dental Clinic Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white text-base tracking-tight leading-tight">
                      Jebastins Dental
                    </span>
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 font-semibold">
                      BDS • 26 Yrs
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-normal tracking-wide">
                    Velachery, Chennai • Dr. Jebastin
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/90 hover:bg-white/20 active:scale-95 transition-all cursor-pointer shadow-xs"
                aria-label="Close Navigation"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Live Availability Status Pill */}
            <div className="my-3.5 p-3 rounded-2xl bg-gradient-to-r from-teal-500/15 via-emerald-500/10 to-transparent border border-teal-400/25 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  Open Today • Prior Booking Priority
                </span>
              </div>
              <div className="flex items-center gap-1 bg-amber-400/15 border border-amber-400/30 px-2 py-0.5 rounded-full">
                <span className="text-xs font-bold text-amber-300">4.9</span>
                <StarIcon className="w-3 h-3 fill-amber-300 text-amber-300" />
              </div>
            </div>

            {/* Navigation Links (Tactile Interactive Apple Glass Cards) */}
            <div className="space-y-2 py-2 flex-1 flex flex-col justify-center">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href, link.id)}
                    className={`w-full text-left p-3 rounded-2xl transition-all flex items-center justify-between border cursor-pointer active:scale-[0.99] touch-manipulation ${
                      isActive
                        ? "bg-white/[0.14] border-teal-400/50 text-white shadow-[0_4px_24px_rgba(45,212,191,0.18)]"
                        : "bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-white/90"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isActive
                            ? "bg-teal-400/20 text-teal-300 border border-teal-400/40"
                            : "bg-white/[0.07] text-slate-300 border border-white/10"
                        }`}
                      >
                        <IconComponent className="w-4.5 h-4.5" />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-base font-semibold text-white tracking-tight leading-tight">
                            {link.label}
                          </span>
                          {link.badge && (
                            <span
                              className={`text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                                isActive
                                  ? "bg-teal-400/25 text-teal-200 border border-teal-400/40"
                                  : "bg-white/[0.08] text-slate-300 border border-white/10"
                              }`}
                            >
                              {link.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-300/80 font-normal mt-0.5">
                          {link.subtitle}
                        </span>
                      </div>
                    </div>
                    <ChevronRightIcon
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive ? "text-teal-300 translate-x-0.5" : "text-white/30"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Bottom Conversion Actions */}
            <div className="pt-4 border-t border-white/10 space-y-2.5">
              {/* Primary Apple Glass Gradient Consultation Button */}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking("General Consultation");
                }}
                className="w-full min-h-[46px] py-3 px-5 rounded-2xl bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 hover:from-teal-300 hover:to-emerald-300 text-slate-950 text-xs sm:text-sm font-semibold tracking-wide shadow-[0_4px_20px_rgba(45,212,191,0.35)] flex items-center justify-center gap-2 cursor-pointer touch-manipulation active:scale-[0.98] transition-all"
              >
                <CalendarIcon className="w-4 h-4 text-slate-950" />
                <span>Book an Appointment</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>

              {/* Fast Connect Options: WhatsApp & Phone Direct */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://wa.me/919840012345?text=Hello%20Dr.%20Jebastin,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[42px] py-2.5 px-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition active:scale-[0.98] touch-manipulation"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="tel:+919840012345"
                  className="min-h-[42px] py-2.5 px-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white text-xs font-medium flex items-center justify-center gap-2 transition active:scale-[0.98] touch-manipulation"
                >
                  <PhoneIcon className="w-4 h-4 shrink-0 text-teal-300" />
                  <span>+91 98400 12345</span>
                </a>
              </div>

              {/* Clinic Timings */}
              <div className="pt-1.5 flex items-center justify-center gap-2 text-[10px] text-slate-400">
                <ClockIcon className="w-3 h-3 text-teal-400/80 shrink-0" />
                <span>Mon–Sat: 9:30 AM – 8:30 PM • Sun: 10:00 AM – 1:30 PM</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
