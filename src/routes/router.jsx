// LIBRERIAS DE REACT
import React from "react";
import { createBrowserRouter } from "react-router-dom";
// PÁGINAS
import Home from "../pages/Home";
import Study from "../pages/Study";
import Blog from "../pages/Blog";
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
            path: "/blog",
            element: <Blog></Blog>
          }
        ]
      }
    ]
  }
]);

export default router;
