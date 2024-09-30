import { APIProvider } from '@vis.gl/react-google-maps';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { JobMap } from './components/JobMap';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;



function App() {
	return (
		<>
			<APIProvider
				apiKey={apiKey}
				onLoad={() => console.log('Maps API has loaded.')}
			>
				<JobMap></JobMap>
				<RouterProvider router={router}></RouterProvider>
			</APIProvider>
		</>
	);
}

export default App;
