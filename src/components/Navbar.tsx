"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ToothIcon, MenuIcon, CloseIcon, PhoneIcon } from "./Icons";

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
    { label: "Home", href: "#hero", id: "home" },
    { label: "Services", href: "#services", id: "services" },
    { label: "About Us", href: "#about", id: "about" },
    { label: "Testimonials", href: "#reviews", id: "reviews" },
    { label: "Contact", href: "#contact", id: "contact" },
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
              Book a Call
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

      {/* Mobile Drawer Menu with Native App Fluidity */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl p-6 md:hidden flex flex-col justify-between overflow-y-auto animate-fade-in">
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50/80 p-0.5 border border-blue-100 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/clinic-emblem-clean.png"
                  alt="Jebastins Dental Clinic Logo"
                  width={38}
                  height={38}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-950 text-base leading-tight">
                  Jebastins
                </span>
                <span className="text-[10px] text-teal-700 font-semibold tracking-wider uppercase">
                  Velachery, Chennai
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition"
              aria-label="Close Navigation"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2 py-6 flex-1 flex flex-col justify-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.href, link.id)}
                className={`w-full text-left py-3.5 px-4 rounded-2xl text-xl font-medium transition-all ${
                  activeSection === link.id
                    ? "bg-teal-50 text-teal-800 font-semibold"
                    : "text-slate-800 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Bottom Conversion Actions */}
          <div className="pt-6 border-t border-slate-100 space-y-3 pb-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 rounded-full bg-slate-900 active:bg-slate-800 text-white text-sm font-semibold tracking-wide shadow-md flex items-center justify-center gap-2 touch-manipulation"
            >
              <span>Book an Appointment</span>
            </button>
            <a
              href="tel:+919840012345"
              className="w-full py-3.5 rounded-full border border-slate-200 active:bg-slate-50 text-slate-800 text-sm font-medium flex items-center justify-center gap-2 touch-manipulation"
            >
              <PhoneIcon className="w-4 h-4 text-teal-600" />
              <span>Direct Call: +91 98400 12345</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
