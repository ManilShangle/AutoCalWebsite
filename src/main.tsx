import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle GitHub Pages SPA routing
const path = window.location.search.slice(1);
if (path) {
  window.history.replaceState(null, '', path);
}

createRoot(document.getElementById("root")!).render(<App />);
