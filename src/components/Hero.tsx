import React from 'react';
import { motion } from 'motion/react';
import { MapPin, MessageSquare, ArrowRight, ShieldCheck, Sparkles, Star, CheckCircle2, Award } from 'lucide-react';
import { ToothIcon } from './ToothIcon';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative max-w-[1280px] mx-auto px-4 md:px-12 pt-4 md:pt-8 mb-20 md:mb-28 overflow-hidden">
      {/* Decorative ambient gradients */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-[#86f2e4]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[480px] h-[480px] bg-[#dce9ff]/70 rounded-full blur-3xl pointer-events-none animate-float-subtle"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Clinic Heading & Information (col-span-7) */}
        <div className="lg:col-span-7 space-y-7 z-10">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-2.5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eff4ff] rounded-full text-[#006a61] font-semibold text-[12px] md:text-[13px] border border-[#006a61]/20 shadow-xs">
              <ToothIcon className="w-3.5 h-3.5 text-[#006a61]" variant="solid" />
              <span className="tracking-wide">INNOVA DENTAL CLINIC • KARACHI</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#86f2e4]/30 rounded-full text-[#006f66] text-[12px] font-medium border border-[#86f2e4]/50">
              <Sparkles className="w-3.5 h-3.5 text-[#006a61]" />
              <span>Pain-Free Dentistry</span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-[#0b1c30] text-[34px] sm:text-[42px] lg:text-[50px] font-bold leading-[1.14] tracking-tight font-['Manrope']"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="text-[#006a61] block mb-1 font-bold"
              >
                Your Smile, Our Passion
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="block text-[#0b1c30]"
              >
                Pain-Free Dental Care at Innova Dental Clinic
              </motion.span>
            </motion.h1>
          </div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#45464d] text-[16px] md:text-[18px] leading-[1.65] max-w-xl font-normal"
          >
            Experience gentle, modern dentistry in Karachi. We specialize in pain-free fillings,
            cosmetic veneers, precision root canals, and thorough hygiene cleaning with transparent
            pricing and doctor-led care.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
          >
            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2.5, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="inline-flex items-center justify-center gap-2.5 bg-[#006a61] text-white px-7 py-3.5 rounded-full font-semibold text-[15px] shadow-[0_6px_20px_rgba(0,106,97,0.25)] hover:bg-[#005049] hover:shadow-[0_10px_28px_rgba(0,106,97,0.32)] transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5 text-[#86f2e4]" />
              <span>Book on WhatsApp</span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#services"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="inline-flex items-center justify-center gap-2 bg-[#eff4ff] text-[#0b1c30] hover:text-[#006a61] px-7 py-3.5 rounded-full font-medium text-[15px] border border-[#006a61]/20 hover:border-[#006a61]/40 hover:bg-[#dce9ff] transition-all duration-200 shadow-xs"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-[#006a61]" />
            </motion.a>
          </motion.div>

          {/* Quick Clinical Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="pt-4 border-t border-[#c6c6cd]/30 grid grid-cols-3 gap-3 max-w-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#86f2e4]/30 flex items-center justify-center text-[#006a61]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-[#0b1c30]">100% Sterile</p>
                <p className="text-[11px] text-[#45464d]">Autoclave Safe</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#006a61]">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-[#0b1c30]">Pain-Free</p>
                <p className="text-[11px] text-[#45464d]">Gentle Anesthesia</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#eff4ff] flex items-center justify-center text-[#006a61]">
                <Star className="w-4 h-4 fill-[#006a61]" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-[#0b1c30]">4.9 ★ Rating</p>
                <p className="text-[11px] text-[#45464d]">Karachi Patients</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Macro Intraoral Procedure Closeup Image (col-span-5) */}
        <div className="lg:col-span-5 relative w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full relative"
          >
            {/* Gentle vertical floating container */}
            <div className="animate-float-gentle">
              <div className="group relative w-full h-[440px] sm:h-[490px] lg:h-[530px] rounded-3xl overflow-hidden shadow-[0_24px_54px_rgba(11,28,48,0.16)] border-4 border-white bg-[#0b1c30]">
                {/* Hero Intraoral Closeup Image */}
                <img
                  src={CLINIC_INFO.heroImage}
                  alt="Closeup macro clinical view of dental procedure showing precision tooth restoration and instruments"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="eager"
                />

                {/* Clinical Gradient Overlay & Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/80 via-transparent to-black/20 pointer-events-none" />

                {/* Top Floating Badge on Image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#0b1c30]/85 backdrop-blur-md text-white text-[12px] font-semibold border border-white/20 shadow-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#86f2e4] animate-pulse" />
                    Clinical Procedure in Progress
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#006a61]/90 backdrop-blur-md text-white text-[11px] font-bold border border-white/10 shadow-xs">
                    Intraoral View
                  </span>
                </div>

                {/* Bottom Clinical Legend on Image */}
                <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
                  <p className="text-[12px] text-[#86f2e4] font-bold tracking-wider uppercase mb-1">
                    Precision Dental Restorations
                  </p>
                  <p className="text-[14px] sm:text-[15px] font-medium leading-snug text-white/90">
                    High-magnification intraoral precision with biocompatible materials.
                  </p>
                </div>
              </div>

              {/* Floating Verified Quality Tag */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-[0_12px_32px_rgba(11,28,48,0.14)] border border-[#c6c6cd]/30 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 bg-[#86f2e4]/60 rounded-xl flex items-center justify-center text-[#006a61] shadow-xs">
                  <Award className="w-5 h-5 text-[#006a61]" />
                </div>
                <div>
                  <p className="font-['Manrope'] text-[14px] font-bold text-[#0b1c30] leading-tight">
                    Micro-Precision
                  </p>
                  <p className="text-[11px] font-medium text-[#45464d]">
                    Zero Pain Protocol
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

