import {
  DigiLayoutBlock,
  DigiTypography,
  DigiLayoutColumns,
  DigiInfoCard,
  DigiButton,
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
import {
  formatDate,
  calculateDaysLeftToDeadline,
} from "../services/baseService";
import { formatPublicationDate } from "../utils/dateUtils/formatPublicationDate";
interface IShowJobProps {
  job: IJob;
}

const ShowJob = ({ job }: IShowJobProps) => {
  const { municipality, street_address, postcode, city, region } =
    job.workplace_address || {};
  const context = useContext(ScreenSizeContext);
  const daysLeft = calculateDaysLeftToDeadline(job.application_deadline);

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
        {job.logo_url ? (
          <a
            href={job.employer.url}
            target="_blank"
            title="Besök arbetsgivarens hemsida"
          >
            <img
              src={job.logo_url}
              alt="Arbetsgivarens logga"
              height={100}
              width={180}
              style={{ objectFit: "contain" }}
            />
          </a>
        ) : null}
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
          <strong>{job.salary_description}</strong>
        </p>
        <p>
          <strong>Lönetyp:</strong> {job.salary_type.label}
        </p>
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
            Arbetsplatsen ligger i kommunen <strong>{municipality}</strong> i{" "}
            <strong>{region}</strong>.
          </p>
        )}
        <h2>Om arbetsgivaren</h2>
        <p>{job.employer.name}</p>
        <h2>Kontakt</h2>
        {job.employer.workplace}{" "}
        <a href={job.employer.url} target="_blank">
          {job.employer.url}
        </a>
      </DigiLayoutBlock>

      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.PRIMARY}
        afContainer={LayoutBlockContainer.STATIC}
        className="map-container"
      >
        <h2>En karta här</h2>
        <DigiInfoCard
          afHeading="Sök jobbet"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.RELATED}
          afVariation={InfoCardVariation.SECONDARY}
        >
          <p>
            <strong>
              <h3>Ansök senast: {formatDate(job.application_deadline)}</h3>
            </strong>
            {daysLeft > 0 ? (
              <p>
                <em>Ansökningstiden går ut om {daysLeft} dagar</em>
              </p>
            ) : (
              <p>
                <em>Ansökningstiden har gått ut</em>
              </p>
            )}
            <p>{formatPublicationDate(job.publication_date)}</p>
          </p>

          <DigiButton>Ansök här</DigiButton>

          <p>Annons-Id: {job.id}</p>
        </DigiInfoCard>
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
