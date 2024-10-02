import { useContext } from "react";
import {
  LayoutBlockVariation,
  LayoutBlockContainer,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutContainer,
  DigiLayoutBlock,
} from "@digi/arbetsformedlingen-react";
import { formatPublicationDate } from "../utils/dateUtils/formatPublicationDate";
import { SearchHeader } from "../components/SearchHeader";
import { jobContext } from "../services/jobContext";
import { Link } from "react-router-dom";

export const SearchResults = () => {
  const context = useContext(jobContext);

  if (!context) return <p>Laddar...</p>;

  return (
    <DigiLayoutContainer>
      <SearchHeader />
      <div>
        {context.jobs.length > 0 ? (
          context.jobs.map((job) => (
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
  );
};

export default SearchResults;
