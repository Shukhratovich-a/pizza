import { BrowserRouter } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider as BurgerProvider } from "./Context/BurgerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BurgerProvider>
        <App />
      </BurgerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
