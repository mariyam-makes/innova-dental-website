import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { ToothIcon } from './ToothIcon';
import { CLINIC_INFO } from '../data/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 bg-[#131b2e] text-white mt-20 md:mt-28 pb-28 md:pb-16 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 px-4 md:px-12 max-w-[1280px] mx-auto">
        {/* Brand Col */}
        <div className="col-span-1 md:col-span-1 space-y-4">
          <a
            href="#"
            className="text-[24px] font-bold text-white tracking-tight flex items-center gap-2.5 font-['Manrope']"
          >
            <div className="w-8 h-8 rounded-lg bg-[#86f2e4]/30 flex items-center justify-center text-[#86f2e4]">
              <ToothIcon className="w-4 h-4 text-[#86f2e4]" variant="solid" />
            </div>
            <span>Innova Dental</span>
          </a>
          <p className="text-[#7c839b] text-[14px] leading-relaxed">
            Premium, pain-free dental care in Karachi. Your smile is our passion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="font-['Manrope'] font-bold text-[17px] text-white mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-[14px]">
            <li>
              <a
                href="#services"
                className="text-[#7c839b] hover:text-[#89f5e7] transition-colors duration-200"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[#7c839b] hover:text-[#89f5e7] transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className="text-[#7c839b] hover:text-[#89f5e7] transition-colors duration-200"
              >
                Patient Care
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[#7c839b] hover:text-[#89f5e7] transition-colors duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-[#7c839b] hover:text-[#89f5e7] transition-colors duration-200"
              >
                Book Consultation
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="font-['Manrope'] font-bold text-[17px] text-white mb-4">Contact Info</h4>
          <ul className="space-y-3 text-[14px] text-[#7c839b]">
            <li className="flex items-start gap-2.5">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#86f2e4] hover:text-white transition-colors mt-0.5"
                title="Open in Google Maps"
              >
                <MapPin className="w-5 h-5 shrink-0" />
              </a>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#86f2e4] transition-colors group inline-flex flex-col"
              >
                <span className="group-hover:underline">{CLINIC_INFO.location}</span>
                <span className="text-[12px] text-[#86f2e4]/80">Open in Google Maps ↗</span>
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-5 h-5 text-[#86f2e4] shrink-0" />
              <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-[#86f2e4] transition-colors">
                {CLINIC_INFO.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-5 h-5 text-[#86f2e4] shrink-0" />
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="hover:text-[#86f2e4] transition-colors"
              >
                {CLINIC_INFO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="px-4 md:px-12 max-w-[1280px] mx-auto mt-12 pt-8 border-t border-white/10 text-center">
        <p className="text-[#7c839b] text-[13px]">
          © {new Date().getFullYear()} Innova Dental Clinic Karachi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
