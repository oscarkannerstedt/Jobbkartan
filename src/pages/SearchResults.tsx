import { useContext } from "react";
import {
  LayoutBlockVariation,
  LayoutBlockContainer,
  LinkVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutContainer,
  DigiLayoutBlock,
  DigiLink,
} from "@digi/arbetsformedlingen-react";
import { formatPublicationDate } from "../utils/dateUtils/formatPublicationDate";
import { jobContext } from "../services/jobContext";
import { SearchHeader } from "../components/SearchHeader";

export const SearchResults = () => {
  const context = useContext(jobContext);

  if (!context) return <p>Laddar...</p>;

  return (
    <>
      <SearchHeader />
      <DigiLayoutContainer>
        <div style={{ margin: "15px" }}>
          {context.jobs.length > 0 ? (
            context.jobs.map((job) => (
              <DigiLayoutBlock
                key={job.id}
                afVariation={LayoutBlockVariation.PRIMARY}
                afContainer={LayoutBlockContainer.FLUID}
                afMarginBottom={false}
                className="digiLayoutBlock"
                style={{ margin: "10px" }}
              >
                <h3 style={{ paddingTop: "15px" }}>
                  <DigiLink
                    afHref={`/#/annonser/${job.id}`}
                    afVariation={LinkVariation.SMALL}
                    aria-label={`Gå till annons för ${job.headline} hos ${job.employer.name} i ${job.workplace_address.municipality}`}
                  >
                    {job.headline}
                  </DigiLink>
                </h3>

                <h4>
                  {job.employer.name} - {job.workplace_address.municipality}
                </h4>
                <p style={{ margin: 0 }}>{job.occupation.label}</p>
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
    </>
  );
};

export default SearchResults;
