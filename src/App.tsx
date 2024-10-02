import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { JobProvider } from "./services/JobProvider";
import ScreenSizeProvider from "./services/ScreenSizeProvider";
import { DigiTypography } from "@digi/arbetsformedlingen-react";

function App() {
  return (
    <>
      <DigiTypography>
        <ScreenSizeProvider>
          <JobProvider>
            <RouterProvider router={router}></RouterProvider>
          </JobProvider>
        </ScreenSizeProvider>
      </DigiTypography>
    </>
  );
}

export default App;
