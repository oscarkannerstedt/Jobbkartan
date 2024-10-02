import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { JobProvider } from "./services/JobProvider";
import ScreenSizeProvider from "./services/ScreenSizeProvider";

function App() {
  return (
    <>
      <ScreenSizeProvider>
        <JobProvider>
          <RouterProvider router={router}></RouterProvider>
        </JobProvider>
      </ScreenSizeProvider>
    </>
  );
}

export default App;
