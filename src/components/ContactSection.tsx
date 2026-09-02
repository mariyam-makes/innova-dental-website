import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle2, Calendar, Send, ExternalLink } from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    service: preselectedService || SERVICES_DATA[0].title,
    preferredDate: '',
    preferredTime: '18:00',
    notes: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Hello Innova Dental Clinic, I would like to book an appointment.\nName: ${formData.fullName || 'Patient'}\nService: ${formData.service}\nPreferred Date: ${formData.preferredDate || 'Earliest available'}`
    );
    window.open(`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="max-w-[1280px] mx-auto px-4 md:px-12 mb-20 md:mb-28 scroll-mt-28">
      {/* Section Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto mb-14 md:mb-16 space-y-3"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#eff4ff] rounded-full text-[#006a61] text-xs font-semibold tracking-wider uppercase border border-[#006a61]/15 mb-2 shadow-xs">
          Visit Us or Book Online
        </div>
        <h2 className="text-[#0b1c30] text-[28px] md:text-[34px] lg:text-[38px] font-bold tracking-tight font-['Manrope']">
          Schedule Your Consultation
        </h2>
        <p className="text-[#45464d] text-[15px] md:text-[16px] leading-relaxed">
          Book your slot with our dentists or reach out directly on WhatsApp for instant assistance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Details Column */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 bg-[#131b2e] text-white p-8 md:p-10 rounded-3xl shadow-[0_16px_40px_rgba(19,27,46,0.15)] flex flex-col justify-between space-y-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#86f2e4]/15 text-[#86f2e4] text-xs font-medium mb-4 border border-[#86f2e4]/20">
              <span className="w-2 h-2 rounded-full bg-[#86f2e4] animate-pulse" />
              Clinic Open Today
            </div>
            <h3 className="font-['Manrope'] text-[24px] font-bold text-white mb-2">
              Innova Dental Clinic
            </h3>
            <p className="text-[#7c839b] text-[14px] leading-relaxed mb-8">
              Karachi’s premier pain-free dental sanctuary. We look forward to welcoming you.
            </p>

            <div className="space-y-6 text-[14px]">
              <div className="flex items-start gap-4">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#86f2e4]/30 flex items-center justify-center text-[#86f2e4] shrink-0 transition-colors"
                  title="Open in Google Maps"
                >
                  <MapPin className="w-5 h-5" />
                </a>
                <div>
                  <p className="text-white font-medium flex items-center gap-1.5">
                    <span>Clinic Address</span>
                  </p>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7c839b] hover:text-[#86f2e4] transition-colors leading-snug group block mt-0.5"
                  >
                    <span className="group-hover:underline">{CLINIC_INFO.location}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#86f2e4] font-semibold mt-1 bg-[#86f2e4]/10 hover:bg-[#86f2e4]/20 px-2 py-0.5 rounded-md border border-[#86f2e4]/20 transition-colors">
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#86f2e4] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone & WhatsApp</p>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-[#86f2e4] hover:underline block font-semibold"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#86f2e4] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Email Address</p>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-[#7c839b] hover:text-white transition-colors"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#86f2e4] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-medium">Timings</p>
                  <p className="text-[#7c839b]">{CLINIC_INFO.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 bg-[#006a61] hover:bg-[#005049] text-white py-3.5 px-6 rounded-2xl font-semibold text-[14px] shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-98"
            >
              <MessageSquare className="w-4 h-4 text-[#86f2e4]" />
              Quick WhatsApp Confirmation
            </a>
          </div>
        </motion.div>

        {/* Appointment Booking Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-[0_12px_36px_rgba(11,28,48,0.06)] border border-[#c6c6cd]/30"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-5"
            >
              <div className="w-16 h-16 bg-[#86f2e4]/40 text-[#006a61] rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9 text-[#006a61]" />
              </div>
              <h3 className="font-['Manrope'] text-[24px] font-bold text-[#0b1c30]">
                Appointment Request Received!
              </h3>
              <p className="text-[#45464d] text-[15px] max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#0b1c30]">{formData.fullName}</strong>. Our front
                desk will contact you at <strong className="text-[#0b1c30]">{formData.phone}</strong>{' '}
                to confirm your time slot for <strong>{formData.service}</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 bg-[#006a61] text-white px-6 py-3 rounded-full font-medium text-[14px] hover:bg-[#005049] transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#86f2e4]" />
                  Open WhatsApp Chat Now
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-[#eff4ff] text-[#006a61] font-medium text-[14px] hover:bg-[#dce9ff] transition-all"
                >
                  Book Another Appointment
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center justify-between border-b border-[#eff4ff] pb-4 mb-2">
                <div>
                  <h3 className="font-['Manrope'] text-[20px] font-bold text-[#0b1c30]">
                    Online Appointment Request
                  </h3>
                  <p className="text-xs text-[#45464d]">No upfront payment required</p>
                </div>
                <span className="text-xs font-semibold text-[#006a61] bg-[#eff4ff] px-3 py-1 rounded-full border border-[#006a61]/15">
                  Instant Response
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0b1c30] uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Maria Khan"
                    className="w-full px-4 py-3 rounded-xl border border-[#c6c6cd]/50 bg-[#f8f9ff] text-[#0b1c30] text-[14px] focus:outline-none focus:border-[#006a61] focus:ring-2 focus:ring-[#86f2e4]/40 transition-all"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0b1c30] uppercase tracking-wider">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0330 1234567"
                    className="w-full px-4 py-3 rounded-xl border border-[#c6c6cd]/50 bg-[#f8f9ff] text-[#0b1c30] text-[14px] focus:outline-none focus:border-[#006a61] focus:ring-2 focus:ring-[#86f2e4]/40 transition-all"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0b1c30] uppercase tracking-wider">
                  Select Treatment / Service *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#c6c6cd]/50 bg-[#f8f9ff] text-[#0b1c30] text-[14px] focus:outline-none focus:border-[#006a61] focus:ring-2 focus:ring-[#86f2e4]/40 transition-all cursor-pointer"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                  <option value="General Checkup & Consultation">
                    General Dental Checkup & Consultation
                  </option>
                  <option value="Emergency Toothache Relief">Emergency Toothache Relief</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0b1c30] uppercase tracking-wider">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#c6c6cd]/50 bg-[#f8f9ff] text-[#0b1c30] text-[14px] focus:outline-none focus:border-[#006a61] focus:ring-2 focus:ring-[#86f2e4]/40 transition-all"
                  />
                </div>

                {/* Preferred Time */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0b1c30] uppercase tracking-wider">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#c6c6cd]/50 bg-[#f8f9ff] text-[#0b1c30] text-[14px] focus:outline-none focus:border-[#006a61] focus:ring-2 focus:ring-[#86f2e4]/40 transition-all cursor-pointer"
                  >
                    <option value="15:00 - 17:00">Evening (3:00 PM – 5:00 PM)</option>
                    <option value="17:00 - 19:00">Evening (5:00 PM – 7:00 PM)</option>
                    <option value="19:00 - 21:00">Night (7:00 PM – 9:00 PM)</option>
                    <option value="21:00 - 22:00">Late Night (9:00 PM – 10:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Patient Note */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#0b1c30] uppercase tracking-wider">
                  Additional Notes / Symptoms (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Describe any pain, sensitivity, or previous treatments..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#c6c6cd]/50 bg-[#f8f9ff] text-[#0b1c30] text-[14px] focus:outline-none focus:border-[#006a61] focus:ring-2 focus:ring-[#86f2e4]/40 transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#006a61] text-white py-4 rounded-full font-semibold text-[15px] shadow-[0_4px_16px_rgba(0,106,97,0.2)] hover:bg-[#005049] hover:shadow-[0_8px_24px_rgba(0,106,97,0.28)] transition-all duration-200 hover:-translate-y-0.5 active:scale-98 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting Request...
                  </span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4 text-[#86f2e4]" />
                    <span>Confirm Appointment Request</span>
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
