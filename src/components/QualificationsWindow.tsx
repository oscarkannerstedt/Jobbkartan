import {
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
} from "@digi/arbetsformedlingen";
import { DigiInfoCard } from "@digi/arbetsformedlingen-react";
import { IShowJobProps } from "./ShowJob";

const QualificationsWindow = ({ job }: IShowJobProps) => {
  return (
    <>
      {(job.access_to_own_car ||
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
        job.nice_to_have.languages.length > 0) && (
        <DigiInfoCard
          afHeading="Kvalikationer"
          afHeadingLevel={InfoCardHeadingLevel.H2}
          afType={InfoCardType.TIP}
          afVariation={InfoCardVariation.SECONDARY}
        >
          {job.access_to_own_car && <li>Tillgång till egen bil</li>}
          {job.driving_license_required && (
            <>
              <h3>Körkort</h3>
              <ul>
                {job.driving_license.map((license, index) => (
                  <li key={index}>{license.label}</li>
                ))}
              </ul>
            </>
          )}
          {job.must_have.work_experiences.length > 0 && (
            <>
              <h3>Arbetslivserfarenhet</h3>
              <h4>Krav</h4>
              <ul>
                {job.must_have.work_experiences.map(
                  (experience: { label: string }, index: number) => (
                    <li key={index}>
                      {experience.label} <span>- erfarenhet efterfrågas</span>
                    </li>
                  )
                )}
              </ul>
            </>
          )}

          {job.nice_to_have.work_experiences.length > 0 && (
            <>
              {job.must_have.skills.length <= 0 && (
                <h3>Arbetslivserfarenhet</h3>
              )}

              <h4>Meriterande</h4>
              <ul>
                {job.nice_to_have.work_experiences.map(
                  (experience: { label: string }, index: number) => (
                    <li key={index}>{experience.label}</li>
                  )
                )}
              </ul>
            </>
          )}

          {job.must_have.education.length > 0 && (
            <>
              <h3>Utbildning</h3>
              <h4>Krav</h4>
              <ul>
                {job.must_have.education_level.map(
                  (eduLevel: { label: string }, index: number) => (
                    <li key={index}>
                      {eduLevel.label}
                      <span> inom </span>
                      {job.must_have.education.map(
                        (edu: { label: string }, index: number) => (
                          <span key={index}>{edu.label}</span>
                        )
                      )}
                    </li>
                  )
                )}
              </ul>
            </>
          )}

          {job.nice_to_have.education.length > 0 && (
            <>
              {job.must_have.skills.length <= 0 && <h3>Utbildning</h3>}
              <h4>Meriterande</h4>
              <ul>
                {job.nice_to_have.education_level.map(
                  (eduLevel: { label: string }, index: number) => (
                    <li key={index}>
                      {eduLevel.label} <span> inom </span>{" "}
                      {job.nice_to_have.education.map(
                        (edu: { label: string }, index: number) => (
                          <span key={index}>{edu.label}</span>
                        )
                      )}
                    </li>
                  )
                )}
              </ul>
            </>
          )}

          {job.must_have.skills.length > 0 && (
            <>
              <h3>Kompetenser</h3>
              <h4>Krav</h4>
              <ul>
                {job.must_have.skills.map(
                  (skill: { label: string }, index: number) => (
                    <li key={index}>{skill.label}</li>
                  )
                )}
              </ul>
            </>
          )}

          {job.nice_to_have.skills.length > 0 && (
            <>
              {job.must_have.skills.length <= 0 && <h3>Kompetenser</h3>}

              <h4>Meriterande</h4>
              <ul>
                {job.nice_to_have.skills.map((skill, index) => (
                  <li key={index}>{skill.label}</li>
                ))}
              </ul>
            </>
          )}

          {job.must_have.languages.length > 0 && (
            <>
              <h3>Språk</h3>
              <h4>Krav</h4>
              <ul>
                {job.must_have.languages.map(
                  (language: { label: string }, index: number) => (
                    <li key={index}>{language.label}</li>
                  )
                )}
              </ul>
            </>
          )}

          {job.nice_to_have.languages.length > 0 && (
            <>
              {job.must_have.languages.length <= 0 && <h3>Språk</h3>}
              <h4>Meriterande</h4>
              <ul>
                {job.nice_to_have.languages.map(
                  (language: { label: string }, index: number) => (
                    <li key={index}>{language.label}</li>
                  )
                )}
              </ul>
            </>
          )}
        </DigiInfoCard>
      )}
    </>
  );
};

export default QualificationsWindow;
