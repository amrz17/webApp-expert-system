import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import LoginAdminPage from "./pages/LoginAdminPage";
import DashboardPage from "./pages/DashboardPage.jsx";
import Questions from "./components/Questions.jsx";
import Result from "./pages/Result.jsx";
import RuleTes from "./components/RuleTes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginAdminPage />,
  },
  {
    path: "/admin/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/rules",
    element: <RuleTes />,
  },
  {
    path: "/start",
    element: <Questions />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
