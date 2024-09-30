import { useContext } from "react";
import { jobContext } from "../services/jobContext";
import { formatPublicationDate } from "../utils/dateUtils/formatPublicationDate";
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";
import {
  LayoutBlockContainer,
  LayoutBlockVariation,
} from "@digi/arbetsformedlingen";

export const PrintAllJobs = () => {
  const context = useContext(jobContext);

  if (!context) return <p>Loading...</p>;

  const { jobs } = context;

  return (
    <DigiLayoutContainer>
      <div>
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <DigiLayoutBlock
              key={job.id}
              afVariation={LayoutBlockVariation.SECONDARY}
              afContainer={LayoutBlockContainer.FLUID}
              afMarginBottom={false}
            >
              <h2 style={{ paddingTop: "15px" }}>{job.headline}</h2>
              <h4>
                {job.employer.name} - {job.workplace_address.municipality}
              </h4>
              <p style={{ margin: 0, lineHeight: ".1" }}>
                {job.occupation.label}
              </p>
              <p style={{ paddingBottom: "20px", lineHeight: ".5" }}>
                {formatPublicationDate(job.publication_date)}
              </p>
            </DigiLayoutBlock>
          ))
        ) : (
          <p>Inga jobb tillgängliga...</p>
        )}
      </div>
    </DigiLayoutContainer>
  );
};
