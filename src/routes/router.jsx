// LIBRERIAS DE REACT
import React from "react";
import { createBrowserRouter } from "react-router-dom";
// PÁGINAS
import Home from "../pages/Home";
import Study from "../pages/Study";
import Works from "../pages/Works";
import NotFound from "../pages/NotFound";
// COMPONENTE BASE
import Layout from "../layout/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        errorElement: <NotFound></NotFound>,
        children: [
          {
            index: true,
            element: <Home></Home>
          },
          {
            path: "/study",
            element: <Study></Study>
          },
          {
            path: "/works",
            element: <Works></Works>
          }
        ]
      }
    ]
  }
]);

export default router;
