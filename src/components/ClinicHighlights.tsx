import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Eye, BadgePercent, HeartHandshake, CheckCircle2, Clock, Award } from 'lucide-react';
import { CLINIC_HIGHLIGHTS } from '../data/clinicData';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-[#006a61]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#006a61]" />,
  Eye: <Eye className="w-6 h-6 text-[#006a61]" />,
  BadgePercent: <BadgePercent className="w-6 h-6 text-[#006a61]" />,
};

export const ClinicHighlights: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 mb-20 md:mb-28">
      <div className="bg-gradient-to-br from-[#0b1c30] via-[#0f243c] to-[#003833] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-white/10">
        {/* Decorative ambient glowing circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#86f2e4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#006a61]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-[#86f2e4] text-xs font-semibold tracking-wider uppercase mb-3 border border-white/15">
            <Award className="w-3.5 h-3.5 text-[#86f2e4]" />
            Why Choose Innova Dental
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold font-['Manrope'] tracking-tight leading-tight mb-3 text-white">
            High Clinical Standards with a Gentle Human Touch
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed">
            From your very first diagnosis to procedure completion, we deliver transparent, stress-free dental care designed around your comfort.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINIC_HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#86f2e4]/20 flex items-center justify-center mb-4 border border-[#86f2e4]/30">
                  {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-[#86f2e4]" />}
                </div>
                <h3 className="font-['Manrope'] text-[18px] font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/75 text-[13px] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-[#86f2e4] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
