import {
  DigiLayoutBlock,
  DigiLayoutColumns,
} from "@digi/arbetsformedlingen-react";
import { IJob } from "../models/IJob";
import {
  LayoutBlockVariation,
  LayoutBlockContainer,
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from "@digi/arbetsformedlingen";
import ScreenSizeContext from "../contexts/ScreenSizeContext";
import { useContext } from "react";
import RenderJobDetails from "./RenderJobDetails";
export interface IShowJobProps {
  job: IJob;
}

const ShowJob = ({ job }: IShowJobProps) => {
  const context = useContext(ScreenSizeContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a ScreenSizeProvider");
  }
  const { isDesktop } = context;
  return (
    <>
      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.PRIMARY}
        afContainer={LayoutBlockContainer.STATIC}
      >
        {isDesktop ? (
          <DigiLayoutColumns
            afElement={LayoutColumnsElement.DIV}
            afVariation={LayoutColumnsVariation.THREE}
          >
            <RenderJobDetails job={job} />
          </DigiLayoutColumns>
        ) : (
          <DigiLayoutBlock>
            <RenderJobDetails job={job} />
          </DigiLayoutBlock>
        )}
      </DigiLayoutBlock>
    </>
  );
};

export default ShowJob;
