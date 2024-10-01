import ShowJob from "../components/ShowJob";
import { useLoaderData } from "react-router-dom";
import { IJob } from "../models/IJob";
import { DigiLayoutBlock } from "@digi/arbetsformedlingen-react";
import BackButton from "../components/BackButton";

const SelectedJob = () => {
  const currentJob = useLoaderData() as IJob | null;
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
