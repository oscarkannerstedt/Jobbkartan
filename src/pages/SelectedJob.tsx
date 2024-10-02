import ShowJob from "../components/ShowJob";
import { useLoaderData } from "react-router-dom";
import { IJob } from "../models/IJob";
import { DigiLayoutBlock } from "@digi/arbetsformedlingen-react";
import BackButton from "../components/BackButton";
import { useEffect } from "react";

const SelectedJob = () => {
  const currentJob = useLoaderData() as IJob | null;

  useEffect(() => {
    if (currentJob) {
      document.title = `${currentJob.headline}`;
    } else {
      document.title = "Kunde inte hitta annonsen";
    }
    return () => {
      document.title = "Jobbkartan";
    };
  }, [currentJob]);

  return (
    <>
      <DigiLayoutBlock>
        <BackButton />
        {currentJob ? (
          <ShowJob job={currentJob} />
        ) : (
          <p>Kunde inte hitta annonsen</p>
        )}
      </DigiLayoutBlock>
    </>
  );
};

export default SelectedJob;
