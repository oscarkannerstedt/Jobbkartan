import { useContext } from "react";
import { jobContext } from "../services/jobContext";
import { formatPublicationDate } from "../utils/dateUtils/formatPublicationDate";

export const PrintAllJobs = () => {
  const context = useContext(jobContext);

  if (!context) return <p>Loading...</p>;

  const { jobs } = context;

  return (
    <div>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div key={job.id}>
            <h2>{job.headline}</h2>
            <h3>
              {job.employer.name} - {job.workplace_address.municipality}
            </h3>
            <p>Yrke...</p>
            <p>{formatPublicationDate(job.publication_date)}</p>
          </div>
        ))
      ) : (
        <p>Inga jobb tillgängliga...</p>
      )}
    </div>
  );
};
