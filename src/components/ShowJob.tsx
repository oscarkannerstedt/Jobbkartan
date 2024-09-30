import {
  DigiLayoutBlock,
  DigiTypography,
  DigiLayoutColumns,
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

    if (savedJobs && savedJobs.length > 0) {
      const foundJob = savedJobs.find((job) => job.id === id);

      if (foundJob) {
        setJob(foundJob);
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return <p>Laddar...</p>;
  }

  // const handleGoBack = () => {
  //   navigate("/");
  // };

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
