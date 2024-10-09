import { createContext } from "react";
import { IJob } from "../models/IJob";

interface IJobSContextType {
  jobs: IJob[];
  fetchJobs: (
    searchTerm?: string,
    offset?: number,
    limit?: number
  ) => Promise<IJob[]>;
  fetchJobsByCircle: (postion: string, radius: number) => Promise<void>;
  loading: boolean;
}

export const jobContext = createContext<IJobSContextType | null>(null);
