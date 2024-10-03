import {
  DigiLayoutContainer,
  DigiLinkButton,
} from "@digi/arbetsformedlingen-react";
import { IShowJobProps } from "./ShowJob";
import { LinkButtonSize, LinkButtonVariation } from "@digi/arbetsformedlingen";

const ApplyNowInfo = ({ job }: IShowJobProps) => {
  return (
    <>
      <DigiLayoutContainer afVerticalPadding afNoGutter>
        <h3>
          {job.application_details.url
            ? "Ansök via arbetsgivarens webbplats"
            : `Mejla din ansökan till: ${job.application_details.email}`}
        </h3>

        {job.application_details.information && (
          <p>{job.application_details.information}</p>
        )}

        {job.application_details.reference && (
          <p>
            Ange referens <strong>{job.application_details.reference}</strong> i
            din ansökan
          </p>
        )}

        {job.application_details.url && (
          <DigiLinkButton
            afHref={job.application_details.url}
            afSize={LinkButtonSize.MEDIUMLARGE}
            afVariation={LinkButtonVariation.PRIMARY}
            af-hide-icon={true}
          >
            Ansök här
          </DigiLinkButton>
        )}
      </DigiLayoutContainer>
    </>
  );
};

export default ApplyNowInfo;
