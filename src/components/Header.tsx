import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { ToothIcon } from './ToothIcon';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['services', 'clinical-results', 'about', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Clinical Results', href: '#clinical-results', id: 'clinical-results' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f8f9ff]/85 backdrop-blur-md shadow-[0_4px_20px_rgba(11,28,48,0.06)] border-b border-[#c6c6cd]/30 py-3.5'
            : 'bg-[#f8f9ff]/70 backdrop-blur-md border-b border-[#c6c6cd]/20 py-4.5'
        }`}
      >
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-4 md:px-12">
          {/* Brand Logo with Tooth Icon */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-[22px] md:text-[24px] font-bold tracking-tight text-[#006a61] transition-transform duration-200 active:scale-95"
            aria-label="Innova Dental Clinic"
          >
            <div className="w-9 h-9 rounded-xl bg-[#86f2e4]/40 flex items-center justify-center text-[#006a61] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#86f2e4]/70 shadow-xs">
              <ToothIcon className="w-5 h-5 text-[#006a61]" variant="solid" />
            </div>
            <span className="font-['Manrope'] font-bold text-[#006a61] tracking-tight">Innova Dental</span>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative font-medium text-[15px] transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-[#006a61] font-semibold'
                      : 'text-[#45464d] hover:text-[#006a61]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#006a61] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Contact Direct Line (Desktop Right - Clean & Unobtrusive) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#45464d] hover:text-[#006a61] transition-colors py-1.5 px-3 rounded-full hover:bg-[#eff4ff]"
            >
              <Phone className="w-4 h-4 text-[#006a61]" />
              <span>{CLINIC_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#86f2e4]/50 hover:bg-[#86f2e4] text-[#006f66] font-semibold text-[13px] px-4 py-2 rounded-full transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#0b1c30] hover:bg-[#eff4ff] active:scale-95 transition-all"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0b1c30]/40 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-[#c6c6cd]/30 z-50 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-[#0b1c30] hover:text-[#006a61] font-medium text-[16px] py-2 border-b border-[#eff4ff] transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-[#006a61] font-semibold">Explore →</span>
                  </a>
                ))}

                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-[#006a61] text-white py-3 rounded-xl font-semibold text-[15px] active:scale-98 transition-transform shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4 text-[#86f2e4]" />
                    Chat on WhatsApp
                  </a>

                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 bg-[#eff4ff] text-[#006a61] py-3 rounded-xl font-semibold text-[15px] active:scale-98 transition-transform"
                  >
                    <Phone className="w-4 h-4" />
                    Call {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
