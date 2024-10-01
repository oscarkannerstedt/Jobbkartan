import {
  DigiLayoutBlock,
  DigiTypography,
  DigiLayoutColumns,
  DigiInfoCard,
} from "@digi/arbetsformedlingen-react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IJob } from "../models/IJob";
import { getJobsFromLocalStorage } from "../utils/localstorageUtils";
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
import BackButton from "./BackButton";

interface IShowJobProps {
  job: IJob;
}

const ShowJob = (props: IShowJobProps) => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<IJob>(props.job);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const savedJobs = getJobsFromLocalStorage();

    console.log("Hämtade jobb från localStorage:", savedJobs);

    if (savedJobs && savedJobs.length > 0) {
      const foundJob = savedJobs.find((job) => job.id === id);

      if (foundJob) {
        console.log("Jobbet hittades i localStorage:", foundJob);
        setJob(foundJob);
      } else {
        console.log("Jobbet med id", id, "hittades inte, navigerar hem.");
        navigate("/");
      }
    } else {
      console.log("Inga sparade jobb i localStorage, navigerar hem.");
      navigate("/");
    }
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return <p>Laddar...</p>;
  }

  return (
    <>
      <DigiTypography afVariation={TypographyVariation.LARGE}>
        <DigiLayoutBlock>
          <BackButton />
        </DigiLayoutBlock>
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
