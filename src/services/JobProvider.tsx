import React, { useEffect, useState } from "react";
import { IJobs } from "../models/IJobs";
import { fetchAllJobs } from "./baseService";
import { jobContext } from "./jobContext";

export const JobProvider = ({ children }: { children: React.ReactNode }) => {
  const [jobs, setJobs] = useState<IJobs[]>([]);

  const fetchJobs = async () => {
    try {
      const fetchedJobs = await fetchAllJobs();
      setJobs(fetchedJobs.hits);

      localStorage.setItem("jobs", JSON.stringify(fetchedJobs.hits));

      console.log("fetched jobs from JobProvider", fetchedJobs.hits);
    } catch (error) {
      console.error("Error fetching jobs: ", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <jobContext.Provider value={{ jobs, fetchJobs }}>
      {children}
    </jobContext.Provider>
  );
};
