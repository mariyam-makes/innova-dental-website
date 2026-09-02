/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ClinicalShowcase } from './components/ClinicalShowcase';
import { ClinicHighlights } from './components/ClinicHighlights';
import { Doctors } from './components/Doctors';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');

  const handleOpenBookingWithService = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-['Inter'] relative selection:bg-[#86f2e4] selection:text-[#006f66]">
      {/* Fixed Header with Navigation & Smooth Entrance */}
      <Header onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero Section with Intraoral Macro Closeup Visual & Trust Badges */}
        <Hero onOpenBooking={() => setBookingModalOpen(true)} />

        {/* Services Bento Grid with Staggered Scroll Reveals */}
        <Services onSelectService={handleOpenBookingWithService} />

        {/* Interactive Clinical Pre-Op / Post-Op Restoration Showcase & Slider */}
        <ClinicalShowcase />

        {/* Clinic Highlights & Why Choose Innova Dental */}
        <ClinicHighlights />

        {/* Doctors Section with Clinical Roles and Exact Specialties */}
        <Doctors />

        {/* Patient Care / Testimonials with Verified Karachi Reviews */}
        <Testimonials />

        {/* Common Dental Patient Questions & Answers */}
        <FAQSection />

        {/* Contact & Interactive Appointment Booking */}
        <ContactSection preselectedService={selectedService} />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Mobile Bottom Navigation Dock */}
      <MobileBottomNav />

      {/* Booking Modal Dialog */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
