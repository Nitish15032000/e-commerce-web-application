import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextPovider from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* Wrap your app with the ShopContextPovider component */}
    {/* Provide your shop data here */}
    <ShopContextPovider>
      <App />
    </ShopContextPovider>
    
  </BrowserRouter>
);
