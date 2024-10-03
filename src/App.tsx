import { APIProvider } from '@vis.gl/react-google-maps';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
// import { JobMap } from './components/JobMap';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

import { JobProvider } from './services/JobProvider';
import ScreenSizeProvider from './services/ScreenSizeProvider';
import { DigiTypography } from '@digi/arbetsformedlingen-react';

function App() {
	return (
		<>
			<DigiTypography>
				<ScreenSizeProvider>
					<JobProvider>
						<APIProvider
							apiKey={apiKey}
							onLoad={() => console.log('Maps API has loaded.')}
						>
							{/* <JobMap></JobMap> */}
							<RouterProvider router={router}></RouterProvider>
						</APIProvider>
					</JobProvider>
				</ScreenSizeProvider>
			</DigiTypography>
		</>
	);
}

export default App;
