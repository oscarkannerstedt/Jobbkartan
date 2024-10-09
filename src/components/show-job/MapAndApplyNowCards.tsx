import {
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
  LayoutBlockContainer,
  LayoutBlockVariation,
} from "@digi/arbetsformedlingen";
import {
  calculateDaysLeftToDeadline,
  formatDate,
} from "../../services/baseService";
import { formatPublicationDate } from "../../utils/dateUtils/formatPublicationDate";
import ApplyNowInfo from "./ApplyNowInfo";
import { DigiInfoCard, DigiLayoutBlock } from "@digi/arbetsformedlingen-react";
import { JobMap } from "../JobMap";
import { IShowJobProps } from "../../models/IShowJobProps";

const MapAndApplyNowCards = ({ job }: IShowJobProps) => {
  const daysLeft = calculateDaysLeftToDeadline(job.application_deadline);
  const zoomLevel = 12;

  return (
    <DigiLayoutBlock
      afVariation={LayoutBlockVariation.PRIMARY}
      afContainer={LayoutBlockContainer.STATIC}
      className="map-applycard-container"
    >
      <div className="map-container">
        <JobMap jobId={job.id} zoomLevel={zoomLevel} detailView={true}></JobMap>
      </div>
      <DigiInfoCard
        afHeading="Sök jobbet"
        afHeadingLevel={InfoCardHeadingLevel.H2}
        afType={InfoCardType.RELATED}
        afVariation={InfoCardVariation.SECONDARY}
      >
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
        <ApplyNowInfo job={job} />
        <span>
          {formatPublicationDate(job.publication_date)}
          {". "}
        </span>
        <span>Annons-Id: {job.id}</span>
      </DigiInfoCard>
    </DigiLayoutBlock>
  );
};

export default MapAndApplyNowCards;
