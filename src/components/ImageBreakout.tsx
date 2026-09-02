import React from 'react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../data/clinicData';

export const ImageBreakout: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 mb-20 md:mb-28">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-[360px] sm:h-[400px] md:h-[440px] rounded-3xl overflow-hidden relative shadow-[0_16px_40px_rgba(11,28,48,0.12)] border-2 border-white group"
      >
        {/* Background Image with gentle hover scale */}
        <img
          src={CLINIC_INFO.breakoutImage}
          alt="A close up detailed clinical photo of teeth showing before and after dental restoration work, demonstrating high quality precision dentistry."
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* High contrast overlay for readability */}
        <div className="absolute inset-0 bg-[#0b1c30]/40 backdrop-blur-[1px] flex flex-col items-center justify-center transition-colors duration-500 group-hover:bg-[#0b1c30]/35">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Manrope'] text-[28px] sm:text-[34px] md:text-[42px] font-bold text-white text-center px-4 max-w-2xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] tracking-tight"
          >
            Precision. Quality. Care.
          </motion.p>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-3 text-white/85 text-xs sm:text-sm font-medium tracking-widest uppercase bg-black/25 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-sm"
          >
            Karachi&apos;s Trusted Dental Restorations
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};
