import { useState, useContext, useEffect } from "react";
import { jobContext } from "../services/jobContext";
//import { IJob } from "../models/IJob";

const usePagination = (itemsPerPage: number) => {
  const context = useContext(jobContext);

  if (!context)
    throw new Error("usePagination must be used within a JobProvider");

  const { jobs, fetchJobs, loading } = context;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!loading) {
      const offset = (currentPage - 1) * itemsPerPage;
      fetchJobs("", offset, itemsPerPage);
    }
  }, [currentPage, fetchJobs, itemsPerPage, loading]);

  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  return {
    jobs,
    currentPage,
    setCurrentPage,
    totalPages,
    loading,
  };
};

export default usePagination;
