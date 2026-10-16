"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { TreatmentJourneyStrip } from "@/components/TreatmentJourneyStrip";
import { AboutSection } from "@/components/AboutSection";
import { TrustStats } from "@/components/TrustStats";
import { FeaturedTreatments } from "@/components/FeaturedTreatments";
import { EducationalInsights } from "@/components/EducationalInsights";
import { PatientJourney } from "@/components/PatientJourney";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AppointmentSection } from "@/components/AppointmentSection";
import { Footer } from "@/components/Footer";
import { AppointmentModal } from "@/components/AppointmentModal";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { KineticTicker } from "@/components/motion/KineticTicker";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("General Dental Checkup");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#FBFBFA] text-slate-900 flex flex-col">
        {/* 1. Hero Section with Integrated Navbar and Floating Cards */}
        <HeroSection onOpenBooking={handleOpenBooking} />

      {/* 2. Horizontal Treatment Journey Strip (Reference-Matched) */}
      <TreatmentJourneyStrip onSelectStage={(stage) => handleOpenBooking(`Inquiry: ${stage}`)} />

      {/* Kinetic Typography Scroll Ticker */}
      <KineticTicker
        items={[
          "26 Years Experience Overall",
          "Dr. Jebastin • BDS, Dentist & Dental Surgeon",
          "Single-Visit Rotary Endodontics",
          "Precision Restorative Dentistry",
          "Hospital-Grade 6-Step Sterilization",
          "Pain-Managed Gentle Care",
          "Velachery, Chennai",
        ]}
      />

      {/* 3. About Section (Asymmetric Editorial Layout) */}
      <AboutSection onOpenBooking={handleOpenBooking} />

      {/* 4. Trust & Highlights Statistics with Diagnostic Bar Chart */}
      <TrustStats />

      {/* 5. Featured Treatments: Doctor Profile & Operatory Showcase */}
      <FeaturedTreatments onOpenBooking={handleOpenBooking} />

      {/* 6. Educational Insights (Reference-Matched: Cleaning vs Brushing) */}
      <EducationalInsights onOpenBooking={handleOpenBooking} />

      {/* 7. Patient Experience / 4-Step Clinical Journey */}
      <PatientJourney />

      {/* 8. Patient Testimonials & Google Reviews */}
      <TestimonialsSection onOpenBooking={handleOpenBooking} />

      {/* 9. Direct Contact, Location & On-Page Appointment Form */}
      <AppointmentSection />

      {/* 10. Reference-Matched Editorial Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Global Interactive Booking Modal */}
      <AppointmentModal
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </main>
  </SmoothScrollProvider>
  );
}
