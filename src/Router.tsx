import { createHashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SelectedJob from "./pages/SelectedJob";
import NotFound from "./components/NotFound";
import { PrintAllJobs } from "./components/PrintAllJobs";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />, // Loads NotFound-component if no route matches entered URL
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/annonser",
        element: <PrintAllJobs />,
      },
      {
        path: "/annonser/:id",
        element: <SelectedJob />,
      },
    ],
  },
]);
