import { useCallback, useEffect, useState } from "react";
import { IJob } from "../models/IJob";
import { fetchAllJobs, fetchJobsBySearchTerm } from "./baseService";
import { jobContext } from "./jobContext";

export const JobProvider = ({ children }: { children: React.ReactNode }) => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // Ny loading-state

  // const fetchJobs = async (
  //   term: string = "",
  //   offset: number = 0,
  //   limit: number = 25
  // ) => {
  //   setLoading(true); // Startar loadern
  //   try {
  //     let fetchedJobs;
  //     if (term) {
  //       fetchedJobs = await fetchJobsBySearchTerm(term, offset, limit);
  //     } else {
  //       fetchedJobs = await fetchAllJobs(offset, limit);
  //     }
  //     setJobs(fetchedJobs.hits);

  //     console.log("fetched jobs", fetchedJobs.hits);
  //     return fetchedJobs.hits;
  //   } catch (error) {
  //     console.error("Error fetching jobs: ", error);
  //     return [];
  //   } finally {
  //     setLoading(false); // Stänger av loadern när datan har laddats
  //   }
  // };

  // useEffect(() => {
  //   fetchJobs();
  // }, []);
  const fetchJobs = useCallback(
    async (term: string = "", offset: number = 0, limit: number = 25) => {
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
    [] // Ensure this only depends on static values
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
