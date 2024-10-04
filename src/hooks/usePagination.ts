import { useState, useContext } from "react";
import { jobContext } from "../services/jobContext";

const usePagination = (itemsPerPage: number) => {
  const context = useContext(jobContext);

  if (!context)
    throw new Error("usePagination must be used within a JobProvider");

  const { jobs, loading } = context;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    loading,
  };
};

export default usePagination;
