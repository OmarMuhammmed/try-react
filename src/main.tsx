/** file to Link HTML with React Component */

import { StrictMode } from "react"; // for Clean React code
import { createRoot } from "react-dom/client"; // use React 18's new API
import "./index.css"; // global styles for the app
import App from "./App.tsx"; // main App component to be rendered


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
