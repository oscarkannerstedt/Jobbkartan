import { IJob } from "../models/IJob";

export const getJobsFromLocalStorage = (): IJob[] => {
  const storedJobs = localStorage.getItem("jobs");
  return storedJobs ? JSON.parse(storedJobs) : [];
};
