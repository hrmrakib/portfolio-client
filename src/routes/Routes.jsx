import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import Dashboard from "../layout/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import AddSkill from "../pages/dashboard/AddSkill";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import AddProject from "../pages/dashboard/AddProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "addSkill",
        element: <AddSkill />,
      },
      {
        path: "addProject",
        element: <AddProject />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
