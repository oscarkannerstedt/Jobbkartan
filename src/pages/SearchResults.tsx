import { useContext, useEffect } from "react";
import { searchJobContext } from "../services/searchJobContext";
import {
  LayoutBlockVariation,
  LayoutBlockContainer,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutContainer,
  DigiLayoutBlock,
  DigiLink,
} from "@digi/arbetsformedlingen-react";
import { formatPublicationDate } from "../utils/dateUtils/formatPublicationDate";
import { SearchHeader } from "../components/SearchHeader";
import { useLocation } from "react-router-dom";

export const SearchResults = () => {
  const context = useContext(searchJobContext);
  const location = useLocation();

  const searchTerm = location.state?.searchTerm || "";

  useEffect(() => {
    if (context) {
      context.fetchJobs(searchTerm);
    }
  }, [context, searchTerm]);

  if (!context) return <p>Loading...</p>;

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

export default SearchResults;
