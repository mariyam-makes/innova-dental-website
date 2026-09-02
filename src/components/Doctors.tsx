import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Sparkles, ShieldAlert, HeartHandshake, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ToothIcon } from './ToothIcon';
import { DOCTORS_DATA } from '../data/clinicData';

const doctorIcons: Record<string, React.ReactNode> = {
  'dr-zoya': <HeartHandshake className="w-6 h-6 text-[#006a61]" />,
  'dr-yumna': <Sparkles className="w-6 h-6 text-[#006a61]" />,
  'dr-jahanzaib': <ToothIcon className="w-6 h-6 text-[#006a61]" variant="solid" />,
  'dr-khazina': <Stethoscope className="w-6 h-6 text-[#006a61]" />,
};

export const Doctors: React.FC = () => {
  return (
    <section id="about" className="max-w-[1280px] mx-auto px-4 md:px-12 mb-20 md:mb-28 scroll-mt-28">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-14 md:mb-16 space-y-3"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#eff4ff] rounded-full text-[#006a61] text-xs font-semibold tracking-wider uppercase border border-[#006a61]/15 mb-2 shadow-xs">
          About Our Clinical Team
        </div>
        <h2 className="text-[#0b1c30] text-[28px] md:text-[34px] lg:text-[38px] font-bold tracking-tight font-['Manrope']">
          Our Dental Specialists
        </h2>
        <p className="text-[#45464d] text-[15px] md:text-[16px] leading-relaxed">
          Dedicated dental professionals focused on pain-free treatments, hygiene, endodontics, and comprehensive family care.
        </p>
      </motion.div>

      {/* Doctor Cards Grid with Staggered Motion (No Photos as requested) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DOCTORS_DATA.map((doctor, index) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -5 }}
            className="group bg-white rounded-2xl p-6 md:p-7 border border-[#c6c6cd]/25 shadow-[0_4px_20px_rgba(11,28,48,0.03)] hover:shadow-[0_14px_32px_rgba(0,106,97,0.08)] hover:border-[#006a61]/35 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Doctor Avatar Badge & Status */}
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 rounded-2xl bg-[#eff4ff] group-hover:bg-[#86f2e4]/50 flex items-center justify-center transition-colors duration-300 shadow-xs">
                  {doctorIcons[doctor.id] || <ToothIcon className="w-6 h-6 text-[#006a61]" />}
                </div>
                <span className="px-2.5 py-1 bg-[#eff4ff] rounded-full text-[11px] font-semibold text-[#006a61] border border-[#006a61]/10">
                  {doctor.experience || 'Specialist'}
                </span>
              </div>

              {/* Doctor Name & Role */}
              <div>
                <h3 className="text-[#0b1c30] group-hover:text-[#006a61] text-[20px] font-bold font-['Manrope'] transition-colors duration-200">
                  {doctor.name}
                </h3>
                {doctor.role && (
                  <p className="text-[#006a61] text-[13px] font-medium mt-0.5 mb-2">
                    {doctor.role}
                  </p>
                )}
              </div>

              {/* Exact Specialty Box */}
              <div className="p-3.5 bg-[#f8f9ff] group-hover:bg-[#eff4ff]/70 rounded-xl border border-[#c6c6cd]/20 transition-colors duration-200">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#006a61] mb-1">
                  Specialty
                </p>
                <p className="text-[#45464d] text-[13px] leading-relaxed">
                  {doctor.specialty}
                </p>
              </div>
            </div>

            {/* Bottom Verification Footer */}
            <div className="pt-5 mt-4 border-t border-[#eff4ff] flex items-center justify-between text-xs text-[#006a61]">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#006f66]">
                <ShieldCheck className="w-4 h-4 text-[#006a61]" />
                Innova Clinic Doctor
              </span>
              <span className="w-2 h-2 rounded-full bg-[#006a61]/30 group-hover:bg-[#006a61] transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
