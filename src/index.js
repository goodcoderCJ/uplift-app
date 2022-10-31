import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
const Homes = lazy(() => import("./Home"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL} >
    <React.StrictMode>
      
        <Suspense
          fallback={
            <diV className="fallback-container">
              <div className="fallback"></div>
            </diV>
          }
        >
          {Homes}
          <App />
        </Suspense>
     
    </React.StrictMode>
  </BrowserRouter>
);
