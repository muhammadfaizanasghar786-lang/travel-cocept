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
        systemInstruction: "You are a helpful, enthusiastic travel assistant for 'Travel Concepts by NS'. You provide brief, exciting advice about travel destinations, packing tips, and visa requirements for UK, USA, Canada, Australia. Keep answers under 100 words.",
      },
    });

    return response.text || "I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the travel database right now.";
  }
};