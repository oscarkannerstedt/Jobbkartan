import {
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
} from "@digi/arbetsformedlingen";
import { DigiInfoCard } from "@digi/arbetsformedlingen-react";
import { IShowJobProps } from "../../models/IShowJobProps";

interface IQualification {
  label: string;
}

const QualificationsCard = ({ job }: IShowJobProps) => {
  const renderQualificationsSection = (
    title: string,
    mustHave: IQualification[],
    niceToHave: IQualification[],
    isSkillOrEducation: boolean,
    isExperienceSection: boolean
  ) => {
    const renderExperience = (items: IQualification[], isMustHave: boolean) => {
      return items.map((item, index) => (
        <li key={index}>
          {item.label}
          {isExperienceSection && <span> - erfarenhet efterfrågas</span>}
          {isSkillOrEducation && renderEducation(isMustHave)}
        </li>
      ));
    };

    const renderEducation = (isMustHave: boolean) => {
      const educationData = isMustHave
        ? job.must_have.education
        : job.nice_to_have.education;

      if (educationData.length > 0) {
        return (
          <>
            <span> inom </span>
            {educationData.map((edu: IQualification, eduIndex: number) => (
              <span key={eduIndex}>
                {edu.label}
                {eduIndex < educationData.length - 1 && ", "}
              </span>
            ))}
          </>
        );
      }
      return null;
    };

    return (
      <>
        {mustHave.length > 0 && (
          <>
            <h3>{title}</h3>
            <h4>Krav</h4>
            <ul>{renderExperience(mustHave, true)}</ul>{" "}
          </>
        )}
        {niceToHave.length > 0 && (
          <>
            <h3>{title}</h3>
            <h4>Meriterande</h4>
            <ul>{renderExperience(niceToHave, false)}</ul>{" "}
          </>
        )}
      </>
    );
  };

  const hasQualifications =
    job.access_to_own_car ||
    job.driving_license_required ||
    job.must_have.work_experiences.length > 0 ||
    job.nice_to_have.work_experiences.length > 0 ||
    job.must_have.education.length > 0 ||
    job.nice_to_have.education.length > 0 ||
    job.must_have.education_level.length > 0 ||
    job.nice_to_have.education_level.length > 0 ||
    job.must_have.skills.length > 0 ||
    job.nice_to_have.skills.length > 0 ||
    job.must_have.languages.length > 0 ||
    job.nice_to_have.languages.length > 0;

  return (
    <>
      {hasQualifications && (
        <DigiInfoCard
          afHeading="Kvalifikationer"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.TIP}
          afVariation={InfoCardVariation.SECONDARY}
        >
          {renderQualificationsSection(
            "Arbetslivserfarenhet",
            job.must_have.work_experiences,
            job.nice_to_have.work_experiences,
            false,
            true
          )}
          {renderQualificationsSection(
            "Utbildning",
            job.must_have.education_level,
            job.nice_to_have.education_level,
            true,
            false
          )}
          {renderQualificationsSection(
            "Kompetenser",
            job.must_have.skills,
            job.nice_to_have.skills,
            false,
            false
          )}
          {renderQualificationsSection(
            "Språk",
            job.must_have.languages,
            job.nice_to_have.languages,
            false,
            false
          )}
        </DigiInfoCard>
      )}
    </>
  );
};

export default QualificationsCard;
