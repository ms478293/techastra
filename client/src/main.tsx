import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add loading state
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

// Show loading state
rootElement.innerHTML = `
  <div style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #0d2d4a 0%, #00859b 100%);
    color: white;
    font-family: 'Inter', sans-serif;
  ">
    <div style="text-align: center;">
      <div style="
        width: 60px;
        height: 60px;
        border: 4px solid rgba(255,255,255,0.3);
        border-top: 4px solid white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
      "></div>
      <h1 style="margin: 0; font-size: 24px; font-weight: 600;">TecAstra</h1>
      <p style="margin: 10px 0 0; opacity: 0.8;">Loading...</p>
    </div>
  </div>
  <style>
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
`;

// Simple test for ClearDNS page
if (window.location.pathname === '/products/cleardns') {
  alert('ClearDNS page detected!');
  rootElement.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: red;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      font-weight: bold;
      z-index: 9999
    ">
      🎯 CLEARDNS PAGE IS WORKING! 🎯
    </div>
  `;
} else {
  // Render the app
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
  } catch (error) {
    console.error("Failed to render app:", error);
    rootElement.innerHTML = `
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: #f3f4f6;
        color: #374151;
        font-family: 'Inter', sans-serif;
        text-align: center;
        padding: 20px;
      ">
        <div>
          <h1 style="color: #dc2626; margin-bottom: 16px;">Failed to Load</h1>
          <p style="margin-bottom: 20px;">Something went wrong while loading the application.</p>
          <button onclick="window.location.reload()" style="
            background: #3b82f6;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
          ">Reload Page</button>
        </div>
      </div>
    `;
  }
}
