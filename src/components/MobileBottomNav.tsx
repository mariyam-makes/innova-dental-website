import React from 'react';
import { Stethoscope, Phone, MessageSquare, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const MobileBottomNav: React.FC = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 w-full z-40 md:hidden bg-white/90 backdrop-blur-xl border-t border-[#c6c6cd]/30 shadow-[0_-4px_16px_rgba(11,28,48,0.06)] py-1.5 px-3"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex justify-around items-center h-14 max-w-md mx-auto">
        <a
          href="#services"
          className="flex flex-col items-center justify-center text-[#45464d] hover:text-[#006a61] active:scale-95 transition-all w-full py-1"
        >
          <Stethoscope className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-medium">Services</span>
        </a>

        <a
          href={`tel:${CLINIC_INFO.phone}`}
          className="flex flex-col items-center justify-center text-[#45464d] hover:text-[#006a61] active:scale-95 transition-all w-full py-1"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-medium">Call Us</span>
        </a>

        <a
          href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center bg-[#86f2e4] text-[#006f66] rounded-2xl px-3 py-1.5 active:scale-95 transition-transform w-full shadow-xs"
        >
          <MessageSquare className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        <a
          href="#contact"
          className="flex flex-col items-center justify-center text-[#45464d] hover:text-[#006a61] active:scale-95 transition-all w-full py-1"
        >
          <MapPin className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-medium">Location</span>
        </a>
      </div>
    </nav>
  );
};
