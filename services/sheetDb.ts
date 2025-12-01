import { BookingFormData, StudyAssessmentFormData } from '../types';

// Main Booking Form API
const SHEETDB_URL = 'https://sheetdb.io/api/v1/kitsy06k8k5qw'; 

// Study Assessment Form API
const STUDY_SHEETDB_URL = 'https://sheetdb.io/api/v1/wg1017th4mcf6';

export const submitBookingToSheet = async (data: BookingFormData): Promise<boolean> => {
  try {
    // Map the form data to the columns expected by the Sheet (snake_case)
    const payload = {
        data: [{
            full_name: data.fullName,
            email: data.email,
            phone: data.phone,
            travelers_count: data.travelers,
            destination: data.destination,
            trip_type: data.tripType,
            start_date: data.startDate,
            duration: data.duration,
            accommodation: data.accommodation,
            // Join the array of interests into a single string for the spreadsheet column
            interest: data.interests.join(', '), 
            budget_range: data.budgetRange,
            comments: data.comments,
            submitted_at: new Date().toLocaleString()
        }]
    };

    const response = await fetch(SHEETDB_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    const result = await response.json();
    
    // SheetDB returns { created: 1 } on success. 
    if (result.created || (Array.isArray(result) && result.length > 0)) {
        return true;
    }
    
    return false;

  } catch (error) {
    console.error("Error submitting to SheetDB", error);
    return false;
  }
};

export const submitStudyAssessment = async (data: StudyAssessmentFormData): Promise<boolean> => {
  try {
    // Mapping keys exactly as requested in the HTML form snippet provided
    const payload = {
        data: [{
            "Full Name": data.fullName,
            "Email Address": data.email,
            "Phone Number": data.phone,
            "City": data.city,
            "Current Education Level": data.currentEducationLevel,
            "Desired Qualification": data.desiredQualification,
            "Field of Study": data.fieldOfStudy,
            "Relevant Experience": data.relevantExperience,
            "Destination Country 1": data.destinationCountry1,
            "Destination Country 2": data.destinationCountry2,
            "Language Test Status": data.languageTestStatus,
            "Language Test Type": data.languageTestType,
            "Target Intake Year": data.targetIntakeYear,
            "Inquiry Subject": data.inquirySubject,
            "Message/Details": data.messageDetails,
            "Date Submitted": new Date().toLocaleString(),
            "Status": "New"
        }]
    };

    const response = await fetch(STUDY_SHEETDB_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (result.created || (Array.isArray(result) && result.length > 0)) {
        return true;
    }
    return false;

  } catch (error) {
    console.error("Error submitting to Study SheetDB", error);
    return false;
  }
};