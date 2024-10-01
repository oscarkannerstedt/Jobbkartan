import {
  FormInputSearchVariation,
  FormInputType,
  LayoutBlockContainer,
  LayoutBlockVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiFormInputSearch,
  DigiLayoutBlock,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";
import "../styles/searchHeader.css";

export const SearchHeader = () => {
  return (
    <DigiLayoutBlock
      afVariation={LayoutBlockVariation.PROFILE}
      afContainer={LayoutBlockContainer.FLUID}
    >
      <div className="container-left-search-header">
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
          ></DigiFormInputSearch>
        </DigiLayoutContainer>
      </div>
    </DigiLayoutBlock>
  );
};
