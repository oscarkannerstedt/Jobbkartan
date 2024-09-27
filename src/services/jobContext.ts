import { createContext } from "react";
import { IJobs } from "../models/IJobs";

interface IJobSContextType {
  jobs: IJobs[];
  fetchJobs: () => Promise<void>;
}

export const jobContext = createContext<IJobSContextType | undefined>(
  undefined
);
