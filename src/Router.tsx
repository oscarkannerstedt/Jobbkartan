import { createHashRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import SelectedJob from "./pages/SelectedJob";
import NotFound from "./components/NotFound"; // NotFound-komponent

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
			// Catch-all route för alla icke-matchande rutter
			{
				path: "*",
				element: <NotFound />, // Laddar NotFound-komponent om ingen annan route matchar
			},
		],
	},
]);
