import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LanguageProvider } from "./components/Language/Language";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LanguageProvider>
);
