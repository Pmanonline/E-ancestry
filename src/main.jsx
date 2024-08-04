import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store.js";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ToastProvider from "./components/tools/toastProvider.jsx";
import { jwtDecode } from "jwt-decode";

const clientId =
  "877226461430-ce5f7euc5cehofilrc5un3i6l8n1b7i8.apps.googleusercontent.com";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <ToastProvider>
        <GoogleOAuthProvider clientId={clientId}>
          <App />
        </GoogleOAuthProvider>
      </ToastProvider>
    </Provider>
  );
} else {
  console.error("Element with id 'root' not found");
}
