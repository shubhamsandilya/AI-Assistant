import React, { useState } from "react";
import axios from "axios";

const apiKey = "sk-proj-LJQliBQF9Gocpm67qBQjT3BlbkFJu6yR16bsD1dzct0fH416";

const WithoutBeak = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      const res = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          prompt: message,
          max_tokens: 150,
          model: "gpt-3.5-turbo-0125",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      setResponse(res.data.choices[0].text.trim());
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div>
      <h1>AI Assistant</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        <p>Assistant: {response}</p>
      </div>
    </div>
  );
};

export default WithoutBeak;
