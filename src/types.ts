export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags?: string[];
  spanCols?: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  role?: string;
  qualifications?: string;
  specialty: string;
  experience?: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}
