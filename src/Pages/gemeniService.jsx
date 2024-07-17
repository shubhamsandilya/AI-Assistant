// geminiAiService.js

import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDi8cWZe4odjkuSloBNHYrOP0J_iQ7u0tE"; // Replace with your actual API key

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateGeminiContent = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    return response;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};