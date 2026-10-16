"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CloseIcon, CheckCircleIcon } from "./Icons";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export function AppointmentModal({
  isOpen,
  onClose,
  initialService = "General Dental Checkup",
}: AppointmentModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService,
    preferredDate: "",
    preferredSlot: "Morning (9:30 AM - 12:30 PM)",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [bookingRef, setBookingRef] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate reliable submission
    setTimeout(() => {
      const ref = "JDC-" + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(ref);
      setStatus("success");
    }, 600);
  };

  const handleReset = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ type: "spring", bounce: 0.14, duration: 0.4 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/70">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                  Jebastins Dental Clinic
                </span>
                <h3 className="mt-1 text-xl font-medium tracking-tight text-slate-900">
                  Schedule Your Visit
                </h3>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <CloseIcon className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center border border-teal-100">
                    <CheckCircleIcon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-medium text-slate-900">
                    Appointment Requested!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your reference ID is{" "}
                    <span className="font-mono font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                      {bookingRef}
                    </span>
                    . Our clinic coordinator will call or WhatsApp you shortly to confirm your slot.
                  </p>

                  <div className="bg-slate-50 p-4 rounded-2xl text-left text-xs text-slate-600 space-y-1.5 border border-slate-100">
                    <div><strong>Location:</strong> 100 Feet Bypass Road, Velachery, Chennai</div>
                    <div><strong>Service:</strong> {formData.service}</div>
                    <div><strong>Slot:</strong> {formData.preferredSlot} ({formData.preferredDate || "Earliest Available"})</div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={`https://wa.me/919840012345?text=Hello%20Jebastins%20Dental,%20I%20have%20requested%20an%20appointment%20(Ref:%20${bookingRef})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition"
                    >
                      Confirm on WhatsApp
                    </motion.a>
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-medium transition cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm placeholder:text-slate-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Treatment Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm bg-white"
                      >
                        <option value="General Dental Checkup">General Dental Checkup</option>
                        <option value="Teeth Cleaning & Polishing">Teeth Cleaning & Polishing</option>
                        <option value="Root Canal Treatment">Root Canal Treatment</option>
                        <option value="Dental Implants & Crowns">Dental Implants & Crowns</option>
                        <option value="Invisalign & Clear Aligners">Invisalign & Clear Aligners</option>
                        <option value="Tooth Pain / Emergency Care">Tooth Pain / Emergency Care</option>
                        <option value="Pediatric Dental Care">Pediatric Dental Care</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredSlot}
                        onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm bg-white"
                      >
                        <option value="Morning (9:30 AM - 12:30 PM)">Morning (9:30 AM - 12:30 PM)</option>
                        <option value="Afternoon (1:30 PM - 5:00 PM)">Afternoon (1:30 PM - 5:00 PM)</option>
                        <option value="Evening (5:00 PM - 8:30 PM)">Evening (5:00 PM - 8:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Brief Note or Symptoms (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Sensitivity on upper left tooth, routine checkup..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600 text-sm placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-3 px-6 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {status === "submitting" ? (
                        <span>Confirming...</span>
                      ) : (
                        <span>Confirm Appointment Request</span>
                      )}
                    </motion.button>
                    <p className="mt-2 text-[11px] text-center text-slate-400">
                      No advance payment needed. Direct consultation at Velachery, Chennai.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
