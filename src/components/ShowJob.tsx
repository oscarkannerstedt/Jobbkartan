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
import ScreenSizeContext from "../contexts/ScreenSizeContext";
import { useContext } from "react";
interface IShowJobProps {
  job: IJob;
}

const ShowJob = ({ job }: IShowJobProps) => {
  const { municipality, street_address, postcode, city, region } =
    job.workplace_address || {};

  console.log("Job Data:", job);

  const context = useContext(ScreenSizeContext);

  if (!context) {
    throw new Error("SomeComponent must be used within a ScreenSizeProvider");
  }
  const { isDesktop } = context;

  const renderJobDetails = () => (
    <>
      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.PRIMARY}
        afContainer={LayoutBlockContainer.STATIC}
        className="job-container"
      >
        <h1>{job.headline}</h1>
        <h2>{job.employer.name}</h2>
        <h3>{job.occupation.label}</h3>
        <h3>Kommun: {municipality ? municipality : "Ospecifierad ort"}</h3>
        <DigiInfoCard
          afHeading="Kvalikationer"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.TIP}
          afVariation={InfoCardVariation.SECONDARY}
        >
          <h3>Arbetslivserfarenhet</h3>
          <h4>Krav</h4>
          <li>Här ska det in lite mer information</li>
        </DigiInfoCard>
        <h2>Om jobbet</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: job.description.text_formatted,
          }}
        />

        <h2>Om Anställningen</h2>
        <h3>Lön</h3>
        <p>
          <strong>Lönetyp:</strong> {job.salary_type.label}
        </p>

        <h2>Om arbetsgivaren</h2>
        <p>{job.employer.name}</p>
        <h2>Var ligger arbetsplatsen?</h2>
        <h3>Postadress</h3>
        {street_address && postcode && city ? (
          <address>
            <div>{street_address}</div>
            <div>
              {postcode} {city}
            </div>
          </address>
        ) : (
          <p>
            Arbetsplatsen finns i kommunen <strong>{municipality}</strong> i{" "}
            <strong>{region}</strong>.
          </p>
        )}
      </DigiLayoutBlock>

      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.PRIMARY}
        afContainer={LayoutBlockContainer.STATIC}
        className="map-container"
      >
        <h2>En karta här</h2>
      </DigiLayoutBlock>
    </>
  );

  return (
    <>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <DigiLayoutBlock
          afVariation={LayoutBlockVariation.PRIMARY}
          afContainer={LayoutBlockContainer.STATIC}
        >
          {isDesktop ? (
            <DigiLayoutColumns
              afElement={LayoutColumnsElement.DIV}
              afVariation={LayoutColumnsVariation.THREE}
            >
              {renderJobDetails()}
            </DigiLayoutColumns>
          ) : (
            <DigiLayoutBlock>{renderJobDetails()}</DigiLayoutBlock>
          )}
        </DigiLayoutBlock>
      </DigiTypography>
    </>
  );
};

export default ShowJob;
