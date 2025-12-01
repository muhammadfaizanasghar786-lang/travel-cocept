import { GoogleGenAI } from "@google/genai";

// Ideally, this comes from process.env.API_KEY, but adhering to the prompt context.
// In a real deployed app, ensure this key is secure or proxy requests via backend.
const API_KEY = process.env.API_KEY || ''; 

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: API_KEY });
  }
  return aiClient;
};

export const getTravelAdvice = async (userQuery: string): Promise<string> => {
  try {
    if (!API_KEY) {
        return "I'm sorry, I'm currently offline (API Key missing). Please contact the agency directly.";
    }

    const ai = getClient();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: "You are a helpful, enthusiastic travel assistant for 'Travel Concepts by NS'. TAGLINE: 'One Stop Solution'. ADDRESS: Koh e Noor 01 Plaza 2nd Floor Office No.5 Jaranwala Road Faisalabad. CONTACTS: Phone/WhatsApp 0333-8963743, 0307-5403996, Landline 041-5477488. EMAIL: travelconceptsbyns@gmail.com. SERVICES: Domestic & International Tours, Cheap Flights (Domestic & International), Executive Umrah Packages, Visa Consultancy (UK, USA, Canada, Australia, Schengen), Hotel Reservations, Travel Insurance, 24/7 Services. ADVICE: Provide brief, exciting advice about travel, visas, and packages. If asked about booking or scheduling, direct them to the 'Book Now' page/form on the website to fill out the trip packet. Keep answers under 100 words.",
      },
    });

    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the travel database right now.";
  }
};