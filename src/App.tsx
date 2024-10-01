import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { JobProvider } from "./services/JobProvider";
import { SearchJobProvider } from "./services/SearchJobProvider";

function App() {
  return (
    <>
      <JobProvider>
        <SearchJobProvider>
          <RouterProvider router={router}></RouterProvider>
        </SearchJobProvider>
      </JobProvider>
    </>
  );
}

export default App;
