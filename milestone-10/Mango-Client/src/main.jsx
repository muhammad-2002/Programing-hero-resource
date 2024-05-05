import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllMangos from "./AllMangos.jsx";

import App from "./App.jsx";
import "./index.css";
import Update from "./Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/mongos",
    loader: () => fetch("http://localhost:5000/mongos"),
    element: <AllMangos></AllMangos>,
  },
  {
    path: "/mongos/:id",
    loader: ({ params }) => fetch(`http://localhost:5000/mongos/${params.id}`),
    element: <Update></Update>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
