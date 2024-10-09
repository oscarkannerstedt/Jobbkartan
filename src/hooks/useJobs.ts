import { useContext } from "react";
import { jobContext } from "../contexts/jobContext";

export const useJobs = () => {
  const context = useContext(jobContext);

  if (!context) {
    throw new Error("useJobs must be used within a JobProvider");
  }

  return context;
};
