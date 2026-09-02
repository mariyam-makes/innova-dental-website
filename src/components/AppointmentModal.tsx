import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService || SERVICES_DATA[0].title);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('18:00');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Innova Dental Clinic, I'd like to book an appointment.\nName: ${name || 'Patient'}\nService: ${service}\nPreferred Date: ${date || 'Earliest available'}`
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0b1c30]/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#c6c6cd]/30 z-10 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#45464d] hover:text-[#0b1c30] hover:bg-[#eff4ff] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-[#86f2e4]/50 text-[#006a61] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#006a61]" />
                </div>
                <h3 className="font-['Manrope'] text-[22px] font-bold text-[#0b1c30]">
                  Appointment Request Sent!
                </h3>
                <p className="text-[#45464d] text-[14px]">
                  Thank you, <strong className="text-[#0b1c30]">{name}</strong>. Our clinic reception
                  will call you shortly to confirm your booking for <strong>{service}</strong>.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#006a61] text-white py-3 rounded-full font-medium text-[14px] hover:bg-[#005049] transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-[#86f2e4]" />
                    Chat Directly on WhatsApp
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="w-full py-2.5 rounded-full bg-[#eff4ff] text-[#006a61] font-medium text-[13px] hover:bg-[#dce9ff]"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#eff4ff] text-[#006a61] text-[11px] font-semibold mb-2">
                    Innova Dental Clinic • Karachi
                  </div>
                  <h3 className="font-['Manrope'] text-[22px] font-bold text-[#0b1c30]">
                    Book Your Visit
                  </h3>
                  <p className="text-[#45464d] text-[13px]">
                    Fill in your details below for a prompt appointment confirmation.
                  </p>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#0b1c30]">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maria Khan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#c6c6cd]/50 bg-[#f8f9ff] text-[14px] text-[#0b1c30] focus:outline-none focus:border-[#006a61]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#0b1c30]">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0330 1234567"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#c6c6cd]/50 bg-[#f8f9ff] text-[14px] text-[#0b1c30] focus:outline-none focus:border-[#006a61]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#0b1c30]">Select Service</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#c6c6cd]/50 bg-[#f8f9ff] text-[14px] text-[#0b1c30] focus:outline-none focus:border-[#006a61]"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="General Checkup">General Checkup & Consultation</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#0b1c30]">Date *</label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#c6c6cd]/50 bg-[#f8f9ff] text-[13px] text-[#0b1c30] focus:outline-none focus:border-[#006a61]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#0b1c30]">Preferred Time</label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#c6c6cd]/50 bg-[#f8f9ff] text-[13px] text-[#0b1c30] focus:outline-none focus:border-[#006a61]"
                    >
                      <option value="15:00 - 17:00">3:00 PM – 5:00 PM</option>
                      <option value="17:00 - 19:00">5:00 PM – 7:00 PM</option>
                      <option value="19:00 - 21:00">7:00 PM – 9:00 PM</option>
                      <option value="21:00 - 22:00">9:00 PM – 10:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#006a61] text-white py-3.5 rounded-full font-semibold text-[14px] hover:bg-[#005049] transition-all active:scale-98 shadow-sm cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#86f2e4]" />
                    <span>Submit Booking</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
