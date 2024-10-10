import { APIProvider } from "@vis.gl/react-google-maps";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
// import { JobMap } from './components/JobMap';
import { JobProvider } from "./services/JobProvider";
import ScreenSizeProvider from "./services/ScreenSizeProvider";
import { DigiTypography } from "@digi/arbetsformedlingen-react";
import { PaginationProvider } from "./services/PaginationProvider";
import { NavigationProvider } from "./services/navigationProvider";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function App() {
  return (
    <>
      <DigiTypography>
        <NavigationProvider>
          <PaginationProvider>
            <ScreenSizeProvider>
              <JobProvider>
                <APIProvider
                  apiKey={apiKey}
                  onLoad={() => console.log("Maps API has loaded.")}
                >
                  {/* <JobMap></JobMap> */}
                  <RouterProvider router={router}></RouterProvider>
                </APIProvider>
              </JobProvider>
            </ScreenSizeProvider>
          </PaginationProvider>
        </NavigationProvider>
      </DigiTypography>
    </>
  );
}

export default App;
