import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Create a test component directly in main bundle
const TestClearDNS = () => {
  console.log("TestClearDNS component rendered");
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'red',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '48px',
      fontWeight: 'bold',
      zIndex: 9999
    }}>
      🎯 CLEARDNS PAGE IS WORKING! 🎯
    </div>
  );
};

// Export it globally and force it to be used
window.TestClearDNS = TestClearDNS;
console.log("TestClearDNS component created and exported");

// Force the component to be used by calling it
const testElement = TestClearDNS();
console.log("TestClearDNS element created:", testElement);

// Also add it to the DOM immediately
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOMContentLoaded fired");
  console.log("Current pathname:", window.location.pathname);
  
  if (window.location.pathname === '/products/cleardns') {
    console.log("ClearDNS path detected, injecting content");
    const root = document.getElementById('root');
    if (root) {
      console.log("Root element found, injecting content");
      root.innerHTML = `
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
      console.log("Content injected successfully");
    } else {
      console.log("Root element not found");
    }
  } else {
    console.log("Not ClearDNS path, continuing with normal app");
  }
});

// Also try immediate execution
console.log("Main script loaded");
console.log("Current pathname:", window.location.pathname);

if (window.location.pathname === '/products/cleardns') {
  console.log("ClearDNS path detected in immediate execution");
  const root = document.getElementById('root');
  if (root) {
    console.log("Root element found in immediate execution");
    root.innerHTML = `
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
    console.log("Content injected successfully in immediate execution");
  } else {
    console.log("Root element not found in immediate execution");
  }
}

// Force the code to be used by exporting it
window.debugClearDNS = () => {
  console.log("Debug function called");
  if (window.location.pathname === '/products/cleardns') {
    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = `
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
    }
  }
};

// Also call it immediately
window.debugClearDNS();

// Also add a simple test to force the code to be used
const testDiv = document.createElement('div');
testDiv.innerHTML = 'TEST';
document.body.appendChild(testDiv);



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

// Render the app
try {
  const root = createRoot(rootElement);
  
  // Test if we can render the test component directly
  if (window.location.pathname === '/products/cleardns') {
    root.render(<TestClearDNS />);
  } else {
    root.render(<App />);
  }
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
