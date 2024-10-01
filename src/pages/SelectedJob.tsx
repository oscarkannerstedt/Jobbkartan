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

// import { useContext } from "react";
// import ShowJob from "../components/ShowJob";
// import { useLoaderData } from "react-router-dom";
// import { IJob } from "../models/IJob";
// import { DigiLayoutBlock } from "@digi/arbetsformedlingen-react";
// import BackButton from "../components/BackButton";
// import { jobContext } from "../services/jobContext";

// const SelectedJob = () => {
//   const currentJob = useLoaderData() as IJob | null;
//   const { jobs } = useContext(jobContext) || { jobs: [] }; // Hämta jobben från kontexten

//   return (
//     <>
//       <DigiLayoutBlock>
//         <BackButton />
//         {currentJob ? (
//           <ShowJob job={currentJob} />
//         ) : (
//           <p>Kunde inte hitta annonsen</p>
//         )}
//       </DigiLayoutBlock>

//       <DigiLayoutBlock>
//         <div>
//           <h2>Jobbannonser</h2>
//           {jobs.length > 0 ? (
//             <ul>
//               {jobs.map((job) => (
//                 <li key={job.id}>
//                   <ShowJob job={job} /> {/* Visa varje jobb */}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>Kunde inte hitta några jobb</p>
//           )}
//         </div>
//       </DigiLayoutBlock>
//     </>
//   );
// };

// export default SelectedJob;
