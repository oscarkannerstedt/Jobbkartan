import { useContext } from "react";
import { jobContext } from "../services/jobContext";
import { formatPublicationDate } from "../utils/dateUtils/formatPublicationDate";
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiLink,
  DigiLoaderSpinner,
} from "@digi/arbetsformedlingen-react";
import {
  LayoutBlockContainer,
  LayoutBlockVariation,
  LinkVariation,
  LoaderSpinnerSize,
} from "@digi/arbetsformedlingen";
import "../styles/printAllJobb.css";
import { SearchHeader } from "./SearchHeader";

export const PrintAllJobs = () => {
  const context = useContext(jobContext);

  if (!context) return <p>Laddar...</p>;

  const { jobs, loading } = context;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // show loader if loading is true
  if (loading) {
    return (
      <div className="spinner-container">
        <DigiLoaderSpinner
          afSize={LoaderSpinnerSize.LARGE}
          afText="Laddar"
        ></DigiLoaderSpinner>{" "}
      </div>
    );
  }

  return (
    <>
      <SearchHeader />
      <DigiLayoutContainer>
        <div style={{ margin: "15px" }}>
          {jobs.length > 0 ? (
            jobs.map((job) => (
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
                    onClick={scrollToTop}
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
