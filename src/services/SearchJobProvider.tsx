import { useState } from "react";
import { IJob } from "../models/IJob";
import { fetchJobsBySearchTerm } from "./baseService";
import { searchJobContext } from "./searchJobContext";

export const SearchJobProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [jobs, setJobs] = useState<IJob[]>([]);

  const fetchJobs = async (searchTerm: string) => {
    try {
      const fetchedJobs = await fetchJobsBySearchTerm(searchTerm);
      setJobs(fetchedJobs.hits);
    } catch (error) {
      console.error("Error fetching jobs by search term", error);
    }
  };

  return (
    <searchJobContext.Provider value={{ jobs, fetchJobs }}>
      {children}
    </searchJobContext.Provider>
  );
};
