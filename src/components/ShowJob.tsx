import {
  DigiLayoutBlock,
  DigiLayoutColumns,
} from "@digi/arbetsformedlingen-react";
import {
  LayoutBlockVariation,
  LayoutBlockContainer,
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from "@digi/arbetsformedlingen";
import ScreenSizeContext from "../contexts/ScreenSizeContext";
import { useContext } from "react";
import { IShowJobProps } from "../models/IShowJobProps";
import RenderJobDetails from "./show-job/RenderJobDetails";

const ShowJob = ({ job }: IShowJobProps) => {
  const screenSizeContext = useContext(ScreenSizeContext);

  if (!screenSizeContext) {
    throw new Error("SomeComponent must be used within a ScreenSizeProvider");
  }
  const { isDesktop } = screenSizeContext;

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
