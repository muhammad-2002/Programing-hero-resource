import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout.jsx";
import "./index.css";
import Blog from "./pages/Blog";
import BookMark from "./pages/BookMark.jsx";
import Home from "./pages/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "bookmark",
        element: <BookMark></BookMark>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
