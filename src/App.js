// App.jsx
import React from "react";
// import AssistantWindow from "@beakjs"; //
import { Beak, AssistantWindow } from "@beakjs/react";
import Homepage from "./Pages/Homepage"; // Your main app component
// import AssistantWindow from "@beakjs"; //
import Gemeni from "./Pages/Gemeni";

const App = () => (
  <Beak
    __unsafeOpenAIApiKey__="YOUR_API_KEY"
    instructions="Assistant is running in a web app and helps the user with XYZ."
    labels={{
      initial: "Hi you! 👋 I can give you a presentation on any topic.",
      thinking: "Presenting Slide...",
      done: "✅ Slide presented.",
    }}
    // model="gpt-3.5"
  >
    <Homepage />
    <AssistantWindow />
  </Beak>

  // <Gemeni /> // Google Generative AI
);

export default App;
