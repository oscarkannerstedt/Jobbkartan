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

export const SearchHeader = () => {
  return (
    <DigiLayoutBlock
      afVariation={LayoutBlockVariation.PROFILE}
      afContainer={LayoutBlockContainer.FLUID}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DigiLayoutContainer style={{ width: "50%" }}>
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
