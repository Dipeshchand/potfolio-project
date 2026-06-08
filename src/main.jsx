// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import { ThemeProvider } from './context/ThemeContext'

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <ThemeProvider>
//         <App />
//     </ThemeProvider>
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(

  <AuthProvider>
    <App />
  </AuthProvider>

);