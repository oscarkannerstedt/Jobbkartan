import {
  FormInputSearchVariation,
  FormInputType,
  LayoutBlockContainer,
  LayoutBlockVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiFormInputSearch,
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";
import "../styles/searchHeader.css";
import { useNavigate } from "react-router-dom";
import { DigiFormInputSearchCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { jobContext } from "../services/jobContext";
import { useContext } from "react";
import { JobMap } from "./JobMap";
import PaginationContext from "../contexts/PaginationContext";

export const SearchHeader = () => {
  const navigate = useNavigate();
  const context = useContext(jobContext);
  const paginationContext = useContext(PaginationContext);
  const zoomLevel = 4.5;

  const handleSearchSubmit = async (
    event: DigiFormInputSearchCustomEvent<string>
  ) => {
    const term = event.detail;

    if (context) {
      await context.fetchJobs(term);
    }

    if (paginationContext) {
      paginationContext.setCurrentPage(1);
    }

    navigate(`/annonser`, { state: { searchTerm: term } });
  };

  return (
    <div id="search-header">
      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.TRANSPARENT}
        afContainer={LayoutBlockContainer.FLUID}
      >
        <div className="container-left-search-header">
          <DigiLayoutColumns style={{ outerHeight: "100%" }}>
            <DigiLayoutContainer className="container-content">
              <DigiLayoutContainer className="heading-search-bar">
                <h1 className="search-bar-heading">Jobbkartan</h1>
                <p className="search-bar-text">Lediga jobb för hela sverige</p>
              </DigiLayoutContainer>
              <DigiFormInputSearch
                afLabel="Sök på ett eller flera ord"
                afVariation={FormInputSearchVariation.MEDIUM}
                afType={FormInputType.SEARCH}
                afButtonText="Sök"
                afLabelDescription="Skriv t.e.x frontend örebro"
                onAfOnSubmitSearch={handleSearchSubmit}
                id="search"
              ></DigiFormInputSearch>
            </DigiLayoutContainer>
            <DigiLayoutContainer className="map-outer-container">
              <div className="map-container">
                <JobMap zoomLevel={zoomLevel}></JobMap>
              </div>
            </DigiLayoutContainer>
          </DigiLayoutColumns>
        </div>
      </DigiLayoutBlock>
    </div>
  );
};
