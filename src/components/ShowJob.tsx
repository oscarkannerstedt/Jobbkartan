import {
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiLoaderSpinner,
} from "@digi/arbetsformedlingen-react";
import {
  LayoutBlockVariation,
  LayoutBlockContainer,
  LayoutColumnsElement,
  LayoutColumnsVariation,
  LoaderSpinnerSize,
} from "@digi/arbetsformedlingen";
import { useContext } from "react";
import { IShowJobProps } from "../models/IShowJobProps";
import RenderJobDetails from "./show-job/RenderJobDetails";
import { jobContext } from "../contexts/jobContext";

const ShowJob = ({ job }: IShowJobProps) => {
  const jobContextValue = useContext(jobContext);

  // Show loader while job info is loading
  if (jobContextValue && jobContextValue.loading) {
    return (
      <DigiLoaderSpinner
        afSize={LoaderSpinnerSize.LARGE}
        afText="Laddar jobbinformation..."
      />
    );
  }

  return (
    <>
      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.PRIMARY}
        afContainer={LayoutBlockContainer.STATIC}
      >
        <DigiLayoutColumns
          afElement={LayoutColumnsElement.DIV}
          afVariation={LayoutColumnsVariation.THREE}
        >
          <RenderJobDetails job={job} />
        </DigiLayoutColumns>
      </DigiLayoutBlock>
    </>
  );
};

export default ShowJob;
