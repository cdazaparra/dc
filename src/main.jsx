// LIBRERIAS DE REACT
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
//Provider
import LanguajeProvider from "./providers/LanguajeProvider";
import InteractionProvider from "./providers/InteractionProvider";
// creación del router
import router from "./routes/router";

// Estilos css necesarios para tailwind
import "./index.css";
import "./index.sass";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InteractionProvider>
      <LanguajeProvider>
        <RouterProvider router={router}></RouterProvider>
      </LanguajeProvider>
    </InteractionProvider>
  </React.StrictMode>
);
