import { useContext } from "react";
import { jobContext } from "../services/jobContext";

//Helper function to format publication Date
const formatPublicationDate = (dateString: string): string => {
  const publicationDate = new Date(dateString);
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const formattedTime = `${publicationDate
    .getHours()
    .toString()
    .padStart(2, "0")}:${publicationDate
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  if (publicationDate >= today) {
    return `Publicerad idag, kl. ${formattedTime}`;
  } else if (publicationDate >= yesterday) {
    return `Publicerad igår, kl. ${formattedTime}`;
  } else {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
    };
    return `Publicerad ${publicationDate.toLocaleDateString(
      "sv-SE",
      options
    )}, ${formattedTime}`;
  }
};

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
