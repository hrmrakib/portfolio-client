import { createBrowserRouter } from "react-router-dom";

import Root from "../layout/Root";
import Dashboard from "../layout/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import AddSkill from "../pages/dashboard/AddSkill";

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
    ],
  },
]);

export default router;
