"use client";

import React, { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  CheckCircleIcon,
  CalendarIcon,
  ShieldCheckIcon,
} from "./Icons";

export function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "General Dental Checkup",
    date: "",
    slot: "Morning (9:30 AM - 12:30 PM)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Clinic Contact Details & Map info */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-teal-300 bg-teal-950/80 border border-teal-800/60 mb-6">
                Velachery, Chennai
              </span>

              <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-white leading-tight">
                Visit Jebastins <br />
                <span className="font-medium text-white">Dental Clinic</span>
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Conveniently located in the heart of Velachery with easy parking,
                welcoming waiting lounge, and prompt consultation slots.
              </p>

              {/* Verified Contact Details */}
              <div className="mt-8 space-y-5 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-teal-400">
                    <MapPinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-medium">Clinic Address</strong>
                    <span>No. 14, 100 Feet Bypass Road, near Vijayanagar Bus Terminus, Velachery, Chennai, Tamil Nadu - 600042</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-teal-400">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-medium">Phone & WhatsApp</strong>
                    <a href="tel:+919840012345" className="hover:text-teal-300 transition">
                      +91 98400 12345
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-teal-400">
                    <ClockIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-medium">Opening Hours</strong>
                    <span>Mon - Sat: 9:30 AM – 8:30 PM</span>
                    <span className="block text-slate-400 text-xs">Sunday: 10:00 AM – 1:30 PM (By Appointment)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Link & Directions Action */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
              <a
                href="https://maps.google.com/?q=Velachery+Chennai+Dental+Clinic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-teal-300 hover:text-white flex items-center gap-1.5 transition"
              >
                <span>Open in Google Maps</span>
                <span>↗</span>
              </a>

              <a
                href="https://wa.me/919840012345?text=Hello%20Dr.%20Jebastin,%20I%20would%20like%20to%20inquire%20about%20a%20dental%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Booking Form */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            <h3 className="text-xl sm:text-2xl font-medium text-slate-900 mb-2">
              Book Your Appointment
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-8">
              Fill in your contact details below. Our clinic team will confirm your preferred time slot promptly.
            </p>

            {submitted ? (
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 mx-auto flex items-center justify-center">
                  <CheckCircleIcon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-medium text-slate-900">
                  Appointment Request Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. We have received your booking for{" "}
                  <strong>{formData.treatment}</strong>. Our front desk will call you at {formData.phone} shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-5 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50"
                >
                  Book another slot
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Raman"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-base sm:text-sm bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-base sm:text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Select Treatment
                    </label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-base sm:text-sm bg-white"
                    >
                      <option value="General Dental Checkup">General Dental Checkup</option>
                      <option value="Root Canal Treatment">Root Canal Treatment</option>
                      <option value="Dental Implants & Crowns">Dental Implants & Crowns</option>
                      <option value="Teeth Cleaning & Whitening">Teeth Cleaning & Whitening</option>
                      <option value="Invisalign / Aligners">Invisalign / Aligners</option>
                      <option value="Tooth Ache / Emergency">Tooth Ache / Emergency</option>
                      <option value="Kids Dentistry">Kids Dentistry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-base sm:text-sm bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm bg-white"
                  >
                    <option value="Morning (9:30 AM - 12:30 PM)">Morning (9:30 AM - 12:30 PM)</option>
                    <option value="Afternoon (1:30 PM - 5:00 PM)">Afternoon (1:30 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Any specific tooth problem or question?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you are experiencing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold tracking-wide transition shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer"
                  >
                    {loading ? "Submitting..." : "Schedule Appointment"}
                  </button>
                  <span className="block sm:inline-block sm:ml-4 text-xs text-slate-400 mt-2 sm:mt-0">
                    No waiting fee • Instant WhatsApp confirmation
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
