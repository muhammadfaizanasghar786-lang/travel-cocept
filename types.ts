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
  travelers: number;
  destination: string;
  tripType: string;
  startDate: string;
  duration: number;
  accommodation: string; // 'luxury' | 'mid_range' | 'budget'
  interests: string[];   // Array of selected interests
  budgetRange: string;   // 'economy' | 'mid' | 'premium' | 'luxury'
  comments: string;
}

export interface StudyAssessmentFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  currentEducationLevel: string;
  desiredQualification: string;
  fieldOfStudy: string;
  relevantExperience: string;
  destinationCountry1: string;
  destinationCountry2: string;
  languageTestStatus: string;
  languageTestType: string;
  targetIntakeYear: string;
  inquirySubject: string;
  messageDetails: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}