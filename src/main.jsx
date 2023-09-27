import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import { lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Donation = lazy(() => import("./pages/Donation"));
const Statistics = lazy(() => import("./pages/Statistics"));
const Details = lazy(() => import("./pages/Details"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "donation/",
        element: <Donation></Donation>,
      },
      {
        path: "statistics/",
        element: <Statistics></Statistics>,
      },
      {
        path: "donation/:id",
        element: <Details></Details>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
