import React from 'react';
import { motion } from 'motion/react';
import { Smile, ShieldPlus, Sparkles, AlignVerticalDistributeCenter, Droplets } from 'lucide-react';
import { SERVICES_DATA } from '../data/clinicData';

const iconMap: Record<string, React.ReactNode> = {
  Smile: <Smile className="w-7 h-7" />,
  ShieldPlus: <ShieldPlus className="w-7 h-7" />,
  Sparkles: <Sparkles className="w-7 h-7" />,
  AlignVerticalDistributeCenter: <AlignVerticalDistributeCenter className="w-7 h-7" />,
  Droplets: <Droplets className="w-7 h-7" />,
};

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="max-w-[1280px] mx-auto px-4 md:px-12 mb-20 md:mb-28 scroll-mt-28"
    >
      <div className="bg-[#eff4ff]/80 backdrop-blur-sm rounded-3xl py-14 md:py-20 px-6 md:px-12 border border-[#c6c6cd]/25 shadow-[0_10px_30px_rgba(11,28,48,0.03)]">
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white rounded-full text-[#006a61] text-xs font-semibold tracking-wider uppercase border border-[#006a61]/15 mb-2 shadow-xs">
            Comprehensive Dental Solutions
          </div>
          <h2 className="text-[#0b1c30] text-[28px] md:text-[34px] lg:text-[38px] font-bold tracking-tight font-['Manrope']">
            Complete Dental Care Under One Roof
          </h2>
          <p className="text-[#45464d] text-[15px] md:text-[16px] leading-relaxed">
            Advanced treatments using state-of-the-art technology for a perfect, healthy smile.
          </p>
        </motion.div>

        {/* Bento Grid with Staggered Scroll Reveal & Micro-Interactions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const isSpan = service.spanCols;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className={`group bg-white p-7 md:p-8 rounded-2xl shadow-[0_4px_16px_rgba(11,28,48,0.03)] border border-[#c6c6cd]/25 hover:border-[#006a61]/35 hover:shadow-[0_14px_30px_rgba(0,106,97,0.08)] transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSpan ? 'lg:col-span-2' : ''
                }`}
                onClick={() => onSelectService && onSelectService(service.title)}
              >
                {isSpan ? (
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-14 h-14 bg-[#86f2e4]/50 text-[#006a61] rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-[1.08] group-hover:bg-[#86f2e4] transition-transform duration-300 shadow-xs">
                      {iconMap[service.iconName]}
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-[#0b1c30] group-hover:text-[#006a61] text-[20px] md:text-[22px] font-bold font-['Manrope'] transition-colors duration-200">
                          {service.title}
                        </h3>
                        <span className="text-[12px] text-[#006a61] font-semibold bg-[#eff4ff] px-3 py-1 rounded-full border border-[#006a61]/15 group-hover:bg-[#86f2e4]/40 transition-colors">
                          Book Consultation
                        </span>
                      </div>
                      <p className="text-[#45464d] text-[15px] leading-relaxed">
                        {service.description}
                      </p>
                      {service.tags && (
                        <div className="flex gap-2 flex-wrap pt-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-[#d3e4fe]/60 text-[#0b1c30] group-hover:bg-[#d3e4fe] text-[12px] font-medium rounded-full transition-colors duration-200 border border-[#c6c6cd]/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-full justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-14 h-14 bg-[#86f2e4]/50 text-[#006a61] rounded-2xl flex items-center justify-center group-hover:scale-[1.08] group-hover:bg-[#86f2e4] transition-transform duration-300 shadow-xs">
                          {iconMap[service.iconName]}
                        </div>
                        <span className="text-[11px] text-[#006a61] font-semibold bg-[#eff4ff] px-2.5 py-1 rounded-full border border-[#006a61]/10 group-hover:bg-[#86f2e4]/30 transition-colors">
                          Available
                        </span>
                      </div>
                      <h3 className="text-[#0b1c30] group-hover:text-[#006a61] text-[20px] font-bold font-['Manrope'] mb-2.5 transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-[#45464d] text-[15px] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    {service.tags && (
                      <div className="flex gap-2 flex-wrap pt-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-[#d3e4fe]/50 text-[#0b1c30] text-[11px] font-medium rounded-full border border-[#c6c6cd]/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
