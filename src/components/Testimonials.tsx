import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/clinicData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  return (
    <section id="reviews" className="max-w-[1280px] mx-auto px-4 md:px-12 mb-20 md:mb-28 scroll-mt-28">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-14 md:mb-16 space-y-3"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#eff4ff] rounded-full text-[#006a61] text-xs font-semibold tracking-wider uppercase border border-[#006a61]/15 mb-2 shadow-xs">
          Real Patient Stories
        </div>
        <h2 className="text-[#0b1c30] text-[28px] md:text-[34px] lg:text-[38px] font-bold tracking-tight font-['Manrope']">
          Smiles Transformed, Fear Removed
        </h2>
        <p className="text-[#45464d] text-[15px] md:text-[16px] leading-relaxed">
          See why Karachi families trust Innova Dental Clinic for pain-free, comfortable treatments.
        </p>
      </motion.div>

      {/* Testimonials Carousel Container */}
      <div className="relative max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_12px_40px_rgba(11,28,48,0.06)] border border-[#c6c6cd]/30 relative overflow-hidden">
          {/* Subtle Decorative Quote Icon */}
          <div className="absolute top-6 right-8 text-[#eff4ff] -z-0 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col justify-between min-h-[220px]"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(TESTIMONIALS_DATA[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#006a61] text-[#006a61]" />
                ))}
                <span className="ml-2 text-xs font-semibold text-[#006a61] bg-[#86f2e4]/30 px-2.5 py-0.5 rounded-full">
                  5.0 Verified Patient
                </span>
              </div>

              {/* Comment */}
              <p className="text-[#0b1c30] text-[17px] sm:text-[20px] font-normal leading-relaxed italic mb-8">
                &ldquo;{TESTIMONIALS_DATA[currentIndex].comment}&rdquo;
              </p>

              {/* Author & Treatment */}
              <div className="flex items-center justify-between border-t border-[#eff4ff] pt-4">
                <div>
                  <h4 className="font-['Manrope'] font-bold text-[#0b1c30] text-[17px]">
                    {TESTIMONIALS_DATA[currentIndex].name}
                  </h4>
                  <p className="text-xs text-[#45464d]">
                    {TESTIMONIALS_DATA[currentIndex].location} • Treatment:{' '}
                    <span className="text-[#006a61] font-medium">
                      {TESTIMONIALS_DATA[currentIndex].treatment}
                    </span>
                  </p>
                </div>
                <span className="flex items-center gap-1 text-[11px] text-[#006a61] font-semibold bg-[#eff4ff] px-3 py-1 rounded-full border border-[#006a61]/15">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mt-6 px-2">
          {/* Dots Indicator */}
          <div className="flex gap-2">
            {TESTIMONIALS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-8 bg-[#006a61]' : 'w-2.5 bg-[#c6c6cd]/60 hover:bg-[#006a61]/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevReview}
              className="w-10 h-10 rounded-full bg-white border border-[#c6c6cd]/40 text-[#0b1c30] hover:text-[#006a61] hover:border-[#006a61] hover:bg-[#eff4ff] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextReview}
              className="w-10 h-10 rounded-full bg-white border border-[#c6c6cd]/40 text-[#0b1c30] hover:text-[#006a61] hover:border-[#006a61] hover:bg-[#eff4ff] flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
