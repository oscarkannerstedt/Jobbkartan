import { IJob } from "../models/IJob";

export const getJobsFromLocalStorage = (): IJob[] => {
  const storedJobs = localStorage.getItem("jobs");
  console.log("Data från localStorage:", storedJobs);
  return storedJobs ? JSON.parse(storedJobs) : [];
};
