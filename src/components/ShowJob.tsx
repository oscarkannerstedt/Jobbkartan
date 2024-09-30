import {
  DigiLayoutBlock,
  DigiTypography,
  DigiButton,
} from "@digi/arbetsformedlingen-react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IJob } from "../models/IJob";
import { getJobsFromLocalStorage } from "../utils/localstorageUtils";

// export interface IShowJobProps {
//   job: IJob;
// }

const ShowJob = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<IJob | null>(null);
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

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <DigiTypography>
        <DigiLayoutBlock>
          <DigiButton
            afSize="medium"
            afVariation="primary"
            onClick={handleGoBack}
          >
            Tillbaka
          </DigiButton>
        </DigiLayoutBlock>
      </DigiTypography>
    </>
  );
};

export default ShowJob;
