import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {initGA} from "./analytics"

import { AuthProvider } from "./context/AuthContext";

initGA();


ReactDOM.createRoot(document.getElementById("root")).render(

  <AuthProvider>
    <App />
  </AuthProvider>

);