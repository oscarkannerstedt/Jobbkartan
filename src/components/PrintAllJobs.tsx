import { useContext, useRef, useState } from "react";
import { jobContext } from "../services/jobContext";
import { formatPublicationDate } from "../utils/dateUtils/formatPublicationDate";
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiLink,
  DigiLoaderSpinner,
  DigiNavigationPagination,
} from "@digi/arbetsformedlingen-react";
import {
  LayoutBlockContainer,
  LayoutBlockVariation,
  LinkVariation,
  LoaderSpinnerSize,
} from "@digi/arbetsformedlingen";
import defaultLogo from "../assets/jobbkartan_logo_1.png";
import "../styles/printAllJobb.css";
import { SearchHeader } from "./SearchHeader";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";

export const PrintAllJobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const layoutBlockRef = useRef<HTMLDivElement>(null);

  const context = useContext(jobContext);

  if (!context) return <p>Laddar...</p>;
  const { jobs, loading } = context;

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const limit = 10;
  const totalPages = Math.ceil(jobs.length / limit);
  const start = (currentPage - 1) * limit;
  const end = start + limit;

  const scrollToBlockTop = () => {
    if (layoutBlockRef.current) {
      layoutBlockRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handlePageChange = (e: DigiNavigationPaginationCustomEvent<number>) => {
    const pageNumber = e.detail;
    setCurrentPage(pageNumber);
    scrollToBlockTop();
  };

  // Show loader if loading is true
  if (loading) {
    return (
      <div className="spinner-container">
        <DigiLoaderSpinner
          afSize={LoaderSpinnerSize.LARGE}
          afText="Laddar..."
        />
      </div>
    );
  }

  if (jobs.length === 0) {
    return <p>Inga jobb tillgängliga...</p>;
  }

  return (
    <>
      <SearchHeader />
      <DigiLayoutContainer>
        <div className="job-list-container" ref={layoutBlockRef}>
          {jobs.slice(start, end).map((job) => (
            <DigiLayoutBlock
              key={job.id}
              afVariation={LayoutBlockVariation.PRIMARY}
              afContainer={LayoutBlockContainer.FLUID}
              afMarginBottom={false}
              className="digiLayoutBlock"
            >
              <a
                href={`/#/annonser/${job.id}`}
                onClick={scrollToTop}
                className="job-item-container"
                aria-label={`Gå till annons för ${job.headline} hos ${job.employer.name} i ${job.workplace_address.municipality}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <img
                  src={job.logo_url || defaultLogo}
                  alt={`${job.employer.name} logo`}
                />

                <div className="text-container">
                  <h3 className="job-title">
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
                  <p className="job-occupation">{job.occupation.label}</p>
                  <p className="job-publication-date">
                    {formatPublicationDate(job.publication_date)}
                  </p>
                </div>
              </a>
            </DigiLayoutBlock>
          ))}
        </div>

        <DigiNavigationPagination
          afTotalPages={totalPages}
          afInitActivePage={currentPage}
          onAfOnPageChange={handlePageChange}
          af-total-results={jobs.length}
          af-current-result-start={start + 1}
          afCurrentResultEnd={Math.min(end, jobs.length)}
          afResultName="annonser"
        />
      </DigiLayoutContainer>
    </>
  );
};
