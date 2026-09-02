import { ServiceItem, Doctor, Testimonial } from '../types';
import dentalProcedureCloseup from '../assets/images/dental_procedure_closeup_1788356246766.jpg';
import dentalRestorationPostop from '../assets/images/dental_restoration_postop_1788356264915.jpg';
import dentalPreopFilling from '../assets/images/dental_preop_filling_1788356294652.jpg';
import veneerPreopImage from '../assets/images/veneer_preop_teeth_1788364390882.jpg';
import emaxVeneersPostop from '../assets/images/emax_veneers_postop_1788364413950.jpg';
import scalingPreopTartar from '../assets/images/scaling_preop_tartar_1788364432927.jpg';
import scalingPostopClean from '../assets/images/scaling_postop_clean_1788364452098.jpg';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening & Veneers',
    description: 'Transform your smile with professional whitening and premium Emax Veneers.',
    iconName: 'Smile',
    tags: ['Emax Veneers', 'Laser Whitening'],
    spanCols: false,
  },
  {
    id: 'crowns-fillings',
    title: 'Crowns & Fillings',
    description: 'Durable and aesthetic restorations including Zirconia Crowns, Emax Crowns, Composite & Amalgam Fillings to protect and restore your teeth.',
    iconName: 'ShieldPlus',
    tags: ['Zirconia', 'Emax', 'Composite'],
    spanCols: true,
  },
  {
    id: 'scaling-polishing',
    title: 'Scaling & Polishing',
    description: 'Professional deep cleaning to remove plaque and tartar for optimal oral hygiene.',
    iconName: 'Sparkles',
    tags: ['Ultrasonic', 'Stain Removal'],
    spanCols: false,
  },
  {
    id: 'advanced-orthodontics',
    title: 'Advanced Orthodontics',
    description: 'Straighten your teeth with traditional Braces Treatment or modern Clear Aligners.',
    iconName: 'AlignVerticalDistributeCenter',
    tags: ['Clear Aligners', 'Ceramic Braces'],
    spanCols: false,
  },
  {
    id: 'fluoride-treatment',
    title: 'Fluoride Treatment',
    description: 'Strengthen enamel and prevent cavities with professional fluoride applications.',
    iconName: 'Droplets',
    tags: ['Preventive', 'Enamel Shield'],
    spanCols: false,
  },
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dr-zoya',
    name: 'Dr. Zoya',
    role: 'Dental Surgeon & Patient Care Specialist',
    specialty: 'Pain-free dental procedures & gentle patient care',
    experience: 'Clinical Specialist',
  },
  {
    id: 'dr-yumna',
    name: 'Dr. Yumna',
    role: 'Preventive & Hygiene Specialist',
    specialty: 'Scaling, polishing, and comprehensive dental hygiene examinations',
    experience: 'Oral Health Specialist',
  },
  {
    id: 'dr-jahanzaib',
    name: 'Dr. Jahanzaib',
    role: 'Endodontics & Advanced Clinical Dentist',
    specialty: 'Root canals and advanced clinical dental work',
    experience: 'Restorative Specialist',
  },
  {
    id: 'dr-khazina',
    name: 'Dr. Khazina',
    role: 'Family Dentistry Practitioner',
    specialty: 'Routine family dental care and thorough check-ups',
    experience: 'Family Dental Care',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Syed Hamza Rizvi',
    location: 'Gulshan-e-Iqbal, Karachi',
    treatment: 'Emax Veneers & Whitening',
    rating: 5,
    comment: 'The pain-free treatment and attention to detail at Innova Dental is truly unmatched. The clinic environment is exceptionally clean and calming. Dr. Zoya explained every step before starting.',
    date: 'February 2025',
  },
  {
    id: 't2',
    name: 'Mahnoor Tariq',
    location: 'PECHS, Karachi',
    treatment: 'Dental Hygiene & Scaling',
    rating: 5,
    comment: 'Dr. Yumna did such a thorough scaling and polishing without any pain or discomfort. The staff is polite, gentle, and the pricing is very transparent.',
    date: 'January 2025',
  },
  {
    id: 't3',
    name: 'Bilal Farooq',
    location: 'Jamshed Road, Karachi',
    treatment: 'Root Canal & Restoration',
    rating: 5,
    comment: 'Dr. Jahanzaib did a fantastic job with my root canal procedure. Zero discomfort during or after the clinical work. Definitely the most trustworthy dental clinic in Karachi.',
    date: 'December 2024',
  },
  {
    id: 't4',
    name: 'Zainab Qureshi',
    location: 'Clifton, Karachi',
    treatment: 'Routine Family Dental Checkup',
    rating: 5,
    comment: 'Dr. Khazina is wonderful with routine family checkups and preventive care. My teeth feel great and the clinic atmosphere is so welcoming for children and adults alike.',
    date: 'November 2024',
  },
];

export const CLINIC_INFO = {
  name: 'Innova Dental Clinic',
  location: 'Shop#7, M.L Apartment, 3 Jamshed Rd, Karachi',
  googleMapsUrl: 'https://maps.google.com/?q=Innova+Dental+Clinic,+Shop%237,+M.L+Apartment,+3+Jamshed+Rd,+Karachi',
  phone: '03300620201',
  phoneDisplay: '0330 0620201',
  whatsappNumber: '923300620201',
  email: 'innovadentalclinicpk@gmail.com',
  workingHours: 'Monday – Saturday: 3:00 PM – 10:00 PM',
  heroImage: dentalProcedureCloseup,
  breakoutImage: dentalRestorationPostop,
};

export interface RestorationCase {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  preOpImage: string;
  postOpImage: string;
  description: string;
  doctor: string;
}

export const RESTORATION_CASES: RestorationCase[] = [
  {
    id: 'restoration-1',
    title: 'Precision Aesthetic Restoration',
    subtitle: 'Tooth-Colored Composite & Enamel Recontouring',
    category: 'Restorative Care',
    preOpImage: dentalPreopFilling,
    postOpImage: dentalRestorationPostop,
    description: 'Complete removal of compromised filling followed by multi-layered biocompatible composite bonding to restore natural tooth anatomy and bite strength.',
    doctor: 'Dr. Jahanzaib & Dr. Zoya',
  },
  {
    id: 'restoration-2',
    title: 'Emax Aesthetic Porcelain Veneers',
    subtitle: 'Smile Transformation & Shade Matching',
    category: 'Cosmetic Dentistry',
    preOpImage: veneerPreopImage,
    postOpImage: emaxVeneersPostop,
    description: 'Ultra-thin custom Emax porcelain veneers fabricated to correct enamel discoloration, minor chipping, and spacing for a naturally radiant smile.',
    doctor: 'Dr. Zoya',
  },
  {
    id: 'restoration-3',
    title: 'Ultrasonic Scaling & Stain Polishing',
    subtitle: 'Periodontal Health & Deep Tartar Removal',
    category: 'Hygiene & Preventive',
    preOpImage: scalingPreopTartar,
    postOpImage: scalingPostopClean,
    description: 'Gentle ultrasonic tartar and calculus debridement followed by diamond paste stain polishing, rejuvenating gums and restoring bright, clean enamel.',
    doctor: 'Dr. Yumna',
  },
];

export const CLINIC_HIGHLIGHTS = [
  {
    icon: 'Sparkles',
    title: 'Pain-Free Technology',
    description: 'Topical numbing gels, gentle techniques, and micro-fine instruments ensure maximum comfort for anxious patients.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Hospital-Grade Sterilization',
    description: 'Class-B medical autoclave sterilization and sealed single-use patient kits for 100% infection control.',
  },
  {
    icon: 'Eye',
    title: 'High-Res Intraoral Imaging',
    description: 'Real-time chairside digital cameras let you see your teeth clearly on high-definition screens before and after treatment.',
  },
  {
    icon: 'BadgePercent',
    title: 'Honest & Transparent Fees',
    description: 'No hidden charges or unnecessary procedures. Clear pricing explained upfront with affordable family care.',
  },
];

export const FAQS_DATA = [
  {
    question: 'Are dental treatments at Innova Dental really pain-free?',
    answer: 'Yes! Our doctors utilize advanced gentle local anesthesia techniques, soothing topical gels, and modern dental equipment to ensure your procedure is completely comfortable and virtually painless.',
  },
  {
    question: 'What are your clinic timings and location in Karachi?',
    answer: 'We are located at Shop#7, M.L Apartment, 3 Jamshed Road, Karachi. We are open Monday through Saturday from 3:00 PM to 10:00 PM. Sunday is closed.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can quickly book via our direct WhatsApp line (+92 330 0620201), call our front desk at 0330 0620201, or fill out the booking form on this website.',
  },
  {
    question: 'What types of dental crowns and fillings do you offer?',
    answer: 'We provide premium Zirconia crowns, Emax aesthetic ceramic crowns, high-strength composite resin (tooth-colored) fillings, and traditional amalgam restorations tailored to your clinical needs.',
  },
];
