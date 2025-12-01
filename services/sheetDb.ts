import { BookingFormData } from '../types';

// NOTE: Replace with your actual SheetDB API URL
const SHEETDB_URL = 'https://sheetdb.io/api/v1/YOUR_API_ID'; 

export const submitBookingToSheet = async (data: BookingFormData): Promise<boolean> => {
  try {
    // Simulating API call for demonstration purposes since we don't have a real API ID
    console.log("Submitting to SheetDB:", data);
    
    // In production, uncomment this:
    /*
    const response = await fetch(SHEETDB_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [data]
        })
    });
    const result = await response.json();
    return !result.error; 
    */

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    return true;

  } catch (error) {
    console.error("Error submitting to SheetDB", error);
    return false;
  }
};