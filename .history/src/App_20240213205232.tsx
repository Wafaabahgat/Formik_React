// App.tsx
import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <RegistrationForm />
    </div>
  );
};

export default App;
