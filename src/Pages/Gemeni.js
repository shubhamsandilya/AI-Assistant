import React, { useState } from "react";
import { generateGeminiContent } from "./gemeniService";

const Gemeni = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [showPromptArea, setShowPromptArea] = useState(false);

  const handleGenerateContent = async () => {
    try {
      const generatedResponse = await generateGeminiContent(prompt);
      setResponse(generatedResponse);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  const togglePromptArea = () => {
    setShowPromptArea(!showPromptArea);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718755200&semt=sph")',
      }}
    >
      <div className="flex flex-col items-center justify-center h-full p-6">
        <header className="w-full py-4  shadow-lg">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-white">
              Gemini AI Integration
            </h1>
          </div>
        </header>
        <div
          className={`w-full ${showPromptArea ? "block" : "hidden"} mb-8 mt-6`}
        >
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            rows={4}
            className="w-full p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <br />
          <button
            onClick={handleGenerateContent}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Generate Content
          </button>
          <div>
            <h2 className="mt-4 text-xl font-bold text-white">Response:</h2>
            <p className="text-white">{response}</p>
          </div>
        </div>
        <div
          className="absolute bottom-6 right-6 cursor-pointer"
          onClick={togglePromptArea}
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/sms.png"
            alt="Message Icon"
            className="w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Gemeni;
