import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./AppliedJobs";
import JobDetails from "./components/JobDetails";
import "./index.css";
import MainUI from "./layout/MainUI";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Statices from "./pages/Statices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainUI></MainUI>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statices",
        element: <Statices></Statices>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch(`/jobs.json`),
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch(`/jobs.json`), //This is not a right why we are not use in future
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
