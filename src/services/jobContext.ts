import { createContext } from "react";
import { IJob } from "../models/IJob";

interface IJobSContextType {
  jobs: IJob[];
  fetchJobs: () => Promise<void>;
}

export const jobContext = createContext<IJobSContextType | undefined>(
  undefined
);
