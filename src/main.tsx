import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { UserContextProvider } from "./context/UserContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
