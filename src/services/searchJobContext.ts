import { createContext } from "react";
import { IJob } from "../models/IJob";

interface ISearchJobContext {
  jobs: IJob[];
  fetchJobsBySearchTerm: (searchTerm: string) => Promise<void>;
}

export const searchJobContext = createContext<ISearchJobContext | null>(null);
