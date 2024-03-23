import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Carrier from "./components/Carrier/Carrier";
import DisplayPost from "./components/DisplayPost/DisplayPost";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/carrier",
        element: <Carrier></Carrier>,
      },
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "/post/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element: <DisplayPost></DisplayPost>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
