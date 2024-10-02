import { createHashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import SelectedJob from "./pages/SelectedJob";
import NotFound from "./pages/NotFound";
import { jobLoader } from "./loaders/jobLoader";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/annonser",
        element: <SearchResults />,
      },
      {
        path: "/annonser/:id",
        element: <SelectedJob />,
        loader: jobLoader,
      },
    ],
  },
]);
