import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, ChevronRight, Sliders, ShieldCheck } from 'lucide-react';
import { ToothIcon } from './ToothIcon';
import { RESTORATION_CASES } from '../data/clinicData';

export const ClinicalShowcase: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const currentCase = RESTORATION_CASES[activeCaseIndex];

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  return (
    <section id="clinical-results" className="max-w-[1280px] mx-auto px-4 md:px-12 mb-20 md:mb-28 scroll-mt-28">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-12 space-y-3"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#eff4ff] rounded-full text-[#006a61] text-xs font-semibold tracking-wider uppercase border border-[#006a61]/15 shadow-xs">
          <ToothIcon className="w-3.5 h-3.5 text-[#006a61]" variant="solid" />
          <span>Real Clinical Results</span>
        </div>
        <h2 className="text-[#0b1c30] text-[28px] md:text-[36px] font-bold tracking-tight font-['Manrope']">
          Precision. Quality. Care.
        </h2>
        <div className="inline-block px-4 py-1 rounded-full bg-[#0b1c30] text-[#86f2e4] text-[12px] font-bold uppercase tracking-widest">
          Karachi's Trusted Dental Restorations
        </div>
        <p className="text-[#45464d] text-[15px] md:text-[16px] leading-relaxed pt-2">
          Slide across to inspect our high-magnification restorations, aesthetic shade matching,
          and healthy gum recovery.
        </p>
      </motion.div>

      {/* Case Category Selectors */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
        {RESTORATION_CASES.map((item, idx) => {
          const isActive = idx === activeCaseIndex;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-full text-[13px] md:text-[14px] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? 'bg-[#006a61] text-white shadow-md shadow-[#006a61]/20 scale-102'
                  : 'bg-white text-[#45464d] hover:text-[#006a61] border border-[#c6c6cd]/30 hover:border-[#006a61]/40'
              }`}
            >
              <span>{item.title}</span>
              {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#86f2e4]" />}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Showcase Card */}
      <motion.div
        key={currentCase.id}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#c6c6cd]/25 shadow-[0_12px_40px_rgba(11,28,48,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        {/* Left Column: Interactive Before/After Image Comparison Slider (7 cols) */}
        <div className="lg:col-span-7">
          <div
            className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-[#0b1c30] shadow-inner border border-[#c6c6cd]/30"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleSliderMove(e.clientX, e.currentTarget.getBoundingClientRect());
            }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={(e) => {
              if (isDragging || e.buttons === 1) {
                handleSliderMove(e.clientX, e.currentTarget.getBoundingClientRect());
              }
            }}
            onTouchMove={(e) => {
              if (e.touches.length > 0) {
                handleSliderMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
              }
            }}
          >
            {/* Post-Op Image (Base full width) */}
            <img
              src={currentCase.postOpImage}
              alt="Post-op clinical restoration result"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Pre-Op Image (Clipped overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-[2px_0_12px_rgba(0,0,0,0.4)]"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={currentCase.preOpImage}
                alt="Pre-op clinical condition"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{
                  width: '100%',
                  height: '100%',
                  minWidth: '100%',
                }}
                draggable={false}
              />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-bold uppercase tracking-wider">
                Pre-Op View
              </div>
            </div>

            {/* Post-Op Tag */}
            <div className="absolute top-4 right-4 bg-[#006a61]/90 backdrop-blur-md px-3.5 py-1 rounded-full text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
              Post-Op Result
            </div>

            {/* Center Draggable Handle */}
            <div
              className="absolute inset-y-0 flex items-center justify-center pointer-events-none"
              style={{ left: `calc(${sliderPos}% - 18px)` }}
            >
              <div className="w-9 h-9 rounded-full bg-white shadow-xl border-2 border-[#006a61] flex items-center justify-center text-[#006a61]">
                <Sliders className="w-4 h-4 rotate-90 text-[#006a61]" />
              </div>
            </div>

            {/* Bottom Hint */}
            <div className="absolute bottom-3 left-0 right-0 text-center pointer-events-none">
              <span className="bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-medium px-4 py-1 rounded-full border border-white/10">
                ↔ Drag slider left or right to compare
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Case Clinical Details (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#86f2e4]/30 text-[#006f66] text-[12px] font-bold mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#006a61]" />
              <span>{currentCase.category}</span>
            </div>
            <h3 className="font-['Manrope'] text-[24px] sm:text-[28px] font-bold text-[#0b1c30] leading-tight mb-2">
              {currentCase.title}
            </h3>
            <p className="text-[#006a61] text-[14px] font-semibold">
              {currentCase.subtitle}
            </p>
          </div>

          <p className="text-[#45464d] text-[15px] leading-relaxed">
            {currentCase.description}
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2.5 text-[14px] text-[#0b1c30]">
              <CheckCircle2 className="w-4 h-4 text-[#006a61] shrink-0" />
              <span>Restores natural tooth anatomy & chewing strength</span>
            </div>
            <div className="flex items-center gap-2.5 text-[14px] text-[#0b1c30]">
              <CheckCircle2 className="w-4 h-4 text-[#006a61] shrink-0" />
              <span>Seamless tooth-colored shade matching</span>
            </div>
            <div className="flex items-center gap-2.5 text-[14px] text-[#0b1c30]">
              <CheckCircle2 className="w-4 h-4 text-[#006a61] shrink-0" />
              <span>Completed with 100% painless local anesthesia</span>
            </div>
          </div>

          <div className="pt-4 border-t border-[#eff4ff] flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase text-[#45464d] tracking-wider">
                Clinical Team
              </p>
              <p className="text-[14px] font-semibold text-[#006a61]">
                {currentCase.doctor}
              </p>
            </div>

            <a
              href={`https://wa.me/923300620201?text=Hi%20Innova%20Dental,%20I'm%20interested%20in%20${encodeURIComponent(currentCase.title)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#eff4ff] hover:bg-[#86f2e4]/50 text-[#006a61] font-semibold text-[13px] transition-colors"
            >
              <span>Consult Case</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
