import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS_DATA, CLINIC_INFO } from '../data/clinicData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 mb-20 md:mb-28">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#eff4ff] rounded-full text-[#006a61] text-xs font-semibold tracking-wider uppercase border border-[#006a61]/15 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#006a61]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-[#0b1c30] text-[26px] md:text-[34px] font-bold tracking-tight font-['Manrope']">
            Common Patient Inquiries
          </h2>
          <p className="text-[#45464d] text-[15px]">
            Everything you need to know about your upcoming dental visit in Karachi.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-[#c6c6cd]/25 overflow-hidden transition-all duration-200 shadow-xs hover:border-[#006a61]/30"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-semibold text-[#0b1c30] hover:text-[#006a61] transition-colors cursor-pointer"
                >
                  <span className="text-[15px] sm:text-[16px] font-['Manrope']">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#86f2e4]/50 text-[#006a61]' : 'text-[#45464d]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-5 pt-1 text-[#45464d] text-[14px] sm:text-[15px] leading-relaxed border-t border-[#eff4ff]"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Quick Ask Banner */}
        <div className="mt-8 p-5 bg-[#eff4ff]/80 rounded-2xl border border-[#006a61]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-[#0b1c30] text-[15px]">Have a specific dental question?</p>
            <p className="text-[13px] text-[#45464d]">Our clinical reception is available on WhatsApp daily.</p>
          </div>
          <a
            href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=Hi%20Innova%20Dental,%20I%20have%20a%20question%20about%20your%20treatments`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#006a61] hover:bg-[#005049] text-white text-xs font-bold rounded-full transition-colors shrink-0 shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-[#86f2e4]" />
            <span>Chat With Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
