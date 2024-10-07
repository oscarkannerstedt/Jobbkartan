import {
  FormInputSearchVariation,
  FormInputType,
  LayoutBlockContainer,
  LayoutBlockVariation,
  LayoutColumnsElement,
  LayoutColumnsVariation,
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
import ScreenSizeContext from "../contexts/ScreenSizeContext";

export const SearchHeader = () => {
  const navigate = useNavigate();
  const context = useContext(jobContext);

  const sizeContext = useContext(ScreenSizeContext);

  if (!sizeContext) {
    throw new Error("SomeComponent must be used within a ScreenSizeProvider");
  }

  const { isDesktop } = sizeContext;

  const handleSearchSubmit = async (
    event: DigiFormInputSearchCustomEvent<string>
  ) => {
    const term = event.detail;

    if (context) {
      await context.fetchJobs(term);
    }

    navigate(`/annonser`, { state: { searchTerm: term } });
  };

  return (
    <div id="search-header">
      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.TRANSPARENT}
        afContainer={LayoutBlockContainer.FLUID}
      >
        {/* <div className="container-left-search-header"> */}
        <DigiLayoutColumns
          afElement={LayoutColumnsElement.DIV}
          afVariation={LayoutColumnsVariation.TWO}
          // style={{ outerHeight: "100%" }}
        >
          <DigiLayoutContainer className="container-content">
            {/* <DigiLayoutContainer className="heading-search-bar"> */}
            <h1 className="search-bar-heading">Jobbkartan</h1>
            <p className="search-bar-text">Lediga jobb för hela sverige</p>
            {/* </DigiLayoutContainer> */}
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
          <DigiLayoutContainer
            style={{ outerHeight: "100%" }}
            className="map-container"
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <JobMap></JobMap>
            </div>
          </DigiLayoutContainer>
        </DigiLayoutColumns>
        {/* </div> */}
      </DigiLayoutBlock>
    </div>
  );
};
