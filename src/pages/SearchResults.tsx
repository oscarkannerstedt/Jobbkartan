// import { useContext, useRef, useState } from "react";
// import {
//   LayoutBlockVariation,
//   LayoutBlockContainer,
//   LinkVariation,
// } from "@digi/arbetsformedlingen";
// import {
//   DigiLayoutContainer,
//   DigiLayoutBlock,
//   DigiLink,
//   DigiNavigationPagination,
// } from "@digi/arbetsformedlingen-react";
// import { formatPublicationDate } from "../utils/dateUtils/formatPublicationDate";
// import { jobContext } from "../services/jobContext";
// import { SearchHeader } from "../components/SearchHeader";
// import defaultLogo from "../assets/jobbkartan_logo_1.png";
// import "../styles/searchResults.css";
// import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";

// export const SearchResults = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const context = useContext(jobContext);
//   const layoutBlockRef = useRef<HTMLDivElement>(null);

//   if (!context) return <p>Laddar...</p>;
//   const jobs = context.jobs;

//   const limit = 10;
//   const totalPages = Math.ceil(jobs.length / limit);
//   const start = (currentPage - 1) * limit;
//   const end = start + limit;

//   const scrollToBlockTop = () => {
//     if (layoutBlockRef.current) {
//       layoutBlockRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   const handlePageChange = (e: DigiNavigationPaginationCustomEvent<number>) => {
//     const pageNumber = e.detail;
//     setCurrentPage(pageNumber);
//     scrollToBlockTop();
//   };

//   return (
//     <>
//       <SearchHeader />
//       <DigiLayoutContainer>
//         <div className="job-list-container" ref={layoutBlockRef}>
//           {context.jobs.length > 0 ? (
//             jobs.slice(start, end).map((job) => (
//               <DigiLayoutBlock
//                 key={job.id}
//                 afVariation={LayoutBlockVariation.PRIMARY}
//                 afContainer={LayoutBlockContainer.FLUID}
//                 afMarginBottom={false}
//                 className="digiLayoutBlock"
//               >
//                 <div className="job-item-container">
//                   <img
//                     src={job.logo_url || defaultLogo}
//                     alt={`${job.employer.name} logo`}
//                   />
//                   <div className="text-container">
//                     <h3 className="job-title">
//                       <DigiLink
//                         afHref={`/#/annonser/${job.id}`}
//                         afVariation={LinkVariation.SMALL}
//                         aria-label={`Gå till annons för ${job.headline} hos ${job.employer.name} i ${job.workplace_address.municipality}`}
//                       >
//                         {job.headline}
//                       </DigiLink>
//                     </h3>

//                     <h4>
//                       {job.employer.name} - {job.workplace_address.municipality}
//                     </h4>
//                     <p className="job-occupation">{job.occupation.label}</p>
//                     <p className="job-publication-date">
//                       {formatPublicationDate(job.publication_date)}
//                     </p>
//                   </div>
//                 </div>
//               </DigiLayoutBlock>
//             ))
//           ) : (
//             <p>Inga jobb tillgängliga...</p>
//           )}
//         </div>
//         <DigiNavigationPagination
//           afTotalPages={totalPages}
//           afInitActivePage={currentPage}
//           onAfOnPageChange={handlePageChange}
//           af-total-results={jobs.length}
//           af-current-result-start={start + 1}
//           afCurrentResultEnd={Math.min(end, jobs.length)}
//           afResultName="annonser"
//         />
//       </DigiLayoutContainer>
//     </>
//   );
// };

// export default SearchResults;
