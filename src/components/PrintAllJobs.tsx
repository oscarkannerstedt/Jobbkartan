import { useContext } from "react";
import { jobContext } from "../services/jobContext";
import { formatPublicationDate } from "../utils/dateUtils/formatPublicationDate";
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiLink,
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
              <h3 style={{ paddingTop: "15px" }}>
                <DigiLink
                  afHref={`/annonser/${job.id}`}
                  afVariation="large"
                  afAriaLabel={`Gå till annons för ${job.headline} hos ${job.employer.name} i ${job.workplace_address.municipality}`}
                >
                  {job.headline}
                </DigiLink>
              </h3>

              <h4>
                {job.employer.name} - {job.workplace_address.municipality}
              </h4>
              <p style={{ margin: 0, lineHeight: ".1" }}>
                {job.occupation.label}
              </p>
              <p style={{ paddingBottom: "15px" }}>
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
