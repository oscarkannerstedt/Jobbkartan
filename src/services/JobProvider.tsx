import { useCallback, useEffect, useState } from "react";
import { IJob } from "../models/IJob";
import { fetchAllJobs, fetchJobsBySearchTerm } from "./baseService";
import { jobContext } from "./jobContext";

export const JobProvider = ({ children }: { children: React.ReactNode }) => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // Ny loading-state

  const fetchJobs = useCallback(
    async (term: string = "", offset: number = 0, limit: number = 50) => {
      setLoading(true);
      try {
        const fetchedJobs = term
          ? await fetchJobsBySearchTerm(term, offset, limit)
          : await fetchAllJobs(offset, limit);

        setJobs(fetchedJobs.hits);
        return fetchedJobs.hits;
      } catch (error) {
        console.error("Error fetching jobs: ", error);
        return [];
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  return (
    <jobContext.Provider value={{ jobs, fetchJobs, loading }}>
      {children}
    </jobContext.Provider>
  );
};
