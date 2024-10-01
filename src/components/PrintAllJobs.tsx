import { useContext } from "react";
import { jobContext } from "../services/jobContext";
import { formatPublicationDate } from "../utils/dateUtils/formatPublicationDate";
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import {
  LayoutBlockContainer,
  LayoutBlockVariation,
} from "@digi/arbetsformedlingen";
import "../styles/printAllJobb.css";
import { Link } from "react-router-dom";

export const PrintAllJobs = () => {
  const context = useContext(jobContext);

  if (!context) return <p>Laddar...</p>;

  const { jobs } = context;

  return (
    <DigiTypography>
      <DigiLayoutContainer>
        <div>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <DigiLayoutBlock
                key={job.id}
                afVariation={LayoutBlockVariation.PRIMARY}
                afContainer={LayoutBlockContainer.FLUID}
                afMarginBottom={false}
                className="digiLayoutBlock"
              >
                <h3 style={{ paddingTop: "15px" }}>
                  <Link
                    to={`/annonser/${job.id}`}
                    aria-label={`Gå till annons för ${job.headline} hos ${job.employer.name} i ${job.workplace_address.municipality}`}
                  >
                    {job.headline}
                  </Link>
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
    </DigiTypography>
  );
};
