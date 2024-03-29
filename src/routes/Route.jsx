import { createBrowserRouter } from "react-router-dom";

import Error from "../pages/Error";
import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
]);

export default router;
