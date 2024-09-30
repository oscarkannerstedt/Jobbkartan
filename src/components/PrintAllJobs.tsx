import { useContext } from "react";
import { jobContext } from "../services/jobContext";

export const PrintAllJobs = () => {
  const context = useContext(jobContext);

  if (!context) return <p>Loading...</p>;

  const { jobs } = context;

  console.log("jobs from PrintAllJobs", jobs);

  return (
    <div>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job.id}>
            <h3>{job.headline}</h3>
            <p>{job.employer.name}</p>
          </div>
        ))
      ) : (
        <p>Inga jobb tillgängliga...</p>
      )}
    </div>
  );
};
