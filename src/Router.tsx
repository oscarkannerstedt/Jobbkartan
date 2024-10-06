import { createHashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import SelectedJob from "./pages/SelectedJob";
import NotFound from "./components/NotFound"; // NotFound-component

export const router = createHashRouter([
	{
		path: "/",
		element: <Layout />,
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
			},
			// Catch-all route for all non matching routes
			{
				path: "*",
				element: <NotFound />, // Loads NotFound-component if no other route matches
			},
		],
	},
]);
