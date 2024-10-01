import {
  DigiLayoutBlock,
  DigiTypography,
  DigiLayoutColumns,
  DigiInfoCard,
} from "@digi/arbetsformedlingen-react";
import { IJob } from "../models/IJob";
import {
  TypographyVariation,
  LayoutBlockVariation,
  LayoutBlockContainer,
  LayoutColumnsElement,
  LayoutColumnsVariation,
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
} from "@digi/arbetsformedlingen";

interface IShowJobProps {
  job: IJob;
}

const ShowJob = ({ job }: IShowJobProps) => {
  return (
    <>
      <DigiTypography afVariation={TypographyVariation.LARGE}>
        <DigiLayoutBlock
          afVariation={LayoutBlockVariation.PRIMARY}
          afContainer={LayoutBlockContainer.STATIC}
        >
          <DigiLayoutColumns
            afElement={LayoutColumnsElement.DIV}
            afVariation={LayoutColumnsVariation.TWO}
          >
            <DigiLayoutBlock
              afVariation={LayoutBlockVariation.PRIMARY}
              afContainer={LayoutBlockContainer.STATIC}
            >
              <h1>Rubrik: {job.headline}</h1>

              <h2>Företagsnamn: {job.employer.name}</h2>
              <h3>Yrkeskategori: </h3>
              <h3>Kommun: {job.workplace_address.municipality}</h3>
              <DigiInfoCard
                afHeading="Jag är ett infokort"
                afHeadingLevel={InfoCardHeadingLevel.H2}
                afType={InfoCardType.TIP}
                afLinkHref="Frivillig länk"
                afLinkText="Frivillig länktext"
                afVariation={InfoCardVariation.SECONDARY}
                // afSize={infoCardSize.STANDARD}
              >
                <p>
                  Det här är bara ord för att illustrera hur det ser ut med text
                  inuti. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Suspendisse commodo egestas elit in consequat. Proin in
                  ex consectetur, laoreet augue sit amet, malesuada tellus.
                </p>
              </DigiInfoCard>
            </DigiLayoutBlock>
            <DigiLayoutBlock
              afVariation={LayoutBlockVariation.PRIMARY}
              afContainer={LayoutBlockContainer.STATIC}
            >
              <h2>En karta här</h2>
            </DigiLayoutBlock>
          </DigiLayoutColumns>
        </DigiLayoutBlock>
      </DigiTypography>
    </>
  );
};

export default ShowJob;
