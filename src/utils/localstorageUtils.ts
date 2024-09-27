import { IJob } from "../models/IJobs";

export const getJobsFromLocalStorage = (): IJob[] => {
  const storedJobs = localStorage.getItem("jobs");
  return storedJobs ? JSON.parse(storedJobs) : [];
};
