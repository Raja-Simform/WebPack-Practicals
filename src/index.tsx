import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "@/App";

const rootElement = document.querySelector("#root");
if (!rootElement) {
  throw new ReferenceError("Error root not found");
}
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
