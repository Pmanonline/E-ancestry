import React from "react";
import { createRoot } from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./../src/store.js";
import "./App.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Element with id 'root' not found");
}
