"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRightIcon } from "./Icons";
import { SplitText } from "./motion/SplitText";

export function EducationalInsights({ onOpenBooking }: { onOpenBooking: (service?: string) => void }) {
  const articles = [
    {
      title: "Professional Cleaning vs. Regular Brushing",
      category: "Oral Hygiene Guide",
      date: "March 12, 2026",
      readTime: "4 min read",
      author: "Dr. Jebastin",
      authorAvatar: "/images/doctor-portrait.jpg",
      image: "/images/hero-patient.jpg",
      excerpt:
        "Why even the most thorough daily brushing cannot dissolve calcified plaque (calculus), and how painless ultrasonic scaling prevents periodontal gum pockets.",
    },
    {
      title: "Signs That Indicate It's Time for a Dental Checkup",
      category: "Preventive Dental",
      date: "March 20, 2026",
      readTime: "3 min read",
      author: "Dr. Jebastin & Clinical Team",
      authorAvatar: "/images/doctor-portrait.png",
      image: "/images/patient-chair.jpg",
      excerpt:
        "Subtle early signals such as cold sensitivity, slight gum bleed during flossing, or jaw stiffness that should be evaluated before turning into root canal emergencies.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20 border-t border-slate-200/60">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide text-slate-700 bg-white border border-slate-200/80 shadow-2xs">
            Oral Health Guides
          </span>
          <div className="mt-3">
            <SplitText
              as="h2"
              text="Educational Insights for Lifelong Smiles"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-slate-900"
              wordClassName="text-slate-900"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onOpenBooking("Routine Dental Checkup")}
          className="text-xs font-semibold text-slate-900 hover:text-teal-700 flex items-center gap-2 group self-start sm:self-auto cursor-pointer"
        >
          <span>Ask our dentist a question</span>
          <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((art, idx) => (
          <motion.div
            key={art.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer"
          >
            <div className="relative h-60 w-full overflow-hidden bg-slate-100">
              <Image
                src={art.image}
                alt={art.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white shadow-2xs">
                {art.category}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span>{art.date}</span>
                  <span>•</span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="text-xl font-medium text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                  {art.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200 bg-slate-100 flex-shrink-0">
                    <Image
                      src={art.authorAvatar}
                      alt={art.author}
                      fill
                      sizes="32px"
                      className="object-cover object-[center_15%] scale-120"
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-700">
                    {art.author}
                  </span>
                </div>

                <span className="text-xs font-semibold text-teal-700 group-hover:text-teal-800 flex items-center gap-1">
                  <span>Read Guide</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
