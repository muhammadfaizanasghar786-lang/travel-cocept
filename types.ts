export interface ServiceItem {
  id: string;
  title: string;
  icon: any; // Lucide Icon type
  description: string;
}

export interface Package {
  id: string;
  title: string;
  image: string;
  days: number;
  price: string;
  location: string;
  tags: string[];
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  tripType: 'leisure' | 'adventure' | 'business' | 'cultural' | 'family' | 'religious' | 'study';
  startDate: string;
  duration: number;
  travelers: number;
  budget: string;
  notes: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}