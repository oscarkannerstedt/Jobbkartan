import { useContext } from "react";
import { jobContext } from "../services/jobContext";


export const useJobs = () => {
  const context = useContext(jobContext);

  if (!context) {
    throw new Error("useJobs must be used within a JobProvider");
  }

  return context;
};
