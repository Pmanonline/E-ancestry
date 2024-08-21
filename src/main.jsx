// import React from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import App from "./App.jsx";
// import store from "./store.js";
// import "./App.css";

// import ToastProvider from "./components/tools/toastProvider.jsx";
// import { jwtDecode } from "jwt-decode";

// const rootElement = document.getElementById("root");
// if (rootElement) {
//   createRoot(rootElement).render(
//     <Provider store={store}>
//       <ToastProvider>
//         <App />
//       </ToastProvider>
//     </Provider>
//   );
// } else {
//   console.error("Element with id 'root' not found");
// }
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store.js";
import "./App.css";
import ToastProvider from "./components/tools/toastProvider.jsx";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Provider>
  );
} else {
  console.error("Element with id 'root' not found");
}
