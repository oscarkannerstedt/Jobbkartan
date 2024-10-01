import { createContext } from "react";
import { IJob } from "../models/IJob";

interface IJobSContextType {
	jobs: IJob[];
	fetchJobs: () => Promise<void>;
	loading: boolean;
}

export const jobContext = createContext<IJobSContextType | null>(null);
