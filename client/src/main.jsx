import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import App from './App.jsx'
// import './index.css'
import { LanguageProvider } from "./LanguageContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={routes} />
    </LanguageProvider>
    
  // </React.StrictMode>,
)
