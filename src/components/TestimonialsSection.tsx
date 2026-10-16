"use client";

import React from "react";
import { motion } from "motion/react";
import { StarIcon, CheckCircleIcon } from "./Icons";
import { SplitText } from "./motion/SplitText";

export function TestimonialsSection({ onOpenBooking }: { onOpenBooking: (service?: string) => void }) {
  const reviews = [
    {
      name: "Senthil Nathan",
      role: "Velachery Resident",
      rating: 5,
      date: "Google Review",
      review:
        "I was terrified of root canal treatment due to past trauma. Dr. Jebastin and his team were incredibly patient. The entire single-sitting RCT was practically painless, and the crown fits naturally. Truly the best dental clinic in Velachery.",
      service: "Single-Sitting RCT & Zirconia Crown",
    },
    {
      name: "Priya Sundaram",
      role: "IT Professional, Taramani",
      rating: 5,
      date: "Google Review",
      review:
        "Extremely clean clinic and very punctual appointment system. They explained the digital scan before doing anything. Had my ultrasonic scaling and teeth whitening done with zero sensitivity. Highly recommend for working professionals.",
      service: "Teeth Cleaning & Whitening",
    },
    {
      name: "Anand & Deepa",
      role: "Parents from Madipakkam",
      rating: 5,
      date: "Google Review",
      review:
        "Brought my 8-year-old son for dental filling. The doctor handled him with so much warmth and care that my son didn't cry at all. Transparent pricing and no unnecessary tests. Reassuring family dental care.",
      service: "Pediatric Dental Care",
    },
  ];

  return (
    <section id="reviews" className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide text-slate-700 bg-white border border-slate-200/80 shadow-2xs">
            Patient Stories
          </span>
          <div className="mt-4">
            <SplitText
              as="h2"
              text="Real Stories, Genuine Smiles"
              className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900"
              wordClassName="text-slate-900"
            />
          </div>
          <p className="mt-2 text-sm text-slate-500 font-normal">
            Read what patients across Velachery and South Chennai have to say about their care.
          </p>
        </div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="bg-white px-4 py-2 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3 cursor-default"
        >
          <div className="flex text-amber-400 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="text-xs font-semibold text-slate-900">4.9 / 5.0</span>
          <span className="text-[11px] text-slate-400 border-l border-slate-200 pl-2">
            120+ Verified Reviews
          </span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <motion.div
            key={rev.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-amber-400 gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
                  {rev.date}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                &ldquo;{rev.review}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="font-semibold text-xs sm:text-sm text-slate-900">{rev.name}</p>
                <p className="text-[11px] text-slate-400">{rev.role}</p>
              </div>

              <div className="flex items-center gap-1 text-[11px] font-medium text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                <CheckCircleIcon className="w-3.5 h-3.5 text-teal-600" />
                <span>Verified Patient</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
