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
import "../styles/searchResults.css";

export const SearchResults = () => {
  const context = useContext(jobContext);

  if (!context) return <p>Laddar...</p>;

  return (
    <>
      <SearchHeader />
      <DigiLayoutContainer>
        <div className="job-list-container">
          {context.jobs.length > 0 ? (
            context.jobs.map((job) => (
              <DigiLayoutBlock
                key={job.id}
                afVariation={LayoutBlockVariation.PRIMARY}
                afContainer={LayoutBlockContainer.FLUID}
                afMarginBottom={false}
                className="digiLayoutBlock"
              >
                <div className="job-item-container">
                  {job.logo_url && (
                    <img src={job.logo_url} alt={`${job.employer.name} logo`} />
                  )}
                  <div>
                    <h3 className="job-title">
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
                    <p className="job-occupation">{job.occupation.label}</p>
                    <p className="job-publication-date">
                      {formatPublicationDate(job.publication_date)}
                    </p>
                  </div>
                </div>
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
